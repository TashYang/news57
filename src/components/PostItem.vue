<template>
  <div>
    <!-- 一张图片 -->
    <div
      class="singleImg"
      v-if="
        postData.type == 1 &&
        postData.cover.length > 0 &&
        postData.cover.length < 3
      "
    >
      <div class="left">
        <div class="title">{{ postData.title }}</div>
        <div class="info">
          <span>{{ postData.user.nickname }}</span>
          {{ postData.comment_length }} 跟帖
        </div>
      </div>

      <img :src="postData.cover[0].url" alt="" class="right" />
    </div>
    <!-- 多张图片 -->
    <div
      v-if="postData.type == 1 && postData.cover.length >= 3"
      class="multImg"
    >
      <div class="title">{{ postData.title }}</div>
      <div class="coverWrapper">
        <img :src="postData.cover[0].url" alt="" class="cover" />
        <img :src="postData.cover[1].url" alt="" class="cover" />
        <img :src="postData.cover[2].url" alt="" class="cover" />
      </div>
      <div class="info">
        <span>{{ postData.user.nickname }}</span>
        {{ postData.comment_length }} 跟帖
      </div>
    </div>

    <!-- 获取视频 -->
    <div
      v-if="postData.type == 2 && postData.cover.length >= 1"
      class="videoPost"
    >
      <div class="title">{{ postData.title }}</div>
      <div class="coverWrapper">
        <img :src="postData.cover[0].url" alt="" class="cover" />
        <span class="iconfont iconshipin"></span>
      </div>
      <div class="info">
        <span>{{ postData.user.nickname }}</span>
        {{ postData.comment_length }} 跟帖
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["postData"],
};
</script>

<style lang="less" scoped>
.singleImg {
  display: flex;
  padding: 10/360 * 100vw;
  border-bottom: 1px solid #ccc;
  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .right {
    width: 121 /360 * 100vw;
    height: 75 /360 * 100vw;
    object-fit: cover;
  }
}
.title {
  font-size: 16/360 * 100vw;
  color: #333;
}
.info {
  font-size: 14/360 * 100vw;
  color: #888;
  span {
    margin-right: 5/360 * 100vw;
  }
}
.multImg {
  padding: 10/360 * 100vw;
  border-bottom: 1px solid #ccc;
  .coverWrapper {
    display: flex;
    justify-content: space-between;
    margin: 5/360 * 100vw 0;
    .cover {
      width: 33%;
    }
  }
}
.videoPost {
  padding: 10/360 * 100vw;
  border-bottom: 1px solid #ccc;
  .coverWrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10 /360 * 100vw 0;
    .cover {
      width: 100%;
      height: 170 /360 * 100vw;
      object-fit: cover;
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
</style>