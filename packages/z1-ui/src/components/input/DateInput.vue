<template>
	<div>
		<v-menu
			ref="menu1"
			v-model="menu1"
			:close-on-content-click="false"
			transition="scale-transition"
			offset-y
			full-width
			max-width="290px"
			min-width="290px">
			<template v-slot:activator="{ on }">
				<v-text-field
					v-bind:value="value"
					@input="onInput($event)"
					:label="label"
					hint="MM/DD/YYYY"
					persistent-hint
					v-on="on">
				</v-text-field>
			</template>
			<v-date-picker @input="onInputDate($event)" v-bind:value="dateFormatted" no-title></v-date-picker>
		</v-menu>
	</div>
</template>

<script>
export default {
	props: ['label','dataBind','value'],
	computed: {
      dateFormatted: {
			get : function () {
				return this.parseDate(this.value);
			}
		}
    },	
	methods: {
		onInputDate : function (event) {
			var value1 = this.formatDate(event);
			this.$emit('input', value1);
			this.menu1 = false
		},		
		onInput : function (event) {
			this.$emit('input', event);
		},
		formatDate (date) {
			if (!date) return null;

			const [year, month, day] = date.split('-');
			return `${month}/${day}/${year}`;
		},
		parseDate (date) {
			if (!date) return null;

			const [month, day, year] = date.split('/');
			return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
		},		
	},

	data: () => ({
		menu1: false,
		menu2: false
	})
}
</script>

<style>
</style>

<style scoped>
</style>