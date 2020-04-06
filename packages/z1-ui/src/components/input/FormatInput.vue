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

<script lang="ts">
import { Component, Vue, Prop} from 'vue-property-decorator';

import * as ViewUtil from "@/components/views/ViewUtil"
@Component
export default class FormatInput extends Vue{
	@Prop()
	label = '';
	@Prop()
	dataBind  = '';
	@Prop()
	value = '';

	visible = true;
	focus = false;
	get metadata() {
		if(this.dataBind==undefined) {
			return false;
		}
		const col = (this as any).$metadata.getColumn(this.dataBind);
		return col;
	}
	get number() {
		const metaCol = this.metadata;
		switch(metaCol.type) {
		case "decimal":
		case "number":
			return true;
		}
		return false;
	}
	get formatText() {
		if(this.focus) {
			return this.value;
		}
		if(this.number) {
			let text = "0"
			if(this.value!=undefined) {
				text = this.value.toString();
			}
			const num = Number(text);
			const decimalPlace = (this as any).$metadata.getDecimalPlace(this.dataBind);
			return num.toFixed(decimalPlace);
		}
		return this.value;			
	}
	get counter() {
		if(this.dataBind==undefined) {
			return false;
		}
		const col = (this as any).$metadata.getColumn(this.dataBind);
		return (col.editSize!==null);
	}
	get editSize() {
		if(this.dataBind==undefined) {
			return false;
		}
		const col = (this as any).$metadata.getColumn(this.dataBind);
		return col.editSize;
	}	
	get dataEditable() {
		const view = ViewUtil.getView(this);

		return view.dataEditable;
	}

	onFocus  () {
		this.focus=true;
	}
	onInput(event: any) {
		this.$emit('input', event);
	}
	onBlur () {
		this.focus=false;
	}

}
</script>

