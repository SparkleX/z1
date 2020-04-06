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

<script lang="ts">
import { Component, Vue, Prop} from 'vue-property-decorator';

@Component
export default class DateInput extends Vue{
	
	@Prop()
	label = '';
	@Prop()
	dataBind = '';
	@Prop()
	value = '';
	get dateFormatted () {
			return this.parseDate(this.value);
	}
	onInputDate  (event: any) {
		const value1 = this.formatDate(event);
		this.$emit('input', value1);
		this.menu1 = false
	}		
	onInput  (event: any) {
		this.$emit('input', event);
	}
	formatDate (date: any) {
		if (!date) return null;

		const [year, month, day] = date.split('-');
		return `${month}/${day}/${year}`;
	}
	parseDate (date: any) {
		if (!date) return null;

		const [month, day, year] = date.split('/');
		return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
	}	

	menu1= false;
	menu2= false;
}
</script>

<style>
</style>

<style scoped>
</style>