import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/how-it-works",
    name: "How It Works",
    component: () => import("../views/HowItWorks.vue")
  },
  {
    path: "/chart-types",
    name: "Chart Types",
    component: () => import("../views/ChartTypes.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
