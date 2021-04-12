import en from './locales/en'
import ru from './locales/ru'

export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',
	loading: false,
	head: {
		title: 'roy-helper-nuxt',
		htmlAttrs: {
			lang: 'ru'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: "preconnect", href: "https://fonts.gstatic.com" }
		]
	},

	css: [
		'~/assets/scss/main.scss'
	],
	styleResources: {
		scss: [ '~/assets/scss/common/_variables.scss', '~/assets/scss/common/_mixins.scss' ]
	},

	plugins: [
		{ src: '~plugins/common' },
		{ src: '~plugins/createChart' },
		{ src: '~plugins/api' },
		{ src: '~plugins/apiMethods' },
	],

	components: {
		dirs: [
			'~/components',
			{ path: '~/components/header', prefix: 'Header' },
			{ path: '~/components/card', prefix: 'Card' },
			{ path: '~/components/profile', prefix: 'Profile' },
			{ path: '~/components/funnel', prefix: 'Funnel' },
			{ path: '~/components/contact', prefix: 'Contact' },
		]
	},

	buildModules: [
		'@nuxtjs/svg-sprite'
	],

	modules: [
		'@nuxtjs/style-resources',
		'nuxt-i18n',
		'@nuxtjs/axios',
		'cookie-universal-nuxt',
		'nuxtjs-mdi-font'
	],

	axios: {
		baseURL: process.env.NODE_ENV !== 'production' ? 'http://localhost:8082' : 'https://helper-backend.cp.roybots.ru'
	},

	i18n: {
		locales: ['en', 'ru'],
		strategy: 'no_prefix',
		defaultLocale: 'ru',
		vuex: {
			syncLocale: true,
			syncMessages: true
		},
		vueI18n: { 
			fallbackLocale: 'en',
			messages: {
				en, ru
			}
		}
	}
}
