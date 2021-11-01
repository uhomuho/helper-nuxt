<template lang="pug">
.hero.is-fullheight
	.hero-head
		.section
			.container
				nav.navbar(role="navigation", aria-label="main navigation")
					.navbar-brand
						.navbar-item.is-flex
							img.logo(src="~assets/homepage/header/logo.svg", alt="logo")
							span.title.is-uppercase {{ $t('home.logo') }}
						.navbar-burger.burger(role="button", aria-label="menu", aria-expanded="false", @click="navbarToggle", v-bind:class="{'is-active': navbarBlock}")
							span
							span
							span
					.navbar-menu(v-bind:class="{'is-active': navbarBlock}")
						.navbar-start
							.navbar-item(@click="scroll('#capabilities')") {{ $t('home.menu.capabilities') }}
							.navbar-item(@click="scroll('#start')") {{ $t('home.menu.start') }}
							.navbar-item(@click="scroll('#about')") {{ $t('home.menu.about') }}
						.navbar-end
							.navbar-item
								.wrapper.is-flex
									a(href="https://roy.club/", target="_blank") {{ $t('home.roy') }}
									nuxt-link.button.is-flex( to="/dashboard" )
										|{{ $t('home.btn_start') }}
										img.icon(src="~assets/homepage/btn-arrow.svg")
							.navbar-item.lang
								LangSwitch( :float='false' )
	.hero
		.section-1.section
			.container
				.columns.is-multiline.is-flex
					.column.is-5-desktop.is-6-tablet.is-12-mobile
						.column-container
							.content
								h1 {{ $t('home.s1.title') }}
								p {{ $t('home.s1.subtitle') }}
							.columns.is-multiline.is-flex.is-mobile
								.column.is-6.is-vcentered
									.column-container.is-flex
										img(src="~assets/homepage/section-1/mark.svg", alt="mark")
										p {{ $t('home.s1.free') }}
								.column.is-6.is-vcentered
									.column-container.is-flex
										img(src="~assets/homepage/section-1/mark.svg", alt="mark")
										p {{ $t('home.s1.simple') }}
								.column.is-6.is-vcentered
									.column-container.is-flex
										img(src="~assets/homepage/section-1/mark.svg", alt="mark")
										p {{ $t('home.s1.easy') }}
								.column.is-6.is-vcentered
									.column-container.is-flex
										img(src="~assets/homepage/section-1/mark.svg", alt="mark")
										p {{ $t('home.s1.effective') }}
							router-link.button.with-circle#capabilities(to="/login")
								| {{ $t('home.btn_start') }}
								img.icon(src="~assets/homepage/btn-arrow.svg", alt="icon")
					.column.is-7-desktop.is-6-tablet.is-9-mobile
						.column-container
							img.bg(src="~assets/homepage/section-1/img.png", alt="bg")
		.section-2.section
			.container
				.columns.is-flex.is-multiline
					.column.is-8-desktop.is-7-tablet.is-12-mobile
						.column-container
							img.left-img(src="~assets/homepage/section-2/left-img.png", alt="img")
					.column.is-4-desktop.is-5-tablet.is-12-mobile
						.column-container
							.content
								h2 {{ $t('home.s2.title') }}
							.media
								.media-left
									img(src="~assets/homepage/section-2/icon-1.svg", alt="icon")
								.media-content
									p {{ $t('home.s2.automatic') }}
							.media
								.media-left
									img(src="~assets/homepage/section-2/icon-2.svg", alt="icon")
								.media-content
									p {{ $t('home.s2.personal') }}
							.media
								.media-left
									img(src="~assets/homepage/section-2/icon-3.svg", alt="icon")
								.media-content
									p {{ $t('home.s2.chat_bot') }}
							.media
								.media-left
									img(src="~assets/homepage/section-2/icon-4.svg", alt="icon")
								.media-content
									p {{ $t('home.s2.comfort') }}
					.column.is-4-desktop.is-5-tablet.is-12-mobile
						.column-container
							.media
								.media-left
									img(src="~assets/homepage/section-2/icon-5.svg", alt="icon")
								.media-content
									p {{ $t('home.s2.statistics') }}
							.media
								.media-left
									img(src="~assets/homepage/section-2/icon-6.svg", alt="icon")
								.media-content
									p {{ $t('home.s2.connect') }}
							.media
								.media-left
									img(src="~assets/homepage/section-2/icon-7.svg", alt="icon")
								.media-content
									p {{ $t('home.s2.contact') }}
							.media
								.media-left
									img(src="~assets/homepage/section-2/icon-8.svg", alt="icon")
								.media-content
									p {{ $t('home.s2.control') }}
					.column.is-8-desktop.is-7-tablet.is-12-mobile
						.column-container
							img.right-img(src="~assets/homepage/section-2/right-img.png", alt="img")
		.section-3.section
			img.bg(src="~assets/homepage/section-3/bg.png", alt="bg")#start
			.container
				.content
					h2 {{ $t('home.s3.title') }}
				.columns.is-multiline.is-centered.is-flex.is-mobile
					.column.is-8.is-hidden-desktop
						.column-container
							a.media.has-text-dark(href="https://www.youtube.com/watch?v=S4ZgsBYYDWM&feature=youtu.be", target="_blank")
								.media-left
									<span class="icon has-text-danger">
										<i class="fab fa-2x fa-youtube"></i>
									</span>
								.media-content
									p {{ $t('home.s3.register') }}
							a.media.has-text-dark(href="https://www.youtube.com/watch?v=RRjBs4uxMn4&feature=youtu.be", target="_blank")
								.media-left
									<span class="icon has-text-danger">
										<i class="fab fa-2x fa-youtube"></i>
									</span>
								.media-content
									p {{ $t('home.s3.landing') }}
							a.media.has-text-dark(href="https://www.youtube.com/watch?v=dMxwhScrdTQ&feature=youtu.be", target="_blank")
								.media-left
									<span class="icon has-text-danger">
										<i class="fab fa-2x fa-youtube"></i>
									</span>
								.media-content
									p {{ $t('home.s3.funnel') }}

					.column.is-4-desktop.is-12-tablet.is-8-mobile
						.column-container
							.content
								div( v-for='(n, i) in [1, 2, 3, 4]' :key='i' :class='{ "mb-4": n<4 }' )
									span( v-html='$t("home.s3.step", [n])' )
									p {{ $t(`home.s3.steps.${n}`) }}
					.column.is-4-desktop.is-hidden-tablet.is-hidden-mobile.is-block-desktop
						.column-container.has-text-centered.content
							a(href="https://www.youtube.com/watch?v=S4ZgsBYYDWM&feature=youtu.be", target="_blank")
								img.play(src="~assets/homepage/section-3/img.png", alt="video")
							p
								a(href="https://www.youtube.com/watch?v=S4ZgsBYYDWM&feature=youtu.be", target="blank") {{ $t('home.s3.register') }}

							a(href="https://www.youtube.com/watch?v=RRjBs4uxMn4&feature=youtu.be", target="_blank")
								img.play(src="~assets/homepage/section-3/img.png", alt="video")
							p
								a(href="https://www.youtube.com/watch?v=RRjBs4uxMn4&feature=youtu.be", target="_blank") {{ $t('home.s3.landing') }}

							a(href="https://www.youtube.com/watch?v=dMxwhScrdTQ&feature=youtu.be", target="_blank")
								img.play(src="~assets/homepage/section-3/img.png", alt="video")
							p
								a(href="https://www.youtube.com/watch?v=dMxwhScrdTQ&feature=youtu.be", target="_blank") {{ $t('home.s3.funnel') }}

					.column.is-4-desktop.is-12-tablet.is-8-mobile
						.column-container
							.content
								div( v-for='(n, i) in [5, 6, 7]' :key='i' :class='{ "mb-4": n<7 }' )
									span( v-html='$t("home.s3.step", [n])' )
									p {{ $t(`home.s3.steps.${n}`) }}
				router-link.button#about(to="/login")
					| {{ $t('home.btn_start') }}
					img.icon(src="~assets/homepage/btn-arrow.svg", alt="icon")
		.section-4.section
			.container
				.columns.is-flex.is-multiline
					.column.is-7-desktop.is-6-tablet.is-12-mobile
						.column-container
							img(src="~assets/homepage/section-4/img.png", alt="img")
					.column.is-5-desktop.is-6-tablet.is-12-mobile
						.column-container
							.content
								h2 {{ $t('home.s4.title') }}
								p {{ $t('home.s4.text.1') }}
								p {{ $t('home.s4.text.2') }}
								.is-flex.wrapper
									span {{ $t('home.s4.follow') }}
									a.button.white(href="https://roy.club/" target="_blank")
										|{{ $t('home.btn_more') }}
										img.icon(src="~assets/homepage/w-btn-arrow.svg", alt="icon")
		.section-5.section
			.container
				img.bg(src="~assets/homepage/section-5/bg.png", alt="bg")
				.content
					h2 {{ $t('home.s5.title') }}
				.columns.is-centered.is-flex.is-multiline.is-uppercase.is-centered
					.column.is-4-desktop.is-4-tablet.is-12-mobile
						.column-container
							.navbar-brand.is-flex
								img.logo(src="~assets/homepage/header/logo.svg", alt="logo")
								a(href="https://royblago.ru/", target="_blank")
									span.title {{ $t('home.s5.blago') }}
					.column.is-4-desktop.is-4-tablet.is-12-mobile
						.column-container
							.navbar-brand.is-flex
								img.logo(src="~assets/homepage/header/logo.svg", alt="logo")
								a(href="https://roybounty.com/", target="_blank")
									span.title {{ $t('home.s5.movement') }}
					.column.is-4-desktop.is-4-tablet.is-12-mobile
						.column-container
							.navbar-brand.is-flex
								img.logo(src="~assets/homepage/header/logo.svg", alt="logo")
								a(href="https://roy.market/", target="_blank")
									span.title {{ $t('home.s5.market') }}
	footer.hero-foot
		.container
			.section
				.columns.is-flex.is-multiline
					.column.is-6-desktop.is-6-tablet.is-12-mobile
						.column-container
							.columns.is-flex.is-multiline.is-centered
								.column.is-6-desktop.is-12-tablet.is-12-mobile
									.navbar-brand
										img.logo(src="~assets/homepage/header/logo.svg", alt="logo")
										span.title {{ $t('home.logo') }}
								.column.is-6-desktop.is-12-tablet.is-12-mobile
									.column-container
										p &copy; ROY CLUB 2020
					.column.is-6-desktop.is-6-tablet.is-12-mobile
						.column-container
							.columns.is-flex.is-multiline
								.column.is-6-desktop.is-12-tablet.is-12-mobile
									.column-container
										p.user-agreement(@click='toggleModal')
											UserAgreement
								.column.is-6-desktop.is-12-tablet.is-12-mobile
									.column-container.is-flex
										router-link.button(to="/login")
											| {{ $t('home.btn_start') }}
											img.icon(src="~assets/homepage/btn-arrow.svg", alt="icon")
</template>

<script>
export default {
	name: 'HomePage',
	layout: 'landing',
	data() {
		return {
			isModal: false,
			navbarBlock: false 
		}
	},
	methods: {
		toggleModal() {
			this.isModal = !this.isModal
		},
		navbarToggle() {
			this.navbarBlock = !this.navbarBlock
		},
		scroll (target) {
			document.querySelector(target).scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
	}
}
</script>

<style scoped>
@import "~/assets/fonts/BebasNeue/stylesheet.css";
@import "~/assets/fonts/Gilroy/stylesheet.css";
</style>
<style lang="scss" scoped>
@import "~/assets/scss/pages/home";
</style>