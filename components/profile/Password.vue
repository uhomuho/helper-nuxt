<template lang="pug">
Card( :title='$t("profile.password.title")' icon="lock" )
	form.form( @submit.prevent='save' )
		b-field( 
			:label='$t("profile.password.current")' )
			b-input(
				name="password_current"
				type="password"
				v-model="form.password_current"
				required
				autocomplete="current-password"
				:validation-message='$t("profile.password.validation")')
		hr
		b-field( 
			:label='$t("profile.password.new")' )
			b-input(
				name="password"
				type="password"
				v-model="form.password"
				required
				autocomplete="new-password"
				:validation-message='$t("profile.password.validation")')
		b-field( :label='$t("profile.password.repeat")' )
			b-input(
				name="password_confirmation"
				type="password"
				v-model="form.password_confirmation"
				required
				autocomplete="new-password"
				:validation-message='$t("profile.password.validation")')
		hr
		b-field
			button.button.is-primary( :class='{ "is-loading": loading }' ) {{ $t('save') }}
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
	name: "ProfilePassword",
	data() {
		return {
			loading: false,
			form: {}
		}
	},
	computed: {
		...mapState('leader', ['leader']),
		valid() {
			let pattern = new RegExp(/(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*()_+]{6,32}/igm)
			return {
				current: this.form.password_current ? pattern.test(this.form.password_current) : false,
				new: this.form.password ? pattern.test(this.form.password) : false,
				repeat: this.form.password_confirmation ? pattern.test(this.form.password_confirmation) : false
			}
		}
	},
	methods: {
		...mapActions('leader', ['changePassword']),
		async save() {
			let keys = Object.keys(this.valid)

			for (let key of keys) {
				if (this.form[key] && this.valid[key]) return this.$Snackbar( this.$t('profile.socials.not_all') )
			}

			if (this.form.password === this.form.password_confirmation) { 
				this.loading = true
				this.changePassword({ id: this.leader._id, params: this.form })
					.then(() => this.loading = false)
					.catch(() => this.loading = false)
			} else {
        this.$Snackbar( this.$t('profile.password.not_match') )
      }
		}
	}
}
</script>