<template lang="pug">
#funnel
	client-only
		Notification.is-warning( from='funnel' )
			div( v-html='$t("funnel.noti")' )
	//- b-field( grouped )
		b-switch( :value='umi' @input='set({ field: "umi", value: $event })' ) UMI
		b-switch( :value='pzm' @input='set({ field: "pzm", value: $event })' ) PZM
	PageLoad( v-if='$fetchState.pending' )
	FunnelBoard( v-if='!$fetchState.pending' :contacts='funnelContacts' )
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
	name: "Funnel",
	async fetch() {
		let { store } = this.$nuxt.context
		let { leader } = store.state.leader
		await store.dispatch('contacts/getContacts', leader._id)
	},
	computed: {
		...mapState('contacts', ['umi', 'pzm']),
		...mapGetters('contacts', ['funnelContacts'])
	},
	methods: {
		...mapMutations('contacts', ['set'])
	}
}
</script>