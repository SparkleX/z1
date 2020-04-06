<template>
	<div>
		<v-checkbox :label="label" :value="valueRaw" @click.stop="onInput($event)"></v-checkbox>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'vue-property-decorator';

import * as ViewUtil from "../views/ViewUtil"
@Component
export default class CheckBox extends Vue{
	@Prop()
	label = '';
	@Prop()
	dataBind  = ''
	@Prop({ default: 'Y' })
	dataChecked = 'Y';
	@Prop({ default: "N"})
	dataUnchecked = 'N';
	@Prop()
	value = '';
	visible = true;
	get valueRaw () {
		return this.dataChecked==this.value;
	}
	get dataEditable () {
		const view = ViewUtil.getView(this);
		return view.dataEditable;
	}
	onInput () {
		const value = this.valueRaw;
		this.$emit('input', value?this.dataUnchecked:this.dataChecked);
	}	
}
</script>

