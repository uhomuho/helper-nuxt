<template lang="pug">
#profile
	client-only
		Notification.is-danger( v-if='!leader.chat_id' )
			div
				b( v-html='$t("noti.noti_bot", [leader.username])' )
		Notification.is-danger( v-if='!leader.ref && !leader.umiRef' )
			div
				b {{ $t('profile.verify') }}
	tiles( :maxPerRow=2 )
		ProfileSocials.tile.is-child
		ProfileSettings.tile.is-child
	client-only
		ProfileVideos
	tiles
		ProfilePassword
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: "Profile",
	computed: {
		...mapState('leader', ['leader']),
		client() {
			return process.client
		}
	}
}
</script>