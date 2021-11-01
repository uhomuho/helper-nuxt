<template lang="pug">
b-collapse.card.mt-5( animation="slide" :open='isOpen' )
	template( #trigger='props' )
		.card-header( role="button" )
			p.card-header-title {{ $t("bots.create") }}
			a.card-header-icon
				b-icon( :icon='props.open ? "menu-down" : "menu-up"' )
	.card-content
		form.form( @submit.prevent='create' )
			b-field(
				:label='$t("bots.table.name")'
				label-position="on-border")
				b-input(
					v-model='name')
			button.button.is-primary( :class='{ "is-loading": loading }' ) {{ $t("bots.create") }}
</template>

<script>
export default {
	name: "BotsCreate",
	props: ['leader'],
	data() {
		return {
			name: null,
			loading: false,
			isOpen: false
		}
	},
	watch: {
		name() {
			if (this.name) {
				this.name = this.name.replaceAll(/[^A-Za-z0-9-]/g, "-")
				let length = this.name.length
				setTimeout(() => {
					if (this.name[length - 1] === "-" && this.name[length - 2] === "-") {
						this.name = this.name.slice(0, -1)
					}
				}, 10)
			}
		}
	},
	methods: {
		create() {
			if (this.name) {
				this.loading = true
				let params = {
					id: this.leader._id,
					body: {
						name: this.name
					}
				}
	
				this.$createBot(params)
					.then(({ message }) => {
						this.loading = false
						if (message) return this.$Snackbar( this.$t(`bots.${message}`) )
						this.name = null
						this.isOpen = false
						this.$emit('update')
					})
			}
		}
	}
}
</script>