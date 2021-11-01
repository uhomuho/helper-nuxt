export default async ({ app, beforeNuxtRender }) => {
	let { $cookies, store } = app,
			token = $cookies.get('token')
	if (token && !store.state.leader.leader) {
		await store.dispatch('leader/authByToken', token)
	}
}