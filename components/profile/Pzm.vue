<template lang="pug">
.block
	b-field
		template(#label)
			|{{ $t("profile.settings.pzm.ref") }}&nbsp;
			b-tooltip(
				type="is-dark" 
				:label='$t("profile.settings.desc")'
				position="is-right"
				multilined)
				b-icon(
					size="is-small" 
					icon="help-circle")
		b-input(
			@blur='update'
			@focus='setOldValue'
			v-model='leader.ref'
			icon="account-group-outline"
			type="number"
			placeholder="12345")
	b-field
		template(#label)
			|{{ $t("profile.settings.pzm.wallet") }}
			b-tooltip(
				type="is-dark"
				:label='leader.verified ? $t("profile.settings.verified") : $t("profile.settings.not_verified")')
				b-icon(
					icon="security"
					:type='leader.verified ? "is-success" : "is-danger"')
		b-input(
			:placeholder='$t("profile.settings.pzm.wallet")'
			v-model='leader.sigen.address'
			expanded)
	.block( v-if='leader.umiRef && !leader.verified' )
		b-field
			.control
				.button.is-static {{ $t('profile.settings.message') }}
			b-input(
				:value='`ROY-Support-${leader.ref}`'
				expanded)
			.control
				.button
					b-icon( 
						icon="content-copy" 
						v-clipboard:copy='`ROY-Support-${leader.ref}`' v-clipboard:success='$onCopy')
		b-field
			b-input(
				type="textarea"
				v-model='signature'
				:placeholder='$t("profile.settings.signature")')
		b-field
			.button.is-link(
				@click='verify({ leader, signature, umiSignature: null })'
				:disabled='!signature') {{ $t('profile.settings.pzm.verify') }}
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: "UmiRef",
	props: ['leader'],
	data() {
		return {
			old: null,
			signature: null
		}
	},
	methods: {
		...mapActions('leader', ['verify']),
		update() {
			if (this.leader.ref == this.old) return
			this.$emit('update')
		},
		setOldValue() {
			this.old = this.leader.ref
		}
	}
}
</script>