<template lang="pug">
Card( :title='$t("new.card.title")' icon="account-edit" )
	form.form( @submit.prevent='$emit("save")' )
		b-field( :label='$t("new.card.name")' )
			b-input(
				v-model='data.name'
				:placeholder='$t("new.card.name_place")')
		b-field( :label='$t("new.card.comment")' )
			b-input(
				type="textarea"
				v-model='data.comment'
				:placeholder='$t("new.card.comment_place")')
		hr
		b-field( :label='$t("new.card.sigen.title")' )
		b-field( :label='$t("new.card.sigen.address")' label-position="on-border" )
			b-input(
				v-model='data.sigen.address'
				placeholder="PRIZM-A1B2-C3D4-E56F-ABC78")
		b-field( :label='$t("new.card.sigen.key")' label-position="on-border" )
			b-input(
				v-model='data.sigen.publicKey'
				placeholder="d5c20c53be...10fafb75b402")
		b-field( :label='$t("new.card.sigen.u_address")' label-position="on-border" )
			b-input(
				v-model='data.sigen.umiAddress'
				placeholder="umi14wzz9tcnl9n474u...78qywlqrj")
		hr
		b-field( :label='$t("new.card.roy.title")' )
		b-field( :label='$t("new.card.roy.address")' label-position="on-border" )
			b-input(
				v-model='data.roy.address'
				placeholder="PRIZM-A1B2-C3D4-E56F-ABC78")
		b-field( :label='$t("new.card.roy.key")' label-position="on-border" )
			b-input(
				v-model='data.roy.publicKey'
				placeholder="d5c20c53be...10fafb75b402")
		b-field( :label='$t("new.card.roy.u_address")' label-position="on-border" )
			b-input(
				v-model='data.roy.umiAddress'
				placeholder="umi14wzz9tcnl9n474u...78qywlqrj")
		hr
		b-field
			button.button.is-primary( :class='{ "is-loading": loading }' ) {{ $t("save") }}
</template>

<script>
export default {
	name: "ContactCard",
	props: ['data', 'loading']
}
</script>