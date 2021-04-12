<template lang="pug">
#edit_contact
	tiles
		ContactCard.tile.is-child( :data='contact' @save='update' :loading='loading' )
		ContactData.tile.is-child( :data='contact' @save='update' :loading='loading'  )
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
	name: "EditContact",
	data() { return { loading: false } },
	async asyncData({ store, params, redirect, $getContact }) {
		let contact = await $getContact(params.id)

		if (!contact) return redirect(301, '/contact/new')

		store.commit('setTitle', [ contact.name || contact.username ])

		return { contact }
	},
	methods: {
		...mapActions('contacts', ['saveContact']),
		...mapMutations(['setTitle']),
		update() {
			this.loading = true
			this.saveContact(this.contact)
				.then(contact => {
					this.loading = false
					this.contact = contact
					this.setTitle([ contact.name || contact.username ])
					this.$Snackbar( this.$t("account_saved") )
				})
		}
	}
}
</script>