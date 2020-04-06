import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import metadata from './plugins/metadata';
import router from './router';


Vue.config.productionTip = false

import TextInput from "./components/input/TextInput.vue";
Vue.component('s-text-input', TextInput);

import IntegerInput from "./components/input/IntegerInput.vue";
Vue.component('s-integer-input', IntegerInput);

//Vue.use(TextInput as any);

import DateInput from "@/components/input/DateInput.vue";
Vue.component('s-date-input', DateInput);
//Vue.use(DateInput as any);


import FormatInput from "@/components/input/FormatInput.vue";
Vue.component('s-format-input', FormatInput);
//Vue.use(FormatInput as any);

import LinkedInput from "@/components/input/LinkedInput.vue";
Vue.component('s-linked-input', LinkedInput);
//Vue.use(LinkedInput as any);

import CheckBox from "@/components/input/CheckBox.vue";
Vue.component('s-checkbox', CheckBox);
//Vue.use(CheckBox as any);

import Select from "@/components/input/Select.vue";
Vue.component('s-select', Select);
//Vue.use(Select as any);

import CrudBar from "@/components/detail/CrudBar.vue";
Vue.component('s-crud-bar', CrudBar);
//Vue.use(CrudBar as any);

import ListView from "@/components/views/ListView.vue";
Vue.component('s-list-view', ListView);
//Vue.use(ListView as any);

import BaseDetailView from "@/components/views/BaseDetailView.vue";
Vue.component('base-detail-view', BaseDetailView);
//Vue.use(BaseDetailView as any);

import DataTable from "@/components/table/DataTable.vue";
Vue.component('s-data-table', DataTable);
//Vue.use(DataTable as any);

import VuetifyDialog from 'vuetify-dialog';
import 'vuetify-dialog/dist/vuetify-dialog.css';
Vue.use(VuetifyDialog, {context: {vuetify}});

Vue.use(metadata);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');
