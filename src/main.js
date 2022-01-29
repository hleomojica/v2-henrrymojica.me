import Vue from "vue";
import App from "./App.vue";
import VueTypedJs from "vue-typed-js";
import AOS from "aos";
import "aos/dist/aos.css";
import VueScrollTo from "vue-scrollto";
import VueRouter from "vue-router";
import router from "./routes";
import vuePdf from 'vue-pdf' 

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueScrollTo);
Vue.use(VueTypedJs);
Vue.use(AOS);
 
Vue.component('vue-pdf', vuePdf)


new Vue({
  el: '#app',
  router,
  render: h => h(App),
  mounted() {
    AOS.init();
  }

});