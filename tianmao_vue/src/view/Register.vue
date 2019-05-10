<template>
  <div>
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <div class="line"></div>
    <mt-button type="primary" size="large" @click="doLogin">注册</mt-button>
    <div class="line"></div>
    <mt-button type="primary" @click="back">返回</mt-button>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    doLogin() {
      this.$router.push("/login");
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.line {
  height: 0.3rem;
  width: 100%;
}
</style>
