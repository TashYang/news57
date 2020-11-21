<template>
  <div class="container">
    <TopNav title="我的关注" @click.native="backUser" />
    <MyFollow />
    <MyFollow />
    <MyFollow />
  </div>
</template>

<script>
import MyFollow from "@/components/MyFollow";
import TopNav from "@/components/TopNav";
export default {
  components: {
    MyFollow,
    TopNav,
  },
  methods: {
    backUser() {
      this.$router.push("/user");
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>