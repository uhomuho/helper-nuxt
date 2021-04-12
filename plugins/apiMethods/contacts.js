export default ({ $axios, $groupBy }, inject) => {
	inject('getContacts', id => {
		return $axios.get(`/leaders/${id}/contacts`)
			.then(res => {
				let contacts = res.data
				if (contacts && contacts.length > 0) return contacts
				return []
			})
	})

	inject('updateContact', contact => {
		let id = contact._id ? contact._id : contact.id
		return $axios.put(`/contacts/${id}`, contact)
			.then(res => res.data)
	})

	inject('createContact', contact => {
		return $axios.post('/contacts', contact)
			.then(res => res.data)
	})

	inject('deleteContact', id => {
		return $axios.delete(`contacts/${id}`)
	})

	inject('getContact', id => {
		return $axios.get(`/contact/${id}`)
			.then(res => res.data)
	})

}