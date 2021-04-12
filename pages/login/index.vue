<template lang="pug">
#auth
</template>

<script>
export default {
	name: "Login",
	asyncData({ store, redirect }) {
		if (store.state.leader.leader) redirect(301, '/dashboard')
	}
}
</script>