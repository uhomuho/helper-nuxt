<template lang="pug">
.loading( 
	v-if='show'
	:class='{ "fade-out": !loading }' )
	img( 
		src="~/assets/img/roy_logo.svg" )
</template>

<script>
export default {
	name: "Loading",
	props: ['loading'],
	data() {
		return {
			show: true
		}
	},
	watch: {
		loading(loading) {
			if (!loading) {
				setTimeout(() => {
					this.show = false
				}, 300)
			}
			if (loading) this.show = true
		}
	}
}
</script>

<style lang="scss" scoped>
.loading {
	@include _flex();
	height: 100%;
	width: 100%;
	background: $white;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 99;
	img {
		animation: breathing 1.5s infinite;
	}
	&.fade-out {
		opacity: 0;
		transition: all .3s ease-in-out;
		img {
			animation: unset;
			transform: scale(3);
			opacity: 0;
			transition: all .3s ease-in-out
		}
	}
}
</style>