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
		path: "/SalesOrder",
		name: "SalesOrder",
		component: () =>
			import("@/views/MkDoc/MkDocList.vue")
	},
	{
		path: "/Item",
		name: "ItemList",
		component: () => 
			import("@/views/Item/ItemList.vue")
	},
	{
		path: "/Item/:id",
		name: "ItemDetail",
		component: () => 
			import("@/views/Item/ItemDetail.vue")
	},		
	{
		path: "/SalesOrder/:id",
		name: "SalesOrderDetail",
		component: () =>
			import("@/views/MkDoc/MkDocDetail.vue")
	},	
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
