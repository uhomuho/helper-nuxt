<template lang="pug">
#auth( v-if='!leader' )
	.card
		.card-header
			p.card-header-title
				b-icon.mr-2( :icon='isLogin ? "login" : "account"' size="is-small" )
				span {{ isLogin ? $t('log_in') : $t('sign_up') }}
		.card-content
			form.form( v-if='isLogin' @submit.prevent='authenticate' )
				b-field( 
					:label='$t("login")'
					:message='login.username && !validUsername ? $t("login_validation") : ""'
					:type='login.username && !validUsername ? "is-danger" : ""' )
					b-input(
						v-model='login.username'
						:placeholder='$t("login_placeholder")'
						icon='account'
						type='text'
						autocomplete='on'
						autofocus='autofocus')
				b-field( 
					:label='$t("password")'
					:message='login.password && !validPassword ? $t("password_validation") : ""'
					:type='login.password && !validPassword ? "is-danger" : ""' )
					b-input(
						v-model='login.password'
						:placeholder='$t("password_placeholder")'
						icon='lock'
						type='password'
						autocomplete='on'
						password-reveal)
				hr.my-4
				b-field( grouped )
					.control
						button.button.is-success( :class='{ "is-loading": loading }' ) {{ $t('log_in') }}
					.control
						b-button( type="is-warning" @click='isLogin = false' ) {{ $t('sign_up') }}
			form.form( v-else @submit.prevent='registration' )
				b-field(
					:label='`${$t("login")} *`'
					:message='register.username && !validUsername ? $t("login_validation") : ""'
					:type='register.username && !validUsername ? "is-danger" : ""' )
					b-input(
						v-model='register.username'
						:placeholder='$t("login_placeholder")'
						icon='account'
						type='text'
						autofocus='autofocus')
				b-field(
					:label='`${$t("password")} *`'
					:message='register.password && !validPassword ? $t("password_validation") : ""'
					:type='register.password && !validPassword ? "is-danger" : ""' )
					b-input(
						v-model='register.password'
						:placeholder='$t("password_placeholder")'
						icon='lock'
						type='password'
						password-reveal)
				b-field(
					label="Telegram *"
					:message='register.telegram && !validTelegram ? $t("telegram_validation") : ""'
					:type='register.telegram && !validTelegram ? "is-danger" : ""' )
					b-input(
						v-model='register.telegram'
						placeholder="Username"
						icon="telegram")
				hr.my-4
				b-field( grouped )
					.control
						button.button.is-success( :class='{ "is-loading": loading }' ) {{ $t('sign_up') }}
					.control
						b-button( type="is-info" @click='isLogin = true' ) {{ $t('log_in') }}
</template>

<script>
import { mapActions, mapState } from 'vuex'

const usernameReg = new RegExp(/^(?!.*umi.*$)(?!.*pzm.*$)[A-Za-z0-9-_]{1,32}$/),
			passwordReg = new RegExp(/(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*()_+]{6,32}/),
			telegramReg = new RegExp(/^[a-z][a-z0-9]{4,32}?([_][a-z0-9]+){0,2}$/i)

export default {
	name: "Auth",
	data() {
		return {
			login: {},
			register: {},
			isLogin: true,
			loading: false
		}
	},
	computed: {
		...mapState('leader', ['leader']),
		...mapState(['next']),
		validUsername() {
			return this[`${this.isLogin ? "login" : "register"}`].username ? usernameReg.test(this[`${this.isLogin ? "login" : "register"}`].username) : false
		},
		validPassword() {
			return this[`${this.isLogin ? "login" : "register"}`].password ? passwordReg.test(this[`${this.isLogin ? "login" : "register"}`].password) : false
		},
		validTelegram() {
			return this.register.telegram ? telegramReg.test(this.register.telegram) : false
		}
	},
	methods: {
		...mapActions('leader', ['auth', 'reg']),
		authenticate() {
			if (this.loading) return
			if (!this.login.username || !this.login.password) return this.$Snackbar(this.$t('fillAll'))
			if (!this.validUsername || !this.validPassword) return

			this.loading = true
			this.auth(this.login)
				.then(res => {
					this.result(res)
				})
				.catch(() => this.loading = false)
		},
		registration() {
			if (this.loading) return
			if (!this.register.username || !this.register.password || !this.register.telegram) return this.$Snackbar(this.$t('fillAll'))
			if (!this.validUsername || !this.validPassword || !this.validTelegram) return
			
			this.loading = true
			this.reg(this.register)
				.then(res => {
					this.result(res)
				})
				.catch(err => this.loading = false)
		},
		result(res) {
			this.loading = false
			if (res && res.payload) this.$Snackbar(this.$t(res.message, res.payload))
			if (res && !res.payload) this.$Snackbar(this.$t(res))

			if (res && res.payload) {
				if (this.next)
					this.$router.push(this.next)
				else
					this.$router.push('/dashboard')
			}
		}
	}
}
</script>

<style lang="scss" scoped>
#auth {
	@include _flex();
	height: 100%;
	.card {
		width: 600px;
		.card-content {
			padding: 1rem;
			hr {
				margin: {
					left: -1rem;
					right: -1rem;
				}
			}
		}
	}
}

@media screen and (max-width: 615px) {
	#auth {
		.card {
			width: 90%;
		}
	}
}
</style>