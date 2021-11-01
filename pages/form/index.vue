<template lang="pug">
#form
	b-modal( v-if='isModal' :active.sync='isModal' )
		.modal-card
			.modal-card-head
				p.modal-card-title {{ $t("form.modal.confirm") }}
			.modal-card-body
				p( v-html='$t("form.modal.you_want", [trash.name || trash.username])' )
				p {{ $t("form.modal.cannot") }}
			.modal-card-foot
				.button( @click='cancel' ) {{ $t("cancel") }}
				.button.is-danger( @click='confirm(trash._id)' ) {{ $t("delete") }}
	b-table( 
		:data='formContacts'
		paginated per-page='10'
		pagination-size='is-small'
		:mobile-cards='false' )
		b-table-column( field="date" :label='$t("form.date")' v-slot='props' ) {{ moment(props.row.createdAt).locale(locale).calendar() }}
		b-table-column( field="name" :label='$t("form.name")' v-slot='props' )
			router-link.name( :to='`/contact/${props.row._id}`' ) {{ props.row.name }}
		b-table-column( field="phone" :label='$t("form.phone")' v-slot='props' )
			a( :href='`tel:${props.row.phone}`') {{ props.row.phone }}
		b-table-column( field="email" :label='$t("form.email")' v-slot='props' ) {{ props.row.email }}
		b-table-column( field="Bot" :visible='false' :label='$t("form.system")' v-slot='props' ) {{ props.row.bot === 'pzm' ? 'PRIZM' : 'UMI' }}
		b-table-column( field="comment" :label='$t("form.comment")' v-slot='props' ) {{ props.row.comment }}
		b-table-column.is-actions-cell( custom-key="actions" v-slot='props' )
			.buttons.is-right
				.button.is-small.is-info(
					@click.prevent='move(props.row._id, 0)' 
					:title='$t("form.to_funnel")' )
					b-icon( icon="account-arrow-right" size="is-small" )
				.button.is-small.is-danger(
					@click.prevent='trashModal(props.row)'
					:title='$t("delete")' )
					b-icon( icon="trash-can" size="is-small" )
		template( slot="empty" )
			section.section
				.content.has-text-grey.has-text-centered
					p.is-size-4.has-text-weight-bold {{ $t("form.no_new") }}
</template>

<script>
import { mapGetters, mapState, mapActions, mapMutations } from 'vuex'
import moment from 'moment'

export default {
	name: "Form",
	async asyncData({ store }) {
		await store.dispatch('contacts/getContacts', store.state.leader.leader._id)
	},
	data() {
		return {
			isModal: false,
			moment: moment,
			trash: null
		}
	},
	computed: {
		...mapGetters('contacts', ['formContacts']),
		...mapState('contacts', ['contacts']),
		...mapState('i18n', ['locale'])
	},
	methods: {
		...mapActions('contacts', ['saveContact', 'deleteContact']),
		...mapMutations('contacts', ['setStage']),
		move(id) {
			this.setStage({ stage: 0, id })
			let contact = this.contacts.filter(contact => contact._id = id)[0]
			this.saveContact(contact)
		},
		cancel() {
			this.trash = null
			this.isModal = false
		},
		confirm(id) {
			this.isModal = false
			this.deleteContact(id)
		},
    trashModal (trashObject) {
      this.trash = trashObject
      this.isModal = true
    },
	}
}
</script>