<template lang="pug">
#panel
	Header#header(
		:loggedIn='leader')
	main( v-if='leader' )
		#aside
			Aside
		#main
			#top_line( v-if='$route.name !== "login"' )
				h1 {{ $t(`title.${$route.name}`, titleParams) }}
			.section
				nuxt
	main.hero.is-fullheight( v-else )
		Auth
	Loading(
		:loading='loading' )
</template>

<script>
import 	{ mapState } from 'vuex'

export default {
	name: "default",
	middleware: ['auth', 'auth_check'],
	head() {
		return {
			link: [
				{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" }
			]
		}
	},
	data() {
		return {
			loading: true
		}
	},
	computed: {
		...mapState('leader', ['leader']),
		...mapState(['titleParams'])
	},
	mounted() {
		if (this.leader) {
			setTimeout(() => this.$Snackbar(this.$t("welcome_back_leader", [this.leader.username])), 600)
		} else {
			this.$cookies.remove('token')
		}
		setTimeout(() => this.loading = false, 500)
	}
}
</script>

<style lang="scss" scoped>
.hero {
	&.is-fullheight {
		justify-content: center
	}
}
</style>

<style lang="scss">
@import "~/assets/scss/layouts/default";
</style>