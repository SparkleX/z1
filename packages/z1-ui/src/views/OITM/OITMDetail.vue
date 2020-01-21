<template>
	<div id="idView">
		<s-crud-bar label="Item Master Data" :formMode="formMode" @setFormMode="setFormMode"></s-crud-bar>

		<v-tabs>		
			<v-tab-item>
				<s-linked-input label="Item Code" v-model="data.ItemCode" dataBind="OITM.ItemCode"></s-linked-input>
				<s-linked-input label="Item Name" v-model="data.ItemName" dataBind="OITM.ItemName"></s-linked-input>
				<s-linked-input label="Item Code3" v-model="data.ItemCode" dataBind="OITM.ItemCode"></s-linked-input>

			</v-tab-item>		
			<v-tab>General</v-tab>
			<v-tab-item>
			</v-tab-item>				
			<v-tab>Attachment</v-tab>
		</v-tabs>
	</div>
</template>
<script>
import BaseDetailView from "@/share/views/BaseDetailView.vue"


export default {
	mixins: [BaseDetailView],
	data: function() {
		return {
			$$object:"OITM",
			dateFrom: "06/06/2020"	,
			ItemCode :"1"		
		}
	},
	methods: {
		onPressTest : function () {
			alert(this.$route.params.id);
			//this.$emit('input', event);
		},
		onPressSave : function () {
			alert('Save2');
			BaseDetailView.methods.onPressSave();
		}
	}
};
</script>
