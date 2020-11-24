<template>
  <div>
    <HomeHeader />
    <van-tabs v-model="active" background="#e4e4e4">
      <van-tab
        :title="category.name"
        v-for="category in categoryList"
        :key="category.id"
        >{{ category.name }}的内容
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import HomeHeader from "../components/HomeHeader";
export default {
  components: {
    HomeHeader,
  },
  data() {
    return {
      active: 0,
      categoryList: [],
    };
  },
  created() {
    this.$axios({
      url: "/category",
    }).then((res) => {
      console.log(res);
      this.categoryList = res.data.data;
    });
  },
};
</script>

<style lang="less" scoped>
</style>