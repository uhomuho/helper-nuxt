<template lang="pug">
b-dropdown.lang-selector(:position='position' aria-role="menu")
	a.navbar-item( slot="trigger" role="button" :class='{ "is-pulled-right": float }' )
		//- SvgIcon( v-if='locale || leader' :name='!leader ? locale : leader.lang' )
		img( v-if='locale || leader' :src='getImg(!leader ? locale : leader.lang)' )
		b-icon(icon="menu-down")
	b-dropdown-item(
		v-if='locales'
		v-for='({ code, name }, i) in $_locales()' :key='i'
		@click='setLocale(code)' aria-role="menuitem")
		.media
			.media-left
				//- SvgIcon( :name='code' )
				img( :src='getImg(code)' style="max-height: 1.75rem;" )
			.media-content
				span {{ name }}
	b-dropdown-item(
		v-if='es'
		@click='setLocale("es")'
		aria-role="menu-item")
			.media
				.media-left
					img( :src='getImg("es")' style="max-height: 1.75rem;" )
					//- SvgIcon( name="es" )
				.media-content
					span Español
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
	name: "LangSwitch",
	props: {
		position: {
			type: String,
			default: "is-bottom-left"
		},
		float: {
			type: Boolean,
			default: true
		},
		es: {
			type: Boolean,
			default: false
		}
	},
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
		},
		getImg(code) {
			return require(`@/assets/sprite/svg/${code}.svg`)
		}
	},
	mounted() {
		if (this.leader && this.leader.lang) {
			this.$i18n.setLocale(this.leader.lang)
		}
	}
}
</script>

<style lang="scss" scoped>
.dropdown::v-deep {
	&.no-float {
		float: unset!important;
	}
	.dropdown-menu {
		width: 9rem;
	}
}
</style>