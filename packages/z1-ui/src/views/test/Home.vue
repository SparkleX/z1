<template>
	<div>
		<s-text-input label="Text1" v-model="d.text" :editable="v.editable" :visible="v.visible" :format="f.OCRD.CardCode"></s-text-input>
		<s-text-input label="Text2" v-model="d.text" :maxLength="5" :editable="v.editable" :visible="v.visible"></s-text-input>
		<s-integer-input label="Integer1" v-model="d.integer" :editable="v.editable" :visible="v.visible"></s-integer-input>
		<s-integer-input label="Integer2" v-model="d.integer" :editable="v.editable" :visible="v.visible"></s-integer-input>
		<s-date-input label="Date1" v-model="d.date" :editable="v.editable" :visible="v.visible"></s-date-input>
		<s-date-input label="Date2" v-model="d.date" :editable="v.editable" :visible="v.visible"></s-date-input>
		<s-checkbox label="Visible" v-model="v.visible"></s-checkbox>
		<s-checkbox label="Editable" v-model="v.editable"></s-checkbox>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
	d: object =  {
		text: 'helo',
		integer: 100,
		date:new Date().toISOString().substr(0, 10)
	};
	v: object =  {
		visible: true,
		editable: true
	};
	f: object = {
		OCRD: {
			CardCode: {
				maxLength: 5
			}
		}
	};
	data = {
		date: new Date().toISOString().substr(0, 10),
		menu: false,
		modal: false,
		menu2: false,
		};
}
</script>