<template>
	<v-app id="inspire">
		<v-btn color="primary" v-on:click="test()">Primary</v-btn>
  </v-app>
</template>

<script>

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
			
		}
	},
	async mounted () {
	}	
}
</script>

<style>

</style>
