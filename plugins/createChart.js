import chartConfig from '~/components/Chart/chart.config.js'

export default ({ $groupBy, $labels, $getChartData, $groupByDates, store }, inject) => {
	inject('createChart', history => {
		const defaults = {
						fill: false,
						borderWidth: 2,
						borderDash: [],
						borderDashOffset: 0.0,
						pointBorderColor: 'rgba(255,255,255,0)',
						pointBorderWidth: 20,
						pointHoverRadius: 4,
						pointHoverBorderWidth: 15,
						pointRadius: 4
					},
					messages = store.state.i18n.messages

		let chart = {
					chartData: null,
					extraOptions: chartConfig.chartOptionsMain
				},
				chartStates = localStorage.getItem('chartStates') ? JSON.parse(localStorage.getItem('chartStates')) : [0, 1, 1, 1, 1, 0]

		chart.extraOptions['legend']['onClick'] = function (e, legendItem) {
			chartStates[legendItem.datasetIndex] ^= true
			localStorage.setItem('chartStates', JSON.stringify(chartStates))
			var index = legendItem.datasetIndex
			var ci = this.chart
			var meta = ci.getDatasetMeta(index)
			meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null
			ci.update()
		}

		let graph = $groupBy(history, 'action', [])
			graph.forEach((stage, index) => {
			graph[index] = $groupByDates(stage)
		})

		chart.chartData = {
			datasets: [
				{
					...defaults,
					label: messages.chart.added,
					borderColor: chartConfig.chartColors.default.primary,
					pointBackgroundColor: chartConfig.chartColors.default.primary,
					pointHoverBackgroundColor: chartConfig.chartColors.default.primary,
					data: $getChartData(graph[0]),
					hidden: chartStates[0]
				},
				{
					...defaults,
					label: messages.chart.new,
					borderColor: chartConfig.chartColors.default.info,
					pointBackgroundColor: chartConfig.chartColors.default.info,
					pointHoverBackgroundColor: chartConfig.chartColors.default.info,
					data: $getChartData(graph[1]),
					hidden: chartStates[1]
				},
				{
					...defaults,
					label: messages.chart.SIGEN,
					borderColor: chartConfig.chartColors.default.danger,
					pointBackgroundColor: chartConfig.chartColors.default.danger,
					pointHoverBackgroundColor: chartConfig.chartColors.default.danger,
					data: $getChartData(graph[2]),
					hidden: chartStates[2]
				},
				{
					...defaults,
					label: messages.chart.ROY,
					borderColor: chartConfig.chartColors.default.warning,
					pointBackgroundColor: chartConfig.chartColors.default.warning,
					pointHoverBackgroundColor: chartConfig.chartColors.default.warning,
					data: $getChartData(graph[3]),
					hidden: chartStates[3]
				},
				{
					...defaults,
					label: messages.chart.PRIZM,
					borderColor: chartConfig.chartColors.default.success,
					pointBackgroundColor: chartConfig.chartColors.default.success,
					pointHoverBackgroundColor: chartConfig.chartColors.default.success,
					data: $getChartData(graph[4]),
					hidden: chartStates[4]
				},
				{
					...defaults,
					label: messages.chart.club,
					borderColor: chartConfig.chartColors.default.link,
					pointBackgroundColor: chartConfig.chartColors.default.link,
					pointHoverBackgroundColor: chartConfig.chartColors.default.link,
					data: $getChartData(graph[5]),
					hidden: chartStates[5]
				}
			],
			labels: $labels()
		}
		return { chart, chartStates }
	})

	inject('contactsColumns', () => {
		const messages = store.state.i18n.messages

		return [
			{
				field: 'date',
				label: messages.chart.date,
				sortable: true
			},
			{
				field: 'stage0',
				label: messages.chart.add,
				centered: true,
				sortable: true
			},
			{
				field: 'stage1',
				label: messages.chart.cont,
				centered: true,
				sortable: true
			},
			{
				field: 'stage2',
				label: 'SIGEN',
				centered: true,
				sortable: true
			},
			{
				field: 'stage3',
				label: 'ROY',
				centered: true,
				sortable: true
			},
			{
				field: 'stage4',
				label: messages.chart.purchase,
				centered: true,
				sortable: true
			},
			{
				field: 'stage5',
				label: messages.chart.club,
				centered: true,
				sortable: true
			},
			{
				field: 'sum',
				label: messages.chart.amount,
				centered: true,
				sortable: true
			}
		]
	})
}