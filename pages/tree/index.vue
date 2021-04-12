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
				div.control.is-size-7( 
					v-for='(column, i) in columns' 
					:key='i' 
					v-if='column.inFilters' )
					b-checkbox-button( v-model='column.display' type="is-dark")
						span {{ column.title }}
				div.control.is-size-7
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
				.control.is-pulled-right
					b-button.is-info(
						:title='$t("tree.refresh")'
						@click='refresh'
						icon-left="refresh")
						| {{ $t("tree.refresh") }}
			RefTree(
				:leader_id='leader._id'
				:data='referrals'
				:columns='columns'
				:loading='loading'
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
			loading: false
		}
	},
	async asyncData({ $getReferrals, store }) {
		let leader = store.state.leader.leader
		if (!leader.ref) return { referrals: [] }

		let referrals = await $getReferrals({ id: leader.ref, depth: 2 })

		return { referrals }
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
				this.$getReferrals({ id: this.leader.ref, depth: this.depth })
					.then(referrals => this.referrals = referrals)
			}
		},
		onSort (field, order) {
      this.sortField = field
      this.sortOrder = order
    }
	}
}
</script>