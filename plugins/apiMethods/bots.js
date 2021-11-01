export default ({ $axios }, inject) => {
	inject('getBots', id => {
		return $axios.get(`/bots/${id}`)
			.then(res => res.data)
	})

	inject('getBot', id => {
		return $axios.get(`/bot/${id}`)
			.then(res => res.data)
	})

	inject('createBot', ({ body, id }) => {
		return $axios.post(`/bot/create/${id}`, body)
			.then(res => res.data)
	})

	inject('updateBot', ({ id, body }) => {
		return $axios.put(`/bot/${id}`, body)
			.then(res => res.data)
	})

	inject('deleteBot', ({ id, body }) => {
		return $axios.post(`/bot/${id}/delete`, body)
			.then(res => res.data)
	})

	inject('addScene', ({ scene, id }) => {
		return $axios.post(`/bot/${id}`, scene)
			.then(res => res.data)
	})

	inject('updateScene', ({ scene, id }) => {
		return $axios.put(`/bot/${id}/scene`, scene)
			.then(res => res.data)
	})

	inject('getBotFunnel', id => {
		return $axios.get(`/bot/${id}/funnel`)
			.then(res => res.data)
	})
}