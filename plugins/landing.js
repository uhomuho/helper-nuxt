export default ({ $axios }, inejct) => {
	inejct('getLandingLeader', ({ username, query }) => {
		return $axios.get(`/leaders/${username}?${query}`)
			.then(res => res.data)
	})
}