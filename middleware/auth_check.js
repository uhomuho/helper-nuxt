export default async ({ store, redirect, route }) => {
	if (!store.state.leader.leader && route.name !== 'login') {
		store.commit('setNext', route.path)
		return redirect('/login')
	}
}