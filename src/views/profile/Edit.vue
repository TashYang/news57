<template>
  <div class="container">
    <TopNav title="编辑资料" />
    <div class="imgWrapper">
      <img src="@/assets/1.png" alt="" class="userImg" />
    </div>

    <ProfileBar
      text="昵称"
      :message="userInfo.nickname"
      @click.native="isShowNickname = true"
    />
    <ProfileBar text="密码" message="******" />
    <ProfileBar
      text="性别"
      :message="userInfo.gender === 1 ? '猛男' : '仙女'"
      @click.native="isShowGender = true"
    />

    <!-- 弹出框 -->
    <van-dialog
      v-model="isShowNickname"
      title="修改昵称"
      show-cancel-button
      @confirm="setNickname"
    >
      <van-field v-model="newNickName" placeholder="请输入昵称" />
    </van-dialog>

    <van-action-sheet
      v-model="isShowGender"
      :actions="genderList"
      cancel-text="取消"
      close-on-click-action
      @select="setGender"
    />
  </div>
</template>

<script>
import ProfileBar from "@/components/ProfileBar";
import TopNav from "@/components/TopNav";
export default {
  components: {
    ProfileBar,
    TopNav,
  },
  data() {
    return {
      userInfo: {},
      isShowNickname: false,
      newNickName: "",
      isShowGender: false,
      genderList: [{ name: "仙女" }, { name: "猛男" }],
    };
  },
  created() {
    this.loadPage();
  },
  methods: {
    // 获取数据
    loadPage() {
      this.$axios({
        url: "/user/" + localStorage.getItem("userId"),
        headers: { Authorization: localStorage.getItem("token") },
      }).then((res) => {
        const { message, data } = res.data;
        if (message === "获取成功") {
          this.userInfo = data;
        }
      });
    },
    // 修改昵称
    setNickname() {
      this.$axios({
        method: "post",
        url: "/user_update/" + localStorage.getItem("userId"),
        headers: { Authorization: localStorage.getItem("token") },
        data: {
          nickname: this.newNickName,
        },
      }).then((res) => {
        this.loadPage();
        // 确认后清空掉输入框的数据
        this.newNickName = "";
      });
    },
    // 修改性别
    setGender(action, index) {
      this.$axios({
        method: "post",
        url: "/user_update/" + localStorage.getItem("userId"),
        headers: { Authorization: localStorage.getItem("token") },
        data: {
          gender: index,
        },
      }).then((res) => {
        this.loadPage();
      });
    },
  },
};
</script>

<style lang="less" scoped>
.imgWrapper {
  display: flex;
  justify-content: center;
  margin: 20/360 * 100vw 0;
  .userImg {
    width: 70/360 * 100vw;
    height: 70/360 * 100vw;
    border-radius: 50%;
    // 让照片平铺
    object-fit: cover;
  }
}
</style>