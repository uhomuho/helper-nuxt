<template lang="pug">
.box
	.buttons
		.button.is-link.is-fullwidth(@click='clear') {{ $t("bot.tree.clear") }}
	.columns.is-flex.is-centered.is-mobile(
		v-for='(stage, stageIndex) in tree'
		:key='stageIndex')
		drop.column(
			v-for='(scene, sceneIndex) in stage'
			:key='sceneIndex'
			:class='setClass(stage)'
			@dragover='over(stageIndex, sceneIndex)'
			@dragleave='leave'
			@drop='handler')
			.empty(
				v-if='!scene.name'
				:class='over_scene == sceneIndex && over_stage == stageIndex ? "over" : ""')
				p.has-text-centered.is-size-4(v-html='!scene.hint ? $t("bot.tree.drag") : $t(scene.hint.text, scene.hint.params)')
				b-field(
					v-if='scene.for && compares.length > 0 && compares.filter(item => item._id !== scene.for.id).length > 0'
					expanded)
					b-dropdown
						.button.is-small.is-info.is-fullwidth(slot='trigger')
							span {{ $t("bot.tree.compare") }}
							b-icon(
								icon="menu-down")
						b-dropdown-item(
							v-for='(compare, i) in compares.filter(item => item._id !== scene.for.id)'
							:key='i'
							@click='setDuplicate(stageIndex, sceneIndex, compare, scene.for)')
							| {{ compare.name }}
				
			.column-container(
				v-else)
				.card
					.remove.pointer(@click='removeScene(stageIndex, sceneIndex)')
						b-icon(
							icon="trash-can"
							type="is-warning")
					.card-content(v-if='stageIndex > 0 && scene.hint')
						.content.is-small
							p(v-html='$t(scene.hint.text, scene.hint.params)')
					.card-image
						figure.image(v-if='scene.image')
							img(
								:src='scene.image')
					.card-content
						.content
							h4.has-text-weight-bold {{ scene.name }}
							p(v-html='scene.message')
	.buttons
		.button.is-link.is-fullwidth(@click='clear') {{ $t("bot.tree.clear") }}
</template>

<script>
export default {
	name: "BotTree",
	props: ['bot'],
	data() {
		return {
			over_stage: null,
			over_scene: null,
			tree:	this.bot.scenesTree.length > 0 ? this.bot.scenesTree : [[{}]]
		}
	},
	computed: {
		compares() {
			let compare = []

			for (let stage of this.bot.scenesTree) {
				for (let scene of stage) {
					if (scene.name) compare.push(scene)
				}
			}
			
			return compare
		}
	},
	methods: {
		setDuplicate(stageIndex, sceneIndex, compare, sceneFor) {
			let tree = this.tree
			for (let prop in compare) {
				if (prop !== 'for' && prop !== 'hint') {
					tree[stageIndex][sceneIndex][prop] = compare[prop]
				}
			}

			for (let stage in this.tree) {
				for (let scene in this.tree[stage]) {
					if (tree[stage][scene].id === sceneFor.id) {
						if (tree[stage][scene].action == "message") {
							tree[stage][scene].nextScene = compare.id
						} else {
							tree[stage][scene].buttons[sceneFor.i].nextScene = compare.id
						}
					}
				}
			}

			let forScene = tree[stageIndex][sceneIndex].for
			forScene.next = compare.id

			this.tree = null
			this.tree = tree

			this.$emit('addNext', forScene)
			this.save()
		},
		async handler(scene) {
			let empty = true
			let tree = this.tree
			if (tree[this.over_stage].length > 1) {
				empty = await this.checkStage(tree[this.over_stage])
			}

			for (let prop in scene) {
				tree[this.over_stage][this.over_scene][prop] = scene[prop]
			}


			if (this.over_stage > 0) {
				let forScene = this.tree[this.over_stage][this.over_scene].for
				forScene.next = scene.id
				this.$emit('addNext', forScene)
			}

			if (scene.action == "message") {
				let params = {
					hint: {
						text: "bot.tree.message_hint",
						params: [ scene.messageType, scene.name ]
					},
					for: {
						id: scene.id,
						action: scene.action
					}
				}

				if (empty) {
					tree.push([params])
				} else {
					tree[this.over_stage + 1].push(params)
				}
			} else if (scene.action == "buttons") {
				let params = []
				for (let i in scene.buttons) {
					params.push({
						hint: {
							text: "bot.tree.button_hint",
							params: [ scene.buttons[i].text, scene.name ]
						},
						for: {
							id: scene.id,
							action: scene.action,
							i
						}
					})
				}
				if (empty) {
					tree.push(params)
				} else {
					for (let param of params) {
						tree[this.over_stage + 1].push(param)
					}
				}
			}
			this.tree = tree
			this.leave()
			this.save()
		},
		over(stage, scene) {
			this.over_stage = stage
			this.over_scene = scene
		},
		leave() {
			this.over_stage = null
			this.over_scene = null
		},
		checkStage(stage) {
			for (let scene of stage) {
				if (scene.name) return false
			}
			return true
		},
		async removeScene(stageIndex, sceneIndex, scene) {
			let tree = this.tree
			let id = tree[stageIndex][sceneIndex].id

			tree[stageIndex][sceneIndex].name = null

			let hint = tree[stageIndex][sceneIndex].hint
			let sceneFor = tree[stageIndex][sceneIndex].for

			tree[stageIndex][sceneIndex] = {}
			tree[stageIndex][sceneIndex].hint = hint
			tree[stageIndex][sceneIndex].for = sceneFor

			let empty = await this.checkStage(tree[stageIndex])
			
			if (tree[stageIndex + 1] && tree[stageIndex + 1].length > 0) {
				for (let scene in tree[stageIndex + 1]) {
					if (tree[stageIndex + 1][scene].for.id === id) {
						tree[stageIndex + 1].splice(scene, 1)
					}
				}
			}

			for (let i in tree) {
				if (empty) {
					if (i > stageIndex) {
						tree.splice(i, 1)
					}
				} else {
					if (i > stageIndex + 1) {
						tree.splice(i, 1)
					}
				}
			}

			this.tree = null
			this.tree = tree
			
			this.save()
		},
		save() {
			setTimeout(() => {
				this.$emit('change', { tree: this.tree })
			}, 200)
		},
		setClass(stage) {
			return stage.length > 1 ? 'is-' + Math.floor(12/stage.length) + " " + (Math.floor(12/stage.length) < 4 ? "small" : "") : "is-6"
		},
		clear() {
			this.tree = [[{}]]
			this.save()
		}
	}
}
</script>

<style scoped>
.empty {
	margin: 1rem;
	padding: 1rem;
	min-height: 10rem;
	min-width: 8rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 2px dashed hsl(0, 0%, 71%);
	border-radius: 4px;
}
.column.small .empty p,
.column.small .content {
	font-size: .875rem!important;
}
.empty.over {
	background-color: hsl(142, 52%, 96%);
	border-color: hsl(141, 71%, 48%);
}
.empty .field {
	min-width: 100%;
	margin-top: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
}
.card {
	position: relative;
}
.card .remove {
	position: absolute;
	z-index: 3;
	top: .5rem;
	right: .5rem;
}
</style>