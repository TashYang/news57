<template>
  <div class="container">
    <TitleBar text="我的关注" />
    <MyFollow />
    <MyFollow />
    <MyFollow />
  </div>
</template>

<script>
import MyFollow from "@/components/MyFollow";
import TitleBar from "@/components/TitleBar";
export default {
  components: {
    MyFollow,
    TitleBar,
  },
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>