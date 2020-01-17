<!--<template>
	<div>
		<v-btn small color="error" v-on:click="onPressSave" >Save</v-btn>
		<v-btn small color="error" v-on:click="onPressRemove" >Remove</v-btn>
		<slot></slot>
	</div>
</template>-->

<script>
import axios from "axios";
import * as ViewUtil from "./ViewUtil"

export default {
	props: { 
	},
	data : function(){
		return {
			viewType: "detail",
			formMode: "viewMode",
			data : {}
		}
	},
	computed: {
		dataEditable : function () {
			return this.addMode || this.editMode;
		},
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
		onPressSave : function () {
			alert('Save');
		},
		onPressRemove : function () {
			alert('Remove');
		},
		onPressEdit : function (evt) {
			if(this.formMode==="viewMode") {
				ViewUtil.setEditable(this, true);
				this.formMode = "editMode";
				evt.currentTarget.hidden=true;
				document.getElementById("idSave").hidden = false;
				document.getElementById("idRemove").hidden = true;
				document.getElementById("idCancel").hidden=false;

			}			
		},
		onPressCancel : function () {
			if(this.formMode==="editMode") {
				ViewUtil.setEditable(this, false);
				this.formMode = "viewMode";
				document.getElementById("idSave").hidden = true;
				document.getElementById("idRemove").hidden = false;
				document.getElementById("idCancel").hidden=true;
				document.getElementById("idEdit").hidden=false;
			}			
		},
		setFormMode : function (val) {
			this.formMode = val;
		}
	},
	async mounted() {
		if(this.$route.params.id=="undefined") {
			this.formMode = "addMode";
		}
		else {
			var id = this.$route.params.id;
			var data = await axios.get(`/apis/data/Item/${id}.json`);
			this.data = data.data;
		}
	}

}
</script>