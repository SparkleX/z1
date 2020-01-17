<template>
	<div>
		<v-toolbar>
			<v-toolbar-title>{{label}}</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items>
				<v-btn id="idEdit" small :hidden="!viewMode" color="primary" v-on:click="onPressEdit">Edit</v-btn>
				<v-btn id="idSave" small :hidden="viewMode" color="primary" v-on:click="onPressSave">Save</v-btn>
				<v-btn id="idRemove" small :hidden="!viewMode" v-on:click="onPressRemove" ><v-icon>mdi-delete-circle</v-icon></v-btn>
				<v-btn id="idCancel" small :hidden="!editMode" v-on:click="onPressCancel" >Cancel</v-btn>
				<v-btn small :hidden="!addMode" v-on:click="onPressBack" >Back</v-btn>
				<v-btn small v-on:click="onPressTest">Test</v-btn>

			</v-toolbar-items>
			<!--  <template v-if="$vuetify.breakpoint.smAndUp">
			<v-btn icon>
			<v-icon>mdi-export-variant</v-icon>
			</v-btn>
			<v-btn icon>
			<v-icon>mdi-delete-circle</v-icon>
			</v-btn>
			<v-btn icon>
			<v-icon>mdi-plus-circle</v-icon>
			</v-btn>
			</template>-->
		</v-toolbar>	
	</div>
</template>

<script>
export default {
	props: { 
		label: { type:String },
		formMode: { type:String}
	},
	computed: {
		addMode : function () {
			return this.formMode == "addMode";
		},
		editMode : function () {
			return this.formMode == "editMode";
		},
		viewMode : function () {
			return this.formMode == "viewMode";
		}
	},	
	methods: {
		onPressEdit : function () {
			this.$parent.formMode = "editMode";
			//this.$emit('setFormMode',"editMode");
		},
		onPressCancel : function () {
			this.$parent.formMode = "viewMode";
			//this.$parent.onPressCancel(evt);
			//this.$emit('setFormMode',"viewMode");
		},
		onPressSave: function () {
			console.log(JSON.stringify(this.$parent.data));
			//Post
			this.$dialog.message.success('Saved');
			this.$parent.formMode = "viewMode";

		},
		onPressAdd: function () {

		},
		onPressRemove: function () {
			
		},
		onPressBack: function () {

		},
		onPressTest: async function () {
			//console.log(JSON.stringify(this.$parent.data));
			/*await this.$dialog.confirm({
  text: 'Do you really want to exit?',
  title: 'Warning'
})*/
			this.$dialog.message.success('Test')
		}
	}	
}
</script>