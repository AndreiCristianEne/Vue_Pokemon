import Vue from "vue";
import axios from "axios";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(axios);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
