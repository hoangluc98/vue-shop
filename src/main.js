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

import Swal from 'sweetalert2';

window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

window.Toast = Toast;

Vue.config.productionTip = false;

import store from './store/index';

Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.component('Footer', require('./components/Footer.vue').default);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
