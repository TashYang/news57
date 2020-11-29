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
      <div class="videoWrapper">
        <video
          ref="video"
          controls
          poster="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606477226840&di=c2de4a1fa5bdafcd822bf257b067f372&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn16%2F350%2Fw690h460%2F20181121%2F7485-hnyuqhi6466138.jpg"
          src=" https://video.pearvideo.com/mp4/adshort/20200421/cont-1670293-15098199_adpkg-ad_hd.mp4"
        ></video>
        <span class="iconfont iconshipin" @click="playVideo"></span>
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
    playVideo() {
      // console.log(this.$refs.video);
      this.$refs.video.play();
    },
  },
};
</script>

<style lang="less" scoped>
.postdetail {
  border-bottom: 5px solid #ccc;

  /deep/ img {
    max-width: 100%;
  }
  .normalPost {
    padding: 0 20/360 * 100vw;
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

  .videoPost {
    position: relative;

    .videoWrapper {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 40/360 * 100vw;
      video {
        width: 100%;
      }
      .iconshipin {
        position: absolute;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.3);
        font-size: 46 /360 * 100vw;
        border-radius: 50%;
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
}
</style>