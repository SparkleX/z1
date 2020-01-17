<template>
	<div>
		<v-toolbar color='elevation-0'>
			<v-toolbar-title>{{title}}</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items>
				<v-btn small color="primary" v-on:click="onPressNew" >New</v-btn>
			</v-toolbar-items>
		</v-toolbar>
		<v-data-table
			:headers="headers"
			:items="data"
			:single-select="true"
			v-on:click:row="onRowClick"
			:item-key="itemKey"
			show-select>
		</v-data-table>
	</div>
</template>

<script>
import axios from "axios";

export default {
	props:["dataObject"],
	data () {
		return {
			title:"",
			selected: [],
			itemKey:"",
			headers: [],
			data: []
		}
	},
	methods: {
		onPressNew : function () {
			this.$router.push({ path: `/${this.dataObject}/undefined`});
		},
		onRowClick : function (evt) {
			var id = evt[this.itemKey];
			this.$router.push({ path: `/${this.dataObject}/${id}`});
		}		
	},
	async mounted () {
		var data = await axios.get(`/apis/view/${this.dataObject}.list.json`);
		this.headers = data.data.columns;
		this.itemKey = data.data.key;
		this.title = data.data.title;
		data = await axios.get(`/apis/data/${this.dataObject}List.json`);
		this.data = data.data;
	}		
}
</script>