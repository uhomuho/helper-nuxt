export default ({ $axios, $Snackbar }) => {
	$axios.onError(err => {
		if (process.client && err.response) {
			$Snackbar( `Response failed with status <b>${err.response.status}</b>`, 3000, 'is-danger' )
		}
		return console.error(err)
	})
}