<template>
	<div id="idView">
		<s-crud-bar label="Item Master Data" :formMode="formMode" @setFormMode="setFormMode"></s-crud-bar>
		<v-tabs>		
			<v-tab-item>
				<v-row>
					<v-col  cols="12" sm="6">
						<v-card outlined>
							<v-card-title v-text="'Basic Information'"></v-card-title>
							<v-card-text>
								<s-linked-input label="Item No" v-model="data.ItemCode" dataBind="OITM.ItemCode"></s-linked-input>
								<s-linked-input label="Description" v-model="data.ItemName" dataBind="OITM.ItemName"></s-linked-input>
								<v-select label="Item Group" v-model="data.ItemCode" dataBind="OITM.ItemCode"></v-select>
								<v-select label="UoM Group" v-model="data.ItemCode" dataBind="OITM.ItemCode"></v-select>
							</v-card-text>
						</v-card>
					</v-col>
					<v-col  cols="12" sm="6">
						<v-card outlined>
							<v-card-title v-text="'Item Type'"></v-card-title>
							<v-card-text>
								<v-select label="Item Type" ></v-select>
								<v-checkbox label="Inventory Item"></v-checkbox>
								<v-checkbox label="Sales Item"></v-checkbox>
								<v-checkbox label="Purchase Item"></v-checkbox>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
				<v-row>
					<v-col  cols="12" sm="6">
						<v-card outlined>
							<v-card-title v-text="'Accounting'"></v-card-title>
							<v-card-text>
								<v-checkbox label="Tax Liable"></v-checkbox>
							</v-card-text>
						</v-card>
					</v-col>
					<v-col  cols="12" sm="6">
						<v-card outlined>
							<v-card-title v-text="'Preferences'"></v-card-title>
							<v-card-text>
								<s-linked-input label="Manufacturer"></s-linked-input>
								<s-linked-input label="Shipping Type"></s-linked-input>
								<s-linked-input label="Advanced Rule Type"></s-linked-input>
								<v-checkbox :value="true" label="Active"></v-checkbox>
								<s-linked-input label="Remarks"></s-linked-input>
								<v-checkbox :value="true" label="Inactive"></v-checkbox>
								<s-linked-input label="Remarks"></s-linked-input>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
				<v-row>
					<v-col  cols="12" sm="6">
						<v-card outlined>
							<v-card-title v-text="'Additional Information'"></v-card-title>
							<v-card-text>
								<s-linked-input label="Image"></s-linked-input>
								<s-linked-input label="Remarks"></s-linked-input>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>								
			</v-tab-item>		
			<v-tab>General</v-tab>
			<v-tab-item>
			</v-tab-item>			
			<v-tab>Logistics</v-tab>	
			<v-tab>Purchasing</v-tab>	
			<v-tab>Sales</v-tab>	
			<v-tab>Inventory</v-tab>	
			<v-tab>Pricing</v-tab>	
			<v-tab>Properties</v-tab>	
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
