<template>
	<v-app id="inspire">
		<v-btn color="primary" v-on:click="test()">Primary</v-btn>
  </v-app>
</template>

<script>
import * as spkCore from "sparkle-core";

export default {
	props: {
		source: String,
	},
	data: () => ({
		drawer: null,
		menu: null
	}),
	methods:{
		test : function () {
			var a = new spkCore.Test();
			//var c = a.add(1,2);
			//alert(c);
			alert(a.add(1,2));
			
		}
	},
	async mounted () {
	}	
}
</script>

<style>

</style>
