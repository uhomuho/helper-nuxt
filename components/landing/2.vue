<i18n src="~/locales/landings/2.json"></i18n>

<template lang="pug">
#2_nd
	.hero-head.is-paddingless.is-orange-bg
		.container.is-paddingless.is-marginless
			.columns.is-paddingless.is-marginless.is-multiline.is-flex.is-mobile
				.column.is-paddingless.is-3-desktop.is-4-tablet.is-6-mobile.is-height
					.column-container
						img(src="/2_design/header/img-1.png", alt="img-1")
						img.logo(src="/2_design/header/logo.svg", alt="logo")
				.column.is-paddingless.is-3-desktop.is-4-tablet.is-hidden-mobile.is-height
					.column-container
						img(src="/2_design/header/img-2.png", alt="img-2")
				.column.is-paddingless.is-3.is-block-desktop.is-hidden.is-height
					.column-container
						img(src="/2_design/header/img-3.png", alt="img-3")
				.column.is-paddingless.is-3-desktop.is-4-tablet.is-6-mobile.pref-column
					.column-container.is-flex.is-flex-column
						.media
							.media-left
								img.pref-img(src="/2_design/header/coins-icon.svg", alt="coins-icon")
							.media-content
								span {{ $t(`income.${comp_currency}`) }}
						.media
							.media-left
								img.pref-img(src="/2_design/header/education-icon.svg", alt="education-icon")
							.media-content
								span {{ $t("learn") }}
				.column.is-6-desktop.is-6-tablet.is-8-mobile.title-column
					.column-container.is-flex
						.content.is-flex.is-flex-column
							h1( v-html='$t("welcome")' )
							span {{ $t("make_crypto") }}
				.column.is-paddingless.is-3-desktop.is-6-tablet.is-4-mobile.is-height
					.column-container
						img(src="/2_design/header/img-4.png", alt="img-4")
				.column.is-paddingless.is-3.is-block-desktop.is-hidden.is-height
					.column-container
						img(src="/2_design/header/img-5.png", alt="img-5")
				.column.is-paddingless.is-3.is-width
					.column-container
						img(src="/2_design/header/img-6.png", alt="img-6")
				.column.is-paddingless.is-3.is-width
					.column-container
						img(src="/2_design/header/img-7.png", alt="img-7")
				.column.is-paddingless.is-3.is-width
					.column-container
						img(src="/2_design/header/img-8.png", alt="img-8")
				.column.is-paddingless.is-3.is-width
					.column-container
						img(src="/2_design/header/img-9.png", alt="img-9")
	.hero.is-fullheight
		.section.section-1.is-orange-bg
			.container
				.content
					h2( v-html='$t("is_people")' )
					p( v-html='$t("social_project")' )
				.columns.is-flex.is-multiline.is-centered
					.column.is-3-desktop.is-4-tablet.is-12-mobile
						.column-container.has-text-centered
							img(src="/2_design/main/hero-1/icon-1.svg", alt="icon-1")
							p( v-html='$t("more_than")' )
					.column.is-3-desktop.is-4-tablet.is-12-mobile
						.column-container.has-text-centered
							img(src="/2_design/main/hero-1/icon-2.svg", alt="icon-2")
							p {{ $t("initiative") }}
					.column.is-3-desktop.is-4-tablet.is-12-mobile
						.column-container.has-text-centered
							img(src="/2_design/main/hero-1/icon-3.svg", alt="icon-3")
							p( v-html='$t("office")' )
		.section.section-2
			.container.has-text-centered.is-flex.is-flex-column
				.content
					h1 {{ $t("is_multi") }}
					span {{ $t("stay_home") }}
					p {{ $t("free_learn") }}
				iframe(src="https://www.youtube.com/embed/BJcfl5cGSDY",
					frameborder="0",
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
					allowfullscreen)
				.button(href="#gform" @click="scroll()") {{ $t("join") }}
		.section.section-3
			.container
				.content
					h2( v-html='$t("is_opportune")' )
					.columns.is-flex.is-multiline.is-variable.is-6
						.column.is-6-desktop.is-6-tablet.is-12-mobile
							.column-container.is-flex.is-centered
								.media
									.media-left
										img(src="/2_design/main/hero-3/icon-1.svg", alt="icon-1")
									.media-content
										p( v-html='$t("school")' )
						.column.is-6-desktop.is-6-tablet.is-12-mobile
							.column-container.is-flex.is-centered
								.media
									.media-left
										img(src="/2_design/main/hero-3/icon-2.svg", alt="icon-2")
									.media-content
										p( v-html='$t("helper")' )
						.column.is-6-desktop.is-6-tablet.is-12-mobile
							.column-container.is-flex.is-centered
								.media
									.media-left
										img(src="/2_design/main/hero-3/icon-3.svg", alt="icon-3")
									.media-content
										p( v-html='$t("move")' )
						.column.is-6-desktop.is-6-tablet.is-12-mobile
							.column-container.is-flex.is-centered
								.media
									.media-left
										img(src="/2_design/main/hero-3/icon-4.svg", alt="icon-4")
									.media-content
										p( v-html='$t("good")' )
						.column.is-6-desktop.is-6-tablet.is-12-mobile
							.column-container.is-flex.is-centered
								.media
									.media-left
										img(src="/2_design/main/hero-3/icon-6.svg", alt="icon-6")
									.media-content
										p( v-html='$t("auto")' )
						.column.is-6-desktop.is-6-tablet.is-12-mobile
							.column-container.is-flex.is-centered
								.media
									.media-left
										img(src="/2_design/main/hero-3/icon-7.svg", alt="icon-7")
									.media-content
										p( v-html='$t("market")' )
		.section.videos( v-if="leader.videos && leader.videos.length > 0" )
			h2 {{ $t("fast_facts") }}
			.columns.is-multiline.is-flex-mobile.is-centered
				.column.is-12-mobile( v-if="video.id" v-for="(video, i) in leader.videos", :key="i" )
					client-only
						figure.image.is-16by9
							Youtube.has-ratio(:video-id="video.id" ref="youtube")
						.content
							p(v-if="video.title")
								b {{ video.title }}
							p(v-if="video.description")
								| {{ video.description }}
		.section.section-4.is-orange-bg
			.container
				.content
					h2 {{ $t(`is_multi_crypto.${comp_currency}`) }}
					.columns.is-multiline.is-flex.is-centered
						.column.is-6-desktop.is-6-tablet.is-12-mobile.text-column
							.column-container.is-flex.is-flex-column
								p {{ $t(`roy_based.${comp_currency}`) }}
						.column.is-6-desktop.is-6-tablet.is-8-mobile
							.column-container
								.columns.is-flex.is-centered
									.column.is-3
										.column-container.is-flex.is-flex-column.is-start
											img(src="/2_design/main/hero-4/img-1.png", alt="img-1")
											img(src="/2_design/main/hero-4/img-2.png", alt="img-2")
									.column.is-3
										.column-container.is-flex.is-flex-column.is-center
											img(src="/2_design/main/hero-4/img-3.png", alt="img-3")
											img(src="/2_design/main/hero-4/img-4.png", alt="img-4")
									.column.is-3
										.column-container.is-flex.is-flex-column.is-start
											img(src="/2_design/main/hero-4/img-5.png", alt="img-5")
											img(src="/2_design/main/hero-4/img-6.png", alt="img-6")
											img(src="/2_design/main/hero-4/img-7.png", alt="img-7")
									.column.is-3
										.column-container.is-flex.is-flex-column.is-center
											img(src="/2_design/main/hero-4/img-8.png", alt="img-8")
											img(src="/2_design/main/hero-4/img-9.png", alt="img-9")
					.columns.is-flex.is-multiline.is-flex.is-centered
						.column.is-12-tablet.is-12-mobile( 
							v-if='comp_currency == "pzm" || comp_currency == "all"' 
							:class='comp_currency == "all" ? "is-6-desktop" : "is-12-desktop"')
							.columns.is-flex.is-multiline.is-centered.pt-4
								.column.is-12-desktop.is-12-tablet.is-12-mobile.has-text-centered( v-if='comp_currency == "all"' )
									.column-container
										.content
											p.is-size-4.has-text-weight-bold PRIZM
								.column.is-6-tablet.is-6-mobile.has-text-centered( 
									:class='comp_currency == "all" ? "is-12-desktop" : "is-3-desktop"'
									v-for='i in 4' :key='i' )
									.column-container( :class='{ "px-6": comp_currency == "all" }' )
										SvgIcon( :name='$t(`${comp_currency == "pzm" ? "advantages" : "compare"}.pzm.${i}.icon`)' )
										p
											b {{ $t(`${comp_currency == "pzm" ? "advantages" : "compare"}.pzm.${i}.title`) }}
											br
											span( v-html='$t(`${comp_currency == "pzm" ? "advantages" : "compare"}.pzm.${i}.content`)' )
						.column.is-6-desktop.is-12-tablet.is-12-mobile( 
							v-if='comp_currency == "umi" || comp_currency == "all"'
							:class='comp_currency == "all" ? "is-6-desktop" : "is-12-desktop"' )
							.columns.is-flex.is-multiline.is-centered.pt-4
								.column.is-12-desktop.is-12-tablet.is-12-mobile.has-text-centered( v-if='comp_currency == "all"' )
									.column-container
										.content
											p.is-size-4.has-text-weight-bold UMI
								.column.is-6-tablet.is-6-mobile.has-text-centered( 
									:class='comp_currency == "all" ? "is-12-desktop" : "is-3-desktop"'
									v-for='i in 4' :key='i' )
									.column-container( :class='{ "px-6": comp_currency == "all" }' )
										SvgIcon( :name='$t(`${comp_currency == "umi" ? "advantages" : "compare"}.umi.${i}.icon`)' )
										p
											b {{ $t(`${comp_currency == "umi" ? "advantages" : "compare"}.umi.${i}.title`) }}
											br
											span( v-html='$t(`${comp_currency == "umi" ? "advantages" : "compare"}.umi.${i}.content`)' )

								
		.section.photos.is-paddingless
			slick.slider( 
				ref='slick'
				:options='slickOptions' )
				img( 
					v-for='i in 9'
					:src='`/1_design/slide-0${i}.jpg`')
		client-only
			.section.section-5.welcome#register
				.container
					h2( v-html='$t("welcome")' )
				.content.has-text-centered
					p( v-if='comp_mode !== "welcome"' v-html='$t("my_name", [leader.name])' )
					p( v-if='comp_mode !== "welcome"' v-html='$t("to_join")' )
					p( v-if='comp_mode !== "welcome"' v-html='$t("chat_bot", [comp_currency == "pzm" ? leader.ref : leader.umiRef, leader.username])' )
					p( v-if='comp_mode !== "welcome"' v-html='$t("bot_help")' )
					.columns.is-multiline.is-flex-mobile.is-vcentered.is-centered.has-text-centered.bots( v-if='comp_mode !== "welcome"' )
						.column.is-narrow.is-narrow-mobile
							a.button( :href='`https://t.me/${ comp_currency == "pzm" ? "roy_helper_bot" : "Umiroybot" }?start=${leader.username}`' target="_blank" )
								b-icon( size="is-medium" icon="telegram" )
								| {{ $t("sign_up") }}
					.content.has-text-centered( v-if='comp_mode !== "welcome"' )
						p.form-toggle {{ $t("no_messenger") }} 
							a.strong( @click='formToggle' ) {{ $t("use_form") }}
					.content.has-text-centered( v-if='form || comp_mode == "welcome"' )
						form.form( v-if='!sended' @submit.prevent='submit' )
							p( v-if='comp_mode == "welcome"' v-html='$t("my_name", [leader.name || leader.username])' )
							br
							b-field
								b-input(
									size="is-medium"
									icon="account-box"
									v-model='contact.name'
									:placeholder='$t("your_name")'
									pattern="[A-z0-9\u0400-\u04ff _-]{0,32}"
									:validation-message='$t("name_valid")'
									required)
							b-field
								b-input(
									size="is-medium"
									min="8"
									icon="phone"
									v-model='contact.phone'
									:placeholder='$t("phone_number")'
									pattern="(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})"
									:validation-message='$t("phone_valid")')
							b-field
								b-input(
									size="is-medium"
									icon="email"
									placeholder="Email"
									v-model='contact.email'
									pattern="^.+@.+\..+$"
									:validation-message='$t("email_valid")'
									required)
							hr
							b-field
								b-input(
									size="is-medium"
									type="textarea"
									v-model='contact.comment',
									:placeholder='$t("comment")')
							b-field
								button.button.is-medium(
									type="submit"
									:class='{ "is-loading": loading }') {{ $t("send") }}
						.content.has-text-centered( v-else )
							p.is-size-3.has-text-weight-bold {{ $t("thanks") }}
				.block( v-if='leader.socials.instagram || leader.socials.vk || leader.socials.whatsapp || leader.socials.viber || leader.socials.skype || leader.socials.telegram' )
					p {{ $t("questions") }}
					.block.socials
						a(v-if='leader.socials.telegram' :href='`https://t.me/${leader.socials.telegram}/`' target="_blank")
							b-icon.telegram(icon="telegram" size="is-medium")

						a(v-if='leader.socials.instagram' :href='`https://instagram.com/${leader.socials.instagram}/`' target="_blank")
							b-icon.instagram(icon="instagram" size="is-medium")

						a(v-if='leader.socials.vk' :href='`https://vk.com/${leader.socials.vk}/`' target="_blank")
							b-icon.vk(icon="vk" size="is-medium")

						a(v-if='leader.socials.whatsapp' :href='`https://wa.me/${leader.socials.whatsapp}/`' target="_blank")
							b-icon.whatsapp(icon="whatsapp" size="is-medium")

						a(v-if='leader.socials.viber' :href='`viber://add?number=${leader.socials.viber}`' target="_blank")
							b-icon.viber(pack="fab" icon="viber" size="is-medium")

						a(v-if='leader.socials.skype' :href='`Skype:${leader.socials.instagram}?chat`' target="_blank")
							b-icon.skype(icon="skype" size="is-medium")
					p
						b.user-agree
							UserAgreement
	.hero-foot
		.container
			.columns
				.column.is-12.has-text-centered
					.column-container
						p
							| &copy; ROY CLUB {{ moment().format("YYYY") }}
