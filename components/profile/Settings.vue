<template lang="pug">
Card( :title='$t("profile.settings.title")' icon="account" )
	form.form( @submit.prevent='update' )
		ProfileUmi( 
			:leader='leader'
			@update='update' )
		hr
		//- ProfilePzm( 
			:leader='leader'
			@update='update' )
		//- hr
		b-field( :label='$t("profile.settings.y_metric")' )
			b-input(
				type="textarea"
				v-model='leader.metrics'
				@blur='update'
				:placeholder='$t("profile.settings.y_placeholder")'
				size='is-small')
		hr
		b-field(
			:label='$t("profile.settings.design_title")')
		//- .content
			p {{ $t("profile.settings.design_desc") }}
		b-field
			b-select( 
				v-model='leader.landing'
				@input='update'
				:placeholder='$t("profile.settings.design")'
				expanded)
				option(
					v-for='({ id, name }, i) in landings'
					:value='id'
					:key='id') {{ name }}
		hr
		b-field
			.control
				button.button.is-primary( :class='{ "is-loading": loading }' ) {{ $t('save') }}
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
	name: "ProfileSettings",
	data() {
		return { 
			loading: false,
			validUmi: true,
			validPzm: true,
			landings: [
        {
          id: 0,
          name: this.$t('profile.settings.designs.1')
        },
        {
          id: 1,
          name: this.$t('profile.settings.designs.2')
        },
        {
          id: 2,
          name: this.$t('profile.settings.designs.3')
        }
      ]
		} 
	},
	computed: {
		...mapState('leader', ['leader'])
	},
	methods: {
		...mapActions('leader', ['save']),
		update() {
			if (!this.validUmi || !this.validPzm) return this.$Snackbar( this.$t("profile.not_all") )
			if (this.name && this.name.trim().length == 0) return this.$Snackbar( this.$t("profile.spaces") )
			this.loading = true
			this.save({ leader: this.leader, snackbar: true })
				.then(() => this.loading = false)
		},
		setValid({ field, valid }) {
			this[field] = valid
		}
	}
}
</script>