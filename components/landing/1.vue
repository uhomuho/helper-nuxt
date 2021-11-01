<i18n src="~/locales/landings/1.json"></i18n>

<template lang="pug">
#1_st

	section.section.main-hero
		//- b-dropdown.lang-selector.is-pulled-right(position="is-bottom-left" aria-role="menu")
			a(class="navbar-item", slot="trigger", role="button")
				SvgIcon(:name="$translate.current")
				b-icon(icon="menu-down")

			b-dropdown-item(@click="setLang('ru')" aria-role="menuitem")
				SvgIcon(name="ru")
				|  Русский
			b-dropdown-item(@click="setLang('en')" aria-role="menuitem")
				SvgIcon(name="en")
				|  English
			b-dropdown-item(@click="setLang('es')" aria-role="menuitem")
				SvgIcon(name="es")
				|  Español
		.is-clearfix
		.container
			.columns.is-vcentered
				.column.has-text-centered-mobile.is-6.is-7-desktop
					SvgIcon.logo(name="logo")
					h1.title {{ $t('welcome') }}
					h2.subtitle {{ $t(`earn.${comp_currency}`) }}
					.has-text-centered-mobile
						.button.is-large.is-pink(@click='scroll()' ) {{ $t("start_making") }}
						.button.is-large.is-pink.transparent(@click='scroll("#opportunities")' ) {{ $t("learn_more") }}
				.column.is-hidden-mobile.with-image
					img.fullwidth(src="~/assets/img/1_design/illustration_dollar.png")

	section.section.features
		.container
			.columns.is-multiline.is-flex-mobile.is-variable.is-8
				.column.is-4.is-6-mobile
					SvgIcon(name="stable_icon")
					.feature-title {{ $t("sustainable_income") }}
					p {{ $t(`earn.${comp_currency}`) }}
				.column.is-4.is-6-mobile
					SvgIcon(name="freedom_icon")
					.feature-title {{ $t("freedom") }}
					p {{ $t("dont_work") }}
				.column.is-4.is-6-mobile
					SvgIcon(name="happiness_icon")
					.feature-title {{ $t("happiness") }}
					p {{ $t("in_harmony") }}
				.column.is-4.is-6-mobile
					SvgIcon(name="growth_icon")
					.feature-title {{ $t("development") }}
					p {{ $t("learn_something") }}
				.column.is-4.is-6-mobile
					SvgIcon(name="future_icon")
					.feature-title {{ $t("future") }}
					p {{ $t("change_world") }}
				.column.is-4.is-6-mobile
					SvgIcon(name="charity_icon")
					.feature-title {{ $t("helping_others") }}
					p {{ $t("take_part") }}

	section.section.opportunities.with-title(id="opportunities")
		.container
			h2 {{ $t("new_opp") }}
			.columns.is-multiline.is-flex-mobile.is-variable.is-8.is-vcentered.is-centered
				.column.is-5.is-6-mobile.is-5-tablet
					img(src="~/assets/img/1_design/opp_illustration.png")
				.column.content.is-12-mobile
					p( v-html='$t("what_roy")' )
					p( v-html='$t("our_priority")' )
					p( v-html='$t("next_goal")' )
					p( v-html='$t("roy_future")' )

			p.has-text-centered
				a.button.is-large.is-blue(@click='scroll()' ) {{ $t("start_making") }}

	section.section.about.with-title
		.container
			h2 {{ $t("roy_is") }}
			.columns.is-multiline.is-flex-mobile.is-vcentered.is-centered.is-variable.is-3
				.column.is-6.is-12-mobile
					.columns.is-vcentered.is-flex-mobile
						.column.is-narrow.is-narrow-mobile
							SvgIcon(name="dollar_icon")
						.column {{ $t("start_invest") }} 
				.column.is-6.is-12-mobile
					.columns.is-vcentered.is-flex-mobile
						.column.is-narrow.is-narrow-mobile
							SvgIcon(name="mining_icon")
						.column {{ $t(`joint.${leader.bot}`) }}
				.column.is-6.is-12-mobile
					.columns.is-vcentered.is-flex-mobile
						.column.is-narrow.is-narrow-mobile
							SvgIcon(name="ref_bonus_icon")
						.column {{ $t("9_level") }}
				.column.is-6.is-12-mobile
					.columns.is-vcentered.is-flex-mobile
						.column.is-narrow.is-narrow-mobile
							SvgIcon(name="icome_icon")
						.column {{ $t("working_more") }}

			p.has-text-centered.is-red {{ $t("community") }}

	section.section.videos.with-title( v-if="leader.videos && leader.videos.length > 0" )
		.container
			h2 {{ $t("fast_facts") }}
			.columns.is-multiline.is-flex-mobile.is-centered
				.column.is-12-mobile(v-if="video.id" v-for="(video, i) in leader.videos", :key='i')
					figure.image.is-16by9
						Youtube.has-ratio(:video-id="video.id" ref="youtube")
					.content
						p(v-if='video.title')
							b {{ video.title }}
						p(v-if='video.description') {{ video.description }}

	section.section.prizm.with-title
		.container
			h2 {{ $t(`we_use.${comp_currency}`) }}
			.columns.is-multiline.is-flex-mobile.is-vcentered.is-centered.is-variable.is-3( v-if='comp_currency == "umi" || comp_currency == "all"' )
				.column.is-narrow.has-text-centered.is-6-mobile.is-5-tablet
					img.fullwidth( src="~/assets/img/1_design/umi_illustration.png" )
				.column.content.is-12-mobile
					p.is-green( v-for='i in 4' )
						b.is-inline {{ $t(`advantages.umi.${i}.title`) }} 
						| {{ $t(`advantages.umi.${i}.subtitle`) }}
			.columns.is-multiline.is-flex-mobile.is-vcentered.is-centered.is-variable.is-3( v-if='comp_currency == "pzm" || comp_currency == "all"' )
				.column.content.is-12-mobile
					p( v-for='i in 5' )
						b.is-inline {{ $t(`advantages.pzm.${i}.title`) }} 
						| {{ $t(`advantages.pzm.${i}.subtitle`) }}
				.column.is-narrow.has-text-centered.is-6-mobile.is-5-tablet
					img.fullwidth( src="~/assets/img/1_design/pzm_illustration.png" )
					br
					img.is-hidden-mobile(src="~/assets/img/1_design/prizm.png" style='max-width: 260px')
	section.section.communicate.with-title.with-slider
		.container
			h2 {{ $t("roy_unites") }}
		slick.slider( 
			ref='slick'
			:options='slickOptions' )
			img( 
				v-for='i in 9'
				:src='`/1_design/slide-0${i}.jpg`')
	section.section.welcome.with-title#to_register
		.container
			h2 {{ $t("welcome") }}
		.content.has-text-centered
			p( v-if='comp_mode !== "welcome"' v-html='$t("my_name", [`${leader.name || leader.username}`])' )
			p( v-if='comp_mode !== "welcome"' v-html='$t("to_join")' )
			p( v-if='comp_mode !== "welcome"' v-html='$t("chat_bot", [comp_currency == "pzm" ? leader.ref : leader.umiRef, leader.username])' )
			p( v-if='comp_mode !== "welcome"' v-html='$t("bot_help")' )
			.columns.is-multiline.is-flex-mobile.is-vcentered.is-centered.has-text-centered.bots( v-if='comp_mode !== "welcome"' )
				.column.is-narrow.is-narrow-mobile
					a.button( :href='`https://t.me/${ comp_currency == "pzm" ? "roy_helper_bot" : "Umiroybot" }?start=${leader.username}`' target="_blank" )
						b-icon( size="is-medium" icon="telegram" )
						| {{ $t("sign_up") }}
			.content.has-text-centered( v-if='comp_mode !== "welcome"' )
				p {{ $t("no_messenger") }} 
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
							pattern="^.+@.+\..+$"
							:validation-message='$t("email_valid")'
							v-model='contact.email'
							required)
					hr
					b-field
						b-input(
							size="is-medium"
							type="textarea"
							v-model='contact.comment',
							:placeholder='$t("comment")')
					b-field
						button.button.is-warning.is-fullwidth.is-medium(
							type="submit"
							:class='{ "is-loading": loading }') {{ $t("send") }}
				.content.has-text-centered( v-else )
					p.is-size-3.has-text-weight-bold {{ $t("thanks") }}
	footer.footer.has-text-centered
		a.has-text-white.modal-button.is-size-6(data-target="modal-agreement" )
			UserAgreement
		br
		| © roy.support {{ moment().format("YYYY") }}
