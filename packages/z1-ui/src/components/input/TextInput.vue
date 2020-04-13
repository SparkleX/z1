<template>
	<v-text-field
		:label="label"
		:readonly="!editable"
		:value="value"
		@input="onInput($event)"
		v-show="visible"
		:type="'integer'"
		:maxlength="maxLength"
	></v-text-field>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import { Format } from "./Format";
@Component
export default class TextInput extends Vue {
	@Prop()
	label!: string;
	@Prop(String)
	dataBind!: string;
	@Prop([String, Number])
	value: string | number | undefined;
	@Prop({ default: true })
	editable!: boolean;
	@Prop({ default: true })
	visible!: boolean;
	@Prop({ type: Object })
	format!: Format;

	get maxLength(): number | undefined {
		if (this.format) {
			return this.format.maxLength;
		}
		return undefined;
	}

	@Emit('input')
	protected onInput(event: object) {
		return event;
	}
	/*protected onInput (event: object) {
		this.$emit('input', event);
	}*/
}
</script>

