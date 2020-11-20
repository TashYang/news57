<template>
  <div class="container">
    <div class="top">
      <span class="iconfont iconjiantou2"></span>
      <div class="title">我的关注</div>
    </div>
    <MyFollow />
    <MyFollow />
    <MyFollow />
  </div>
</template>

<script>
import MyFollow from "@/components/MyFollow";
export default {
  components: {
    MyFollow,
  },
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  .top {
    display: flex;
    padding: 20 /360 * 100vw;
    color: rgba(148, 148, 148, 0.866666666666667);

    .title {
      flex-grow: 1;
      text-align: center;
      color: #333;
      font-weight: 700;
      font-size: 14/360 * 100vw;
    }
  }
}
</style>