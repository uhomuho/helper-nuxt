<template lang="pug">
#bots
	BotsTable( :bots='bots' :leader='leader' @update='$fetch' :loading='$fetchState.pending' )
	BotsCreate( @update='$fetch' :leader='leader' )
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: "Bots",
	data() {
		return {
			bots: []
		}
	},
	async fetch() {
		let { $getBots, store } = this.$nuxt.context

		let { bots } = await $getBots(store.state.leader.leader._id)

		this.bots = bots
	},
	computed: {
		...mapState('leader', ['leader'])
	}
}
</script>