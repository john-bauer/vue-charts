import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import VueAnime from "vue-animejs";
import "./assets/scss/app.scss";

Vue.use(Buefy);
Vue.use(VueAnime);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
