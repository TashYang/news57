<template>
  <!-- 写跟帖 -->
  <div class="footerInput">
    <!-- 收起时 -->
    <div class="deactive" v-if="!isShowTextarea">
      <input
        type="text"
        placeholder="写跟帖"
        @focus="showTextarea"
        v-model="content"
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
      <div class="answer">
        <textarea
          rows="3"
          @blur="hideTextarea"
          ref="txtarea"
          v-model="content"
        ></textarea>
      </div>
      <div class="btn" @click="sendComment">发送</div>
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
      content: "",
      parentId: "",
      nickname: "",
    };
  },
  mounted() {
    // 页面挂载完毕, 利用事件总线 eventBus监听评论回复请求
    eventBus.$on("sendMsg", (parentId) => {
      this.showTextarea();
      this.parentId = parentId;
    });
  },
  // 用了事件总线的监听, 记得做一件事情
  // 在销毁组件的时候, 清除这个监听
  destroyed() {
    eventBus.$off("sendMsg");
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

    // 控制是否展开文本域
    showTextarea() {
      this.isShowTextarea = true;
      // 展开文本域后聚焦,需设置函数
      this.$nextTick(() => {
        this.$refs.txtarea.focus();
      });
    },
    hideTextarea() {
      // 点击发送会导致认为是失去焦点而隐藏文本域，所以需要延时隐藏
      setTimeout(() => {
        this.isShowTextarea = false;
        // 下次回复时不选中楼层里的评论
        this.parentId = "";
      }, 100);
    },

    sendComment() {
      this.$axios({
        url: "/post_comment/" + this.$route.params.id,
        method: "post",
        data: {
          content: this.content,
          parent_id: this.parentId,
        },
      }).then((res) => {
        this.content = "";
        // 发布评论后，告诉父组件重新获取评论
        this.$emit("reloadComment");
      });
    },
  },
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
    position: relative;

    .answer {
      display: flex;
      position: relative;
      .reply {
        position: absolute;
        left: 5/360 * 100vw;
        top: 8/360 * 100vw;
        color: #888;
        font-size: 14/360 * 100vw;
      }
    }
    textarea {
      width: 260 /360 * 100vw;
      height: 90 /360 * 100vw;
      background: #d7d7d7;
      border: none;
      outline: none;
      border-radius: 10 /360 * 100vw;
      padding: 10 /360 * 100vw;
      box-sizing: border-box;
      resize: none;
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