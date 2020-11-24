<template>
  <div class="headerWrapper" @click="$router.back()">
    <span class="iconfont iconjiantou2"></span>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>
<style lang="less" scoped>
.headerWrapper {
  display: flex;
  align-items: center;
  padding: 20 /360 * 100vw;
  color: #888;

  .title {
    flex-grow: 1;
    text-align: center;
    color: #333;
    font-weight: 700;
    font-size: 14/360 * 100vw;
    padding-right: 12/360 * 100vw;
  }
}
</style>