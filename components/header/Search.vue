<template lang="pug">
b-field#contacts_search
	b-autocomplete(
		:placeholder='$t("searchContacts")'
		@typing='searchContacts')
</template>

<script>
import debounce from "lodash/debounce"

export default {
	name: "ContactsSearch",
	data() {
		return {
			results: []
		}
	},
	methods: {
		searchContacts: debounce(function(keyword) {
			if (keyword) {
				console.log(keyword)
			}
		}, 500)
	}
}
</script>