<template lang="pug">
b-dropdown.lang-selector.is-pulled-right(position="is-bottom-left" aria-role="menu")
	a(class="navbar-item", slot="trigger", role="button")
		SvgIcon( v-if='locale || leader' :name='!leader ? locale : leader.lang')
		b-icon(icon="menu-down")
	b-dropdown-item(
		v-if='locales'
		v-for='({ code, name }, i) in $_locales()' :key='i'
		@click='setLocale(code)' aria-role="menuitem")
		.media
			.media-left
				SvgIcon( :name='code' )
			.media-content
				span {{ name }}
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
	name: "LangSwitch",
	data() {
		return {
			locales: true
		}
	},
	computed: {
		...mapState('i18n', ['locale']),
		...mapState('leader', ['leader'])
	},
	methods: {
		...mapActions('leader', ['save']),
		...mapMutations('leader', ['setLang']),
		setLocale(code) {
			this.$i18n.setLocale(code)
			if (this.leader) {
				this.leader.lang = code
				this.setLang(code)
				this.save({ leader: this.leader, snackbar: false })
			}
		}
	},
	mounted() {
		if (this.leader && this.leader.lang) {
			this.$i18n.setLocale(this.leader.lang)
		}
	}
}
</script>