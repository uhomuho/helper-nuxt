<template lang="pug">
#funnel
	.head.is-grid( :class='`c-${stages.length}`' )
		.item.has-text-centered( 
			v-for='({ name }, i) in stages' :key='i'
			:class='colors[i]' )
			p {{ name }}
	.body.is-grid( :class='`c-${stages.length}`' )
		draggable.item(
			group="contacts"
			v-for='(stage, i) in stages' :key='i'
			:class='colors[i]'
			:list='contacts[stage.id]'
			handle=".move"
			@change='log($event, stage.id)')
			FunnelContact(
				v-for='(contact, index) in contacts[stage.id]'
				:key='index'
				:contact='contact')
</template>

<script>
import draggable from 'vuedraggable'

export default {
	name: "BotsFunnel",
	components: { draggable },
	props: ['contacts', 'stages'],
	data() {
		return {
			colors: ['danger', 'dark', 'info', 'light', 'turquoise', 'link', 'warning', 'success', 'orange']
		}
	},
	methods: {
		log(e, index) {
			if (e.added) {
				e.added.element.funnelScene = index
				e.added.element.customScene = index
				
				this.$updateContact(e.added.element)
					.then(() => this.$emit('update'))
			}
		}
	}
}
</script>

<style lang="scss" scoped>
#funnel {
	.head {
		.item {
			@include _flex();
			padding: 1rem;
			border-bottom: 3px solid;
			&.dark {
				border-color: $dark;
			}
			&.link {
				border-color: $link;
			}
			&.warning {
				border-color: $warning;
			}
			&.turquoise {
				border-color: $turquoise;
			}
			&.danger {
				border-color: $danger;
			}
			&.info {
				border-color: $info;
			}
			&.success {
				border-color: $success;
			}
			&.light {
				border-color: $grey-darker;
			}
			&.orange { 
				border-color: #f9944a;
			}
		}
	}
	.body {
		.item {
			min-height: 5rem;
			height: fit-content;
			padding: .5rem;
			border-bottom-left-radius: 4px;
			border-bottom-right-radius: 4px;
			&.dark {
				background: findLightColor($dark);
			}
			&.link {
				background: findLightColor($link);
			}
			&.warning {
				background: findLightColor($warning);
			}
			&.turquoise {
				background: findLightColor($turquoise);
			}
			&.danger {
				background: findLightColor($danger);
			}
			&.info {
				background: findLightColor($info);
			}
			&.success {
				background: findLightColor($success);
			}
			&.light {
				background: findLightColor($grey-darker);
			}
			&.orange { 
				background: findLightColor(#f9944a);
			}
		}
	}
}
</style>