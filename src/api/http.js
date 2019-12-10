// 该文件主要是封装axios的
import axios from "axios";
import qs from "qs";
import Vue from "vue";
import NProgress from "nprogress";

// 简单配置
NProgress.inc(0.2);
NProgress.configure({ easing: "ease", speed: 500, showSpinner: false });

axios.defaults.baseURL = process.env.VUE_APP_BASEURL;

axios.defaults.headers["Content-Type"] = {
  "X-Requested-With": "XMLHttpRequest"
};

axios.interceptors.request.use(
  config => {
    NProgress.start();
    config.headers["Authorization"] = Vue.ls.get("token") || "";
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    NProgress.done();
    return response;
  },
  error => {
    let { response = {} } = error;
    if (response.status === 400) {
      alert(response.data.msg.join(","));
    } else if (response.status == "001") {
      // 登录鉴权失败，清除TOKEN
      Vue.ls.remove("token");
    } else {
      alert(response.data.msg);
    }

    return Promise.reject(response);
  }
);

export default {
  post(url, data) {
    return axios({
      method: "post",
      url: url,
      data: qs.stringify(data),
      timeout: 30000,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    });
  },

  get(url, params) {
    return axios({
      method: "get",
      url: url,
      params
    });
  }
};
