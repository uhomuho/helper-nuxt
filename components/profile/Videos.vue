<template lang="pug">
.tile.is-ancestor
	.tile.is-parent.is-6(
		v-for='({ index, title, description, id }, i) in videos'
		:key='i')
		Card.tile.is-child(
			:title='$t("profile.videos.video", [index+1])'
			icon="youtube" headerIcon="close" 
			@header-icon-click="removeVideo(index)")
			form.form( @submit.prevent='updateVideo({ index, title, description })' )
				b-field
					b-input(
						type='input'
						size='is-small'
						:placeholder='$t("profile.videos.url")'
						v-model='videos[i].id'
						@change.native='checkYoutube'
						@keyup.native='checkYoutube')
				b-field(
					:message='title && !validTitle(title) ? $t("profile.videos.title_valid") : null'
					:type='title && !validTitle(title) ? "is-danger" : ""')
					b-input(
						type='input'
						size='is-small'
						:placeholder='$t("profile.videos.title")'
						v-model='videos[i].title'
					)
				b-field(
					:message='description && !validDescription(description) ? $t("profile.videos.description.valid") : null'
					:type='description && !validDescription(description) ? "is-danger" : ""')
					b-input(
						type='textarea'
						size='is-small'
						rows="3"
						maxlength="150"
						:placeholder='$t("profile.videos.description")',
						v-model='videos[i].description')
				hr
				button.button.is-info( :class="{ 'is-loading': loading }" ) {{ $t('save') }}
	.tile.is-parent.is-6( v-if='videos.length < 2' )
		Card.tile.is-child(
			:title='$t("profile.videos.add")'
			icon="youtube"
			headerIcon="plus"
			@header-icon-click='addVideo')
			.content
				p( v-html='$t("profile.videos.can_remove")' )
				hr
				p( v-html='$t("profile.videos.to_add")' )
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
	name: "ProfileVideos",
	data() {
		return {
			loading: false,
			defaultVideos: [
				{
					index: 0,
					id: 'puFK04UF6ak',
					title: this.$t('profile.videos.1.title'),
					description: this.$t('profile.videos.1.description')
				},
				{
					index: 1,
					id: 'bftvFvursUM',
					title: this.$t('profile.videos.2.title'),
					description: this.$t('profile.videos.2.description')
				}
			]
		}
	},
	computed: {
		...mapState('leader', ['leader']),
    videos: {
      get: function() {
        return this.leader.videos ? this.leader.videos : this.defaultVideos
      },
      set: function (value) {
				if (this.leader.videos) this.leader.videos = value || null
			}
    }
	},
	methods: {
		...mapActions('leader', ['save']),
		validDescription(description) {
			return description.length <= 150
		},
		validTitle(title) {
			return title.length <= 50
		},
		updateVideo({ title, description, index }) {
			if (this.validDescription(description)) {
				if (this.validTitle(title)) return this.update()
				
				this.$Snackbar( this.$t('profile.videos.check_title', [index + 1]) )
			} else {
				this.$Snackbar( this.$t('profile.videos.check_description', [index + 1]) )
			}
			
		},
		async update () {
      this.loading = true
      this.leader.videos = this.videos
      await this.save({ leader: this.leader, snackbar: true })
      this.loading = false
    },
		checkYoutube () {
      var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
      this.videos = this.videos.map(el => {
        if (el.id.length === 11) {
          return el
        }
        let match = el.id.match(regExp)
        el.id = (match && match[7].length === 11) ? match[7] : ''
        return el
      })
    },
		setVideoIndex() {
			for (let index in this.videos) {
				this.videos[index].index = parseInt(index)
			}
		},
    removeVideo (index) {
      this.videos = this.videos.filter(el => el.index !== index)
			this.setVideoIndex()
			this.update()
    },
    addVideo () {
      if (this.videos && this.videos.length < this.defaultVideos.length) {
        this.videos.push(this.defaultVideos[this.videos.length])
      }
			this.setVideoIndex()
			this.update()
    }
	},
	mounted() {
		
	}
}
</script>