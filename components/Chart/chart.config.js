const chartColors = {
  default: {
    primary: '#00D1B2',
    info: '#209CEE',
    danger: '#FF3860',
    warning: 'hsl(48,  100%, 67%)',
    success: 'hsl(141, 71%,  48%)',
    link: 'hsl(217, 71%, 53%)'
  }
}

const baseChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: true,
    align: 'right',
    fullWidth: true,
    labels: {
      padding: 12,
      fontSize: 12,
      boxWidth: 10,
      usePointStyle: true
    }
  }
}

const chartOptionsMain = {
  ...baseChartOptions,
  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: 'nearest',
    intersect: 0,
    position: 'nearest'
  },
  scales: {
    yAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.0)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        padding: 20,
        fontColor: '#9a9a9a'
      }
    }],

    xAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(225,78,202,0.1)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        padding: 20,
        fontColor: '#9a9a9a'
      }
    }]
  }
}

export default { chartColors, baseChartOptions, chartOptionsMain }