<template>
	<div>
		<v-text-field :label="label" :readonly="!dataEditable" :value="value" @input="onInput($event)"></v-text-field>  
	</div>
</template>

<script>
import * as ViewUtil from "@/share/views/ViewUtil"

export default {
	props: { 
		label: { type:String },
		dataBind: { type:String, required: true },
		value: { type:[String, Number] }
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
		//editable: false,
		visible:true
	})
}
</script>

