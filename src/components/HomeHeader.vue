<template>
  <div class="top">
    <span class="iconfont iconnew"></span>

    <div class="search" @click="$router.push('/search')">
      <span class="iconfont iconsearch"></span>
      <span>搜索新闻</span>
    </div>
    <span class="iconfont iconwode" @click="$router.push('/user')"></span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20/360 * 100vw;
  background-color: red;
  color: #fff;
  .iconnew {
    font-size: 54/360 * 100vw;
  }
  .search {
    height: 34/360 * 100vw;
    line-height: 34/360 * 100vw;
    border-radius: 17/360 * 100vw;
    font-size: 16/360 * 100vw;
    flex-grow: 1;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.5);
    margin: 0 20 /360 * 100vw;

    .iconsearch {
      padding-right: 6/360 * 100vw;
    }
  }
  .iconwode {
    font-size: 32/360 * 100vw;
    opacity: 0.6;
  }
}
</style>