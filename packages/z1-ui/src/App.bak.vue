<template>
	<v-app id="inspire">
		<v-navigation-drawer v-model="drawer" app>
			<v-list dense v-for="group in menu" >
				<v-list-group>
					<template v-slot:activator>
						<v-list-item-title>{{group.name}}</v-list-item-title>
					</template>
					<v-list-item link @click="onMenuSelect(e.link)" v-for="e in group.items">
						<v-list-item-action>
							<v-icon>{{e.icon}}</v-icon>
						</v-list-item-action>
						<v-list-item-content>
							<v-list-item-title>{{e.label}}</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-group>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar app color="indigo" dark>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" />
			<v-toolbar-title>Enterprise Management System</v-toolbar-title>

		</v-app-bar>

		<v-content>
			<router-view></router-view>
		</v-content>
		<v-footer color="indigo" app>
			<span class="white--text">&copy; 2019</span>
		</v-footer>
	</v-app>
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'vue-property-decorator';
import axios from "axios";

@Component
export default class App extends Vue{
	@Prop({default: ''})
	source = '';
	drawer = null;
	menu =  null;

	onMenuSelect(evt: any): void {
		this.$router.push({ path: evt });
		console.debug(evt);
	}
	async mounted() {
		//axios.get('/apis/test.json').then(response => (this.menu = response.data));
		const data = await axios.get("/api_temp/menu/menu.json");
		this.menu = data.data;
	}
}
</script>

<style>
</style>
