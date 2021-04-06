import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

Vue.use(VueAxios, axios); //追記

new Vue({
  render: (h) => h(App),
}).$mount("#app");
