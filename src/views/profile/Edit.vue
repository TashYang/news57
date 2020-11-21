<template>
  <div class="container">
    <TopNav title="编辑资料" />
    <div class="imgWrapper">
      <img src="@/assets/1.png" alt="" class="userImg" />
    </div>

    <ProfileBar text="昵称" :message="userInfo.nickname" />
    <ProfileBar text="密码" message="******" />
    <ProfileBar
      text="性别"
      :message="userInfo.gender === 1 ? '猛男' : '仙女'"
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
    };
  },
  created() {
    // 获取数据先
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