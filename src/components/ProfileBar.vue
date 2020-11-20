<template>
  <div class="barWrapper">
    <div class="label">{{ text }}</div>
    <div class="desc">{{ message }}</div>
    <span class="iconfont iconjiantou1"></span>
  </div>
</template>

<script>
export default {
  props: ["text", "message"],
};
</script>

<style lang="less" scoped>
.barWrapper {
  display: flex;
  border-bottom: 2px solid #e4e4e4;
  align-items: center;
  padding: 10/360 * 100vw 20/360 * 100vw;
  padding-left: 0;
  margin-left: 20/360 * 100vw;
  color: rgba(148, 148, 148, 0.866666666666667);

  .label {
    flex: 1;
    font-size: 16 /360 * 100vw;
    color: #333;
  }
  .desc {
    color: #888;
    font-size: 14/360 * 100vw;
    padding-right: 5/360 * 100vw;
  }
}
</style>