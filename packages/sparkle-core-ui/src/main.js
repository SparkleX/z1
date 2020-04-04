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
import DummyButton from './components/DummyButton.vue'
//import store from './store'
export default {
	install(Vue) {
		Vue.component('dummy-button', DummyButton)
	}
}