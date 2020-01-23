<template>
	<div id="idView">
		<s-crud-bar label="Sales Order" :formMode="formMode" @setFormMode="setFormMode"></s-crud-bar>
		<v-tabs>		
			<v-tab-item>
				<v-row>
					<v-col  cols="12" sm="6">
						<v-card outlined>
							<v-card-title v-text="'Basic Information'"></v-card-title>
							<v-card-text>
								<s-linked-input label="BP Code" v-model="d.CardCode" dataBind="ORDR.CardCode"></s-linked-input>
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
			$$object:"ORDR"	
		}
	}

};
</script>
