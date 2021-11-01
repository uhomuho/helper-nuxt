<template lang="pug">
.is-inline
	span( @click='isActive=true' ) {{ $t("agreement.button") }}
	b-modal( v-model='isActive' :width='600' )
		.card
			.card-header
				p.card-header-title
					b-icon( icon="account" )
					span {{ $t("agreement.button") }}
			.card-content
				.content.has-text-left
					p( v-html='$t("agreement.by_accepting")' )
					p {{ $t("agreement.user") }}

					ol
						li {{ $t("agreement.confirms") }}
						li {{ $t("agreement.acknowledges") }}
						li {{ $t("agreement.agrees") }}
						li {{ $t("agreement.conditions") }}

					p {{ $t("agreement.consent") }}

					p {{ $t("agreement.processing") }}

					p {{ $t("agreement.recognized") }}
					br
					br
					p( v-html='$t("agreement.services")' )

					p {{ $t("agreement.valid") }}

					p {{ $t("agreement.responsible") }}

					p {{ $t("agreement.right") }}

					p {{ $t("agreement.substantive") }}
</template>

<script>
export default {
	name: "UserAgreement",
	data() {
		return {
			isActive: false
		}
	}
}
</script>

<style lang="scss" scoped>
.is-inline {
	&>span {
		cursor: pointer;
		&:hover {	
			opacity: .8;
		}
	}
}
</style>