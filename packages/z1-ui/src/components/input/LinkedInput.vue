<template>
	<div>
		<!--<v-text-field :label="label" :readonly="!dataEditable" :value="value" @input="onInput($event)" :counter="counter" :maxlength="editSize"></v-text-field>  
		-->
		<v-autocomplete
			:label="label"
			:value="value"
			:items="states"
			item-text="desc"
            item-value="value"
			@input="onInput($event)">
			<template v-slot:item="data">
				<v-row>
					<v-col >{{data.item.desc}}</v-col>
					<v-col >{{data.item.desc}}</v-col>
					<v-col >{{data.item.value}}</v-col>
				</v-row>
			</template>
		</v-autocomplete>	
	</div>
</template>

<script lang="ts">
import { Watch, Component, Vue, Prop} from 'vue-property-decorator';

import * as ViewUtil from "@/components/views/ViewUtil"

@Component
export default class LinkedInput extends Vue{

	@Prop()
	label = '';
	@Prop()
	dataBind = '';
	@Prop()
	value = '';
	loading = false;
	get counter  () {
		if(this.dataBind==undefined) {
			return false;
		}
		const col = (this as any).$metadata.getColumn(this.dataBind);
		return (col.editSize!==null);
	}
	get editSize  () {
		if(this.dataBind==undefined) {
			return false;
		}
		const col = (this as any).$metadata.getColumn(this.dataBind);
		return col.editSize;
	}
	get dataEditable  () {
		const view = ViewUtil.getView(this);

		return view.dataEditable;
	}

	onInput (event: any) {
		this.$emit('input', event);
	}
	querySelections (v: any) {
		this.loading = true
		setTimeout(() => {
			/*this.items = this.states.filter(e => {
			//return ((e || '') as string).toLowerCase().indexOf((v || '').toLowerCase()) > -1
			return true;
			})*/
			this.loading = false
		}, 500)
	}	

	visible = true
	items= [];
	search= null;
	select= null;
	states= [
		{value:'1', desc:'Alabama'},
		{value:'2', desc:'Alaska'},
		{value:'3', desc:'American Samoa'},
		{value:'4', desc:'Arizona'},
		{value:'5', desc:'Arkansas'},
		{value:'6', desc:'California'},
		{value:'7', desc:'Colorado'},
		{value:'8', desc:'Connecticut'},
		{value:'9', desc:'Delaware'},
		{value:'10', desc:'District of Columbia'},
		{value:'11', desc:'Federated States of Micronesia'},
		{value:'12', desc:'Florida'},
		{value:'13', desc:'Georgia'},
		{value:'14', desc:'Guam'},
		{value:'15', desc:'Hawaii'}];
	@Watch('search')
	onSearchChanged (val: string) {
		val && val !== this.select && this.querySelections(val)
	}
}
</script>

