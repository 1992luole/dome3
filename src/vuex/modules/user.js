import user from "../../api/user";

const state = {
  userInfo: null
};

const mutations = {
  SET_USER_INFO(state, data) {
    state.userInfo = data;
  }
};

const actions = {
  // 在vuex中的登录方法
  login(state, params) {
    return user.login(params);
  },
  async getUserInfo({ state, commit }, params) {
    const res = await user.getUserInfo(params);
    commit("SET_USER_INFO", res.data.data);
    return res;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
