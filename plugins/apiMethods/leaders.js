export default ({ $axios, $createChart }, inject) => {
	inject('auth', params => {
		return $axios.post('/leaders/authenticate', params)
			.then(res => res.data)
	})
	inject('authByToken', token => {
		return $axios.get(`/leaders/authenticate/${token}`)
			.then(res => res.data)
	})
	inject('registration', params => {
		return $axios.post('/leaders', params)
			.then(res => res.data)
	})
	inject('saveLeader', leader => {
		return $axios.put(`/leaders/${leader._id}`, leader)
			.then(res => res.data)
	})
	inject('verifyLeader', ({ id, params }) => {
		return $axios.put(`/leaders/${id}/verify`, params)
			.then(res => res.data)
	})
	inject('changePassword', ({ id, params }) => {
		return $axios.put(`/leaders/${id}/changePassword`, params)
			.then(res => res.data)
	})

	inject('getHistory', id => {
		return $axios.get(`/leaders/${id}/history`)
			.then(res => {
				const history = res.data
							
				let { chart } = $createChart(history)

				return { chart, history }
			})
	})

	inject('getReferrals', params => {
		return $axios.post('referrals/' + params.id, params)
			.then(res => res.data)
	})
}