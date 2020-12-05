<template>
  <div id="app">
    <header></header>

    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less">
@import url("http://at.alicdn.com/t/font_1426139_h6vn3jbl5q.css");
// 引入第三方动画库
@import url("https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.css");
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

ul,
li,
ol {
  list-style: none;
}
body {
  background-color: #f2f2f2;
}
header {
  width: 100vw;
  height: 24/360 * 100vw;
  background-color: rgba(117, 117, 117, 1);
}
</style>
