<template>
	<v-app id="inspire">
		<v-navigation-drawer v-model="drawer" app>
			<v-list dense  v-for="(group) in menu" v-bind:key="group">
				<v-list-group>
						<template v-slot:activator >
							<v-list-item-title>{{group.name}}</v-list-item-title>
						</template>
						<v-list-item link @click="onMenuSelect(e.link)" v-for="(e) in group.items" v-bind:key="e">
							<v-list-item-action>
								<v-icon>{{e.icon}}</v-icon>
							</v-list-item-action>
							<v-list-item-content>
								<v-list-item-title>
									{{e.label}}
								</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
				</v-list-group>
			</v-list>
		</v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Enterprise Management System</v-toolbar-title>
    </v-app-bar>

    <v-content>
		<router-view></router-view>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
	props: {
		source: String,
	},
	data: () => ({
		drawer: null,
		menu: null
	}),
	methods:{
		onMenuSelect : function (evt) {
			this.$router.push({ path: evt});
		}
	},
	async mounted () {
		//axios.get('/apis/test.json').then(response => (this.menu = response.data));
		var data = await axios.get('/apis/test.json');
		this.menu = data.data;
	}	
}
</script>

<style>

</style>
