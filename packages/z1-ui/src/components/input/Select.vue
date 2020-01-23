<template>
	<div>
		<v-select :label="label" :value="value" :items="validValues" item-text="desc" item-value="value" @input="onInput($event)"></v-select>
	</div>
</template>

<script>
import * as ViewUtil from "@/components/views/ViewUtil"

export default {
	props: { 
		label: { type:String },
		dataBind: {type:String},
		value: { type:String }
	},
	computed: {
		validValues: function () {
			if(this.dataBind==undefined) {
				return [];
			}
			var col = this.$metadata.getColumn(this.dataBind);
			return col.values;
		},
		dataEditable : function () {
			var view = ViewUtil.getView(this);
			return view.dataEditable;
		}
	},
	methods: {
		onInput : function (event) {
			this.$emit('input', event);
		}
	},
	data: () => ({
		visible:true
	})
}
</script>
