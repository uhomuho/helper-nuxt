<template lang="pug">
nav.navbar.is-fixed-top(
	:class='{ "is-paddingless": !loggedIn }')
	.navbar-brand
	.navbar-menu( v-if='loggedIn' )
		.navbar-brand
			.navbar-item
				HeaderSearch
		.navbar-end
			.navbar-item.has-divider
				.navbar-link.is-arrowless.is-paddingless
					.icon.is-medium.mr-3
						img.is-narrow( :src='`https://avatars.dicebear.com/v2/bottts/${leader.username}.svg`' )
					nuxt-link( to="/profile" ) {{ leader.name || leader.username }}
			a.navbar-item.has-divider( :title='$t("log_out")' @click='logout' )
				b-icon( icon="logout" size="is-medium")
			.navbar-item.has-divider
				client-only
					LangSwitch
	.navbar-menu( v-else )
		.navbar-end
			.navbar-item.has-divider
				b-button( size="is-small" icon-left="home" tag="nuxt-link" to="/")
					|{{ $t('tomain') }}
			.navbar-item.has-divider
				LangSwitch
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
	name: "Header",
	props: ['loggedIn'],
	computed: {
		...mapState('leader', ['leader'])
	},
	methods: {
		...mapMutations('leader', ['setLeader']),
		logout() {
			this.$cookies.remove('token')
			this.$router.push('/login')
			this.setLeader(null)
		}
	}
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/header";
</style>