</template>

<script>
import moment from 'moment'

import { mapActions } from 'vuex'
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default {
	name: "FirstLanding",
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
		scroll (target = '#to_register') {
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
	.welcome .socials .mdi-instagram::before {
		background: #fff;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.welcome .socials .icon.viber .fa-2x {
		font-size: 36px;
	}
</style>

<style lang="scss" scoped>
	.prizm .is-green b {
			color: #0ed127;
	}
	/* @import "~/assets/fonts/GothamPro/stylesheet.css"; */
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
      url('~/assets/fonts/GothamPro/GothamPro-Bold.eot?#iefix') format('embedded-opentype'),
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

  /* Common */

	section::v-deep {
		iframe {
			width: 100%;
		}
	}

  section {
    font-family: 'Gotham Pro';
    color: #000;
    padding: 3rem 1.5rem;
		&.main-hero {
			padding-top: 1.5rem;
		}
		&.with-slider {
			padding-bottom: 0;
			h2 {
				padding-bottom: 0;
			}
			.slider {
				margin-left: -1.5rem;
				margin-right: -1.5rem;
				margin-bottom: 0;
				img {
					display: block !important;
					line-height: 0;
				}
			}
		}
  }

  @media screen and (min-width: 1216px) {
    .features .container,
    .opportunities .container,
    .about .container {
      max-width: 1024px;
    }
  }

  b, .strong {
    font-weight: 900;
  }

  .modal-card-body {
    padding: 20px;
  }

  /* Main hero */

  .logo {
    margin-top: 1.5rem;
    width: 90px;
    height: 90px;
    margin-bottom: 2.5rem;
  }
  h1.title {
    font-size: 4rem;
    font-weight: 900;
    color: #005ABC;
    padding-bottom: 1.5rem;
  }
  h2 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 2.75rem;
    color: #000;
  }
  .main-hero {
		.button {
			margin: 0.75rem;
		}
		.with-image {
			padding: 0;
		}
	}

  /* Buttons */

  .button {
		&.is-large {
			font-size: 1rem;
			font-weight: bold;
			height: 3.5rem;
			padding: 1px 3rem 0;
			border: 2px solid transparent;
			border-radius: 2rem;
			color: #fff;
			background-color: #fff;
			transition: all .3s ease-in-out;
		}
		&.is-white {
			background-color: #FFFFFF;
			color: #000000;
			&:hover {
				background-color: #000000;
				color: #FFFFFF;
			}
		}
		&.is-pink {
			background-color: #EB4F5C;
			border-color: #EB4F5C;
			&:hover {
				color: #EB4F5C;
				background-color: transparent;
			}
		}
		&.transparent {
			color: #EB4F5C;
			background-color: transparent;
			&:hover {
				color: #fff;
				background-color: #EB4F5C;
			}
		}
		&.is-blue {
			background-color: #005ABC;
			border-color: #005ABC;
			&:hover {
				background-color: transparent;
				color: #005ABC
			}
		}
		&.is-purple {
			background: #9933CC;
			border-color: #9933CC;
			&:hover {
				color: #9933CC;
				background-color: transparent;
			}
		}
	}

  /* Features */

  .features {
		svg {
			width: 80px;
			height: 80px;
			margin-bottom: 0.75rem;
		}
		p {
			font-size: 1rem;
			margin-bottom: 1.5rem;
		}
	}
  .feature-title {
    font-weight: 900;
    font-size: 1.375rem;
  }

  /* Opportunities */

  .with-title {
		h2 {
			font-size: 3rem;
			line-height: 1.2;
			font-weight: 900;
			text-align: center;
			margin-bottom: 2rem;
			max-width: 45rem;
			margin-left: auto;
			margin-right: auto;
		}
	}
  .section .container > p {
    margin-top: 1.5rem;
  }

  .opportunities {
		h2 {
			color: #005ABC;
		}
	}

  /* About */

  .about {
		.columns {
			&>.column {
				margin-bottom: 1rem;
			}
		}
		svg {
			width: 3rem;
			height: 3rem;
		}
	}
  .is-red {
    font-size: 1.625rem;
    color: #EB4F5C;
    line-height: 1.4;
    margin-bottom: 2.25rem;
    font-weight: 900;
  }

  /* Videos */

  .videos {
    background-color: #005abc;
    color: #fff;
		h2 {
			color: #FFD463;
		}
		p {
			font-size: 120%;
			margin-bottom: 0.5rem;
		}
		.content {
			margin-top: 1rem;
			padding-left: 1rem;
			padding-right: 1rem;
		}
  }

  /* Prizm */

  .prizm b {
    color: #9933CC;
    display: block;
  }

  /* Welcome */
  .footer,
  .welcome {
    background-color: #005ABC;
    color: #FFFFFF;
    font-size: 120%;
  }
  .welcome a {
    color: #FFFFFF;
  }
  .footer a,
  .welcome a.strong {
    text-decoration: underline;
  }
  .welcome h2 {
    color: #FFD463;
  }
  .welcome .content {
    max-width: 40rem;
    margin: 3.5rem auto;
  }
  .welcome .disabled, .welcome .disabled * {
    cursor: not-allowed;
    opacity: .5;
  }
  .welcome .bots .button {
    background-color: rgba(0,0,0,.15);
    color: #FFFFFF;
    border-color: #FFFFFF;
    width: 100%;
    padding: 2px 2rem 0;
    transform: scale(1.3);
  }
  .welcome .bots .button:hover {
    background-color: transparent;
  }
  .welcome .button .icon:first-child:last-child {
    margin-right: .75em;
  }

	.communicate::v-deep {
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

  .footer {
    padding: 3rem;
  }

  .callback {
    margin-top: 4rem;
  }

  .welcome .content form {
    max-width: 25rem;
    margin: 2.5rem auto 1.5rem;
  }

	.welcome .socials {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 1rem;
	}
	.welcome .socials a {
		margin: 0 .5rem;
	}
	.welcome .socials .telegram {
		/* color: #0088cc */
		color: #fff
	}
	.welcome .socials .vk {
		/* color: #45668e */
		color: #fff
	}
	.welcome .socials .whatsapp {
		/* color: #075e54 */
		color: #fff
	}
	.welcome .socials .icon.viber {
		/* color: #7360f2; */
		color: #fff;
		height: 2rem;
		width: 2rem;
	}
	.welcome .socials .skype {
		/* color: #00aff0 */
		color: #fff
	}

</style>

<style>
  /* Slick */
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

  .lang-selector {
    z-index: 5;
  }
  .lang-selector .dropdown-item {
    padding: 0.375rem 1rem;
  }
  .lang-selector .dropdown-item .svg-icon {
    vertical-align: bottom;
    margin-right: 0.375rem;
  }
  .lang-selector .dropdown-menu {
    min-width: auto
  }

  /*.welcome .columns a .icon {
    font-size: 6rem;
    height: 6rem;
    width: 6rem;
    line-height: 6rem;
  }*/
  /*.welcome .columns a i {
    transition: all .6s;
  }*/
  /*.welcome .columns a i:before {
    font-size: 6rem;
  }*/
  /*.welcome .columns a:hover {
    color: #FFF;
  }
  .welcome .columns a:hover i {
    transform: scale(1.3)
  }*/
  .welcome .viber {
    width: 5rem;
    height: 5rem;
  }
  .welcome .content form .help {
    color: white !important;
  }
</style>
