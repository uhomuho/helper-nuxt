export default async ({ app, params, $axios, isDev }) => {
	let lang_reg = /^[a-z]{2}$/igm,
			username = lang_reg.test(params.lang) ? params.username : params.lang

	let { metrics, metrics_id } = await $axios.get(`/leaders/${username}/metrics`).then(res => res.data)

	if (metrics) {
		app.head.script.push({ type: "text/javascript", innerHTML: metrics.match(/<script[^>]*>([\s\S]*?)<\/script>/)[1] })
	}

	if (metrics_id) {
		app.head.metaInfo = {
			noscript: [
				{ innerHTML: `\<div\>\<img src\=\"https://mc.yandex.ru/watch/${metrics_id}\" style=\"position\:absolute\; left\:\-9999px\;\" alt=\"\" \/\>\<\/div\>` }
			]
		}
	}
	app.head.__dangerouslyDisableSanitizers = ['script']
}