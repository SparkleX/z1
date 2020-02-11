<template>
	<div>
		<v-text-field :label="label" :readonly="!dataEditable" :value="value" @input="onInput($event)" :counter="counter" :maxlength="editSize"></v-text-field>  
		<v-autocomplete
			:label="label"
			:value="value"
			:items="states"
			item-text="desc"
            item-value="value"
			@input="onInput($event)">
			<template v-slot:item="data">
				{{data.item.desc}}
			</template>
		</v-autocomplete>	
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
		},

		querySelections (v) {
			this.loading = true
			setTimeout(() => {
				this.items = this.states.filter(e => {
				return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
				})
				this.loading = false
			}, 500)
		},		
	},
	data: () => ({
		//editable: false,
		visible:true,
		items: [],
		search: null,
        select: null,
		states: [
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
          {value:'15', desc:'Hawaii'}]
	}),
	watch: {
		search (val) {
			val && val !== this.select && this.querySelections(val)
		},
    },	
}
</script>

