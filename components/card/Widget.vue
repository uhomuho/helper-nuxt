<template lang="pug">
CardComponent
	.level.is-mobile
		.level-item
			.is-widget-label
				h3.subtitle.is-spaced
					| {{ label }}
				h1.title
					growing-number(:value='number', :prefix='prefix', :suffix='suffix')
		.level-item.has-widget-icon(v-if='icon')
			.is-widget-icon
				b-tooltip(v-if='tooltip' type="is-info" :label="tooltip" multilined )
					b-icon(:icon='icon', size='is-large', :type='type')
				b-icon(v-else :icon='icon', size='is-large', :type='type')
</template>

<script>
export default {
	name: "CardWidget",
	props: {
    icon: {
      type: String,
      default: null
    },
    number: {
      type: Number,
      default: 0
    },
    prefix: {
      type: String,
      default: null
    },
    suffix: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null
    },
    tooltip: {
      type: String,
      default: null
    }
  }
}
</script>