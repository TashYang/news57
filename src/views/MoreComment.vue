<template>
  <div>
    <TopNav title="精彩跟帖" />
    <MainComment
      v-for="comment in commentList"
      :key="comment.id"
      :commentData="comment"
    />
    <div class="end">我也是有底线的</div>
  </div>
</template>

<script>
import TopNav from "../components/TopNav";
import MainComment from "../components/comments/MainComment";
export default {
  components: {
    TopNav,
    MainComment,
  },
  data() {
    return { commentList: [] };
  },
  created() {
    this.$axios({
      url: "/post_comment/" + this.$route.params.id,
    }).then((res) => {
      console.log(res);
      this.commentList = res.data.data;
    });
  },
};
</script>

<style lang="less" scoped>
.end {
  font-size: 12/360 * 100vw;
  color: #888;
  text-align: center;
  padding: 20/360 * 100vw 0;
}
</style>