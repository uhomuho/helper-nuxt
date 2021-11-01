<template lang="pug">
.funnel
	PageLoad( v-if='$fetchState.pending && !bot' )
	div( v-else )
		client-only
			Notification.is-info
				p( v-html='$t("tree.noti.in_dev")' )
		BotsFunnel( :contacts='contacts' :stages='stages' @update='$fetch' )
</template>

<script>
export default {
	name: "BotFunnel",
	data() {
		return {
			bot: null
		}
	},
	computed: {
		contacts() {
			let result = {}

			if (this.bot) {
				for (let i in this.stages) {
					let stage = this.stages[i]
					if (!result[stage.id]) result[stage.id] = []
				}
				for (let i in this.bot.contacts) {
					let contact = this.bot.contacts[i]
					if (result[contact.funnelScene]) result[contact.funnelScene].push(contact)
				}
			}

			return result
		},
		stages() {
			if (this.bot) {
				let scenes = this.bot.scenes,
						result = []

				for (let i in scenes) {
					let scene = scenes[i]
					let exist = result.filter(item => item.id == scene.id)[0]
					if (scene.action !== "buttons" && !exist) {
						result.push(scene)
					}
				}
				return result
			}
			return {}
		}
	},
	async fetch() {
		let { $getBotFunnel, redirect, params, store } = this.$nuxt.context

		let { bot } = await $getBotFunnel(params.id)

		if (!bot) return redirect(301, '/bots')

		store.commit('setTitle', [ bot.name ])
		this.bot = bot
	}
}
</script>