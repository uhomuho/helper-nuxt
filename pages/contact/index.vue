<script>
export default {
	name: "Contact",
	async asyncData({ redirect }) {
		redirect(301, "/contact/new")
	}	
}
</script>