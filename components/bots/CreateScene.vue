<template lang="pug">
.wrap#create_scene
	.card
		.card-image
			b-upload.expanded(
				v-if='!image'
				v-model='image'
				type="is-link"
				drag-drop
				expanded)
				.section
					.content.has-text-centered
						p
							b-icon( icon="upload" size="is-large" )
						p {{ $t("bot.scene.drop") }}
			.restore( v-if='scene && oldImage && !image' @click='image = oldImage' )
				b-icon(
					icon="cached"
					:title='$t("bot.scene.restore_image")')
			figure.is-3by4(v-else)
				img.preview(
					:src='imgUrl')
				.delete(
					@click='image = null')
		.card-content
			form.form
				b-field(
					:label='$t("bot.scene.name")'
					label-position="on-border"
					:message='name && validName ? "" : !validName ? $t("bot.scene.name_valid") : ""'
					:type='name && validName ? "" : !validName ? "is-danger" : ""')
					b-input(
						v-model='name')
				hr
				b-field(
					:label='$t("bot.scene.message")'
					label-position="on-border")
					b-input.area(
						v-model='message'
						type="textarea"
						:placeholder='$t("bot.scene.message_place")')
					p.has-text-link.clear(
						v-if='message'
						@click='message = null') {{ $t("bot.scene.clear") }}
					p.has-text-link.clear(
						v-else
						@click='message = example') {{ $t("bot.scene.example") }}
					b-tooltip(
						label='<br>, <b>, <a href="">'
						position="is-left"
						type="is-light"
						multilined)
						b-icon.pointer(
							icon="clippy")
				.block(v-if='message')
					p
						b {{ $t("bot.scene.output") }}
					pre(v-html='format(message)')
				hr
				b-field(
					:label='$t("bot.scene.action")'
					label-position="on-border")
						b-select(
							v-model='action'
							:placeholder='$t("bot.scene.choose")'
							expanded)
							option(
								v-for='(option, index) in actions'
								:value='option.name'
								:key='index') {{ $t(`bot.scene.actions.${option.title}`) }}
				b-field( v-if='action == "message"' )
					b-select(
						v-model='messageType'
						:placeholder='$t("bot.scene.mes_type")'
						expanded)
						option(
							v-for='(type, index) in messageTypes'
							:value='type.name'
							:key='index') {{ $t(`bot.scene.messages_types.${type.title}`) }}
				b-field(
					v-if='action == "buttons"'
					v-for='(button, index) in buttons'
					:key='index'
					:label='$t("bot.scene.button", [index + 1])'
					label-position="on-border"
					grouped)
					b-field(
						expanded
						:message='invalid.indexOf(`${index}`) > -1 ? $t("bot.scene.button_valid") : ""'
						:type='invalid.indexOf(`${index}`) > -1 ? "is-danger" : ""')
						b-input(
							v-model="buttons[index].text"
							:placeholder='$t("bot.scene.button_text")')
					.control(v-if='buttons.length < 3')
						.button.is-success(
							@click='addButton') 
							b-icon( icon="plus" )
					.control(v-if='buttons.length > 1')
						.button.is-danger(
							@click='removeButton(index)') 
							b-icon( icon="trash-can" )

		.card-footer
			.card-footer-item.has-text-success( @click='save' ) 
				span(v-if='!loading') {{ $t("save") }}
				.loader(v-else)
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
	name: 'bot-scene',
	props: ['bot', 'scene'],
	data() {
		return {
			image: null,
			oldImage: null,
			name: null,
			message: null,
			messageType: null,
			action: null,
			invalid: [],
			buttons: [{
				text: null,
				nextScene: null
			}],
			actions: [
				{
					name: 'message',
					title: 'message'
				}, 
				{
					name: 'buttons',
					title: 'buttons'
				},
				{
					name: null,
					title: 'without'
				}
			],
			messageTypes: [
				{
					name: 'phone',
					title: 'phone'
				},
				{
					name: 'umiAddress',
					title: 'umi_ad'
				},
				{
					name: 'pzmAddress',
					title: 'pzm_ad'
				},
				{
					name: 'number',
					title: 'number'
				},
				{
					name: 'text',
					title: 'text'
				},
			],
			loading: false
		}
	},
	watch: {
		scene: {
			handler() {
				this.$emit('change', this.scene)
			},
			deep: true
		},
		buttons: {
			handler() {
				for (let i in this.buttons) {
					let button = this.buttons[i]
					this.testButton(button.text, i)
				}
			},
			deep: true
		}
	},
	computed: {
		...mapState(['leader']),
		imgUrl() {
			return this.image && typeof this.image == "object" ? URL.createObjectURL(this.image) : typeof this.image == "string" ? this.image : false
		},
		validName() {
			return this.name && (this.name.indexOf('*') > -1 || this.name.length > 38 || /[А-Яа-я]/.test(this.name)) ? false : true
		},
		example() {
			return this.$t("bot.scene.example_text")
		},
	},
	methods: {
		...mapActions('bots', ['apiAddScene']),
		testButton(str, i) {
			if(str) {
				if (str.length > 10) {
					if (this.invalid.indexOf(i) == -1) {
						this.invalid.push(i)
					}
				} else {
					this.invalid = this.invalid.splice(this.invalid.indexOf(i), 0)
				}
			} else {
				this.invalid = this.invalid.splice(this.invalid.indexOf(i), 0)
			}
		},
		addButton() {
			if (this.buttons.length < 3) {
				this.buttons.push({
					text: null,
					nextScene: null
				})
			}
		},
		removeButton(i) {
			this.buttons.splice(i, 1)
			this.invalid = []
			for (let i in this.buttons) {
				let button = this.buttons[i]
				this.testButton(button.text, i)
			}
		},
		format(message) {
			return message.replaceAll(/<(?!(br|a|b|\/b|\/a|\/br)\s*\/?)[^>]+>/g, "").trim()
		},
		save() {
			if (this.loading) return
			if (!this.validName) return
			if (this.invalid.length > 0) return

			if (this.action == "message" && !this.messageType) return this.$Snackbar(this.$t("bot.scene.choose_type"))

			if (this.action == "buttons") {
				for (let i in this.buttons) {
					let button = this.buttons[i]
					if (!button.text || button.text.length == 0) {
						this.$Snackbar( this.$t("bot.scene.fill_buttons") )
						return
					}
				}
			}


			if (!this.name) return	this.$Snackbar(this.$t("bot.scene.fill_name"))
			if (!this.message) return this.$$Snackbar( this.$t("bot.scene.fill_message") )

			if (this.name.indexOf('*') > -1 || this.name.length > 38 || !/[^А-Яа-я]/.test(this.name)) {
				return this.$Snackbar(this.$t("bot.scene.name_valid"))
			}

			let scene = {
				name: this.name,
				message: this.format(this.message),
				action: this.action,
				messageType: this.messageType,
				buttons: this.buttons
			}

			if (this.oldImage && !this.image) {
				scene.image = null
			}
			if (this.oldImage && typeof this.image == "string") {
				scene.image = this.image
			}
			if (this.scene) {
				scene.id = this.scene.id
			}
			
			scene = JSON.stringify(scene)
			let formData = null
			formData = new FormData()
			formData.append('file', this.image)
			formData.append('scene', scene)
			formData.append('username', this.leader.username)
			this.loading = true
			let params = { id: this.bot._id, scene: formData }

			if (this.scene) {
				return this.$updateScene(params)
					.then(result => {
						this.loading = false
						if (!result) return
						if (result.message) return this.$Snackbar( this.$t(result.message) )
						this.$emit('updated')
					})	
					.catch(err => {
						this.loading = false
						this.$Snackbar( this.$t("bot.scene.load_err") )
					})
			}
			this.$addScene(params)
				.then(result => {
					this.loading = false
					if (!result) return
					if (result.message) return this.$Snackbar( this.$t(result.message) )
					this.$emit('created')
				})
				.catch(err => {
					this.loading = false
					this.$Snackbar( this.$t("bot.scene.load_err") )
				})
		}
	},
	mounted() {
		if (this.scene) {
			this.name = this.scene.name
			this.message = this.scene.message
			this.messageType = this.scene.messageType
			this.action = this.scene.action
			this.buttons = this.scene.buttons
			this.image = this.scene.image	
			this.oldImage = this.scene.image	
		}
	}
}
</script>

<style scoped>
.wrap {
	width: 600px;
	margin: 0 auto;
}
.card-image {
	max-height: 16rem;
	display: flex;
	justify-content: center;
}
.card-image figure {
	position: relative;
	display: flex;
	justify-content: center;
}
.card-image .delete,
.card-image .restore {
	position: absolute;
	top: 1rem;
	right: 1rem;
}
.card-image .restore {
	cursor: pointer;
}
.card-image .restore:hover {
	opacity: .8;
}
.card-image .delete {
	background-color: #000;
}
.card-content {
	font-size: .8rem;
}
.card-content p.title {
	font-size: 1.5em;
	margin-bottom: 0;
}
.card-footer-item {
	cursor: pointer;
	opacity: .7;
}
.card-footer-item:hover {
	opacity: 1;
}
.b-tooltip {
	position: absolute;
	top: .5rem;
	right: .5rem;
}
.clear {
	position: absolute;
	bottom: .5rem;
	right: .5rem;
	cursor: pointer;
}
.clear:hover {
	text-decoration: underline;
}
.control.area {
	width: 100%;
}
textarea::placeholder {
	color: #000;
	font-size: .8rem;
}

@media screen and (max-width: 630px) {
	.wrap {
		width: 95%;
	}
}

</style>