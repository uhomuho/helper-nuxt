<template lang="pug">
#tree
	b-table.is-size-7.tree(
		:data="data"
		ref="table"
		:class="'table' + level"
		:loading="loading"

		:mobile-cards='false',
		:row-class="(row, index) => row.id == defaultOpenedDetails ? 'opened' : ''"

		sort-icon-size="is-small"
		:default-sort="[sorting.field, sorting.order]"
		:default-sort-direction="sorting.order"
		@sort="level === 0 ? onSort() : null"

		detailed
		custom-detail-row
		detail-key="id"
		:show-detail-icon="showDetailIcon"
		:opened-detailed="defaultOpenedDetails")
		b-table-column.chevron-cell(
			custom-key='opening'
			width="24px"
			v-slot='props')
			a(
				v-if="props.row.count > 1"
				role="button"
				@click="toggle(props.row)"
				:style="'margin-left:' + (level*0.5) + 'rem'"
			)
				b-icon( v-if="props.row.id == defaultOpenedDetails" icon="minus-box", type="is-info", size="default")
				b-icon( v-else icon="plus-box", type="is-info", size="default")
			.has-text-grey(
				v-else
				role="button"
				:style="'margin-left:' + (level*0.5) + 'rem'"
			)
				b-icon( icon="power-on", size="default")

		b-table-column.address(
			field="wallet"
			:visible="columns['address'].display"
			:label="level === 0 ? columns['address'].title : ''"
			:style="'calc(' + columns['address'].width + ' - ' + (level*0.5) + 'rem)'"
			v-slot='props')
			span
				router-link(
					v-if='fromContacts(props.row.wallet)'
					:to='`/contact/${fromContacts(props.row.wallet)}`'
				)
					strong.name.is-size-6 {{ getName(props.row.info) }}
				strong.name.is-size-6( v-else-if='props.row.info' ) {{ getName(props.row.info) }}
				br
				span {{ props.row.wallet.length > 40 ? props.row.wallet.slice(0, 15) + '.....' + props.row.wallet.slice(-15) : props.row.wallet }}
				a
					Copy( :link='props.row.wallet' onlyIcon isSmall inline )

		b-table-column.balance-column(
			field="balance"
			:visible="columns['balance'].display"
			:label="columns['balance'].title"
			:width="columns['balance'].width"
			numeric
			sortable
			v-slot='props') {{ props.row.balance }} {{ crypto == "pzm" ? "PZM" : "UMI" }}

		b-table-column.contacts(
			field="info"
			:custom-sort="customSort"
			:visible="columns['contacts'].display"
			:label="columns['contacts'].title"
			:width="columns['contacts'].width"
			numeric
			sortable
			centered
			v-slot='props')
			template(v-if='props.row.info')
				//pre {{ props.row.info }}
				FunnelContact(
					v-if='props.row.info'
					:contact='props.row.info'
					:data-id='props.row.info._id'
					type='table-cell')
			template( v-else ) -

		b-table-column(
			field="id"
			:visible="columns['id'].display"
			:label="columns['id'].title"
			:width="columns['id'].width"
			centered
			numeric
			sortable
			v-slot='props') {{ props.row.id }}

		b-table-column(
			field="count"
			:visible="columns['count'].display"
			:label="columns['count'].title"
			:width="columns['count'].width"
			centered
			numeric
			sortable
			v-slot='props') {{ (level < parseInt(depth)-1 ? props.row.count : '-') }}

		b-table-column(
			field="level"
			:visible="columns['level'].display"
			:label="columns['level'].title"
			:width="columns['level'].width"
			centered
			numeric
			sortable
			v-slot='props')
			span.tag.level-rang(
				:class="'level-'+ props.row.level"
				:title="getLevelTitle(props.row.level)")
		b-table-column.is-actions-cell(
			custom-key='actions'
			width="30px"
			v-slot='props')
			.buttons.is-right
				router-link.button.is-small.is-success(
					v-if="fromContacts(props.row.wallet)"
					:title='$t("tree.table.already")'
					:to='`/contact/${fromContacts(props.row.wallet)}`'
				)
					b-icon(icon='check', size='is-small')
				button.button.is-small.is-info(
					v-else-if="props.row.info"
					type='button'
					@click.prevent='clone(props.row)'
					:title='$t("tree.table.move")'
				)
					b-icon(icon='content-duplicate', size='is-small')
				button.button.is-small.is-warning(
					v-else
					type='button'
					@click.prevent='clone(props.row)'
					:title='$t("tree.table.dublicate")')
					b-icon(icon='creation' size='is-small')

		template( v-if='props.row.count > 0' slot="detail" slot-scope="props" )
			tr.subtable( v-if='props.row.childrens' )
				td.inner( colspan="8" )
					RefTree(
						ref="subtable"
						:crypto='crypto'
						:leader_id='leader_id'
						:data='props.row.childrens'
						:columns='columns'
						:level='level+1'
						:sortField='sorting.field'
						:sortOrder='sorting.order'
						:depth='depth')

		template( slot="empty" )
			section.section.is-size-6
				.content.has-text-centered
					a( @click="refresh" )
						b-icon(icon="refresh" size="is-large")
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
	name: "Tree",
	computed: {
		...mapGetters('contacts', ['fromContacts']),
		...mapState('leader', ['leader']),
		sorting () {
			return {
				'field': this.sortField,
				'order': this.sortOrder
			}
		}
	},
	data () {
		return {
			showDetailIcon: false,
			defaultOpenedDetails: [],
			multiColumnSortingEnabled: true
		}
	},
	props: {
		crypto: String,
		leader_id: {
			type: String,
			default: ''
		},
		data: {
			type: Array,
			default: null
		},
		columns: {
			type: Object,
			default: null
		},
		level: {
			type: Number,
			default: 0
		},
		depth: {
			default: 2
		},
		sortField: {
			type: String,
			default: 'balance'
		},
		sortOrder: {
			type: String,
			default: 'desc'
		},
		loading: {
			type: Boolean,
			default: false
		},
		processing: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		...mapActions('contacts', ['getContacts']),
		refresh () {
			this.$emit('refreshTable')
		},
		customSort (a, b, isAsc) {
			let one = a.info && Object.values(a.info.socials).filter(f => f != null).length
			let two = b.info && Object.values(b.info.socials).filter(f => f != null).length
			if (isAsc) {
				return one - two
			} else {
				return two - one
			}
		},
		async clone (contact) {
			let newContact = {
				name: 'Без имени ' + contact.id,
				stage: 5,
				leader_id: this.leader_id,
				sigen: {
					address: contact.wallet
				}
			}

			const fromClub = await this.$getInfo({ address: contact.wallet })

			if (fromClub) {
				newContact.roy = {
					address: fromClub.invest_wallet,
					publicKey: fromClub.invest_pub_key
				}
			}

			if (contact.info) {
				newContact.name = contact.info.name ? contact.info.name : null
				newContact.username = contact.info.username ? contact.info.username : null
				newContact.phone = contact.info.phone ? contact.info.phone : null
				newContact.email = contact.info.email ? contact.info.email : null
				if (contact.info.socials) { newContact.socials = contact.info.socials }
				if (contact.info.sigen && contact.info.sigen.address) { newContact.sigen = contact.info.sigen }
			}

			return this.$createContact(newContact)
				.then((r) => {
					contact.info = r.data
					this.getContacts(this.leader._id)
					this.$buefy.snackbar.open({
						message: this.$t('contact_added'),
						queue: false
					})
				})
				.catch((e) => {
					console.log(e)
					this.isLoading = false
				})
		},
		getName (contact) {
			if (contact) {
				if (contact.name && contact.username) { return contact.name + ' (' + contact.username + ')' } else if (contact.name) { return contact.name } else { return contact.username }
			} else {
				return 'Ошибка'
			}
		},
		onSort (field, order, event) {
			this.$emit('onSort', field, order, this.$refs.table)
		},
		closeAllOtherDetails (row, index) {
			this.defaultOpenedDetails = [row.id]
		},
		toggle (row) {
			if (row.childrens.length > 0) {
				this.$refs.table.toggleDetails(row)
			} else {
				this.$buefy.toast.open('Участник не имеет в своей структуре рефералов!')
			}
		},
		getLevelTitle (level) {
			switch (level) {
				case 1:
					return 'Участник'
				case 2:
					return 'Бронзовый партнер'
				case 3:
					return 'Серебряный партнер'
				case 4:
					return 'Золотой партнер'
				case 5:
					return 'Рубиновый партнер'
				case 6:
					return 'Сапфировый партнер'
				case 7:
					return 'Изумрудный партнер'
				case 8:
					return 'Бриллиантовый партнер'
				case 9:
					return 'Гуру'
				default:
					return 'Отсутсвует'
			}
		}
	}
}
</script>