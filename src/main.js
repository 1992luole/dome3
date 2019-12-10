import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./vuex";
import "nprogress/nprogress.css"; //这个样式必须引入
import VueLocalStorage from "vue-ls";

Vue.use(VueLocalStorage, {
  namespace: "luo-"
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
