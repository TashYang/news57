<template>
  <div>
    <TopNav title="我的收藏" />
    <PostItem
      v-for="post in postList"
      :key="post.id"
      :postData="post"
      @click.native="$router.push('/postDetail/' + post.id)"
    />
  </div>
</template>

<script>
import TopNav from "@/components/TopNav";
import PostItem from "@/components/PostItem";
export default {
  components: {
    TopNav,
    PostItem,
  },
  data() {
    return {
      postList: [],
    };
  },
  created() {
    this.$axios({
      url: "/user_star",
    }).then((res) => {
      this.postList = res.data.data;
      console.log(this.postList);
    });
  },
};
</script>

<style lang="less" scoped>
</style>