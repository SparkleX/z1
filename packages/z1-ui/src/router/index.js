import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: Home
	},
	{
		path: "/about",
		name: "about",
		component: () =>
			import("@/views/About.vue")
	},
	{
		path: "/ORDR",
		name: "SalesOrder",
		component: () =>
			import("@/views/ORDR/MkDocList.vue")
	},
	{
		path: "/OITM",
		name: "ItemList",
		component: () => 
			import("@/views/OITM/OITMList.vue")
	},
	{
		path: "/OITM/:id",
		name: "ItemDetail",
		component: () => 
			import("@/views/OITM/OITMDetail.vue")
	},		
	{
		path: "/ORDR/:id",
		name: "SalesOrderDetail",
		component: () =>
			import("@/views/ORDR/MkDocDetail.vue")
	},	
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
