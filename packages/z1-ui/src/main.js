import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'

Vue.config.productionTip = false

import LabelDatePicker from "@/share/LabelDatePicker"
Vue.component('label-date-picker', LabelDatePicker);
Vue.use(LabelDatePicker);

import DateInput from "@/share/components/input/DateInput"
Vue.component('s-date-input', DateInput);
Vue.use(DateInput);

import LinkedInput from "@/share/components/input/LinkedInput"
Vue.component('s-linked-input', LinkedInput);
Vue.use(LinkedInput);

import CheckBox from "@/share/components/input/CheckBox"
Vue.component('s-checkbox', CheckBox);
Vue.use(CheckBox);

import Select from "@/share/components/input/Select"
Vue.component('s-select', Select);
Vue.use(Select);

import CrudBar from "@/share/components/detail/CrudBar"
Vue.component('s-crud-bar', CrudBar);
Vue.use(CrudBar);

import ListView from "@/share/views/ListView"
Vue.component('s-list-view', ListView);
Vue.use(ListView);

import BaseDetailView from "@/share/views/BaseDetailView.vue"
Vue.component('base-detail-view', BaseDetailView);
Vue.use(BaseDetailView);

import VuetifyDialog from 'vuetify-dialog'
import 'vuetify-dialog/dist/vuetify-dialog.css'
Vue.use(VuetifyDialog, {context: {vuetify}});


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
