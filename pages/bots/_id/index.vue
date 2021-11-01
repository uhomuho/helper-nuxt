<template lang="pug">
#bot
	PageLoad( v-if='$fetchState.pending' )
	div( v-else )
		client-only
			Notification.is-info
				strong
					span {{ $t("bot.noti.link") }}&nbsp;
					Copy( :link='`https://${dev ? "t.me/personal_roy_bot" : "t.me/custom_roy_bot"}?start=${leader.username}_${bot._id}`' :copyText='bot.name' :hasLink='false' inline )
				strong
					span {{ $t("bot.noti.id") }}&nbsp;
					Copy( :link='bot._id' :hasLink='false' inline )
		.columns.is-flex.scenes( v-if='show' )
			.column.is-narrow(
				v-for='(scene, index) in bot.scenes'
				v-if='!inUse(scene.id)')
				.column-container
					.card
						.stub
							span.edit(@click='setEdit(index)')
								b-icon.pointer(
									type="is-white"
									icon="grease-pencil"
									size="is-small")
							span.remove(@click='removeScene(index)')
								b-icon.pointer(
									type="is-white"
									icon="trash-can"
									size="is-small")
							drag.pointer.move( :transfer-data='scene' )
								div(slot="image")
									.card.fit
										.card-image
											figure.image
												img(
													v-if='scene.image'
													:src='scene.image')
												img(
													v-else
													:src='`https://dummyimage.com/600x400/000/ffffff&text=${$t("noimage")}`')
										.card-content
											p {{ scene.name }}
								b-icon(
									type="is-white"
									icon="cursor-move"
									size="is-small")
						.card-image
							figure.image
								img(
									v-if='scene.image'
									:src='scene.image')
								img(
									v-else
									:src='`https://dummyimage.com/600x400/000/ffffff&text=${$t("noimage")}`')
						.card-content
							p {{ scene.name }}
			.column.is-narrow.add( v-if='bot.scenes.length < 10' )
				.column-container.pointer(@click='create = !create')
					b-icon( icon="plus" )
		BotsTree(
			v-if='bot'
			:bot='bot'
			@change='updateBot'
			@addNext='addNext')
		b-modal( v-model='create' width="600px" )
			BotsCreateScene(
				:bot='bot'
				@created='$fetch')
		b-modal( v-model='edit' width="600px" )
			BotsCreateScene(
				:bot='bot'
				:scene='scene'
				@updated='$fetch')
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: "Bot",
	data() {
		return {
			bot: {},
			create: false,
			edit: false,
			scene: null,
			show: true,
			scenesTree: [[{}]]
		}
	},
	async fetch() {
		this.create = false
		this.edit = false
		this.scene = null
		let { store, $getBot, params, redirect } = this.$nuxt.context,
				{ bot } = await $getBot(params.id)

		if (!bot) return redirect(301, '/bots')

		store.commit('setTitle', [ bot.name ])
		this.scenesTree = bot.scenesTree.length > 0 ? bot.scenesTree : [[{}]]
		this.bot = bot
	},
	computed: {
		...mapState('leader', ['leader']),
		dev() {
			return process.env.NODE_ENV == "development"
		}
	},
	methods: {
		setEdit(i) {
			this.scene = this.bot.scenes[i]
			this.edit = true
		},
		removeScene(index) {
			this.bot.scenes.splice(index, 1)
			this.updateBot()
		},
		updateBot(data) {
			if (data) {
				this.bot.scenesTree = data.tree
				this.scenesTree = data.tree
				this.show = false
				this.show = true
			}
			let params = {
				body: {
					scenesTree: this.bot.scenesTree,
					scenes: this.bot.scenes
				},
				id: this.bot._id
			}

			this.$updateBot(params)
				// .then(() => this.$fetch())
		},
		addNext(params) {
			let scenes = this.bot.scenes
			let scene = scenes.filter(item => item.id === params.id)[0]
			if (params.action == "message") {
				scene.nextScene = params.next
			} else {
				scene.buttons[params.i].nextScene = params.next
			}
			for(let i in this.bot.scenes) {
				if (this.bot.scenes[i].id == scene.id) {
					this.bot.scenes[i] = scene
				}
			}
			this.updateBot()
		},
		inUse(id) {
			let tree = this.scenesTree
			for (let stage of tree) {
				if (stage && stage.length > 0) {
					let exist = stage.filter(item => item.id == id)
					if (exist.length > 0) return true
				}
			}
			return false
		}
	}
}
</script>

<style scoped>
	.buttons {
		padding: 1rem 1.5rem;
	}
	.buttons .button {
		margin-bottom: 0;
		margin-left: 1rem;
	}
	.modal-content {
		width: fit-content;
		overflow: hidden;
	}
	.scenes {
		overflow-x: scroll;
		background: #f8f8f8;
		position: sticky;
		top: 3.2rem;
		z-index: 4;
		scrollbar-color: #96969E transparent;
		scrollbar-width: thin;
	}
	.scenes::-webkit-scrollbar {
		height: 5px;
	}
	.scenes::-webkit-scrollbar-track {
		background: transparent;
	}
	.scenes::-webkit-scrollbar-thumb {
		background: #96969E;
		border-radius: 8px;
	}
	.scenes::-webkit-scrollbar-thumb:hover {
		background: #96969E;
	}
	.scenes .column-container {
		min-height: 4rem;
		max-width: 6rem;
		border-radius: 5px;
		overflow: hidden;
	}
	.scenes .column-container .card-content {
		padding: .5rem
	}
	.scenes .column-container p {
		font-size: .825rem;
		word-break: normal;
	}
	.scenes .card {
		position: relative;
		z-index: 1;
		margin-bottom: 0;
	}
	.scenes .card .stub {
		display: none;
	}
	.scenes .card:hover > .stub,
	.scenes .card .stub:hover {
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .3);
		position: absolute;
		top: 0;
		left: 0;
		z-index: 2;
	}
	.add .column-container {
		display: flex;
		align-items: center;
		justify-content: center;
		border: 2px dashed hsl(0, 0%, 71%);
		min-height: 5rem;
		height: 100%;
		min-width: 4rem;
	}
	.pointer {
		cursor: pointer;
	}
	.pointer:hover {
		opacity: .8;
	}
</style>

<style>
	.card.fit {
		min-height: 4rem;
		max-width: 6rem;
	}
</style>