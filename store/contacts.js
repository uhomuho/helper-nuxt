const $groupBy = (xs, key, type = {}) => {
	if (xs) {
		return xs.reduce(function (rv, x) {
			(rv[x[key]] = rv[x[key]] || []).push(x)
			return rv
		}, type)
	}
	return null
}

export const state = () => ({
	contacts: null,
	umi: true,
	pzm: false
})

export const getters = {
	contacts: state => state.contacts,
	contactsGrouped: state => $groupBy(state.contacts, 'stage'),
	formContacts: state => state.contacts ? state.contacts.filter(contact => contact.stage == "-1" && (contact.bot == 'umi' || !contact.bot)) : [],
	fromContacts: (state) => (wallet) => {
		const contact = state.contacts ? state.contacts.find(obj => obj.sigen.address == wallet) : []
		if (contact) { return contact._id }
		return null
	},
	funnelContacts: state => {
		let { umi, pzm } = state,
				contacts,
				basic = {
					0: [],
					1: [],
					2: [],
					3: [],
					4: [],
					5: [],
				}

		if (pzm && umi) {
			contacts = $groupBy(state.contacts, 'stage')
		}
		if (pzm && !umi) {
			contacts = $groupBy(state.contacts.filter(contact => contact.bot == "pzm"), 'stage')
		}
		if (!pzm && umi) {
			contacts = $groupBy(state.contacts.filter(contact => contact.bot == "umi"), 'stage')
		}
		if (!pzm && !umi) {
			contacts = basic
		}
		for (let key in contacts) {
			basic[key] = contacts[key]
		}
		return basic
	}
}

export const mutations = {
	setContacts: ( state, payload ) => state.contacts = payload,
	set: ( state, { field, value } ) => state[field] = value,
	setContact: ( state, payload ) => {
		let contacts = state.contacts
		for (let i in contacts) {
			let contact = contacts[i]
			if (contact._id == payload._id) contacts[i] = payload
		}
		state.contacts = null
		state.contacts = contacts
	},
	setStage: ( state, { stage, id } ) => {
		let contacts = state.contacts

		for (let i in contacts) {
			let contact = contacts[i]
			if (contact._id == id) contacts[i].stage = stage
		}

		state.contacts = null
		state.contacts = contacts
	}
}

export const actions = {
	getContacts({ commit }, id) {
		return this.$getContacts(id)
			.then(contacts => commit('setContacts', contacts))
	},
	saveContact({ commit }, contact) {
		return this.$updateContact(contact)
			.then(contact => {
				commit('setContact', contact)
				return contact
			})
	},
	createContact(context, contact) {
		return this.$createContact(contact)
			.then(contact => contact)
	},
	deleteContact({ dispatch, rootState }, id) {
		return this.$deleteContact(id)
			.then(() => dispatch('getContacts', rootState.leader.leader._id))
	}
}