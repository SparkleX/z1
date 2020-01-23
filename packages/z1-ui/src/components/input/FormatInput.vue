<template>
	<div>
		<v-text-field :label="label" 
			:readonly="!dataEditable" 
			:value="formatText" 
			@input="onInput($event)" 
			@blur="onBlur($event)"
			@focus="onFocus()" 
			:reverse="number" 
			:counter="counter" 			
			:maxlength="editSize">
		</v-text-field>  
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
	data: () => ({
		//editable: false,
		visible:true,
		focus: false
	}),	
	computed: {
		metadata : function () {
			if(this.dataBind==undefined) {
				return false;
			}
			var col = this.$metadata.getColumn(this.dataBind);
			return col;
		},
		number : function () {
			var metaCol = this.metadata;
			switch(metaCol.type) {
			case "decimal":
			case "number":
				return true;
			}
			return false;
		},
		formatText: function() {
			if(this.focus) {
				return this.value;
			}
			if(this.number) {
				var text = "0"
				if(this.value!=undefined) {
					text = this.value.toString();
				}
				var num = Number(text);
				var decimalPlace = this.$metadata.getDecimalPlace(this.dataBind);
				return num.toFixed(decimalPlace);
			}
			return this.value;			
		},
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
		onFocus : function () {
			this.focus=true;
		},
		onInput : function (event) {
			this.$emit('input', event);
		},
		onBlur: function () {
			this.focus=false;
		}
	},

}
</script>

