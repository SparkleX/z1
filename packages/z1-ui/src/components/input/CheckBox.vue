<template>
	<div>
		<v-checkbox :label="label" 
		v-model="value"
		:value-true="value-true"
		:value-false="value-false"
		@change="change"
		></v-checkbox>
	<!--	<v-checkbox :label="label" v-model="value" @click.stop="onInput($event)"></v-checkbox>
		<input type="checkbox" :check="value" @click.stop="onInput($event)"/>-->
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'vue-property-decorator';

//import * as ViewUtil from "../views/ViewUtil"
@Component
export default class CheckBox extends Vue{
	@Prop()
	label!: string;
	@Prop()
	dataBind!: string;
	@Prop(Boolean)
	value!: boolean;

	/*visible = true;
	set valueRaw(value) {
		this.valueRaw1 = value;
	}
	get valueRaw () {
		return this.valueRaw1;
	}*/
	/*get dataEditable () {
		//const view = ViewUtil.getView(this);
		return view.dataEditable;
	}*/
	/*onInput () {
		//const value = this.valueRaw;
		//this.$emit('input', value?this.dataUnchecked:this.dataChecked);
		this.$emit('input', !this.value);
	}	*/
	change(evt: boolean) {
        this.$emit('input', evt);
	}
}
</script>

