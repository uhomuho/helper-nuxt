<template lang="pug">
.hero.is-fullheight
	.hero-head
		.section
			.container
				nav.navbar(role="navigation", aria-label="main navigation")
					.navbar-brand
						.navbar-item.is-flex
							img.logo(src="~assets/homepage/header/logo.svg", alt="logo")
							span.title.is-uppercase рой помощник
						.navbar-burger.burger(role="button", aria-label="menu", aria-expanded="false", @click="navbarToggle", v-bind:class="{'is-active': navbarBlock}")
							span
							span
							span
					.navbar-menu(v-bind:class="{'is-active': navbarBlock}")
						.navbar-start
							.navbar-item(@click="scroll('#capabilities')") Возможности
							.navbar-item(@click="scroll('#start')") Быстрый старт
							.navbar-item(@click="scroll('#about')") О Рой Клубе
						.navbar-end
							.navbar-item
								.wrapper.is-flex
									a(href="https://roy.club/", target="_blank") Рой Клуб
									nuxt-link.button.is-flex( to="/dashboard" )
										| Начать работу
										img.icon(src="~assets/homepage/btn-arrow.svg")
	.hero
		.section-1.section
			.container
				.columns.is-multiline.is-flex
					.column.is-5-desktop.is-6-tablet.is-12-mobile
						.column-container
							.content
								h1 Современные технологии для сетевого маркетинга
								p Получайте рефералов в автоматическом режиме. Вы отдыхаете — РОЙ Помощник работает!
							.columns.is-multiline.is-flex.is-mobile
								.column.is-6.is-vcentered
									.column-container.is-flex
										img(src="~assets/homepage/section-1/mark.svg", alt="mark")
										p Бесплатно
								.column.is-6.is-vcentered
									.column-container.is-flex
										img(src="~assets/homepage/section-1/mark.svg", alt="mark")
										p Просто
								.column.is-6.is-vcentered
									.column-container.is-flex
										img(src="~assets/homepage/section-1/mark.svg", alt="mark")
										p Понятно
								.column.is-6.is-vcentered
									.column-container.is-flex
										img(src="~assets/homepage/section-1/mark.svg", alt="mark")
										p Эффективно
							router-link.button.with-circle#capabilities(to="/login")
								| Начать работу
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
								h2 Возможности РОЙ Помощника
							.media
								.media-left
									img(src="~assets/homepage/section-2/icon-1.svg", alt="icon")
								.media-content
									p Автоматическая регистрация рефералов
							.media
								.media-left
									img(src="~assets/homepage/section-2/icon-2.svg", alt="icon")
								.media-content
									p Персональный рекламный лендинг РОЙ Клуба
							.media
								.media-left
									img(src="~assets/homepage/section-2/icon-3.svg", alt="icon")
								.media-content
									p Чат-бот с уведомлениями о всех событиях
							.media
								.media-left
									img(src="~assets/homepage/section-2/icon-4.svg", alt="icon")
								.media-content
									p Удобный интерфейс для контроля рефералов
					.column.is-4-desktop.is-5-tablet.is-12-mobile
						.column-container
							.media
								.media-left
									img(src="~assets/homepage/section-2/icon-5.svg", alt="icon")
								.media-content
									p Подробная статистика регистраций
							.media
								.media-left
									img(src="~assets/homepage/section-2/icon-6.svg", alt="icon")
								.media-content
									p Связь с рефералами по любым вопросам
							.media
								.media-left
									img(src="~assets/homepage/section-2/icon-7.svg", alt="icon")
								.media-content
									p Получение контактных данных для работы
							.media
								.media-left
									img(src="~assets/homepage/section-2/icon-8.svg", alt="icon")
								.media-content
									p Личный контроль регистраций на всех этапах
					.column.is-8-desktop.is-7-tablet.is-12-mobile
						.column-container
							img.right-img(src="~assets/homepage/section-2/right-img.png", alt="img")
		.section-3.section
			img.bg(src="~assets/homepage/section-3/bg.png", alt="bg")#start
			.container
				.content
					h2 Быстрый старт с РОЙ Помощником
				.columns.is-multiline.is-centered.is-flex.is-mobile
					.column.is-8.is-hidden-desktop
						.column-container
							a.media.has-text-dark(href="https://www.youtube.com/watch?v=S4ZgsBYYDWM&feature=youtu.be", target="_blank")
								.media-left
									<span class="icon has-text-danger">
										<i class="fab fa-2x fa-youtube"></i>
									</span>
								.media-content
									p Регистрация
							a.media.has-text-dark(href="https://www.youtube.com/watch?v=RRjBs4uxMn4&feature=youtu.be", target="_blank")
								.media-left
									<span class="icon has-text-danger">
										<i class="fab fa-2x fa-youtube"></i>
									</span>
								.media-content
									p Настройка лэндинга
							a.media.has-text-dark(href="https://www.youtube.com/watch?v=dMxwhScrdTQ&feature=youtu.be", target="_blank")
								.media-left
									<span class="icon has-text-danger">
										<i class="fab fa-2x fa-youtube"></i>
									</span>
								.media-content
									p Работа с воронкой

					.column.is-4-desktop.is-12-tablet.is-8-mobile
						.column-container
							.content
								span
									b 1&nbsp;
									| шаг
								p Пройдите регистрацию
								span
									b 2&nbsp;
									| шаг
								p Заполните свои данные в настройках
								span
									b 3&nbsp;
									| шаг
								p Обязательно укажите реферальный номер в РОЙ Клубе
								span
									b 4&nbsp;
									| шаг
								p Активируйте чат-ботов
					.column.is-4-desktop.is-hidden-tablet.is-hidden-mobile.is-block-desktop
						.column-container.has-text-centered.content
							a(href="https://www.youtube.com/watch?v=S4ZgsBYYDWM&feature=youtu.be", target="_blank")
								img.play(src="~assets/homepage/section-3/img.png", alt="video")
							p
								a(href="https://www.youtube.com/watch?v=S4ZgsBYYDWM&feature=youtu.be", target="blank") Регистрация

							a(href="https://www.youtube.com/watch?v=RRjBs4uxMn4&feature=youtu.be", target="_blank")
								img.play(src="~assets/homepage/section-3/img.png", alt="video")
							p
								a(href="https://www.youtube.com/watch?v=RRjBs4uxMn4&feature=youtu.be", target="_blank") Настройки лэндинга

							a(href="https://www.youtube.com/watch?v=dMxwhScrdTQ&feature=youtu.be", target="_blank")
								img.play(src="~assets/homepage/section-3/img.png", alt="video")
							p
								a(href="https://www.youtube.com/watch?v=dMxwhScrdTQ&feature=youtu.be", target="_blank") Работа с воронкой

					.column.is-4-desktop.is-12-tablet.is-8-mobile
						.column-container
							.content
								span
									b 5&nbsp;
									| шаг
								p Верифицируйте свой кошелёк
								span
									b 6&nbsp;
									| шаг
								p Отправляйте ссылку РОЙ Помощника рефералам
								span
									b 7&nbsp;
									| шаг
								p Отдыхайте, пока Помощник сам регистрирует новых партнёров!
				router-link.button#about(to="/login")
					| Начать работу
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
								h2 Что такое РОЙ Клуб?
								p РОЙ Помощник — проект РОЙ Клуба, инвестиционного сообщества, зарабатывающего на криптовалюте. Участники РОЙ Клуба получают доходность до 15% в месяц. Выводить монеты можно в любое время, без каких-либо лимитов.
								p Миссия РОЙ Клуба — изменить мир к лучшему! Наше сообщество — это не компания или бизнес, а группа единомышленников, которые зарабатывают вместе. Свободные средства мы тратим на благотворительность, социальные и другие полезные проекты.
								.is-flex.wrapper
									span Следуй за нами!
									a.button.white(href="https://roy.club/" target="_blank")
										| Узнать больше
										img.icon(src="~assets/homepage/w-btn-arrow.svg", alt="icon")
		.section-5.section
			.container
				img.bg(src="~assets/homepage/section-5/bg.png", alt="bg")
				.content
					h2 Другие проекты РОЙ Клуба
				.columns.is-centered.is-flex.is-multiline.is-uppercase.is-centered
					.column.is-4-desktop.is-4-tablet.is-12-mobile
						.column-container
							.navbar-brand.is-flex
								img.logo(src="~assets/homepage/header/logo.svg", alt="logo")
								a(href="https://royblago.ru/", target="_blank")
									span.title Рой благо
					.column.is-4-desktop.is-4-tablet.is-12-mobile
						.column-container
							.navbar-brand.is-flex
								img.logo(src="~assets/homepage/header/logo.svg", alt="logo")
								a(href="https://roybounty.com/", target="_blank")
									span.title рой движение
					.column.is-4-desktop.is-4-tablet.is-12-mobile
						.column-container
							.navbar-brand.is-flex
								img.logo(src="~assets/homepage/header/logo.svg", alt="logo")
								a(href="https://roy.market/", target="_blank")
									span.title рой маркет
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
										span.title рой помощник
								.column.is-6-desktop.is-12-tablet.is-12-mobile
									.column-container
										p &copy; ROY CLUB 2020
					.column.is-6-desktop.is-6-tablet.is-12-mobile
						.column-container
							.columns.is-flex.is-multiline
								.column.is-6-desktop.is-12-tablet.is-12-mobile
									.column-container
										p.user-agreement(@click='toggleModal') Пользовательское соглашение
								.column.is-6-desktop.is-12-tablet.is-12-mobile
									.column-container.is-flex
										router-link.button(to="/login")
											| Начать работу
											img.icon(src="~assets/homepage/btn-arrow.svg", alt="icon")
	UserAgreement(
		:isModal='isModal'
		@close='toggleModal')
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