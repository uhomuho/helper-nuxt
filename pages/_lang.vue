<template lang="pug">
div
	Loading( v-if='$fetchState.pending' :loading='loading' )
	.landing( v-else )
		LangSwitch( position="is-bottom-right" es )
		Landing1( v-if='leader.landing == 0' :leader='leader' :lang='lang' :mode='mode' :currency='currency' )
		Landing2( v-if='leader.landing == 1' :leader='leader' :lang='lang' :mode='mode' :currency='currency' )
		Landing3( v-if='leader.landing == 2' :leader='leader' :lang='lang' :mode='mode' :currency='currency' )
</template>

<script>

export default {
	name: "LandingSelector",
	components: {
		Landing1: () => import(/* webpackPrefetch: true */'~/components/landing/1.vue'),
		Landing2: () => import(/* webpackPrefetch: true */'~/components/landing/2.vue'),
		Landing3: () => import(/* webpackPrefetch: true */'~/components/landing/3.vue')
	},
	head() {
		return {
			meta: [
				{ hid: 'og:site_name', name: 'og:site_name', content: 'РОЙ Клуб | Приумножение криптовалюты' },
				{ hid: 'og:title', name: 'og:title', content: 'Зарабатывайте до 40% в месяц на криптовалютах!' },
				{ hid: 'og:description', name: 'og:description', content: 'Присоединяйтесь к РОЙ Клубу и приумножайте криптовалюты со скоростью до 40% в месяц! Бесплатное обучение, вывод в любой момент, огромные возможности.' },

				{ hid: 'twitter:title', name: 'twitter:title', content: 'Зарабатывайте до 40% в месяц на криптовалютах!' },
				{ hid: 'twitter:description', name: 'twitter:description', content: 'Присоединяйтесь к РОЙ Клубу и приумножайте криптовалюты со скоростью до 40% в месяц! Бесплатное обучение, вывод в любой момент, огромные возможности.' },
			]
		}
	},
	middleware: [ 'get_leader' ],
	layout: 'landing',
	data() {
		return {
			err: false,
			loading: true,
			leader: null,
			username: null,
			lang: null,
			mode: null,
			currency: null
		}
	},
	fetchOnServer: true,
	async fetch() {
		const { params, $getLandingLeader, redirect } = this.$nuxt.context

		let welcome = 'welcome',
				bots = 'bots',
				pzm = 'pzm',
				umi = 'umi',
				all = 'all'

		let leader,
				username = /^[a-z]{2}$/igm.test(params.lang) ? params.username : params.lang,
				lang = /^[a-z]{2}$/igm.test(params.lang) ? params.lang : null,
				mode = params.mode == welcome || params.mode == bots ? params.mode : params.username == welcome || params.username == bots ? params.username : null,
				currency = params.username == "all" || params.username == "pzm" || params.username == "all" ? params.username : /umi[0-9]/igm.test(username) || /pzm[0-9]/igm.test(username) ? username.replace(/[0-9]/g, '') : params.mode == pzm || params.mode == umi || params.mode == all ? params.mode : params.currency

		if (username) {
			leader = await $getLandingLeader({ username, query: 'select=sigen,chat_id,vk_id,email,avatar,metrics,metrics_id,fontColor,linkColor,bgColor,content,refsCount,customBots,createdAt,updatedAt' })
		}

		if (currency == 'pzm' || currency == 'all') {
			redirect(301, `${lang ? "/" + lang : ""}/umi${leader.umiRef}${mode ? "/" + mode : ""}`)
		}
		
		this.leader = leader 
		this.username = username
		this.lang = lang
		this.mode = mode
		this.currency = currency
	},
	mounted() {
		this.loading = false
		if (!this.leader) this.err = true
	}
}
</script>

<style lang="scss" scoped>
.dropdown.lang-selector::v-deep {
	position: fixed;
	top: 2rem;
	left: 0;
	border-top-right-radius: 50px;
	border-bottom-right-radius: 50px;
	background: rgba($color: $grey, $alpha: .6);
	box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0px 0 1px rgb(10 10 10 / 2%);
	.dropdown-menu {
		left: .5rem;
	}
	a {
		&.navbar-item {
			display: flex;
			&:hover {
				background: transparent;
			}
		}
	}
}
</style>