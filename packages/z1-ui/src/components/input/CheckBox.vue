<template>
	<div>
		<v-checkbox :label="label" :value="valueRaw" @click.stop="onInput($event)"></v-checkbox>
	</div>
</template>

<script>
import * as ViewUtil from "../views/ViewUtil"

export default {
	props: { 
		label: { type:String },
		dataBind: { type:String},
		dataChecked: { type:String, default:"Y" },
		dataUnchecked: { type:String, default: "N"},
		value: { type:String }
	},
	computed: {
		valueRaw : function() {
			return this.dataChecked==this.value;
		},
		dataEditable : function () {
			var view = ViewUtil.getView(this);
			return view.dataEditable;
		}
	},
	methods: {
		onInput : function () {
			var value = this.valueRaw;
			this.$emit('input', value?this.dataUnchecked:this.dataChecked);
		}
	},
	data: () => ({
		visible:true
	})
}
</script>

