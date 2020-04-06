<template>
	<div>
		<v-select :label="label" :value="value" :items="validValues" item-text="desc" item-value="value" @input="onInput($event)"></v-select>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'vue-property-decorator';

import * as ViewUtil from "@/components/views/ViewUtil"
@Component
export default class Select extends Vue{
	@Prop()
	label = '';
	@Prop()
	dataBind = '';
	@Prop()
	value = '';
	get validValues () {
		if(this.dataBind==undefined) {
			return [];
		}
		const col = (this as any).$metadata.getColumn(this.dataBind);
		return col.values;
	}
	get dataEditable () {
		const view = ViewUtil.getView(this);
		return view.dataEditable;
	}
	onInput (event: any) {
		this.$emit('input', event);
	}
	visible = true;
}
</script>
