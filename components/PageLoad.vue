<template lang="pug">
b-loading( v-model='loading' :is-full-page='false' )
</template>

<script>
export default {
	name: "PageLoading",
	data() {
		return {
			loading: true
		}
	}
}
</script>