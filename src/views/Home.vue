<template>
  <div>
    <div class="header">
      <div class="logo"></div>
      <div class="search">
        <span class="iconfont iconsearch">搜索新闻</span>
      </div>
      <div class="user"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less'>
.header {
  display: flex;
  width: 100vw;
  height: 49px;
  background-color: rgba(255, 0, 0, 1);
}
.logo {
  width: 54px;
  height: 54px;
  background-color: #0a0;
  color: #ffffff;
}
.search {
  position: relative;
  left: 16%;
  top: 18%;
  border-width: 0px;
  border-radius: 50px;
  width: 210px;
  height: 34px;
  line-height: 34px;
  opacity: 0.5;
  background-color: rgba(242, 242, 242, 1);

  span {
    position: absolute;
    display: block;
    left: 30%;
    top: -5%;
    // width: 57px;
    color: #000;
    // background: #ccc;
  }
}
.user {
  border-width: 0px;
  width: 32px;
  height: 32px;
  color: #c9c9c9;
}
</style>