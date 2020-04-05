import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from 'jquery';
import Vuelidate from "vuelidate";
import VueAlertify from 'vue-alertify';

 
Vue.use(VueAlertify);
Vue.use(Vuelidate);

window.$ = window.jQuery = jQuery;

import 'popper.js';
import 'bootstrap';
import './assets/app.scss';

Vue.config.productionTip = false;

Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.component('Footer', require('./components/Footer.vue').default);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
