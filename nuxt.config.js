export default {
	target: 'server',
	build: {
		cache: true,
		optimizeCSS: true,
		splitChunks: {
			layouts: true,
			pages: true
		}
	},
	loading: false,
	head: {
		title: 'РОЙ Помощник | ROY Support',
		htmlAttrs: {
			lang: 'ru'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ "http-equiv": "X-UA-Compatible", content: "IE=edge" },
			{ name: "msapplication-TileColor", content: "#ffffff" },
			{ name: "msapplication-TileImage", content: "/ms-icon-144x144.png" },
			{ name: "theme-color", content: "#ffffff" },
			{ hid: 'description', name: 'description', content: 'Автоматическая воронка регистрации участников РОЙ Клуба. Присоединяйтесь к сообществу и приумножайте криптовалюты со скоростью до 40% в месяц!' },
			{ hid: 'og:site_name', name: 'og:site_name', content: 'РОЙ Помощник' },
			{ hid: 'og:locale', name: 'og:locale', content: 'ru_RU' },
			{ hid: 'og:description', name: 'og:description', content: 'Автоматическая воронка регистрации участников РОЙ Клуба. Присоединяйтесь к сообществу и приумножайте криптовалюты со скоростью до 40% в месяц!' },
			{ hid: 'og:title', name: 'og:title', content: 'РОЙ Клуб —  до 40% на криптовалютах UMI и PRIZM.' },
			{ hid: 'og:type', name: 'og:type', content: 'website' },
			{ hid: 'og:image', name: 'og:image', content: '/landing/social.png' },
			{ hid: 'og:image:width', name: 'og:image:width', content: '1020' },
			{ hid: 'og:image:height', name: 'og:image:height', content: '456' },
			{ hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
			{ hid: 'twitter:title', name: 'twitter:title', content: 'РОЙ Клуб —  до 40% на криптовалютах UMI и PRIZM.' },
			{ hid: 'twitter:image', name: 'twitter:image', content: '/landing/social.png' },
			{ hid: 'twitter:description', name: 'twitter:description', content: 'Автоматическая воронка регистрации участников РОЙ Клуба. Присоединяйтесь к сообществу и приумножайте криптовалюты со скоростью до 40% в месяц!' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: "preconnect", href: "https://fonts.gstatic.com" },
			{ rel: "dns-prefetch", href: "https://use.fontawesome.com" },
			{ rel: "preconnect", href: "https://use.fontawesome.com", crossorigin: "" },
			{ rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css" },
			
			{ rel: "shortcut icon", href: "/favicon.ico", type: "image/x-icon" },
			{ rel: "apple-touch-icon", sizes: "180x180", href: "/apple-icon.png" },
			{ rel: "apple-touch-icon", sizes: "57x57", href: "/apple-icon-57x57.png" },
			{ rel: "apple-touch-icon", sizes: "60x60", href: "/apple-icon-60x60.png" },
			{ rel: "apple-touch-icon", sizes: "72x72", href: "/apple-icon-72x72.png" },
			{ rel: "apple-touch-icon", sizes: "76x76", href: "/apple-icon-76x76.png" },
			{ rel: "apple-touch-icon", sizes: "114x114", href: "/apple-icon-114x114.png" },
			{ rel: "apple-touch-icon", sizes: "120x120", href: "/apple-icon-120x120.png" },
			{ rel: "apple-touch-icon", sizes: "144x144", href: "/apple-icon-144x144.png" },
			{ rel: "apple-touch-icon", sizes: "152x152", href: "/apple-icon-152x152.png" },
			{ rel: "apple-touch-icon", sizes: "180x180", href: "/apple-icon-180x180.png" },
			{ rel: "icon", type: "image/png", sizes: "192x192", href: "/android-icon-192x192.png" },
			{ rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
			{ rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" },
			{ rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
			{ rel: "manifest", href: "/manifest.json" },
		]
	},

	gtm: {
		id: 'GTM-TT8DLN2'
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
		{ src: '~plugins/landing' },
		{ src: '~plugins/slick' }
	],

	components: {
		dirs: [
			'~/components',
			{ path: '~/components/header', prefix: 'Header' },
			{ path: '~/components/card', prefix: 'Card' },
			{ path: '~/components/profile', prefix: 'Profile' },
			{ path: '~/components/funnel', prefix: 'Funnel' },
			{ path: '~/components/contact', prefix: 'Contact' },
			{ path: '~/components/bots', prefix: 'Bots' },
			{ path: '~/components/landing', prefix: 'Landing' },
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
		'nuxtjs-mdi-font',
		'@nuxtjs/gtm',
		['nuxt-lazy-load', {
			directiveOnly: true
		}]
	],

	axios: {
		baseURL: process.env.NODE_ENV !== 'production' ? 'http://localhost:8082' : 'https://helper-backend.cp.roybots.ru'
	},

	i18n: {
		// locales: ['en', 'ru'],
		locales: [
			{ code: 'en', file: 'en.js' },
			{ code: 'ru', file: 'ru.js' },
			{ code: 'es', file: 'es.js' }
		],
		vueI18n: {
			fallbackLocale: 'en'
		},
		strategy: 'no_prefix',
		vueI18nLoader: true,
		vuex: {
			syncLocale: true,
			syncMessages: true
		},
		lazy: true,
		langDir: 'locales/'
	}
}
