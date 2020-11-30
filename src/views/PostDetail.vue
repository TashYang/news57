<template>
  <div class="postdetail">
    <!-- 文章 -->
    <div v-if="postData.type == 1" class="normalPost">
      <div class="header">
        <span class="iconfont iconjiantou2" @click="$router.back()"></span>
        <span class="iconfont iconnew"></span>
        <div
          class="btnFollow"
          @click="handleFollow"
          :class="{
            unfollow: !postData.has_follow,
          }"
        >
          {{ postData.has_follow ? "已关注" : "关注" }}
        </div>
      </div>
      <div class="mainContent">
        <h3 class="title">{{ postData.title }}</h3>
        <div class="info">
          <div class="name">{{ postData.user.nickname }}</div>
          2019-10-10
        </div>
        <p class="content" v-html="postData.content"></p>
      </div>
    </div>
    <!-- 视频 -->
    <div v-if="postData.type == 2" class="videoPost">
      <div class="header">
        <span class="iconfont iconjiantou2" @click="$router.back()"></span>
        <span class="iconfont iconnew"></span>
      </div>
      <div class="videoWrapper">
        <video
          ref="video"
          controls
          @pause="toPause"
          @play="toPlay"
          poster="@/assets/2.jpg"
          src=" https://video.pearvideo.com/mp4/adshort/20200421/cont-1670293-15098199_adpkg-ad_hd.mp4"
        ></video>
        <div class="coverWrapper" @click="handlePlay">
          <img src="@/assets/2.jpg" alt="" class="cover" />
          <span class="iconfont iconshipin" v-show="showBtn"></span>
        </div>
      </div>

      <div class="info">
        <img
          v-if="postData.user.head_img"
          :src="$axios.defaults.baseURL + postData.user.head_img"
          alt=""
          class="avatar"
        />
        <img v-else src="@/assets/1.png" alt="" class="avatar" />
        <div class="name">{{ postData.user.nickname }}</div>
        <div
          class="btnFollow"
          @click="handleFollow"
          :class="{
            unfollow: !postData.has_follow,
          }"
        >
          {{ postData.has_follow ? "已关注" : "关注" }}
        </div>
      </div>
      <div class="title">{{ postData.title }}</div>
    </div>

    <div class="btns">
      <div
        class="btn"
        :class="{
          haslike: postData.has_like,
        }"
      >
        <span class="iconfont icondianzan" @click="handleDianzan"></span>
        {{ postData.like_length }}
      </div>
      <div class="btn"><span class="iconfont iconweixin"></span> 微信</div>
    </div>

    <!-- 评论 -->
    <h2 class="commentTitle">精彩跟帖</h2>
    <MainComment
      v-for="comment in commentList"
      :key="comment.id"
      :commentData="comment"
    />
    <div
      class="btnMoreComment"
      @click="$router.push('/moreComment/' + $route.params.id)"
    >
      更多跟帖
    </div>
    <Input :postData="postData" :commentData="commentList" />
  </div>
</template>

<script>
import MainComment from "../components/comments/MainComment";
import Input from "../components/comments/Input";
export default {
  components: {
    MainComment,
    Input,
  },
  data() {
    return {
      postData: {},
      showBtn: true,
      commentList: [],
    };
  },
  created() {
    this.$axios({
      url: "/post/" + this.$route.params.id,
    }).then((res) => {
      this.postData = res.data.data;
      console.log(this.postData);
    });

    this.$axios({
      url: "/post_comment/" + this.$route.params.id,
    }).then((res) => {
      // 如果评论大于三条就截断只取三条
      console.log(res.data.data);
      if (res.data.data.length > 3) {
        res.data.data.length = 3;
        this.commentList = res.data.data;
      }
    });
  },
  methods: {
    // 关注按钮的切换
    handleFollow() {
      if (this.postData.has_follow) {
        this.$axios({
          url: "/user_unfollow/" + this.postData.user.id,
        }).then((res) => {
          // console.log(res);
          this.postData.has_follow = false;
        });
      } else {
        this.$axios({
          url: "/user_follows/" + this.postData.user.id,
        }).then((res) => {
          this.postData.has_follow = true;
        });
      }
    },
    // 点赞按钮的切换
    handleDianzan() {
      this.$axios({
        url: "/post_like/" + this.postData.id,
      }).then((res) => {
        console.log(res);
        if (res.data.message == "点赞成功") {
          this.postData.has_like = true;
          this.postData.like_length++;
          this.$toast.success(res.data.message);
        } else if (res.data.message == "取消成功") {
          this.postData.has_like = false;
          this.postData.like_length--;
          this.$toast(res.data.message);
        }
      });
    },
    // 播放视频
    handlePlay() {
      if (this.showBtn) {
        this.$refs.video.play();
        this.showBtn = false;
      } else {
        this.$refs.video.pause();
        this.showBtn = true;
      }
    },
    toPause() {
      this.showBtn = true;
    },
    toPlay() {
      this.showBtn = false;
    },
  },
};
</script>

<style lang="less" scoped>
.postdetail {
  /deep/ img {
    max-width: 100%;
  }
  .normalPost {
    padding: 0 20/360 * 100vw;

    .mainContent {
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
  }
  .videoPost {
    position: relative;
    padding: 0 20/360 * 100vw;
    .videoWrapper {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 40/360 * 100vw;
      video {
        width: 100%;
      }
      .coverWrapper {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10 /360 * 100vw 0;
        .cover {
          width: 100%;
          height: 50px;
          opacity: 0;
        }
        .iconshipin {
          position: absolute;
          color: #fff;
          background-color: rgba(0, 0, 0, 0.3);
          font-size: 46 /360 * 100vw;
          border-radius: 50%;
        }
      }
    }
    .info {
      padding: 10 /360 * 100vw;
      display: flex;
      align-items: center;
      .avatar {
        width: 40/360 * 100vw;
        height: 40 /360 * 100vw;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 5/360 * 100vw;
      }
      .name {
        flex-grow: 1;
        color: #888;
      }
    }
    .title {
      padding: 10 /360 * 100vw;
      font-size: 16 /360 * 100vw;
      color: #333;
    }
  }
  .btnFollow {
    // padding: 0 16 /360 * 100vw;
    width: 62/360 * 100vw;
    text-align: center;
    height: 30/360 * 100vw;
    line-height: 30/360 * 100vw;
    border-radius: 15/360 * 100vw;
    border: 1px solid #888;
    font-size: 14/360 * 100vw;

    &.unfollow {
      background-color: red;
      border-color: red;
      color: #fff;
    }
  }

  .btns {
    display: flex;
    justify-content: space-evenly;
    padding: 30/360 * 100vw 0;
    border-bottom: 5/360 * 100vw solid #d7d7d7;
    .btn {
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
      .iconfont {
        font-size: 17/360 * 100vw;
      }

      .iconweixin {
        color: #00c800;
      }
      &.haslike {
        color: red;
      }
    }
  }

  .commentTitle {
    text-align: center;
    font-size: 18 /360 * 100vw;
    font-weight: 700;
    padding: 20 /360 * 100vw;
  }
  .btnMoreComment {
    text-align: center;
    font-size: 16 /360 * 100vw;
    width: 121 /360 * 100vw;
    height: 30 /360 * 100vw;
    line-height: 30 /360 * 100vw;
    border: 1px solid #888;
    margin: 30 /360 * 100vw auto 70/360 * 100vw;
    border-radius: 15 /360 * 100vw;
    color: #666;
  }
}
</style>