import Vue from "vue";
import Router from "vue-router";
import Cv from "@/components/shared/Cv.vue";
import Homepage from "@/pages/Homepage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
        path: "/",
        name: "home",
        component: Homepage,
      },
    {
      path: "/cv",
      name: "cv",
      component: Cv,
    },
  ],
});
