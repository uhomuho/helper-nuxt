import Chart from 'chart.js'
import { Line, mixins } from 'vue-chartjs'

const getBoxWidth = (labelOpts, fontSize) => {
  return labelOpts.usePointStyle
    ? fontSize * Math.SQRT2
    : labelOpts.boxWidth
}

const createNewLegendAndAttach = (chart, legendOpts) => {
  var legend = new Chart.NewLegend({
    ctx: chart.chart.ctx,
    options: legendOpts,
    chart: chart
  })

  if (chart.legend) {
    Chart.layoutService.removeBox(chart, chart.legend)
    delete chart.newLegend
  }

  chart.newLegend = legend
  Chart.layoutService.addBox(chart, legend)
}

Chart.NewLegend = Chart.Legend.extend({
  afterFit: function () {
    this.height = this.height + 30
  },
  draw: function () {
    var me = this
    var opts = me.options
    var labelOpts = opts.labels
    var globalDefault = Chart.defaults.global
    var lineDefault = globalDefault.elements.line
    var legendWidth = me.width
    var lineWidths = me.lineWidths

    if (opts.display) {
      var ctx = me.ctx
      var cursor
      var itemOrDefault = Chart.helpers.getValueOrDefault
      var fontColor = itemOrDefault(labelOpts.fontColor, globalDefault.defaultFontColor)
      var fontSize = itemOrDefault(labelOpts.fontSize, globalDefault.defaultFontSize)
      var fontStyle = itemOrDefault(labelOpts.fontStyle, globalDefault.defaultFontStyle)
      var fontFamily = itemOrDefault(labelOpts.fontFamily, globalDefault.defaultFontFamily)
      var labelFont = Chart.helpers.fontString(fontSize, fontStyle, fontFamily)

      // Canvas setup
      ctx.textAlign = 'left'
      ctx.textBaseline = 'top'
      ctx.lineWidth = 0.5
      ctx.strokeStyle = fontColor // for strikethrough effect
      ctx.fillStyle = fontColor // render in correct colour
      ctx.font = labelFont

      var boxWidth = getBoxWidth(labelOpts, fontSize)
      var hitboxes = me.legendHitBoxes

      // current position
      var drawLegendBox = function (x, y, legendItem) {
        if (isNaN(boxWidth) || boxWidth <= 0) {
          return
        }

        // Set the ctx for the box
        ctx.save()

        ctx.fillStyle = itemOrDefault(legendItem.fillStyle, globalDefault.defaultColor)
        ctx.lineCap = itemOrDefault(legendItem.lineCap, lineDefault.borderCapStyle)
        ctx.lineDashOffset = itemOrDefault(legendItem.lineDashOffset, lineDefault.borderDashOffset)
        ctx.lineJoin = itemOrDefault(legendItem.lineJoin, lineDefault.borderJoinStyle)
        ctx.lineWidth = itemOrDefault(legendItem.lineWidth, lineDefault.borderWidth)
        ctx.strokeStyle = itemOrDefault(legendItem.strokeStyle, globalDefault.defaultColor)
        var isLineWidthZero = (itemOrDefault(legendItem.lineWidth, lineDefault.borderWidth) === 0)

        if (ctx.setLineDash) {
          // IE 9 and 10 do not support line dash
          ctx.setLineDash(itemOrDefault(legendItem.lineDash, lineDefault.borderDash))
        }

        if (opts.labels && opts.labels.usePointStyle) {
          // Recalculate x and y for drawPoint() because its expecting
          // x and y to be center of figure (instead of top left)
          var radius = fontSize * Math.SQRT2 / 2
          var offSet = radius / Math.SQRT2
          var centerX = x + offSet
          var centerY = y + offSet

          // Draw pointStyle as legend symbol
          Chart.canvasHelpers.drawPoint(ctx, legendItem.pointStyle, radius, centerX, centerY)
        } else {
          // Draw box as legend symbol
          if (!isLineWidthZero) {
            ctx.strokeRect(x, y, boxWidth, fontSize)
          }
          ctx.fillRect(x, y, boxWidth, fontSize)
        }

        ctx.restore()
      }
      var fillText = function (x, y, legendItem, textWidth) {
        if (legendItem.hidden) {
          // lighten the hidden text
          ctx.fillStyle = Chart.helpers.color(fontColor).lighten(0.8).rgbString()
        }

        ctx.fillText(legendItem.text, boxWidth + (fontSize / 2) + x, y)

        // restore the original fillStyle so we dont impact the rest of the labels
        ctx.fillStyle = fontColor
      }

      // Horizontal
      var isHorizontal = me.isHorizontal()
      if (isHorizontal) {
        cursor = {
          x: 10,
          y: me.top + labelOpts.padding,
          line: 0
        }
      } else {
        cursor = {
          x: me.left + labelOpts.padding,
          y: me.top + labelOpts.padding,
          line: 0
        }
      }

      var itemHeight = fontSize + labelOpts.padding
      Chart.helpers.each(me.legendItems, function (legendItem, i) {
        var textWidth = ctx.measureText(legendItem.text).width
        var width = boxWidth + (fontSize / 2) + textWidth
        var x = cursor.x
        var y = cursor.y

        if (isHorizontal) {
          if (x + width >= legendWidth) {
            y = cursor.y += itemHeight
            cursor.line++
            x = cursor.x = 10
          }
        } else if (y + itemHeight > me.bottom) {
          x = cursor.x = x + me.columnWidths[cursor.line] + labelOpts.padding
          y = cursor.y = me.top + labelOpts.padding
          cursor.line++
        }

        drawLegendBox(x, y, legendItem)

        hitboxes[i].left = x
        hitboxes[i].top = y

        // Fill the actual label
        fillText(x, y, legendItem, textWidth)

        if (isHorizontal) {
          cursor.x += width + (labelOpts.padding)
        } else {
          cursor.y += itemHeight
        }
      })
    }
  }
})

export default {
  name: 'line-chart',
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: {
    extraOptions: Object
  },
  data () {
    return {
      ctx: null
    }
  },
  methods: {

  },
  mounted () {
    this.addPlugin({
      id: 'custom-legend',
      beforeInit: function (chart) {
        var legendOpts = chart.options.legend

        if (legendOpts) {
          createNewLegendAndAttach(chart, legendOpts)
        }
      },
      beforeUpdate: function (chart) {
        var legendOpts = chart.options.legend

        if (legendOpts) {
          legendOpts = Chart.helpers.configMerge(Chart.defaults.global.legend, legendOpts)

          if (chart.newLegend) {
            chart.newLegend.options = legendOpts
          } else {
            createNewLegendAndAttach(chart, legendOpts)
          }
        } else {
          Chart.layoutService.removeBox(chart, chart.newLegend)
          delete chart.newLegend
        }
      },
      afterEvent: function (chart, e) {
        var legend = chart.newLegend
        if (legend) {
          legend.handleEvent(e)
        }
      }
    })
    this.$watch('chartData', (newVal, oldVal) => {
      if (!oldVal) {
        this.renderChart(
          this.chartData,
          this.extraOptions
        )
      }
    }, { immediate: true })
  }
}