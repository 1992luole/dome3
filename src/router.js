import Vue from "vue";
import store from "./vuex";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      components: {
        default: Home,
        a: About
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});
const whiteList = ["/login"];

router.beforeEach(async (to, from, next) => {
  if (whiteList.indexOf(to.path) !== -1) {
    next();
  } else {
    let token = Vue.ls.get("token");
    if (token) {
      store
        .dispatch("user/getUserInfo")
        .then(() => {
          next();
        })
        .catch(err => {
          alert(err.data.msg || "权限未授权");
          setTimeout(() => {
            next("/login");
          }, 1500);
        });
    } else {
      // 判断是否需要登录  在路由中写meta
      alert("未登录!");
    }
  }
});
export default router;
