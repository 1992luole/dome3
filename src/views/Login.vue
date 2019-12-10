<template>
  <div>
    <p>
      <input type="text" placeholder="请输入邮箱" v-model="form.email" />
    </p>
    <p>
      <input type="password" placeholder="请输入密码" v-model="form.password" />
    </p>
    <p>
      <button @click.prevent="submit">提交</button>
    </p>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions({
      login: "user/login"
    }),
    // 提交登录
    submit() {
      this.login(this.form).then(res => {
        this.$ls.set("token", res.data.data);
        // 跳转
        alert("登录成功！");
        this.$router.push('/')
      });
    }
  }
};
</script>
