<template>
	<div id="idView">
		<s-crud-bar label="Sales Order"></s-crud-bar>
  <!--<v-toolbar>
      <v-toolbar-title>Sales Order</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
		<v-btn id="idEdit" small color="primary" v-on:click="onPressEdit" >Edit</v-btn>
		<v-btn id="idSave" small color="primary" hidden="true" v-on:click="onPressSave" >Save</v-btn>
		<v-btn id="idRemove" small v-on:click="onPressRemove" ><v-icon>mdi-delete-circle</v-icon></v-btn>
		<v-btn id="idCancel" small hidden="true" v-on:click="onPressCancel" >Cancel</v-btn>
		<v-btn id="idAdd" small hidden="true" v-on:click="onPressAdd" >Cancel</v-btn>
      </v-toolbar-items>

    <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn icon>
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-delete-circle</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
      </template>
    </v-toolbar>-->		
		<v-tabs>		
			<v-tab-item>
				<s-linked-input label="Business Partner" value="C001" dataBind="ORDR.CardCode"></s-linked-input>
				<s-linked-input label="Note" value="~" dataBind="ORDR.Comments"></s-linked-input>

				<v-text-field readonly label="Label" value="123"></v-text-field>  
				<v-select :items="[1,2,3,4]" label="Standard" ></v-select>
				<label-date-picker label="Date From" v-model="dateFrom"></label-date-picker>
			</v-tab-item>		
			<v-tab>付款</v-tab>
			<v-tab-item>
				<v-btn small color="error" v-on:click="onPressTest" >Test</v-btn>
			</v-tab-item>				
			<v-tab>财务</v-tab>
		</v-tabs>
	</div>
</template>
<script>
import BaseDetailView from "@/share/views/BaseDetailView.vue"


export default {
	mixins: [BaseDetailView],

	name: 'HelloWorld',
	data: function() {
		return {
			dateFrom: "06/06/2020"
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
		},		
		/*onPressEdit : function () {
			this.scan(this);
		},*/	
		/*scan: function(item)	{
			for(let c of item.$children) {
				//console.log(c.$options.name);
				if(c.attrs$) {
					console.log(c.attrs$.id);
				}
				//c.$el
				this.scan(c);
			}
		}*/
	},  
};
</script>
