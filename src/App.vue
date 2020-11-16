<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">首页</router-link> |
      <router-link to="/login">登录</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>
<style lang="less">
@import url("http://at.alicdn.com/t/font_1426139_h6vn3jbl5q.css");
* {
  margin: 0;
  padding: 0;
}
a {
  color: inherit;
  &:hover {
    text-decoration: none;
  }
}
#app {
  margin: 100px auto;
  text-align: center;
}
ul,
li,
ol {
  list-style: none;
}
</style>
