<template>
  <div>
    <router-link to="/login">登录</router-link> |
    <router-link to="/register">注册</router-link> |
    <router-link to="/user">个人中心</router-link> |
    <router-link to="/edit">编辑资料</router-link>|
    <router-link to="/follow">我的关注</router-link>|
    <button @click="follow(11)">获取用户</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    follow(id) {
      this.$axios({
        url: "/user_follows/" + id,
      }).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style>
</style>