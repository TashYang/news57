<template>
  <div>
    <HomeHeader />
    <van-tabs v-model="active" background="#e4e4e4">
      <van-tab
        :title="category.name"
        v-for="category in categoryList"
        :key="category.id"
      >
        <PostItem v-for="post in postList" :key="post.id" :postData="post" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import HomeHeader from "../components/HomeHeader";
import PostItem from "../components/PostItem";
export default {
  components: {
    HomeHeader,
    PostItem,
  },
  data() {
    return {
      active: 0,
      categoryList: [],
      postList: [],
    };
  },
  created() {
    this.$axios({
      url: "/category",
    }).then((res) => {
      console.log(res);
      this.categoryList = res.data.data;
    });
    this.$axios({
      url: "/post",
    }).then((res) => {
      console.log(res);
      this.postList = res.data.data;
    });
  },
};
</script>

<style lang="less" scoped>
</style>