<template lang="pug">
aside.aside
	.label.pl-3
		span( v-html='$t("aside.roysupport")' )
	b-menu
		b-menu-list( 
			v-for='({ label, items }, i) in menu'
			:key='i'
			:label='$t(`aside.${label}`)' )
			b-menu-item(
				v-for='({ icon, to, name, external }, i) in items'
				:key='i'
				:icon='icon'
				:label='$t(`aside.${name}`)'
				:tag='external ? "a" : "nuxt-link"'
				:to='to'
				:href='to'
				:target='external ? "_blank" : null'
				preload)
</template>

<script>
export default {
	name: "Aside",
	computed: {
		menu() {
			return [
				{
					label: 'main',
					items: [
						{ icon: 'desktop-mac', to: '/dashboard', name: 'dashboard' },
						{ icon: 'settings', to: '/profile', name: 'profile' },
						{ icon: 'responsive', to: '/promo', name: 'promo' }
					]
				},
				{
					label: 'referrals',
					items: [
						{ icon: 'nuxt', to: '/funnel', name: 'funnel' },
						{ icon: 'contact-mail', to: '/form', name: 'form' },
						{ icon: 'account-plus', to: '/contact/new', name: 'add' },
						{ icon: 'file-tree', to: '/tree', name: 'tree' }
					]
				},
				{
					label: 'info',
					items: [
						{ icon: 'wallet', to: 'https://roy.cash/pzmwallet', name: 'wallet', external: true },
						{ icon: 'link', to: 'https://roy.cash/blockchain', name: 'blockchain', external: true },
						{ icon: 'robot', to: 'https://t.me/roysupport', name: 'tech_support', external: true },
					]
				}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/aside";
</style>