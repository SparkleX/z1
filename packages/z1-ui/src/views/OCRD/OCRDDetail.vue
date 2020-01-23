<template>
	<div id="idView">
		<s-crud-bar label="Business Partner" :formMode="formMode" @setFormMode="setFormMode"></s-crud-bar>
		<v-tabs>		
			<v-tab-item>
				<v-row>
					<v-col  cols="12" sm="6">
						<v-card outlined>
							<v-card-title v-text="'Basic Information'"></v-card-title>
							<v-card-text>
								<s-select label="Type" v-model="d.CardType" dataBind="OCRD.CardType"></s-select>
								<s-linked-input label="BP Code" v-model="d.CardCode" dataBind="OCRD.CardCode"></s-linked-input>
								<s-linked-input label="Description" v-model="d.CardName" dataBind="OCRD.CardName"></s-linked-input>
								<s-format-input label="Balance" v-model="d.Balance" dataBind="OCRD.Balance"></s-format-input>
								<s-format-input label="Balance2" v-model="d.Balance" dataBind="OCRD.Balance"></s-format-input>
								<s-format-input label="BP Code" v-model="d.CardCode" dataBind="OCRD.CardCode"></s-format-input>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
			</v-tab-item>		
			<v-tab>General</v-tab>
		</v-tabs>

	</div>
</template>
<script>
import BaseDetailView from "@/components/views/BaseDetailView.vue"


export default {
	mixins: [BaseDetailView],
	data: function() {
		return {
			$$object:"OCRD"	
		}
	}

};
</script>
