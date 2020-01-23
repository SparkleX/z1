import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import metadata from './plugins/metadata';
import router from './router'

Vue.config.productionTip = false


import DateInput from "@/components/input/DateInput"
Vue.component('s-date-input', DateInput);
Vue.use(DateInput);


import FormatInput from "@/components/input/FormatInput"
Vue.component('s-format-input', FormatInput);
Vue.use(FormatInput);

import LinkedInput from "@/components/input/LinkedInput"
Vue.component('s-linked-input', LinkedInput);
Vue.use(LinkedInput);

import CheckBox from "@/components/input/CheckBox"
Vue.component('s-checkbox', CheckBox);
Vue.use(CheckBox);

import Select from "@/components/input/Select"
Vue.component('s-select', Select);
Vue.use(Select);

import CrudBar from "@/components/detail/CrudBar"
Vue.component('s-crud-bar', CrudBar);
Vue.use(CrudBar);

import ListView from "@/components/views/ListView"
Vue.component('s-list-view', ListView);
Vue.use(ListView);

import BaseDetailView from "@/components/views/BaseDetailView.vue"
Vue.component('base-detail-view', BaseDetailView);
Vue.use(BaseDetailView);

import VuetifyDialog from 'vuetify-dialog'
import 'vuetify-dialog/dist/vuetify-dialog.css'
Vue.use(VuetifyDialog, {context: {vuetify}});

Vue.use(metadata);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
