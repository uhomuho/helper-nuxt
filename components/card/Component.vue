<template lang="pug">
.card
	header.card-header(v-if='title')
		p.card-header-title
			b-icon(v-if='icon' :icon='icon' custom-size='default')
			| {{ title }}
		a.card-header-icon(v-if='headerIcon' aria-label='more options' @click.prevent='headerIconClick')
			b-icon(:icon='headerIcon' custom-size='default')
	.card-content
		slot
</template>

<script>
export default {
	name: "CardComponent",
	props: {
    title: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    headerIcon: {
      type: String,
      default: null
    }
  },
  methods: {
    headerIconClick () {
      this.$emit('header-icon-click')
    }
  }
}
</script>