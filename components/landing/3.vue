<i18n src="~/locales/landings/2.json"></i18n>

<template lang="pug">
#3_rd.hero.main
	img.bg( src="~/assets/sprite/svg/header-wave.svg" )
	.mobile-background
	header.hero-head
		.container
			.section
				nav.navbar
					.navbar-brand
						.navbar-item
							span.icon
								SvgIcon( name="logo_dark" )
							span {{ $t("roy_club") }}
					.navbar-menu
						.navbar-end
							.socials.is-flex
								a(
									v-for='({ icon, link }, i) in socials'
									:key='i'
									:href='link'
									target="_blank")
									SvgIcon( :name='icon' )
	.hero.hello.has-bg
		img.bg.is-hidden-mobile( src="~/assets/img/3_design/header-bg.png" )
		.container
			.section
				.columns.is-flex
					.column.is-6-desktop.is-6-tablet.is-12-mobile
						.column-container.content
							h1( v-html='$t("welcome")' )
							.media( v-for='(advantage, i) in advantages' :key='i' )
								.media-left
									SvgIcon( name="tick_square" )
								.media-content
									p {{ advantage }}
							.button( @click='scroll' ) {{ $t("join") }}
				img.is-hidden-tablet( src="~/assets/img/3_design/header-bg-mobile.png" )
	.hero.is-people.has-bg
		.bg.left
			SvgIcon( name="is_people-bg_left" )
		.bg.right
			SvgIcon( name="is_people-bg_right" )
		.container
			.section
				.content
					.flag.is-orange.is-marginless {{ $t("community") }}
					h2( v-html='$t("is_people")' )
					p( v-html='$t("social_project")' )
				.columns.is-flex.is-multiline.is-centered.is-variable.is-7
					.column.is-4-desktop.is-6-tablet.is-12-mobile( v-for='({ content, icon }, i) in is_people' )
						.column-container.media
							.media-left
								.wrapper
									SvgIcon( :name='icon' )
							.media-content
								p( v-html='content' )
	.hero.slider.has-bg
		img.bg( src="~/assets/sprite/svg/slider-wave.svg" )
		.section.is-paddingless
			client-only
				slick.slider( 
					ref='slick'
					:options='slickOptions' )
						.wrapper( v-for='i in 14' )
							img( :src='`/3_design/slider/${i}.jpg`' alt="slick-slide")
	.hero.multiple
		.container
			.section
				.columns.is-flex.is-multiline.is-centered.is-variable.is-1
					.column.is-5-desktop.is-6-tablet.is-12-mobile
						.column-container.content.is-marginless
							.flag.is-blue.is-marginless {{ $t("availability") }}
							h2 {{ $t("is_multi_alt") }}
							p {{ $t("free_learn_alt") }}
						.button( @click='scroll' ) {{ $t("join_alt") }}
					.column.is-7-desktop.is-6-tablet.is-12-mobile
						.column-container
							img( src="~/assets/sprite/svg/map.svg" )
							img.circle.left( src="~/assets/sprite/svg/left-circle.svg" )
							img.circle.top( src="~/assets/sprite/svg/top-circle.svg" )
							img.circle.bottom( src="~/assets/sprite/svg/bottom-circle.svg" )
	.hero.crypto
		.container
			.section
				.columns.is-flex.is-multiline
					.column.is-6-desktop.is-6-tablet.is-12-mobile
						.column-container
							img( src="~/assets/sprite/svg/crypto_square.svg" )
					.column.is-6-desktop.is-6-tablet.is-12-mobile
						.column-container 
							.content
								.flag.is-red.is-marginless {{ $t("tech") }}
								h2( v-html='$t("is_crypto")' )
								p {{ $t(`based_on.${comp_currency}`) }}
								p {{ $t("we_together") }}
	.hero.compare
		.container
			.section
				.columns.is-flex.is-multiline( :class='{ "not_all": comp_currency !== "all" }' )
					.column.is-12-tablet.is-12-mobile(
						v-for='(currency, i) in ["umi", "pzm"]'
						:key='i'
						v-if='comp_currency == "all" || currency == comp_currency'
						:class='comp_currency == "all" ? `is-6-desktop ${currency}` : `is-12-desktop ${currency}`' )
						img.curr( :src='require(`~/assets/sprite/svg/${currency}.svg`)' )
						.column-container
							.content
								h3 {{ currency == "umi" ? "UMI" : "PRIZM" }}
							.columns.is-flex.is-multiline
								.column.is-6-tablet.is-12-mobile(
									v-for='i in 4'
									:class='comp_currency == "all" ? "is-12-desktop" : "is-6-desktop"')
									.media
										.media-left
											.wrapper
												SvgIcon( :name='$t(`compare.${currency}.${i}.icon`) + `_${currency}`' )
										.media-content
											p.title {{ $t(`compare.${currency}.${i}.title`) }}
											p.subtitle( v-html='$t(`compare.${currency}.${i}.content`)' )
								.column.is-12-desktop.is-12-tablet.is-12-mobile.has-text-centered
									.button( @click='scroll' ) {{ $t(`compare.${currency}.button`) }}
	.hero.fast-facts.has-bg( v-if='leader.videos && leader.videos.length > 0' )
		img.bg( src="~/assets/sprite/svg/fast_facts_bg.svg" )
		.container
			.section
				.content.has-text-centered
					h2 {{ $t("fast_facts") }}
				.columns.is-flex.is-multiline.is-centered
					.column.is-6-desktop.is-12-tablet.is-12-mobile(
						v-for='({ id, title, description }, i) in leader.videos'
						:key='i'
						@click='videoModal(id, title)')
						img( :src='`https://i3.ytimg.com/vi/${id}/maxresdefault.jpg`' )
						img.play( src="~/assets/sprite/svg/play.svg" )
	.hero.capabilities.has-bg
		img.bg.left( src="~/assets/sprite/svg/capabilities_bg_left.svg" )
		img.bg.right( src="~/assets/sprite/svg/capabilities_bg_right.svg" )
		.container
			.section
				.content.has-text-centered
					h2( v-html='$t("is_opportune")' )
				.columns.is-flex.is-multiline.is-centered
					.column.is-3-desktop.is-4-tablet.is-6-mobile(
						v-for='({ title, icon }, i) in capabilities'
						:key='i')
						.column-container
							.image-wrapper
								SvgIcon( :name='icon' )
							p( v-html='title' )
	.hero.join
		.container
			.section
				.content.has-text-centered
					h2( v-html='$t("join_roy")' )
					.button( @click='scroll' ) {{ $t("join") }}
	client-only
		.hero.welcome.has-bg#welcome
			img.bg( src="~/assets/sprite/svg/welcome_wave.svg" )
			.container
				.section
					.content.has-text-centered
						h2.has-text-weight-normal {{ $t("hello") }}
					.columns.is-flex.is-multiline.is-centered.is-mobile( v-if='comp_mode !== "welcome"' )
						.column.is-4-desktop.is-6-tablet.is-12-mobile( v-for='(text, i) in instructions' :key='i' )
							.column-container
								.number 
									p {{ i+1 }}
								p( v-html='text' )
						.column.is-12
							.column-container.has-text-centered
								a.button( :href='`https://t.me/${ comp_currency == "pzm" ? "roy_helper_bot" : "Umiroybot" }?start=${leader.username}`' target="_blank" )
									span.icon
										SvgIcon( name="plane" )
									span {{ $t("sign_up") }}
					.form-wrapper
						.content.has-text-centered( v-if='!sended' )
							p( v-if='comp_mode !== "welcome"' ) {{ $t("no_messenger") }} {{ $t("use_form") }}
							p( v-else v-html='$t("my_name", [leader.name || leader.username])' )
						b-collapse.card( animation="slide" v-if='comp_mode !== "welcome" && !sended' :open='false' )
							template( #trigger='props' )
								.card-header( role="button" )
									.card-header-title
										span {{ $t("form") }}
									p.card-header-icon.is-pulled-right
										b-icon( pack="fas" :icon='props.open ? "angle-down" : "angle-up"' )
							.card-content
								form.form( @submit.prevent='submit' )
									b-field.name( :label='$t("your_name")' )
										b-input(
											v-model='contact.name'
											pattern="[A-z0-9\u0400-\u04ff _-]{0,32}"
											:validation-message='$t("name_valid")'
											required)
									b-field( :label='$t("phone_number")' )
										b-input(
											v-model='contact.phone'
											pattern="(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})"
											:validation-message='$t("phone_valid")')
									b-field( :label='$t("your_email")' )
										b-input(
											v-model='contact.email'
											pattern="^.+@.+\..+$"
											:validation-message='$t("email_valid")'
											required)
									b-field( :label='$t("comment")' )
										b-input( 
											type="textarea"
											v-model='contact.comment'
											:placeholder='$t("input_comment")' )
									b-field.has-text-centered
										.control
											button.button( :class='{ "is-loading": loading }' ) {{ $t("send") }}
						.card( v-else-if='!sended' )
							.card-header
								.card-header-title
									span {{ $t("form") }}
							.card-content
								form.form( @submit.prevent='submit' )
									b-field.name( :label='$t("your_name")' )
										b-input(
											v-model='contact.name'
											pattern="[A-z0-9\u0400-\u04ff _-]{0,32}"
											:validation-message='$t("name_valid")'
											required)
									b-field( :label='$t("phone_number")' )
										b-input(
											v-model='contact.phone'
											pattern="(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})"
											:validation-message='$t("phone_valid")')
									b-field( :label='$t("your_email")' )
										b-input(
											v-model='contact.email'
											pattern="^.+@.+\..+$"
											:validation-message='$t("email_valid")'
											required)
									b-field( :label='$t("comment")' )
										b-input( 
											type="textarea"
											v-model='contact.comment'
											:placeholder='$t("input_comment")' )
									b-field
										.control
											button.button( :class='{ "is-loading": loading }' ) {{ $t("send") }}
						.card( v-else )
							.card-header
								.card-header-title {{ $t("thanks") }}
	client-only
		footer.hero-foot
			.container
				.section( v-if='has_socials' )
					.columns.is-flex.is-multiline.is-centered
						.column.is-6-desktop.is-6-tablet.is-12-mobile
							.column-container.has-text-left
								p {{ $t("questions") }}
						.column.is-6-desktop.is-6-tablet.is-12-mobile.has-text-right
							.column-container.socials
								a(
									v-for='({ icon, link }, i) in leader_socials'
									v-if='link'
									:key='i'
									:href='link'
									target="_blank")
									SvgIcon( :name='icon'
									fill="#F29811" )
			.columns.is-flex.is-multiline.is-centered.is-marginless
				.column.is-6-desktop.is-6-tablet.is-12-mobile
					.column-container.has-text-right
						p {{ moment().format("YYYY") }} &copy; {{ $t("rights") }}
				.column.is-6-desktop.is-6-tablet.is-12-mobile
					.column-container.has-text-left
						p
							UserAgreement
</template>

<script>
import moment from 'moment'

import { mapActions } from 'vuex'
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default {
	name: "ThirdLanding",
	head: {
		link: [
			{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" }
		]
	},
	components: { Slick },
	props: ["leader", "lang", "mode", "currency"],
	data() {
		return {
			loading: false,
			sended: false,
			form: false,
			moment: moment,
			socials: [
				{ icon: "facebook", link: "https://www.facebook.com/roycashclub/" },
				{ icon: "vkontakte", link: "https://vk.com/roy.club.cash" },
				{ icon: "twitter", link: "https://twitter.com/ROYClubCash" },
				{ icon: "youtube", link: "https://www.youtube.com/channel/UCd0rLgjlEQa8qSX5PU8RmqQ" },
				{ icon: "reddit", link: "https://www.reddit.com/user/ROYClubCash" },
				{ icon: "instagram", link: "https://instagram.com/roy.club.cash" },
			],
			contact: {},
			slickOptions: {
				lasyLoad: 'progressive',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
				dots: true,
        cssEase: 'linear',
        speed: 1000,
        autoplay: 5000,
        infinite: true,
				centerMode: true,
				adaptiveHeight: true,
				draggable: true,
        responsive: [
          {
            breakpoint: 1396,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 1270,
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1
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
		},
		advantages() {
			return [
				this.$t(`income_alt.${this.comp_currency}`),
				this.$t("learn_alt")
			]
		},
		is_people() {
			return [
				{ content: this.$t("more_than"), icon: "users" },
				{ content: this.$t("initiative_alt"), icon: "heart" },
				{ content: this.$t("office"), icon: "home" }
			]
		},
		capabilities() {
			return [
				{ title: this.$t("school"), icon: "edit_list" },
				{ title: this.$t("move"), icon: "users" },
				{ title: this.$t("sprint"), icon: "image_list" },
				{ title: this.$t("market"), icon: "wallet_list" },
				{ title: this.$t("helper"), icon: "users" },
				{ title: this.$t("good"), icon: "heart_list" },
				{ title: this.$t("auto"), icon: "send_list" },
				{ title: this.$t("contests"), icon: "ticket_star_list" },
			]
		},
		instructions() {
			return [
				this.$t("to_join"),
				this.$t("chat_bot", [this.leader.bot == "umi" ? this.leader.umiRef : this.leader.ref, this.leader.username]),
				this.$t("bot_help")
			]
		},
		leader_socials() {
			let { instagram, vk, whatsapp, viber, skype, telegram } = this.leader.socials
			return [
				{ icon: "instagram", link: instagram && instagram.length > 0 ? `https://instagram.com/${instagram}/` : null },
				{ icon: "vkontakte", link: vk && vk.length > 0 ? `https://vk.com/${vk}/` : null },
				{ icon: "whatsapp", link: whatsapp && whatsapp.length > 0 ? `https://wa.me/${whatsapp}/` : null },
				{ icon: "viber_3", link: viber && viber.length > 0 ? `viber://add?number=${viber}` : null },
				{ icon: "skype", link: skype && skype.length > 0 ? `Skype:${skype}?chat` : null },
				{ icon: "plane", link: telegram && telegram.length > 0 ? `https://t.me/${telegram}` : null },
			]
		},
		has_socials() {
			let socials = this.leader_socials,
					exist = false

			for (let { link } of socials) {
				if (link) {
					exist = true
					break
				}
			}

			return exist
		}
	},
	methods: {
		...mapActions('contacts', ['createContact']),
		formToggle() {
			this.form = !this.form
		},
		videoModal(id, title) {
			const h = this.$createElement
			const vnode = h('p', { class: "image is-16by9" }, [
				h('iframe', { attrs: { class: "has-ratio", src: `https://www.youtube.com/embed/${id}`, width: "560", height: "315", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowfullscreen: true, frameborder: 0, title }})
			])
			this.$buefy.modal.open({ content: [ vnode ] })
		},
		scroll (target = '#welcome') {
			if (typeof target !== 'string') target = '#welcome'
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
		},
		require(path) {
			return require(path)
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

<style lang="scss" scoped>
@font-face {
	font-family: 'Bebas Neue';
	src: url('~/assets/fonts/BebasNeue/BebasNeueBold.eot');
	src: local('Gotham Pro Bold'), local('GothamPro-Bold'),
		url('~/assets/fonts/BebasNeue/BebasNeueBold.eot?#iefix') format('embedded-opentype'),
		url('~/assets/fonts/BebasNeue/BebasNeueBold.woff') format('woff'),
		url('~/assets/fonts/BebasNeue/BebasNeueBold.ttf') format('truetype');
	font-weight: bold;
	font-style: normal;
}

$main: #4C93C0;
$orange: #F29811;
$main_dark: #1E2329;
$secondary_dark: #5E656C;
$primary: #12B2A8;

.main {
	font-family: "PT Sans", sans-serif;
	color: $main_dark;
	position: relative;
	overflow: hidden;
	&>.bg {
		width: 100%;
		margin: 0 auto;
		position: absolute;
		top: 0;
		right: -50%;
		left: -50%;
		z-index: 1;
	}
	h1::v-deep {
		font-size: 3rem;
		font-weight: bold;
		line-height: 125%;
		span {
			color: $main;
		}
	}
	h2 {
		font-size: 2.25rem;
		font-weight: bold;
		margin-bottom: 2.5rem;
	}
	a {
		&:hover {
			opacity: .8;
		}
	}
	.button {
		font-size: 1.2rem;
		font-weight: bold;
		padding: {
			left: 2rem;
			right: 2rem;
		}
		margin-top: 2rem;
		background: linear-gradient(180deg, #F8D12E 0%, #F1BB0E 100%);
		border: unset;
		border-radius: 5px;
		position: relative;
		z-index: 2;
		&:hover {
			background: linear-gradient(180deg, #F1BB0E 0%, #F8D12E 100%);
		}
	}
	.flag {
		@include _flex();
		display: inline-flex;
		text-transform: uppercase;
		font-size: .95rem;
		font-weight: bold;
		padding: .6rem 1rem;
		border-radius: 50px 50px 50px 4px;
		&.is-orange {
			color: #F29811!important;
			background: #FDF4D2;
		}
		&.is-blue {
			color: #4C93C0!important;
			background: #D2EEFD; 
		}
		&.is-red {
			color: #D05358!important;
			background: #FFE1E2;
		}
	}
	header {
		.section {
			padding-top: 1rem;
			padding-bottom: 0;
			.navbar-brand {
				.navbar-item {
					@include _flex(center, flex-start);
					span {
						&.icon {
							min-height: 3.2rem;
							min-width: 3.2rem;
							margin-right: 1rem;
						}
						&:last-of-type {
							font-family: "Bebas Neue", sans-serif;
							font-size: 1.5rem;
							line-height: 1.5rem;
							font-weight: bold;
							color: $main;
						}
					}
				}
			}
			.navbar-menu {
				align-items: center;
				.socials {
					a {
						&+a {
							margin-left: 1.5rem;
							svg {
								max-height: 1.5rem;
							}
						}
						&:first-of-type {
							svg {
								max-height: 1.2rem;
							}
						}
					}	
				}
			}
		}
	}
	.hero {
		z-index: 2;
		.container {
			width: 100%;
		}
		&.has-bg {
			position: relative;
			.bg {
				position: absolute;
				max-width: unset;
			}
		}
		&.hello {
			.bg {
				width: 60%;
				top: -3rem;
				right: 0;
			}
			.section {
				padding-bottom: 5rem;
			}
			.container {
				.media {
					&+.media {
						border-top: unset;
						padding-top: 0;
						margin-top: .5rem;
					}
					.media-left,
					.media-content {
						@include _flex(center, flex-start);
					}
					.media-left {
						margin-right: .5rem;
						svg {
							width: 1.25rem;
						}
					}
					.media-content {
						p {
							font-size: 1.2rem;
						}
					}
				}
			}
		}
		&.is-people {
			.bg {
				width: 30%;
				&.left {
					top: 0;
					left: 0;
				}
				&.right {
					bottom: 0;
					right: 0;
				}
			}
			.section {
				padding-top: 18%;
			}
			.container {
				.content {
					text-align: center;
					h2::v-deep {
						span {
							color: $orange;
						}
						&+p {
							font-size: 1.125rem;
							color: $secondary_dark;
						}
					}
				}
				.columns {
					.column {
						.column-container {
							@include _flex(center, flex-start);
							height: 100%;
							padding: 1.5rem 2.25rem;
							border: 1px solid #FFECA8;
							border-radius: 8px;
						}
						.media-content {
							p::v-deep {
								span {
									color: $primary;
									font-weight: bold;
								}
							}
						}
						.icon {
							width: 1.26rem;
						}
						.wrapper {
							@include _flex();
							width: 4rem;
							height: 4rem;
							background: linear-gradient(225.51deg, #FFFFFF 5.48%, #FDF4D2 92.99%);
							box-shadow: 0px 4px 8px rgba(255, 153, 0, 0.2), 0px 14px 16px rgba(255, 153, 0, 0.2);
							border-radius: 15px;
						}
						&:nth-of-type(2) {
							.column-container {
								border-color: #FFDFE0;
							}
							.icon {
								width: 1.25rem;
							}
							.wrapper {
								background: radial-gradient(90.63% 90.63% at 92.97% 6.25%, #FFFFFF 0%, #FDE7E8 100%);
								box-shadow: 0px 4px 8px rgba(213, 93, 85, 0.28), 0px 14px 16px rgba(213, 93, 85, 0.28);
							}
						}
						&:last-of-type {
							.column-container {
								border-color: #D9F0FF;
							}
							.icon {
								width: 1.25rem;
							}
							.wrapper {
								background: radial-gradient(90.63% 90.63% at 90.63% 6.25%, #FFFFFF 0%, #DAF6FE 100%);
								box-shadow: 0px 14px 16px rgba(76, 147, 192, 0.3);
							}
						}
					}
				}
			}
		}
		&.slider {
			.bg {
				width: 100%;
				max-height: 100%;
				margin: 0 auto;
				top: 0;
				right: -50%;
				bottom: 0;
				left: -50%;
			}
			.slider::v-deep {
				.slick-track {
					@include _flex();
					height: 600px;
				}
				.slick-slide { 
					@include _flex();
					float: none;
					transition: all 1s ease;
					&>div {
						@include _flex();
						padding: 0 1.7rem;
					}
					.wrapper {
						width: 15.8rem!important;
						height: 15.8rem!important;
						border-radius: 50%;
						overflow: hidden;
						position: relative;
						transition: all 1s ease;
						img {
							height: 100%;
							max-width: unset;
							margin: 0 auto;
							position: absolute;
							top: 0;
							left: 0;
							right: 0;
						}
					}
					&.slick-current {
						.wrapper {
							padding: 15rem;
						}
					}
				}
				.slick-arrow {
					@include _flex();
					height: 4rem;
					width: 4rem;
					background: linear-gradient(225.51deg, #FFFFFF 5.48%, #FDF4D2 92.99%);
					box-shadow: 0px 4px 8px rgba(255, 153, 0, 0.2), 0px 14px 16px rgba(255, 153, 0, 0.2);
					border-radius: 15px;
					&::before {
						font-size: 0;
						content: url("~/assets/sprite/svg/arrow.svg");
					}
					&.slick-next {
						right: 27%;
						&::before {
							transform: rotate(180deg);
						}
					}
					&.slick-prev {
						left: 27%;
					}
				}
				.slick-dots {
					bottom: -1rem;
					li {
						margin: 0;
						button {
							&::before {
								font-size: .8rem;
								color: #FBE2BB;
								opacity: 1;
							}
						}
						&.slick-active {
							button {
								&::before {
									color: #F29811;
								}
							}
						}
					}
				}
			}
		}
		&.multiple {
			.container {
				.content {
					h2 {
						font-weight: normal;
					}
					p {
						font-size: 1.125rem;
						color: $secondary_dark;
					}
				}
				.columns {
					.column {
						&:last-of-type {
							.column-container {
								@include _flex();
								height: 100%;
								position: relative;
								.circle {
									position: absolute;
									&.left {
										margin: auto 0;
										top: 0;
										bottom: 0;
										left: 0;
									}
									&.top {
										top: -2rem;
										right: 0;
									}
									&.bottom {
										bottom: 0;
										right: 0;
									}
								}
							}
						}
					}
				}
			}
		}
		&.crypto {
			.container {
				.content {
					h2::v-deep {
						span {
							color: #D05358;
						}
					}
					p {
						font-size: 1.125rem;
						color: $secondary_dark;
					}
				}
			}
		}
		&.compare {
			.section {
				padding-bottom: 5rem;
				&>.columns {
					&.not_all {
						.column {
							&.umi {
								.curr {
									top: 63%;
									right: 80%;
								}
							}
							&.pzm {
								.curr {
									bottom: 63%;
									left: 80%;	
								}
							}
						}
					}
					.column {
						position: relative;
						.curr {
							position: absolute;
							z-index: 1;
						}
						.column-container {
							@include _flex(center, flex-start, column);
							height: 100%;
							border: 1px solid;
							background: #fff;
							padding: 3rem;
							position: relative;
							z-index: 2;
							.columns {
								justify-content: space-between;
								flex: 1;
							}
							.content {
								h3 {
									text-align: center;
									font-size: 2.25rem;
									font-weight: normal;
									color: $main_dark;
								}
							}
							.media-left {
								margin-right: 1.8rem;
								.wrapper {
									@include _flex();
									height: 4rem;
									width: 4rem;
									border-radius: 15px;
									svg {
										width: 1.2rem;
										height: 1.2rem;
									}
								}
							}
							.media-content {
								.title {
									font-size: 1.126rem;
									color: $main_dark;
									padding-bottom: 1rem;
								}
								.subtitle::v-deep {
									font-size: 1rem;
									color: #333;
									span {
										color: #12B2A8;
									}
								}
							}
						}
						&.umi {
							.curr {
								top: 80%;
								right: 65%;
							}
							.column-container {
								border-color: #BCFECF;
								border-radius: 50px 8px 8px 8px;
								.media-left {
									.wrapper::v-deep  {
										background: linear-gradient(225.51deg, #FFFFFF 5.48%, #D6FDE5 92.99%);
										box-shadow: 0px 4px 8px rgba(36, 255, 0, 0.2), 0px 14px 16px rgba(36, 255, 0, 0.2);
										svg {
											filter: drop-shadow(0px 4px 4px rgba(12, 164, 55, 0.3));
										}
									}
								}
							}
						}
						&.pzm {
							.curr {
								bottom: 80%;
								left: 65%;
							}
							.column-container {
								border-color: #FCC0FC;
								border-radius: 8px 8px 50px 8px;
								.media-left {
									.wrapper::v-deep {
										background: linear-gradient(225.51deg, #FFFFFF 5.48%, #F4DBFA 92.99%);
										box-shadow: 0px 4px 8px rgba(200, 44, 239, 0.2), 0px 14px 16px rgba(200, 44, 239, 0.2);
										svg {
											filter: drop-shadow(0px 4px 4px rgba(110, 36, 127, 0.25));
										}
									}
								}
							}
						}
					}
				}
			}
		}
		&.fast-facts {
			z-index: 1;
			.bg {
				width: 100%;
				bottom: 0;
			}
			.container {
				.section {
					.column {
						position: relative;
						cursor: pointer;
						.play {
							width: 15%;
							margin: auto;
							position: absolute;
							top: 0;
							right: 0;
							bottom: 0;
							left: 0;
						}
					}
				}
			}
		}
		&.capabilities {
			.bg {
				&.left {
					left: 0;
					top: 0;
				}
				&.right {
					margin: auto 0;
					top: 0;
					bottom: 0;
					right: 0;
				}
			}
			.section {
				padding-top: 5rem;
			}
			.content {
				margin-bottom: 4rem;
				h2::v-deep {
					span {
						color: $orange;
					}
				}
			}
			.columns {
				.column-container {
					@include _flex(flex-start, flex-start, column);
					.image-wrapper {
						@include _flex();
						height: 4rem;
						width: 4rem;
						margin-bottom: 1.5rem;
						background: linear-gradient(225.51deg, #FFFFFF 5.48%, #FDF4D2 92.99%);
						box-shadow: 0px 4px 8px rgba(255, 153, 0, 0.2), 0px 14px 16px rgba(255, 153, 0, 0.2);
						border-radius: 15px;
					}
					p::v-deep {
						color: #333;
						b {
							color: $primary;
						}
					}
				}
			}
		}
		&.join {
			background-image: url("~/assets/img/3_design/background_sunset.png");
			background-repeat: no-repeat;
			background-size: cover;
			background-position: 50%;
			.section {
				padding: {
					top: 18.5rem;
					bottom: 11.5rem;
				}
				.content {
					h2::v-deep {
						font-size: 2.25rem;
						font-weight: normal;
						padding: 0 23%;
						b {
							color: $primary;
						}
					}
					.button {
						margin-top: 1rem;
					}
				}
			}
		}
		&.welcome {
			background: radial-gradient(100% 196.84% at 0.57% 0%, #4C93C0 0%, #0D90E3 100%);
			overflow: hidden;
			* {
				color: #fff;
			}
			.section {
				padding: {
					top: 6.9rem;
				}
				&>.content {
					margin-bottom: 3rem;
				}
			}
			.bg {
				width: 100%;
				margin: 0 auto;
				bottom: 14rem;
				left: 0;
				right: 0;
			}

			.columns {
				border-bottom: 1px dashed #FFF8E9;
				margin-bottom: 6rem;
				.column {
					&:not(.is-12) {
						.column-container {
							@include _flex(flex-start, flex-start, column);
							.number {
								@include _flex();
								height: 4rem;
								width: 4rem;
								margin-bottom: 1.5rem;
								background: radial-gradient(90.63% 90.63% at 90.63% 6.25%, #FFFFFF 0%, #DAF6FE 100%);
								box-shadow: 0px 14px 16px rgba(76, 147, 192, 0.3);
								border-radius: 15px;
								p::v-deep {
									font-size: 2.25rem;
									font-weight: bold;
									color: #4C93C0;
									text-shadow: 0px 4px 4px rgba(76, 147, 192, 0.15);
									b {
										font-weight: normal;
									}
								}
							}
						}
					}
					&.is-12 {
						.button {
							margin-bottom: 2.5rem;
							span {
								color: $main_dark;
							}
						}
					}
				}
			}
			.form-wrapper {
				width: 600px;
				padding: 2rem;
				margin: 0 auto;
				border: 1px solid #FFF8E9;
				border-radius: 4px;
				.content {
					padding: 0 13%;
				}
				.card {
					background: #FFF8E9;
					* {
						color: $main_dark;
					}
				}
				.card-header {
					padding: 1rem 0;
					border-bottom: 1px solid rgba(0, 0, 0, 0.1);
					border-radius: 4px 4px 0px 0px;
					* {
						color: $orange;
					}
				}
				.card-header-title {
					@include _flex();
					span {
						font-size: 1.26rem;
						display: inline-block;
						margin-left: 2rem;
					}
				}
				.card-header-icon {
					.icon {
						font-size: 1.26rem;
					}
				}
				.card-content {
					background: #FFF8E9;
					border-radius: 0px 0px 4px 4px;
				}
				.form {
					width: 350px;
					margin: 0 auto;
					.field::v-deep {
						&.name {
							.label {
								position: relative;
								display: inline-block;
								&::before {
									display: block;
									content: "*";
									color: $danger;
									position: absolute;
									top: 0;
									left: 101%;
								}
							}
						}
						.label {
							font-size: 1.125rem;
							font-weight: normal;
							color: $secondary_dark;
						}
						&:not(:first-of-type) {
							.label {
								margin-top: 1rem;
							}
						}
					}
				}
			}
		}
	}
	footer {
		background: #2A3847;
		.section {
			.columns {
				p {
					font-size: 1.125rem;
					color: #fff;
				}
				.column-container {
					height: 100%;
					display: inline-flex;
					align-items: center;
				}
			}
		}
		.socials {
			a {
				filter: invert(54%) sepia(99%) saturate(460%) hue-rotate(356deg) brightness(100%) contrast(91%);
				svg {
					height: 1.25rem;
				}
				&+a {
					margin-left: 1.5rem;
				}
			}
		}
		&>.columns {
			background: #202B36;
			.column {
				padding: {
					top: .2rem;
					bottom: .2rem;
				}
				.column-container {
					p {
						font-size: .875rem;
						color: $secondary_dark;
					}
				}
			}
		}
	}
}

@media screen and (max-width: 1407px) {
	.main {
		&>.bg {
			width: 125%;
		}
		.hero {
			&.is-people {
				.section {
					padding-top: 2rem;
				}
			}
		}
	}
}
@media screen and (max-width: 1270px) {
	.main {
		.hero {
			&.slider {
				.slider::v-deep {
					.slick-arrow {
						top: unset;
						bottom: 0;
					}
				}
			}
		}
	}
}
@media screen and (max-width: 1023px) {
	.main {
		header {
			.section {
				.navbar-brand {
					justify-content: center;
				}
				.navbar-menu {
					display: flex;
					justify-content: center;
					background: transparent;
					box-shadow: unset;
					padding-top: 2rem;
				}
			}
		}
		.hero {
			&.join {
				background-position: 100% 100%, 50%;
				background: url(/_nuxt/assets/img/3_design/background_sunset.png) bottom/contain no-repeat, radial-gradient(100% 423.46% at 0% 0%, #FAC766 0%, #FFF7E8 100%);
			}
		}
	}
}
@media screen and (max-width: 768px) {
	.main {
		&>.bg {
			display: none;
		}
		&>.mobile-background {
			width: 100%;
			height: 50rem;
			background: radial-gradient(100% 423.46% at 0% 0%, #FAC766 0%, #FFF7E8 100%);
			position: absolute;
			top: 0;
			left: 0;
		}
		.hero {
			&.hello {
				img {
					&.is-hidden-tablet {
						margin: 0 -1.5rem;
						max-width: calc(100% + 3rem);
					}
				}
				.content {
					text-align: center;
					margin-bottom: 3rem;
					.media {
						justify-content: center;
						.media-content {
							flex: unset;
						}
					}
				}
			}
			&.slider {
				.bg {
					max-width: unset;
					margin: auto;
					left: -50%;
					right: -50%;
					top: 0;
					bottom: 0;
				}
				.slider::v-deep {
					.slick-arrow {
						&.slick-prev {
							left: 3%;
						}
						&.slick-next {
							right: 3%;
						}
					}
				}
			}
			&.multiple {
				text-align: center;
			}
			&.crypto {
				text-align: center;
				.columns {
					flex-direction: column-reverse;
				}
			}
			&.compare {
				.curr {
					z-index: 3!important;
				}
				.umi {
					.curr {
						top: 79%!important;
						right: 36%!important;
					}
				}
				.pzm {
					.curr {
						bottom: 69%!important;
						left: 36%!important;
					}
				}
				.columns {
					.pzm {
						padding-top: 12.75rem;
					}
					&.not_all {
						.pzm {
							padding-top: .75rem;
						}
					}
				}
			}
			&.join {
				.section {
					padding-top: 5.5rem;
					.content {
						h2 {
							padding: 0;
						}
					}
				}
			}
			&.welcome {
				.columns {
					.column {
						&:not(.is-12) {
							.column-container {
								flex-direction: row;
								.number {
									min-width: 4rem;
									max-width: 4rem;
								}
							}
						}
					}
				}
				// .main .hero.welcome .form-wrapper[data-v-633f2610]
				.form-wrapper {
					width: 100%;
					.form {
						width: 100%;
					}
				}
			}
		}
	}
}
</style>