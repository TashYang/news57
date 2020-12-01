<template>
  <div class="box">
    <div class="info">
      <img
        v-if="commentData.user.head_img"
        :src="$axios.defaults.baseURL + commentData.user.head_img"
        alt=""
        class="avatar"
      />
      <img v-else src="../../assets/2.jpg" alt="" class="avatar" />
      <div class="middle">
        <div class="name">{{ commentData.user.nickname }}</div>
        <div class="date">2小时前</div>
      </div>
      <div class="reply" @click="sendComment">回复</div>
    </div>

    <Parent v-if="commentData.parent" :parentData="commentData.parent" />
    <div class="mainComment">{{ commentData.content }}</div>
  </div>
</template>

<script>
import Parent from "./Parent";
import eventBus from "../../utils/eventBus";
export default {
  props: ["commentData"],
  components: {
    Parent,
  },
  methods: {
    sendComment() {
      eventBus.$emit("sendMsg", this.commentData.id);
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  border-bottom: 1px solid #ccc;
  padding: 10/360 * 100vw;

  .info {
    display: flex;
    align-items: center;
    margin-bottom: 10/360 * 100vw;

    .avatar {
      width: 35/360 * 100vw;
      height: 35/360 * 100vw;
      border-radius: 50%;
      object-fit: cover;
    }
    .middle {
      flex-grow: 1;
      padding-left: 10/360 * 100vw;
      color: #333;
      font-size: 16/360 * 100vw;
      .date {
        font-size: 14/360 * 100vw;
        color: #888;
      }
    }
    .reply {
      font-size: 14 /360 * 100vw;
      color: #888;
    }
  }
  .mainComment {
    font-size: 16 /360 * 100vw;
    color: #333;
    margin-top: 6 /360 * 100vw;
    word-break: break-all;
  }
}
</style>