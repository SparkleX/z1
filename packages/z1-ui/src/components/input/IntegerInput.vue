<template>
	<v-text-field :label="label" 
		:readonly="!editable" 
		:value="value" 
		@input="onInput($event)" 
		v-show="visible"
		:maxlength="maxLength">
	</v-text-field>  
</template>

<script lang="ts">
import TextInput from './TextInput.vue';
import { Component, Vue, Prop} from 'vue-property-decorator';
@Component
export default class IntegerInput extends TextInput{
	/*@Prop()
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

	protected onInput (event: object) {
		this.$emit('input', event);
	}*/
}
</script>