</template>

<script>
import moment from 'moment'

import { mapActions } from 'vuex'
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default {
	name: "SecondLanding",
	components: { Slick },
	props: ["leader", "lang", "mode", "currency"],
	data() {
		return {
			loading: false,
			sended: false,
			form: false,
			moment: moment,
			contact: {},
			slickOptions: {
				lasyLoad: 'progressive',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        cssEase: 'linear',
        speed: 1000,
        autoplay: 5000,
        infinite: true,
        responsive: [
          {
            breakpoint: 1396,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 1202,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2
            }
          },
          {
            lasyLoad: 'progressive',
            breakpoint: 600,
            settings: {
              slidesToShow: 1
            }
          },
          {
            lasyLoad: 'progressive',
            breakpoint: 480,
            settings: {
              slidesToShow: 1
            }
          }
        ]
			}
		}
	},
	computed: {
		comp_currency() {
			return this.currency || this.leader.bot
		},
		comp_mode() {
			return this.mode || this.leader.mode
		}
	},
	methods: {
		...mapActions('contacts', ['createContact']),
		formToggle() {
			this.form = !this.form
		},
		scroll (target = '#register') {
      document.querySelector(target).scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
		submit() {
			let contact = this.contact
			let params = {
        leader_id: this.leader._id,
        name: contact.name ? contact.name : this.$t('unknown'),
        phone: contact.phone ? contact.phone : null,
        email: contact.email ? contact.email : null,
				comment: contact.comment ? contact.comment : null,
				bot: this.leader.bot,
        stage: -1
      }
			this.loading = true

			this.createContact(params)
				.then(() => {
					this.loading = false
					this.sended = true
				})
		}
	},
	mounted() {
		let props = ['lang', 'mode', 'currency']
		for (let prop of props) {
			this.leader[prop] = this[prop] ? this[prop] : this.leader[prop]
		}
		if (this.lang) this.$i18n.setLocale(this.lang)
	}
}
</script>

