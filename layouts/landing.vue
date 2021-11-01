<template lang="pug">
#landing
	nuxt
</template>

<script>
export default {
	name: "LandingsLayout"
}
</script>

<style lang="scss">
@import "~/assets/scss/layouts/landing";
</style>

<style>
@import "vue-slick-carousel/dist/vue-slick-carousel.css";
@import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
.textarea {
	resize: none;
}
#wrapper {
	flex: 1;
}
.section:not(.welcome) .mdi-cellphone-iphone:before {
	color: #020202;
}
.section:not(.welcome) .mdi-whatsapp:before {
	color: #075e54;
}
.section:not(.welcome) .mdi-telegram:before {
	color: #0088cc;
}
.section:not(.welcome) .mdi-vk-circle:before {
	color: #45668e;
}
.section:not(.welcome) .mdi-instagram:before {
	background: radial-gradient(circle at 30% 107%,#fdf497 0,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 90%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
.section:not(.welcome) .mdi-phone-plus:before {
	color: #7360f2;
}
.section:not(.welcome) .mdi-youtube:before {
	color: #ff0000;
}
.section:not(.welcome) .mdi-phone:before {
	color: blue;
}
.section:not(.welcome) .mdi-skype:before {
	color: #00aff0;
}
@media screen and (max-width: 425px) {
	.icon.move {
		display: none;
	}
}
@media screen and (max-width: 320px) {
	html {
		font-size: 11px;
	}
}
@media screen and (min-width: 321px) {
	html {
		font-size: 12px;
	}
}
@media screen and (min-width: 425px) {
	html {
		font-size: 14px;
	}
}
@media screen and (min-width: 769px) {
	html {
		font-size: 15px;
	}
}
@media screen and (min-width: 1024px) {
	html {
		font-size: 16px;
	}
}
@media screen and (min-width: 1216px) {
	html {
		font-size: 17px;
	}
}
@media screen and (min-width: 1408px) {
	html {
		font-size: 18px;
	}
}
</style>