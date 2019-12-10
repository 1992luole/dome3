// 该文件主要指存放请求方法的
import http from "./http";

export default {
  //1.登录
  login(data) {
    return http.post("/api/login", data);
  },
  //获取用户信息
  getUserInfo(data) {
    return http.get("/api/auth", data);
  }
};
