<template lang="pug">
.contact( :class='{ "cell": type == "table-cell" }' )
	.media
		.media-content
			.is-pulled-right( v-if='type !== "table-cell"' )
				b-icon.move( icon="cursor-move" custom-size="default" )
			nuxt-link.name( v-if='contact.leader_id' :to='`/contact/${contact._id}`' ) {{ contact.name ? contact.name : (contact.username ? contact.username : 'Безымянный') }}

			.date( v-if='contact.updatedAt && type !== "table-cell"' ) {{ moment(contact.updatedAt).locale(locale).calendar() }}
			.icons
				a.has-text-info( v-if='phone' target="_blank", :href="'tel:' + phone" )
					b-icon( icon="cellphone-iphone", custom-size="default" )
				a( v-if='contact.socials && contact.socials.telegram', target="_blank", :href="'tg://resolve?domain='+ contact.socials.telegram" )
					b-icon( icon="telegram", custom-size="default" )
				a( v-if='contact.socials && contact.socials.instagram', target="_blank", :href="'https://instagram.com/'+ contact.socials.instagram" )
					b-icon( icon="instagram", custom-size="default" )
				a( v-if='contact.socials && contact.socials.vk', target="_blank", :href="'https://vk.com/' + contact.socials.vk" )
					b-icon( icon="vk-circle", custom-size="default" )
				a( v-if='contact.socials && viber', target="_blank", :href="'viber://chat/?number=' + viber" )
					.icon.viber
						SvgIcon( name="viber" )
				a( v-if='contact.socials && whatsapp', target="_blank", :href="'https://api.whatsapp.com/send?phone=' + whatsapp" )
					b-icon( icon="whatsapp", custom-size="default" )

			.wallets( v-if='contact.sigen && (contact.sigen.address || contact.sigen.umiAddress) && type !== "table-cell"' )
				span.smaller( v-if='contact.sigen.address || contact.sigen.umiAddress' ) Sigen:

				Copy.smaller( v-if='contact.sigen.address' :link='contact.sigen.address' :copyText='$t("funnel.contact.pzm_address")' :hasLink='false' inline )
				span.smaller( v-if='contact.sigen.address' ) |

				Copy.smaller( v-if='contact.sigen.publicKey' :link='contact.sigen.publicKey' :copyText='$t("funnel.contact.pzm_key")' :hasLink='false' inline )
				span.smaller( v-if='contact.sigen.publicKey' ) |

				Copy.smaller( v-if='contact.sigen.umiAddress' :link='contact.sigen.umiAddress' :copyText='$t("funnel.contact.umi_address")' :hasLink='false' inline )
				
			.wallets( v-if="contact.roy && (contact.roy.address || contact.roy.umiAddress)" )
				span.smaller( v-if='contact.roy.address || contact.roy.umiAddress' ) Roy:

				Copy.smaller( v-if='contact.roy.address' :link='contact.roy.address' :copyText='$t("funnel.contact.address")' :hasLink='false' inline )
				span.smaller( v-if='contact.roy.address' ) |

				Copy.smaller( v-if='contact.roy.publicKey' :link='contact.roy.publicKey' :copyText='$t("funnel.contact.key")' :hasLink='false' inline )
				span.smaller( v-if='contact.roy.publicKey' ) |

				Copy.smaller( v-if='contact.roy.umiAddress' :link='contact.roy.umiAddress' :copyText='$t("funnel.contact.umi_address")'  :hasLink='false' inline )
</template>

<script>
import moment from 'moment'
import { mapState } from 'vuex'

export default {
	name: "FunnelContact",
	props: ['contact', 'type'],
	data() {
		return {
			moment: moment
		}
	},
	computed: {
		...mapState('i18n', ['locale']),
    phone: function () {
      return this.normalize(this.contact.phone)
    },
    viber: function () {
      return this.normalize(this.contact.socials.viber)
    },
    whatsapp: function () {
      return this.normalize(this.contact.socials.whatsapp)
    }
  },
	methods: {
		normalize (phone) {
      if (phone) { return phone.trim().replace(/\D/g, '').replace(/^7/, '+7').replace(/^8/, '+7') }
      return null
    }
	}
}
</script>

<style lang="scss" scoped>
.contact {
	background: #fff;
	padding: 1rem;
	&.cell {
		padding: 0;
		.icons {
			display: flex;
			justify-content: space-between;
			.icon {
				width: 1.5rem;
				font-size: 1.25rem;
			}
		}
	}
}
</style>

<style scoped>
.move {
	cursor: grabbing;
}
.icons .icon {
	width: 16.5%;
	opacity: .8;
}
.table-cell .icons {
	text-align: center;
	overflow: hidden;
}
.table-cell .icons .icon {
	font-size: 1.25rem;
	opacity: .85;
	width: 1.5rem;
}
.icons .icon:hover {
	opacity: 1;
}
.viber {
	vertical-align: bottom;
}
.viber svg {
	width: 1.5rem;
	height: .875rem;
	line-height: 1.5rem;
	fill: #7360f2;
}
.board-item {
	position: absolute;
	width: 100%;
	margin: 0.1875rem 0;
}
.board-item a {
	z-index: 4;
}
.board-item.muuri-item-releasing {
	z-index: 9998;
}
.board-item.muuri-item-dragging {
	z-index: 9999;
	cursor: move;
}
.board-item.muuri-item-hidden {
	z-index: 0;
}
.board-item .board-item-content {
	position: relative;
	padding: 0.375rem 0.375rem;
	background: #fff;
	border-radius: 4px;
	font-size: 1rem;
	cursor: pointer;
	-webkit-box-shadow: 0px 1px 3px 0 rgba(0,0,0,0.2);
	box-shadow: 0px 1px 3px 0 rgba(0,0,0,0.2);
}
@media (max-width: 600px) {
	.board-item-content {
		text-align: center;
	}
}
.media-content .level {
	margin-bottom: 0rem;
}
.name {
	font-size: 1rem;
	font-weight: 300;
	line-height: 1.1;
	display: block;
	margin-right: 1.5rem;
}
.date {
	font-size: 0.725rem;
}
.wallets {
	line-height: 1.35;
	font-size: 0.825rem;
}
.wallets .smaller:not(:first-child) {
	padding: 0.125rem;
}
.pre {
	font-size: 0.4rem;
	word-wrap: break-word;
	width: 100%;
	white-space: pre-wrap;
	padding: 0;
	overflow: hidden;
	word-break: break-all;
}
</style>