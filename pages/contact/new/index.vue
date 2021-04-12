<template lang="pug">
#new_contact
	client-only
		Notification.is-warning( from="addContact" )
			| {{ $t("new.noti.manually") }}
			br
			| {{ $t("new.noti.maybe") }}
	tiles
		ContactCard.tile.is-child( :data='form' @save='create' :loading='loading' )
		ContactData.tile.is-child( :data='form' @save='create' :loading='loading' )
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: "NewContact",
	asyncData({ store }) {
		return {
			form: {
        _id: null,
        name: null,
        phone: null,
        chat_id: null,
				leader_id: store.state.leader.leader._id,
        sigen: {
          address: null,
          publicKey: null
        },
        roy: {
          address: null,
          publicKey: null
        },
        socials: {
          telegram: null,
          instagram: null,
          vk: null,
          whatsapp: null,
          viber: null,
					skype: null
        },
        stage: 0
      }
		}
	},
	data() {
		return {
			loading: false
		}
	},
	methods: {
		...mapActions('contacts', ['createContact']),
		create() {
			this.loading = true
			this.createContact(this.form)
				.then(contact => {
					this.loading = false
					this.$Snackbar( this.$t("new.added", [contact.name || contact.username]) )
					this.$router.push(`/contact/${contact._id}`)
				})
		}	
	}
}
</script>