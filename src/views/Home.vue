<template>
  <div class="home" style="font-size:40px;">欢迎{{user.nickname}}!</div>
</template>

<script>
import {mapState } from "vuex";
export default {
  name: "home",
  computed: {
    ...mapState({
      user: state => state.user.userInfo
    }),
  },
  methods: {
  }
};
</script>
