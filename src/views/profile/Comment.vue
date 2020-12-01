<template>
  <div>
    <TopNav title="我的跟帖" />

    <div class="list">
      <div class="item" v-for="comment in commentList" :key="comment.id">
        <div class="date">2020-12-1</div>
        <div class="parent" v-if="comment.parent">
          <div class="nickname">回复: {{ comment.parent.user.nickname }}</div>
          <div class="content">{{ comment.parent.content }}?</div>
        </div>
        <div class="mainContent">{{ comment.content }}</div>

        <div class="post" v-if="comment.post">
          原文: {{ comment.post.title }}
          <span class="iconfont iconjiantou1"></span>
        </div>
        <div v-else>
          该帖子已被删除 <span class="iconfont iconjiantou1"></span>
        </div>
      </div>
      <div class="moreComment" @click="$router.push('/allcomment')">
        更多更贴
        <span class="iconfont iconjiantou1"></span>
        <span class="iconfont iconjiantou1"></span>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "@/components/TopNav";
export default {
  components: {
    TopNav,
  },
  data() {
    return {
      commentList: [],
    };
  },
  created() {
    this.$axios({
      url: "/user_comments",
    }).then((res) => {
      if (res.data.data.length > 6) {
        res.data.data.length = 6;
      }
      this.commentList = res.data.data;
      console.log(this.commentList);
    });
  },
};
</script>
<style lang="less" scoped>
.list {
  color: #888;
  font-size: 14/360 * 100vw;
  .item {
    padding: 14 /360 * 100vw;
    border-bottom: 1px solid #e4e4e4;
    .parent {
      background: #e4e4e4;
      margin: 10 /360 * 100vw 0;
      padding: 10 /360 * 100vw;
      .content {
        font-size: 16 /360 * 100vw;
        margin-top: 10 /360 * 100vw;
      }
    }
    .mainContent {
      font-size: 16 /360 * 100vw;
      color: #333;
    }

    .post {
      font-size: 14 /360 * 100vw;
      margin-top: 10/360 * 100vw;
    }
  }
  .moreComment {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20/360 * 100vw 0;
    font-size: 14/360 * 100vw;
  }
}
</style>