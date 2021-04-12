<template lang="pug">
#board
	.head
		.item( 
			v-for='({ index, name, color }, i) in steps' 
			:key='index' 
			:class='`${color}`')
			p {{ $t(`funnel.steps.${name}`) }}
	.body
		draggable.item(
			group="contacts"
			v-for='({ index, name, color }, i) in steps'
			:key='index'
			:class='color'
			:list='contacts[index]'
			handle=".move"
			@change='log($event, index)')
			FunnelContact(
				v-if='contacts[index]'
				v-for='(contact, i) in contacts[index]'
				:key='i'
				:contact='contact')
</template>

<script>
import draggable from 'vuedraggable'
import { mapMutations, mapActions } from 'vuex'

export default {
	name: "FunnelBoard",
	components: { draggable },
	props: ['contacts'],
	computed: {
		steps() {
			return [
        {
          index: 0, name: 'added', color: 'dark'
        },
        {
          index: 1, name: 'contacts', color: 'link'
        },
        {
          index: 2, name: 'sigen_wal', color: 'warning'
        },
        {
          index: 3, name: 'roy_wal', color: 'turquoise'
        },
        {
          index: 4, name: 'coins', color: 'danger'
        },
        {
          index: 5, name: 'in_club', color: 'info'
        }
      ]
		}
	},
	methods: {
		...mapMutations('contacts', ['setStage']),
		...mapActions('contacts', ['saveContact']),
		log(e, index) {
			if (e.added) {
				this.setStage({ stage: index, id: e.added.element._id })
				
				e.added.element.stage = index
				this.saveContact(e.added.element)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
#board {
	.head,
	.body {
		display: grid;
		grid-gap: 0rem;
		grid-template-columns: repeat(6, 1fr);
	}
	.head {
		.item {
			@include _flex();
			padding: 1rem;
			border-bottom: 3px solid;
			&.dark {
				border-color: #2e323a;
			}
			&.link {
				border-color: #4a9ff9;
			}
			&.warning {
				border-color: #f9944a;
			}
			&.turquoise {
				border-color: #01d1b2;
			}
			&.danger {
				border-color: #d15258;
			}
			&.info {
				border-color: #1b4364;
			}
			p {
				font-weight: 600;
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
				background: findLightColor(#2e323a);
			}
			&.link {
				background: findLightColor(#4a9ff9);
			}
			&.warning {
				background: findLightColor(#f9944a);
			}
			&.turquoise {
				background: findLightColor(#01d1b2);
			}
			&.danger {
				background: findLightColor(#d15258);
			}
			&.info {
				background: findLightColor(#1b4364);
			}
			.contact {
				&+.contact {
					margin-top: .5rem;
				}
			}
		}
	}
}
</style>