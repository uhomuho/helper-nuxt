<template lang="pug">
Card( :title='$t("answers")' icon="account-arrow-right" )
	.block(
		v-for='(actions, i) in answers'
		v-if='bots && bots[i]'
		:key='i')
		b-field(
			:label='bots[i].name')
		b-field( 
			horizontal 
			v-for='(answer, i) in actions'
			:key='i')
			template( slot="label" ) {{ i }}:
			Copy( :link='answer' :hasLink='false' )
</template>

<script>
export default {
	name: "ContactAnswers",
	props: ['answers'],
	data() {
		return {
			bots: {}
		}
	},
	methods: {
		async getBotName(id) {
			let { bot } = await this.$getBot(id)
			if (!bot) return null
			let bots = {}
			bots[id] = bot
			this.bots = bots
		}
	},
	mounted() {
		for (let i in this.answers) {
			setTimeout(() => {
				this.getBotName(i)
			}, (i+1)*50)
		}
	}
}
</script>