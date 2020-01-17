<template>
	<div>
		<s-list-view dataObject="Item" ></s-list-view>
	</div>
</template>

<script>
import ListBase from "@/share/views/BaseListView.vue"
import axios from "axios";

export default {
	mixins: [ListBase],
	data () {
		return {
			$$object:"Item",
			selected: [],
			headers: [
				{ text: 'Item Code',value: 'ItemCode' },
				{ text: 'Item Name', value: 'ItemName' }
			],
			data: []
		}
	},
	methods: {
		/*onRowClick : function () {
			//alert(evt);
			var id = 1;
			this.$router.push({ path: `/SalesOrder/${id}`});
		}*/
	},
	async mounted () {
		//axios.get('/apis/test.json').then(response => (this.menu = response.data));
		var data = await axios.get('/apis/data/ItemList.json');
		this.data = data.data;
	}		
}
</script>