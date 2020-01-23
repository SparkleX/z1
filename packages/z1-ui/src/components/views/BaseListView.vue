<script>
export default {
	methods: {
		onRowClick : function (event) {
			//alert(evt);
			var id = event.calories;
			this.$router.push({ path: `/${this.$data.$$object}/${id}`});
		}
	}
}
</script>