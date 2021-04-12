<template lang="pug">
Card( :title='$t("profile.socials.title")' icon="account-circle" )
	.content
		p {{ $t('profile.socials.desc1') }}
		p {{ $t('profile.socials.desc2') }}
	form.form( @submit.prevent='update' )
		b-field(
			:message='leader.name && !validName ? $t("profile.socials.name_validation") : null'
			:type='leader.name && !validName ? "is-danger" : ""')
			b-input(
				type="text"
				icon="account-box"
				v-model='leader.name'
				:placeholder='$t("profile.socials.name")'
			)
		b-field(
			:message='leader.phone && !validPhone ? $t("profile.socials.phone_validation") : null'
			:type='leader.phone && !validPhone ? "is-danger" : ""')
			b-input(
				type="tel"
				icon="phone"
				v-model='leader.phone'
				:placeholder='$t("profile.socials.phone")'
				@change.native='clear'
			)

		b-field(
			v-for='(social, key) in leader.socials'
			:key='key'
			:message='leader.socials[key] && !valid[key] ? $t(`profile.socials.${getKey(key)}_validation`) : null'
			:type='leader.socials[key] && !valid[key] ? "is-danger" : ""')
			b-input(
				type="text"
				:icon='getIcon(key)'
				v-model='leader.socials[key]'
				:placeholder='key !== "skype" ? $t(`profile.socials.${key}`) : "Skype"'
				@change.native='clear')

		hr
		b-field
			.control
				button.button.is-primary(:class='{ "is-loading": loading }') {{ $t('save') }}
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
	name: "ProfileSocials",
	data() {
		return {
			loading: false
		}
	},
	computed: {
		...mapState('leader', ['leader']),
		valid() {
			return {
				telegram: this.leader.socials.telegram ? /^[a-zA-Z0-9-_@]{5,32}$/igm.test(this.leader.socials.telegram) : false,
				instagram: this.leader.socials.instagram ? /[a-zA-Z0-9-_.]{0,32}/igm.test(this.leader.socials.instagram) : false,
				vk: this.leader.socials.vk ? /[a-zA-Z0-9-_.]{0,32}/igm.test(this.leader.socials.vk) : false,
				whatsapp: this.leader.socials.whatsapp ? /(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})/igm.test(this.leader.socials.whatsapp) : false,
				viber: this.leader.socials.viber ? /(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})/igm.test(this.leader.socials.viber) : false,
				skype: this.leader.socials.skype ? /[a-zA-Z0-9-_.]{0,32}/igm.test(this.leader.socials.skype) : false
			}
		},
		validName() {
			return this.leader.name ? /[A-z0-9\u0400-\u04ff _-]{0,32}/igm.test(this.leader.name) : false
		},
		validPhone() {
			return this.leader.phone ? /(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})/igm.test(this.leader.phone) : false
		}
	},
	methods: {
		...mapActions('leader', ['save']),
		getKey(key) {
			return key == "instagram" || key == "telegram" || key == "skype" ? "other" : key == "whatsapp" || key == "viber" ? "phone" : key
		},
		getIcon(key) {
			return key == "vk" ? "vk-circle" : key == "viber" ? "phone-plus" : key
		},
		update() {
			if (!this.leader.socials.telegram || !this.leader.name || !this.leader.phone) return this.$Snackbar( this.$t('profile.socials.required') )

			if (!this.validName || !this.validPhone) return this.$Snackbar( this.$t('profile.not_all') )

			let keys = Object.keys(this.leader.socials)
			for (let key of keys) {
				if (this.leader.socials[key] && !this.valid[key]) return this.$Snackbar( this.$t('profile.not_all') )
			}

			this.loading = true

			this.save({ leader: this.leader, snackbar: true })
				.then(() => this.loading = false)
		},
		clear () {
			for (const property in this.leader.socials) {
				if (this.leader.socials[property]) {
					this.leader.socials[property] = this.leader.socials[property]
						.replace('https://', '')
						.replace('http://', '')
						.replace('www.', '')
						.replace('vk.com/', '')
						.replace('join.skype.com/', '')
						.replace('invite/', '')
						.replace('instagram.com', '')
						.replace('telegram.me', '')
						.replace('?r=nametag', '')
						.replace('t.me/', '')
						.replace('/', '')
						.replace('@', '')
				}
			}
		}
	}
}
</script>