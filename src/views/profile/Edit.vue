<template>
  <div class="container">
    <div class="edit">
      <TopNav title="编辑资料" />
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
.edit {
  display: flex;
  flex-direction: column;

  .top {
    display: flex;
    color: rgba(148, 148, 148, 0.866666666666667);

    .title {
      flex-grow: 1;
      text-align: center;
      color: #333;
      font-weight: 700;
      font-size: 14/360 * 100vw;
    }
  }

  .userImg {
    margin: 20/360 * 100vw auto;
    width: 70/360 * 100vw;
    height: 70/360 * 100vw;
    border-radius: 50%;
  }
}
</style>