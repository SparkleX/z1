<template>
	<v-text-field :label="label" 
		:readonly="!editable" 
		:value="value" 
		@input="onInput($event)" 
		v-show="visible"
		:type="'integer'"
		:maxlength="maxLength">
	</v-text-field>  
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'vue-property-decorator';

//import * as ViewUtil from "@/components/views/ViewUtil"
@Component
export default class TextInput extends Vue{
	@Prop()
	label!: string;
	@Prop(String)
	dataBind!: string;
	@Prop(Number)
	maxLength!: number;
	@Prop([String, Number])
	value: string|number|undefined;
	@Prop({ default: true})
	editable!: boolean;
	@Prop({ default: true})
	visible!: boolean;

	/*get metadata  () {
		if(this.dataBind==undefined) {
			return false;
		}
		const col = (this as any).$metadata.getColumn(this.dataBind);
		return col;
	}*/
	/*get editSize  () {
		if(this.dataBind==undefined) {
			return false;
		}
		const col = (this as any).$metadata.getColumn(this.dataBind);
		if(!col) {
			console.error(`${this.dataBind} is not exists`);
		}
		return col.editSize;
		return 100;
	}		*/
	/*get dataEditable  () {
		//const view = ViewUtil.getView(this);

		//return view.dataEditable;
		return true;
	}*/
	protected onInput (event: object) {
		this.$emit('input', event);
	}
}
</script>

