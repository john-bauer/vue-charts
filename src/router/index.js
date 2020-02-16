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
    path: "/how-it-works",
    name: "How It Works",
    component: () => import("../views/HowItWorks.vue")
  },
  {
    path: "/chart-types",
    name: "Chart Types",
    component: () => import("../views/ChartTypes.vue")
  },
  {
    path: "/reactive-props",
    name: "Reactive Props",
    component: () => import("../views/ReactiveProps.vue")
  },
  {
    path: "/api-data",
    name: "API Data",
    component: () => import("../views/ApiData.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
