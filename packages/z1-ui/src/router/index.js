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
		name: "ORDRList",
		component: () =>
			import("@/views/ORDR/ORDRList.vue")
	},
	{
		path: "/ORDR/:id",
		name: "ORDRDetail",
		component: () =>
			import("@/views/ORDR/ORDRDetail.vue")
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
		path: "/OCRD",
		name: "OCRDList",
		component: () => 
			import("@/views/OCRD/OCRDList.vue")
	},
	{
		path: "/OCRD/:id",
		name: "OCRDDetail",
		component: () => 
			import("@/views/OCRD/OCRDDetail.vue")
	},
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
