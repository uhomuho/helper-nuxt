export const state = () => ({
	leader: null
})

export const mutations = {
	setLeader: (state, payload) => state.leader = payload,
	setLang: (state, payload) => state.leader.lang = payload
}

export const actions = {
	auth({ commit }, params) {
		return this.$auth(params)
			.then(payload => {
				if (payload && payload.message) return payload.message
				if (payload) {
					commit('setLeader', payload)
					this.$cookies.set('token', payload.token, { maxAge: 60 * 60 * 24 * 7 })
					return { message: "welcome_leader", payload: [ payload.username ] }
				}
				return null
			})
	},
	authByToken({ commit }, token) {
		return this.$authByToken(token)
			.then(payload => {
				if (payload) commit('setLeader', payload)
				return payload
			})
	},
	reg({ commit }, params) {
		return this.$registration(params)
			.then(payload => {
				if (payload.message) return payload.message
				if (payload && typeof payload == 'object') {
					commit('setLeader', payload)
					this.$cookies.set('token', payload.token, { maxAge: 60 * 60 * 24 * 7 })
					return { message: "welcome_leader", payload: [ payload.username ] }
				}
			})
	},
	save({ commit, rootState }, { leader, snackbar }) {
		return this.$saveLeader(leader)
			.then(leader => {
				commit('setLeader', leader)
				if (snackbar) this.$Snackbar(rootState.i18n.messages.account_saved)
			})
	},
	verify({ commit, rootState }, { leader, signature, umiSignature }) {
		let body = {
			id: leader._id,
			params: {
				address: leader.sigen.address,
				umiAddress: leader.sigen.umiAddress,
				signature, umiSignature 
			}
		}
		return this.$verifyLeader(body)
			.then(({ err, leader, message }) => {
				if (!err) commit('setLeader', leader)
				this.$Snackbar( rootState.i18n.messages.profile.settings[message] )
			})
	},
	changePassword({ commit, rootState }, body) {
		return this.$changePassword(body)
			.then(leader => {
				if (leader.message) return this.$Snackbar( rootState.i18n.messages.profile.password[leader.message] )
				commit('setLeader', leader)
				this.$Snackbar(rootState.i18n.messages.account_saved)
			})
	}
}