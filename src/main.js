import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import * as VueGoogleMaps from 'vue2-google-maps';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VModal from 'vue-js-modal';

Vue.use(VModal);
Vue.use(VueSweetalert2);
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_API_KEY,
    libraries: 'places' // necessary for places input
  }
});

axios.defaults.baseURL = 
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
