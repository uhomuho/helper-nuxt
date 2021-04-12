<template lang="pug">
.notification(v-if='!clicked')
	.is-pulled-right( v-if='from' )
		button.button.is-small.is-white(type='button' @click='dismiss') {{ $t("noti.gotit") }}
	slot
</template>

<script>
export default {
	name: "Notification",
  props: {
    from: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      clicked: this.$cookies.get(`clicked_${this.from}`) || (`clicked_${this.from}`) == 'true' 
    }
  },
  methods: {
    dismiss () {
      this.clicked = true
			this.$cookies.set(`clicked_${this.from}`, 'true')
    }
  },
}
</script>