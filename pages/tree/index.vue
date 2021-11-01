<template lang="pug">
#tree
	client-only
		Notification.is-info
			p( v-html='$t("tree.noti.in_dev")' )
		div( v-if='leader.verified || leader.umiVerified' )
			client-only
				Notification.is-warning( from="tree" )
					strong {{ $t("tree.noti.yours") }}
				Notification.is-warning( from="tree2" )
					strong( v-html='$t("tree.noti.guide")' )
				Notification.is-danger(
					v-if='depth > 3' from="depth")
					strong {{ $t("tree.noti.depth") }}
			b-field( grouped group-multiline )
				.control( 
					v-for='(column, i) in columns' 
					:key='i' 
					v-if='column.inFilters' )
					b-checkbox-button( v-model='column.display' type="is-dark")
						span {{ column.title }}
				.control
					b-field(
						:label='$t("tree.depth")'
						label-position="on-border")
						b-input(
							v-model="depth"
							:title='$t("tree.depth")'
							type="number"
							min="2"
							max="9"
							style="min-width: 100px")
				//- .control
					b-select(
						v-model='crypto')
						option(  v-if='leader.verified && leader.ref' value="pzm" ) PRIZM
						option( v-if='leader.umiVerified && leader.umiRef' value="umi" ) UMI
				.control.is-pulled-right
					b-button.is-info(
						:title='$t("tree.refresh")'
						@click='refresh'
						icon-left="refresh")
						| {{ $t("tree.refresh") }}
			RefTree(
				:leader_id='leader._id'
				:crypto='crypto'
				:data='referrals'
				:columns='columns'
				:loading='$fetchState.pending ? true : loading'
				:sortField='sortField'
				:sortOrder='sortOrder'
				@onSort='onSort'
				@refreshTable='refresh'
				:depth='depth')
		Notification.is-danger( v-else )
			strong( v-html='$t("tree.noti.confirm")' )
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: "Tree",
	data() {
		return {
			contactsOnly: null,
			depth: 2,
			sortField: 'balance',
			sortOrder: 'desc',
			loading: false,
			crypto: 'umi',
			referrals: []
		}
	},
	async fetch() {
		let { $getReferrals, store } = this.$nuxt.context

		let leader = store.state.leader.leader
		if (!leader.ref && !leader.umiRef) return this.referrals = []

		if (leader.umiVerified && leader.umiRef) {
			this.crypto = 'umi'
			this.referrals = await $getReferrals({ id: leader.umiRef, depth: 2, crypto: 'umi' })
		} else if (leader.verified && leader.ref) {
			this.crypto = 'pzm'
			this.referrals = await $getReferrals({ id: leader.ref, depth: 2, crypto: 'pzm' })
		} else {
			this.referrals = []
		}
	},
	watch: {
		crypto() {
			this.refresh()
		}
	},
	computed: {
		...mapState('leader', ['leader']),
		columns () {
      return {
        address: { inFilters: false, title: this.$t("tree.name"), display: true, width: '16rem' },
        balance: { inFilters: true, title: this.$t("tree.balance"), display: true, width: '14%' },
        contacts: { inFilters: true, title: this.$t("tree.contacts"), display: true, width: '14%' },
        id: { inFilters: true, title: this.$t("tree.ref_id"), display: true, width: '12%' },
        count: { inFilters: true, title: this.$t("tree.on_level"), display: true, width: '12%' },
        level: { inFilters: true, title: this.$t("tree.rang"), display: true, width: '10%' }
      }
    }
	},
	methods: {
		refresh() {
			if (this.leader.ref) {
				this.loading = true
				if (this.crypto == "pzm") {
					this.$getReferrals({ id: this.leader.ref, depth: this.depth, crypto: 'pzm' })
						.then(referrals => {
							this.referrals = referrals
							this.loading = false
						})
				} else {
					this.$getReferrals({ id: this.leader.umiRef, depth: this.depth, crypto: 'umi' })
						.then(referrals => {
							this.referrals = referrals
							this.loading = false
						})
				}
			}
		},
		onSort (field, order) {
      this.sortField = field
      this.sortOrder = order
    }
	}
}
</script>