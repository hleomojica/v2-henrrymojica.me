import Vue from "vue";
import App from "./App.vue";
import VueTypedJs from "vue-typed-js";
import AOS from "aos";
import "aos/dist/aos.css";
import VueScrollTo from "vue-scrollto";
Vue.config.productionTip = false;

Vue.use(VueScrollTo);
Vue.use(VueTypedJs);
Vue.use(AOS);
new Vue({
  render: (h) => h(App),
  mounted() {
    AOS.init();
  },
}).$mount("#app");
