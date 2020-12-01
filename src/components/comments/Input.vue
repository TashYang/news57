<template>
  <!-- 写跟帖 -->
  <div class="footerInput">
    <!-- 收起时 -->
    <div class="deactive" v-if="!isShowTextarea">
      <input
        type="text"
        placeholder="写跟帖"
        v-focus
        @click="isShowTextarea = true"
      />
      <div class="comment">
        <span class="iconfont iconpinglun-"></span>
        <div class="nums">112</div>
      </div>
      <span
        class="iconfont iconshoucang"
        @click="handleStar"
        :class="{ hasStar: postData.has_star }"
      ></span>
      <span class="iconfont iconfenxiang"></span>
    </div>
    <!-- 展开时 -->
    <div class="active" v-if="isShowTextarea">
      <textarea rows="3" v-focus></textarea>
      <div class="btn">发送</div>
    </div>
  </div>
</template>

<script>
import eventBus from "../../utils/eventBus";
export default {
  props: ["postData", "commentData"],
  data() {
    return {
      isShowTextarea: false,
    };
  },
  methods: {
    // 控制是否收藏
    handleStar() {
      this.$axios({
        url: "/post_star/" + this.postData.id,
      }).then((res) => {
        if (res.data.message == "收藏成功") {
          this.$toast.success(res.data.message);
          this.postData.has_star = true;
        } else {
          this.$toast(res.data.message);
          this.postData.has_star = false;
        }
      });
    },
  },
  //  局部设置自定义 v-focus 指令
  // directives: {
  //   focus: {
  //     inserted(el) {
  //       el.focus();
  //     },
  //   },
  // },
};
</script>

<style lang="less" scoped>
.footerInput {
  position: fixed;
  bottom: 0;
  left: 0;
  background: #f2f2f2;
  width: 100%;
  .deactive {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 50 /360 * 100vw;
    input {
      width: 180 /360 * 100vw;
      height: 30 /360 * 100vw;
      padding: 0 15 /360 * 100vw;
      box-sizing: border-box;
      border-radius: 15 /360 * 100vw;
      background-color: #d7d7d7;
      border: none;
      outline: none;
    }
    .comment {
      position: relative;
      .nums {
        position: absolute;
        top: -5px;
        left: 4px;
        height: 14 /360 * 100vw;
        line-height: 14 /360 * 100vw;
        border-radius: 12 /360 * 100vw;
        font-size: 12 /360 * 100vw;
        background: red;
        color: #fff;
        padding: 0 4px;
      }
    }
    .iconfont {
      font-size: 23/360 * 100vw;

      &.hasStar {
        color: red;
      }
    }
  }
  .active {
    display: flex;
    align-items: flex-end;
    padding: 10 /360 * 100vw;
    textarea {
      width: 260 /360 * 100vw;
      height: 90 /360 * 100vw;
      background: #d7d7d7;
      border: none;
      outline: none;
      border-radius: 10 /360 * 100vw;
      padding: 10 /360 * 100vw;
      box-sizing: border-box;
    }
    .btn {
      background: red;
      color: #fff;
      font-size: 16 /360 * 100vw;
      height: 26 /360 * 100vw;
      line-height: 26 /360 * 100vw;
      border-radius: 13 /360 * 100vw;
      padding: 0 14 /360 * 100vw;
      margin-left: 10 /360 * 100vw;
    }
  }
}
</style>