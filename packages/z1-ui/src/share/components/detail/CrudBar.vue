<template>
	<div>
		<v-toolbar>
			<v-toolbar-title>{{label}}</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items>
				<v-btn id="idEdit" small :hidden="!viewMode" color="primary" v-on:click="onPressEdit">Edit</v-btn>
				<v-btn id="idSave" small :hidden="!editMode" color="primary" v-on:click="onPressSave">Save</v-btn>
				<v-btn small :hidden="!addMode" color="primary" v-on:click="onPressAdd">Add</v-btn>
				<v-btn id="idRemove" small :hidden="!viewMode" v-on:click="onPressRemove" ><v-icon>mdi-delete-circle</v-icon></v-btn>
				<v-btn id="idCancel" small :hidden="!editMode" v-on:click="onPressCancel" >Cancel</v-btn>
				<v-btn small v-on:click="onPressBack"><v-icon>mdi-backspace</v-icon></v-btn>
				<v-btn small :hidden="true" v-on:click="onPressTest">Test</v-btn>
			</v-toolbar-items>
		</v-toolbar>	
	</div>
</template>

<script>
import axios from "axios";
import {NetUtil} from "@/share/components/net/NetUtil"

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
		getParentView : function() {
			return this.$parent;
		},
		getTableName : function() {
			return this.$parent.$data.$$object;
		},
		onPressEdit : function () {
			this.$parent.formMode = "editMode";
			//this.$emit('setFormMode',"editMode");
		},
		onPressCancel : function () {
			this.$parent.formMode = "viewMode";
			//this.$parent.onPressCancel(evt);
			//this.$emit('setFormMode',"viewMode");
		},
		onPressSave: async function () {
			//console.log(JSON.stringify(this.$parent.data));
			var id = this.$route.params.id;
			await axios.put(`/api/${this.getTableName()}/${id}`, this.$parent.data);
			this.$router.push({ path: `/${this.$parent.$data.$$object}/`});			

			//Post
			this.$dialog.message.success('Saved');
			this.$parent.formMode = "viewMode";

		},
		onPressAdd: async function () {
			try {
				var tableName = this.getTableName();
				var dataReturn = await NetUtil.create(tableName, this.$parent.data);
				var metaTable = await NetUtil.getTable(tableName);
				var pkCol = metaTable.primaryKey[0];
				var id = dataReturn[pkCol];
				this.$router.push({ path: `/${this.getTableName()}/${id}`});	
				this.$dialog.message.success('Operation Successful');
				this.$parent.formMode = "viewMode";
			}catch(error) {
				this.$dialog.message.error(error.message);
			}
		},
		onPressRemove: async function () {
			var id = this.$route.params.id;
			const res = await this.$dialog.confirm({
			text: 'Confirm to delete',
			title: 'Warning'
			});
			if(res) {
				await axios.delete(`/api/${this.getTableName()}/${id}`);
				this.$router.push({ path: `/${this.getTableName()}/`});
			}
		},
		onPressBack: function () {
			this.$router.push({ path: `/${this.getTableName()}/`});
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