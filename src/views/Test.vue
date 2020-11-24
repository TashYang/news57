<template>
  <div>
    <PostItem v-for="post in postList" :key="post.id" :postData="post" />
  </div>
</template>

<script>
import PostItem from "../components/PostItem";
export default {
  components: {
    PostItem,
  },
  data() {
    return {
      postList: [],
    };
  },
  created() {
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