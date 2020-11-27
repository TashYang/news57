<template>
  <div class="postdetail">
    <!-- 文章 -->
    <div v-if="postData.type == 1" class="normalPost">
      <div class="top">
        <div class="header">
          <span class="iconfont iconjiantou2"></span>
          <span class="iconfont iconnew"></span>
          <div class="isFollow">已关注</div>
        </div>
        <div class="headline">
          <h3 class="title">{{ postData.title }}</h3>
          <div class="info">
            <div class="name">{{ postData.user.nickname }}</div>
            <div class="date">2019-10-10</div>
          </div>
          <p class="content" v-html="postData.content"></p>
        </div>
      </div>
    </div>
    <!-- 视频 -->
    <div v-if="postData.type == 2" class="videoPost">视频</div>

    <div class="share">
      <div class="agree"><span class="iconfont icondianzan"></span> 112</div>
      <div class="agree"><span class="iconfont iconweixin"></span> 微信</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postData: {},
    };
  },
  mounted() {
    this.$axios({
      url: "/post/" + this.$route.params.id,
    }).then((res) => {
      this.postData = res.data.data;
      console.log(this.postData);
    });
  },
};
</script>

<style lang="less" scoped>
.postdetail {
  padding: 0 15/360 * 100vw;
  border-bottom: 5px solid #ccc;

  .normalPost {
    .header {
      display: flex;
      align-items: center;

      .iconjiantou2 {
        font-size: 15/360 * 100vw;
        margin-right: 5 /360 * 100vw;
      }
      .iconnew {
        flex: 1;
        font-size: 54/360 * 100vw;
      }
      .isFollow {
        width: 62/360 * 100vw;
        height: 26/360 * 100vw;
        line-height: 26/360 * 100vw;
        border-radius: 13/360 * 100vw;
        border-color: rgb(215, 215, 215);
        border: 1px solid #ccc;
        text-align: center;
        font-size: 12/360 * 100vw;
      }
    }
    .headline {
      .title {
        font-size: 18/360 * 100vw;
        color: #333;
      }
      .info {
        display: flex;
        align-items: center;
        color: #888;
        font-size: 13/360 * 100vw;
        margin: 10/360 * 100vw 0 20/360 * 100vw;
        .name {
          margin-right: 10/360 * 100vw;
        }
      }
      .content {
        font-size: 14/360 * 100vw;
        line-height: 28/360 * 100vw;
      }
    }
  }

  .share {
    display: flex;
    justify-content: space-evenly;
    padding: 30/360 * 100vw 0;

    .agree {
      width: 79/360 * 100vw;
      height: 29/360 * 100vw;
      line-height: 29/360 * 100vw;
      border-radius: 18/360 * 100vw;
      border-color: rgb(215, 215, 215);
      border: 1px solid #ccc;
      text-align: center;
      color: #666;
      font-size: 14/360 * 100vw;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .icondianzan {
        font-size: 17/360 * 100vw;
      }
      .iconweixin {
        color: #00c800;
        font-size: 17/360 * 100vw;
      }
    }
  }
  /deep/ img {
    max-width: 100%;
  }
}
</style>