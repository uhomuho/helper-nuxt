export const state = () => ({
	titleParams: [],
	next: null
})

export const mutations = {
	setTitle: ( state, payload ) => state.titleParams = payload,
	setNext: ( state, payload ) => state.next = payload
}

export const strict = false