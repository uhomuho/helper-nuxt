<template lang="pug">
p( :class='{ flex: flex, "is-inline": inline }' )
	span( v-if='text && !onlyIcon' ) {{ text }}&nbsp;
	a( v-if='hasLink && !onlyIcon' target="_blank" :href='link' ) {{ copyText || link }}
	a( v-else-if='!hasLink && !onlyIcon' v-clipboard:copy='link' v-clipboard:success='$onCopy' ) {{ copyText || link }}
	b-icon.copy( 
		v-if='!copyText'
		icon="content-copy"
		:size='isSmall ? "is-small" : "is-medium"'
		v-clipboard:copy='link'
		v-clipboard:success='$onCopy' )
	br( v-if='!onlyIcon' )
	slot
</template>

<script>
export default {
	name: "Copy",
	props: {
		link: String,
		text: String,
		copyText: String,
		inline: {
			type: Boolean,
			default: false
		},
		hasLink: {
			type: Boolean,
			default: true
		},
		isSmall: {
			type: Boolean,
			default: true
		},
		flex: {
			type: Boolean,
			default: false
		},
		onlyIcon: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="scss" scoped>
.copy {
	margin-left: .25rem;
	cursor: pointer;
	transition: all .3s ease-in-out;
	&:hover {
		opacity: .7;
	}
}
.flex {
	@include _flex(center, flex-start);
}
</style>