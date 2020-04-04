/*import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import DateInput from './components/input/DateInput.vue'
Vue.config.productionTip = false


new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

export default DateInput*/
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
Vue.use(Vuetify);

import DummyButton from './components/DummyButton.vue';
import DateInput from './components/input/DateInput.vue';
//import store from './store'
export default {
	install(Vue) {
		
		Vue.component('dummy-button', DummyButton);
		Vue.component('a-date-input', DateInput)
	}
}