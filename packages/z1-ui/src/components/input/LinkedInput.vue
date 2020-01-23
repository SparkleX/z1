<template>
	<div>
		<v-text-field :label="label" :readonly="!dataEditable" :value="value" @input="onInput($event)" :counter="counter" :maxlength="editSize"></v-text-field>  
	</div>
</template>

<script>
import * as ViewUtil from "@/components/views/ViewUtil"

export default {
	props: { 
		label: { type:String },
		dataBind: { type:String, required: true },
		value: { type:[String, Number] }
	},
	computed: {
		counter : function () {
			if(this.dataBind==undefined) {
				return false;
			}
			var col = this.$metadata.getColumn(this.dataBind);
			return (col.editSize!==null);
		},
		editSize : function () {
			if(this.dataBind==undefined) {
				return false;
			}
			var col = this.$metadata.getColumn(this.dataBind);
			return col.editSize;
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
		//editable: false,
		visible:true
	})
}
</script>