<style>
	.section-5 .socials .mdi-instagram::before {
		background: radial-gradient(circle at 30% 107%,#fdf497 0,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 90%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>

<style lang="scss" scoped>
	@font-face {
		font-family: 'Gotham Pro';
		src: url('~/assets/fonts/GothamPro/GothamPro-Black.eot');
		src: local('Gotham Pro Black'), local('GothamPro Black'),
			url('~/assets/fonts/GothamPro/GothamPro-Black.eot?#iefix') format('embedded-opentype'),
			url('~/assets/fonts/GothamPro/GothamPro-Black.woff') format('woff'),
			url('~/assets/fonts/GothamPro/GothamPro-Black.ttf') format('truetype');
		font-weight: 900;
		font-style: normal;
	}

	@font-face {
		font-family: 'Gotham Pro';
		src: url('~/assets/fonts/GothamPro/GothamPro-Bold.eot');
		src: local('Gotham Pro Bold'), local('GothamPro-Bold'),
			url('/assets/fonts/GothamPro-Bold.eot?#iefix') format('embedded-opentype'),
			url('~/assets/fonts/GothamPro/GothamPro-Bold.woff') format('woff'),
			url('~/assets/fonts/GothamPro/GothamPro-Bold.ttf') format('truetype');
		font-weight: bold;
		font-style: normal;
	}
	@font-face {
		font-family: 'Gotham Pro';
		src: url('~/assets/fonts/GothamPro/GothamPro.eot');
		src: local('Gotham Pro'), local('GothamPro'),
			url('~/assets/fonts/GothamPro/GothamPro.eot?#iefix') format('embedded-opentype'),
			url('~/assets/fonts/GothamPro/GothamPro.woff') format('woff'),
			url('~/assets/fonts/GothamPro/GothamPro.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}

	/* common style */
	div {
		font-family: 'Gotham Pro';
	}
	h1 {
		font-size: 3.3rem;
		font-weight: 900;
	}
	h1 +span {
		font-size: 1.5rem;
	}
	h2 {
		font-size: 2.3rem;
		font-weight: 900;
		text-align: center;

		margin-top: 1rem;
		margin-bottom: 3rem;
	}
	span:not(.icon) {
		font-size: 1.3rem;
	}
	p {
		font-size: 1.125rem;
	}
	.column-container {
		height: 100%;
	}
	.is-orange-bg {
		background-color: #FF8664;
	}
	.is-orange-bg *:not(.button) {
		color: #fff;
	}
	.is-flex-column {
		flex-direction: column;
		justify-content: center;
	}
	.is-hidden {
		display: none!important;
	}
	.media+.media {
		border-top: none;
	}
	.media-content {
		overflow: visible;
	}
	.button {
		font-size: 1.25rem;
		font-weight: 600;
		line-height: 19px;
		color: #fff;

		box-sizing: content-box;
		padding: 0.3rem 4rem;
		margin: 0 auto;
		width: fit-content;
		background-color: #FF8664;

		border-radius: 100px;
		border: 2px solid #FF8664;

		transition: all .3s ease-in-out;
	}
	.button span.icon {
		margin-right: 1rem!important;
	}
	.button:hover {
		color: #ff8664;
		background-color: #fff;
		border-color: #ff8664;
	}

	/* header style */
	.hero-head .container {
		width: 100%;
		max-width: 100%;
		min-width: 100%;
	}
	.hero-head .column {
		background: linear-gradient(246.06deg, #FFC483 0%, #FF635A 100%);

		position: relative;

		overflow: hidden;
	}
	.hero-head .column:not(.title-column):not(.pref-column) .column-container {
		padding: 29% 0;
	}
	.hero-head img:not(.logo):not(.pref-img) {
		position: absolute;
		top: -50%;
		right: -50%;
		bottom: -50%;
		left: -50%;

		margin: auto;
	}
	.hero-head .is-height img:not(.pref-img) {
		height: 114%;
		width: unset;
		max-width: unset;
		min-width: unset;
	}
	.hero-head .is-width img:not(.pref-img) {
		height: unset;
		width: 100%;
		max-width: 100%;
		min-width: 100%;
	}
	.hero-head .column:first-of-type img.logo {
		width: 6rem;
		height: unset;

		position: absolute;
		top: 1rem;
		left: 1rem;
	}
	.hero-head .pref-column .column-container {
		padding: 1rem 1.5rem;
	}
	.hero-head .pref-column img {
		width: 3.125rem;
		height: unset;
		margin-right: 0.8rem;
	}

	/* main hero style */
	.section-1 p {
		text-align: center;
	}
	.section-1 h2+p {
		margin-bottom: 3rem;
	}
	.section-1 .column img {
		height: 3rem;
		margin-bottom: 1rem;
	}
	.section-1 .column p {
		padding: 0 4%;
	}

	.section-2 span+p {
		margin: 2rem auto 3rem;
		padding: 0 15%;
	}
	.section-2 iframe {
		width: 50rem;
		height: 30rem;
		margin: 0 auto 3rem;

		border-radius: 4px;
	}

  .section.videos,
	.section-3 {
		background-color: #F5F5F5;
	}
	.section-3 .container {
		width: 66rem;
		margin: 0 auto;
	}
	.section-3 img {
		max-width: 2.75rem;
	}

	.section-4 h2 {
		margin-bottom: 4rem;
	}
	.section-4 .is-start {
		justify-content: flex-start;
	}
	.section-4 .is-center {
		justify-content: center;
	}
	.section-4 img {
		width: 100%;
		height: unset;
		border-radius: 12px;
	}
	.section-4 img+img {
		margin-top: 1rem;
	}
	.section-4 .columns+.columns {
		margin-top: 2rem;
	}
	.section-4 .columns svg {
		height: 3.5rem;
		width: unset;
		max-width: 100%;
		margin-bottom: .5rem;
	}
	.section-4 .columns+.columns p {
		font-size: 1rem;
	}
	.section-4 .columns+.columns p > span {
		font-size: 1rem;
	}

	.section.videos .content {
		margin-top: 1rem;
	}

	.photos::v-deep {
		.slick-arrow {
			&::before {
				font-size: 2rem;
			}
			&.slick-prev {
				left: 1rem;
			}
			&.slick-next {
				right: 1rem;
			}
		}
	}

	.section-5 p {
		text-align: center;
	}
	.section-5 form {
		width: 39rem;
		margin: 0 auto;
	}
	.section-5 .button {
		margin: 2rem auto 3rem;
	}
	.section-5 .form-toggle a,
	.section-5 .user-agree {
		font-weight: normal;
		text-decoration: underline;
		color: #ff8664;
		cursor: pointer;
	}
	.section-5 hr {
		background-color: rgba(0,0,0,0.1);
	}
	.section-5 .socials {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.section-5 .socials a {
		margin: 0 .5rem;
	}
	.section-5 .socials .telegram {
		color: #0088cc
	}
	.section-5 .socials .vk {
		color: #45668e
	}
	.section-5 .socials .whatsapp {
		color: #075e54
	}
	.section-5 .socials .icon.viber {
		color: #7360f2;
		height: 2rem;
		width: 2rem;
	}
	.section-5 .socials .skype {
		color: #00aff0
	}

	/* plugins style */
	.modal-card {
		width: 60%;
	}

	/* responsive */
	@media screen and (min-width: 1024px) {
		.is-block-desktop {
			display: block!important;
		}
	}
	@media screen and (max-width: 1200px) {
		.modal-card {
			width: 70%;
		}
	}
	@media screen and (max-width: 1024px) {
		.hero-head .pref-column span {
			font-size: 1rem;
		}
		.hero-head .pref-column img {
			width: 2.5rem;
		}
		.section-2 iframe {
			width: 100%;
		}
		.section-3 .container {
			width: 100%;
		}
	}
	@media screen and (max-width: 960px) {
		.section-5 form {
			width: 100%;
		}
	}
	@media screen and (max-width: 650px) {
		.modal-card {
			width: 90%;
		}
		.section-2 iframe {
			height: 20rem;
		}
	}
	@media screen and (max-width: 500px) {
		h1 {
			font-size: 1.5rem;
		}
		.hero-head .column:first-of-type img.logo {
			width: 4rem;
		}
		.hero-head .pref-column span {
			font-size: 0.8rem;
		}
		.hero-head .pref-column img {
			width: 1.8rem;
			height: unset;

			margin-right: 0.3rem;
		}
	}
</style>

<style>
	.slick-prev {
		left: 2rem;
	}
	.slick-next {
		right: 2rem;
	}
	.slick-prev, .slick-next {
		width: 3rem;
		height: 3rem;
		z-index: 1;
	}
	.slick-prev:before, .slick-next:before {
		font-size: 3rem
	}
</style>
