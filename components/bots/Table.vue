<template lang="pug">
b-table(
	:data='bots'
	:loading='loading')
	b-table-column(
		field="name"
		:label='$t("bots.table.name")'
		v-slot='props') 
			nuxt-link( :to='`/bots/${props.row._id}`' ) {{ props.row.name }}
	b-table-column( v-slot='props' )
		nuxt-link.button.is-warning.is-small.is-pulled-right( :to='`/bots/${props.row._id}/funnel`' )
			b-icon( icon="nuxt" size="is-small" )
			span {{ $t("aside.funnel") }}
	b-table-column( v-slot='props' )
		.button.is-danger.is-pulled-right.is-small( @click='deleteBot(props.row._id)' :title='$t("bots.table.delete")' )
			b-icon( icon="trash-can" size="is-small" )
	template( slot="empty" )
		Notification.is-danger.has-text-centered
			strong {{ $t("bots.table.empty") }}
</template>

<script>
export default {
	name: "BotsTable",
	props: ['bots', 'leader', 'loading'],
	methods: {
		deleteBot(id) {
			let params = {
				body: {
					leaderId: this.leader._id
				},
				id
			}
			this.$deleteBot(params)
				.then(({ message }) => {
					if (message) return this.$Snackbar( this.$t("err") )
					this.$emit('update')
				})
		}
	}
}
</script>