import Vue from 'vue'
import Buefy from 'buefy'
import VueClipboard from 'vue-clipboard2'
import VueDragDrop from 'vue-drag-drop'

Vue.use(VueDragDrop)
Vue.use(Buefy)
Vue.use(VueClipboard)

import moment from 'moment'

export default ({ store }, inject) => {

	inject('Snackbar', ( message, duration = 2500, type = 'is-primary', actionText = 'OK', position = 'is-bottom-right' ) => {
		Vue.prototype.$buefy.snackbar.open({ message, duration, type, actionText, position, queue: false })
	})

	inject('_locales', () => {
		return [
			{ code: "ru", name: "Русский" },
			{ code: "en", name: "English" },
		]
	})

	inject('groupBy', (xs, key, type = {}) => {
		if (xs) {
			return xs.reduce(function (rv, x) {
				(rv[x[key]] = rv[x[key]] || []).push(x)
				return rv
			}, type)
		}
		return null
	})

	inject('labels', () => {
		let result = []
		for (var i = 7; i >= 0; i--) {
			var d = new Date()
			d.setDate(d.getDate() - i)
			result.push(moment(d).format('DD.MM.YY'))
		}
		return result
	})

	inject('getChartData', (contacts) => {
		let data = []
		for (var i = 7; i >= 0; i--) {
			var d = new Date()
			d.setDate(d.getDate() - i)
			let formatted = moment(d).format('DD.MM.YY')
			data.push(contacts ? (contacts[formatted] ? contacts[formatted].length : 0) : 0)
		}
		return data
	})

	inject('groupByDates', (xs) => {
		if (xs) {
			xs.map(x => {
				x.updatedAt = moment(x.updatedAt).format('DD.MM.YY')
			})
		}
		return xs.reduce(function (rv, x) {
			(rv[x['updatedAt']] = rv[x['updatedAt']] || []).push(x)
			return rv
		}, {})
	})

	inject('onCopy', e => {
		let text = e.text.length > 40 ? e.text.slice(0, 15) + '.....' + e.text.slice(-15) : e.text
		Vue.prototype.$buefy.snackbar.open({ 
			message: store.state.i18n.messages.copied.replace('{0}', text),
			type: 'is-primary',
			position: 'is-bottom-right',
			queue: false
		})
	})
}