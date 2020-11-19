<template>
  <div>
    <router-link to="/login">登录</router-link> |
    <router-link to="/register">注册</router-link> |
    <router-link to="/user">个人中心</router-link> |
    <router-link to="/edit">编辑资料</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>