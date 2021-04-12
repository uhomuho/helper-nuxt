<template lang="pug">
Card( :title='$t("new.data.title")' icon="account" )
	form.form( @submit.prevent='$emit("save")' )
		b-field( :label='$t("new.data.phone")' )
			b-input(
				v-model='data.phone'
				:placeholder='$t("new.data.phone_place")')
		hr
		b-field( :label='$t("new.data.social.title")' )
		b-field(
			v-for='( social, key ) in data.socials'
			:key='key')
			b-input(
				:icon='getIcon(key)'
				v-model='data.socials[key]'
				:placeholder='key !== "skype" ? $t(`new.data.social.${key}`) : "Skype"'
				@change.native='clear')
		hr
		b-field( :label='$t("new.data.geo.title")' )
		b-field
			b-input(
				v-model='data.coutry'
				:placeholder='$t("new.data.geo.country")')
		b-field
			b-input(
				v-model='data.region'
				:placeholder='$t("new.data.geo.region")')
		b-field
			b-input(
				v-model='data.lang'
				:placeholder='$t("new.data.geo.lang")')
		b-field
			button.button.is-primary( :class='{ "is-loading": loading }' ) {{ $t("save") }}
</template>

<script>
export default {
	name: "ContactData",
	props: ['data', 'loading'],
	methods: {
		getIcon(key) {
			return key == "vk" ? "vk-circle" : key == "viber" ? "phone-plus" : key
		},
		clear () {
			for (const property in this.data.socials) {
				if (this.data.socials[property]) {
					this.data.socials[property] = this.data.socials[property]
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