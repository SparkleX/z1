<template>
	<div>
		<v-select :label="label" :value="value" :items="[{value:'Y',desc:'Yes'},{value:'N',desc:'No'}]" item-text="desc" item-value="value" @input="onInput($event)"></v-select>
	</div>
</template>

<script>
import * as ViewUtil from "@/components/views/ViewUtil"

export default {
	props: { 
		label: { type:String },
		dataBind: { type:String},
		value: { type:String }
	},
	computed: {
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
