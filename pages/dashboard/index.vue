<template lang="pug">
#dashboard
	tiles
		card-widget.tile.is-child( type="is-primary", icon="account-arrow-right", :number="referrals", :label='$t("dash.invited")' )
		card-widget.tile.is-child( type="is-info", icon="account-multiple", :number="clubmembers", :label='$t("dash.in_club")' )
		card-widget.tile.is-child( type="is-success", icon="chart-timeline-variant", :number="roi", suffix="%", label="KOI", :tooltip='$t("dash.koi_tooltip")' )
	CardComponent(
		v-if="chartData && chartData.chartData"
		:title="$t('chart.events')" 
		icon="finance"
		@header-icon-click="fillChartData"
		header-icon="reload" )
		.chart-area
			Chart( 
				style="height: 100%"
				ref="bigChart"
				chart-id="big-line-chart"
				:chart-data="chartData.chartData"
				:extra-options="chartData.extraOptions" )
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: "Dashboard",
	data() {
		return {
			chart: {},
			history: null
		}
	},
	async asyncData({ $getContacts, store }) {
		let leader = store.state.leader.leader 
		if (leader) {
			let { contacts, contactsGrouped } = await $getContacts(leader._id)

			return { contacts, contactsGrouped }
		}
	},
	computed: {
		...mapState('leader', ['leader']),
		chartData() {
			let temp = this.chart
			if (Object.keys(temp).length > 0) {
				temp.chartData.datasets.map((set, index) => {
					set.label = this.$contactsColumns()[index + 1].label
				})
				return temp
			}
			return []
		},
		referrals () {
			return this.contacts ? this.contacts.length : 0
		},
		clubmembers () {
			return this.contactsGrouped && this.contactsGrouped[5] ? this.contactsGrouped[5].length : 0
		},
		roi () {
			return (this.referrals && this.clubmembers > 0) ? parseInt(this.clubmembers / (this.referrals / 100)) : 0
		}
	},
	methods: {
		fillChartData() {
			this.$getContacts(this.leader._id)
				.then(({ contacts, contactsGrouped }) => {
					this.contacts = contacts
					this.contactsGrouped = contactsGrouped
					this.$getHistory(this.leader._id)
						.then(({ chart, history }) => {
							this.chart = chart
							this.history = history
						})
				})
		}
	},
	mounted() {
		this.$i18n.onLanguageSwitched = () => {
			let { chart } = this.$createChart(this.history)
			this.chart = chart
		}
		this.$getHistory(this.leader._id)
			.then(({ chart, history }) => {
				this.chart = chart
				this.history = history
			})
	}
}
</script>