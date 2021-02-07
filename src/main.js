import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFormGenerator from 'vue-form-generator'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
import VueMask from 'v-mask';

Vue.config.productionTip = false

Vue.use(VueMask);

Vue.use(VueToast, {
  duration: 5000,
  dismissible: true,
  position: 'top-right'
});

Vue.use(VueFormGenerator)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
