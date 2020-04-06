<template>
	<div>
		<s-text-input label="Text1" v-model="d.text" ></s-text-input>
		<s-text-input label="Text2" v-model="d.text" :visible="false" :maxLength="5"></s-text-input>
		<s-text-input label="Text3" v-model="d.text" :maxLength="5"></s-text-input>
		<s-integer-input label="Integer1" v-model="d.integer"></s-integer-input>
		<s-integer-input label="Integer2" v-model="d.integer"></s-integer-input>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class App extends Vue {
	d = {
		integer : 100
	}

}
</script>