<template lang="pug">
#promo
	client-only
		Notification.is-danger( v-if='!leader.chat_id' )
			div
				b( v-html='$t("noti.noti_bot", [leader.username])' )
	Card(
		v-if='(leader.bot === "pzm" && leader.ref) || (leader.bot === "umi" && leader.umiRef)'
		:title='$t("promo.title")'
		icon="cash")
		b-field
			b-select(
				v-model='leader.bot'
				@input='update'
				:placeholder='$t("promo.choose.crypto")')
				option(
					v-if='leader.verified'
					value="pzm") PRIZM
				option(
					v-if='leader.umiVerified'
					value="umi" ) UMI
		hr
		b-field( :label='$t("promo.what_use")' )
			.content
				p( v-html='$t("promo.form")' )
				p( v-html='$t("promo.bot")' )
		b-field
			.control
				.button.is-static {{ $t("default") }}
			b-select(
				v-model='leader.mode'
				@input='update'
				:placeholder='$t("promo.choose.mode")')
				option( value="form" ) {{ $t("promo.opts.form") }}
				option( value="bots" ) {{ $t("promo.opts.bot") }}
		.content( v-if='leader.mode == "bots"' )
			Copy( :text='$t("promo.link.bot")' :link='`https://${host}/${leader.username}/welcome`' )
				|{{ $t("promo.link.bot_default") }}
		.content( v-else )
			Copy( :text='$t("promo.link.form")' :link='`https://${host}/${leader.username}/bot`' )
				|{{ $t("promo.link.form_default") }}
		
		b-field( horizontal )
			template( slot="label" ) {{ $t("promo.label.form") }}
			Copy( :link='`https://${host}/${leader.username}/welcome`' :hasLink='false' flex )
			Copy( v-if='leader.umiRef && leader.umiVerified && leader.bot == "umi"' :link='`https://${host}/umi${leader.umiRef}/welcome`' :hasLink='false' flex )
			Copy( v-if='leader.ref && leader.verified && leader.bot == "pzm"' :link='`https://${host}/pzm${leader.ref}/welcome`' :hasLink='false' flex )

		b-field( 
			v-if='(leader.verified && leader.ref) || (leader.umiVerified && leader.umiRef)'
			horizontal )
			template( slot="label" ) {{ $t("promo.label.bot") }}
			Copy( :link='`https://${host}/${leader.username}/bot`' :hasLink='false' flex )
			Copy( v-if='leader.umiRef && leader.bot == "umi"' :link='`https://${host}/umi${leader.umiRef}/bot`' :hasLink='false' flex )
			Copy( v-if='leader.ref && leader.bot == "pzm"' :link='`https://${host}/pzm${leader.ref}/bot`' :hasLink='false' flex )

		hr
		b-field( :label='$t("promo.label.diff_crypto")' )
			p {{ $t("promo.label.which_show") }}
		b-field( v-if='leader.umiVerified && leader.umiRef' label="UMI" horizontal )
			Copy( :link='`https://${host}/umi${leader.umiRef}`' :hasLink='false' flex )
			Copy( :link='`https://${host}/${leader.username}/umi`' :hasLink='false' flex )
		b-field( v-if='leader.verified && leader.ref' label="PRIZM" horizontal )
			Copy( :link='`https://${host}/pzm${leader.ref}`' :hasLink='false' flex )
			Copy( :link='`https://${host}/${leader.username}/pzm`' :hasLink='false' flex )
		b-field( horizontal )
			template( slot="label" )
				|{{ $t("promo.label.all") }}
				b-tooltip(
					type="is-dark"
					:label='$t("promo.label.all_crypto")'
					multilined)
					b-icon( size="is-small" icon="help-circle" )
			Copy( :link='`https://${host}/${leader.username}/all`' :hasLink='false' flex )
		hr
		b-field( :label='$t("promo.label.your_links")' )
		b-field( horizontal )
			template( slot="label" )
				|Telegram
				b-tooltip(
					type="is-dark"
					:label='$t("promo.label.tg_link")'
					multilined)
					b-icon( size="is-small" icon="help-circle" )
			Copy( v-if='leader.bot == "pzm"' :link='`t.me/roy_helper_bot?start=${leader.username}`' :hasLink='false' flex )
			Copy( v-if='leader.bot == "umi"' :link='`t.me/Umiroybot?start=${leader.username}`' :hasLink='false' flex )
		b-field( :label='$t("promo.label.by_id")' horizontal )
			Copy( v-if='leader.bot == "pzm"' :link='`t.me/roy_helper_bot?start=${leader.ref}`' :hasLink='false' flex )
			Copy( v-if='leader.bot == "umi"' :link='`t.me/Umiroybot?start=${leader.umiRef}`' :hasLink='false' flex )
		hr
		b-field( horizontal )
			template( slot="label" )
				|{{ $t("promo.label.landing") }}
				b-tooltip(
					type="is-dark"
					:label='$t("promo.label.land_desc")'
					multilined)
					b-icon( size="is-small" icon="help-circle" )
			.control
				Copy( :link='`https://${host}/${leader.username}`' :hasLink='false' flex )
			.control
				Copy( v-if='leader.umiRef && leader.bot == "umi"' :link='`https://${host}/umi${leader.umiRef}`' :hasLink='false' flex )
				Copy( v-if='leader.ref && leader.bot == "pzm"' :link='`https://${host}/pzm${leader.ref}`' :hasLink='false' flex )
		b-field( horizontal )
			template( slot="label" )
				|{{ $t("promo.label.landing_en") }}
				b-tooltip(
					type="is-dark"
					:label='$t("promo.label.landing_desc")'
					multilined)
					b-icon( size="is-small" icon="help-circle" )
			.control
				Copy( :link='`https://${host}/en/${leader.username}`' :hasLink='false' flex )
			.control
				Copy( v-if='leader.umiRef && leader.bot == "umi"' :link='`https://${host}/en/umi${leader.umiRef}`' :hasLink='false' flex )
				Copy( v-if='leader.ref && leader.bot == "pzm"' :link='`https://${host}/en/pzm${leader.ref}`' :hasLink='false' flex )
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
	name: "Promo",
	data() {
		return {
			loading: false
		}
	},
	computed: {
		...mapState('leader', ['leader']),
		host() {
			return process.client ? window.location.hostname : null
		}
	},
	methods: {
		...mapActions('leader', ['save']),
		update() {
			this.loading = true
			this.save({ leader: this.leader, snackbar: true })
				.then(() => this.loading = false)
		}
	}
}
</script>