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
								<s-linked-input label="Item No" v-model="d.ItemCode" dataBind="OITM.ItemCode"></s-linked-input>
								<s-linked-input label="Description" v-model="d.ItemName" dataBind="OITM.ItemName"></s-linked-input>
								<v-select label="Item Group" v-model="d.ItemCode" dataBind="OITM.ItemCode"></v-select>
								<v-select label="UoM Group" v-model="d.ItemCode" dataBind="OITM.ItemCode"></v-select>
							</v-card-text>
						</v-card>
					</v-col>
					<v-col  cols="12" sm="6">
						<v-card outlined>
							<v-card-title v-text="'Item Type'"></v-card-title>
							<v-card-text>
								<s-checkbox label="Inventory Item" v-model="d.IsStock" dataBind="OITM.IsStock"></s-checkbox>
								<s-checkbox label="Sales Item" v-model="d.IsSales" dataBind="OITM.IsSales" ></s-checkbox>
								<s-checkbox label="Purchase Item" v-model="d.IsSales" dataBind="OITM.IsSales"></s-checkbox>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
				<v-row>
					<v-col  cols="12" sm="6">
						<v-card outlined>
							<v-card-title v-text="'Accounting'"></v-card-title>
							<v-card-text>
								<s-select label="Tax Liable" v-model="d.TaxLiable" dataBind="OITM.TaxLiable"></s-select>
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
import BaseDetailView from "@/components/views/BaseDetailView.vue"
import { Component, Vue, Prop} from 'vue-property-decorator';


export default {
	mixins: [BaseDetailView],
	data: function() {
		return {
			$$object:"OITM"	
		}
	},
	methods: {
		onPressSave : function () {
			alert('Save2');
			BaseDetailView.methods.onPressSave();
		}
	}
};
</script>
