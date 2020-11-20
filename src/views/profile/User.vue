<template>
  <div class="container">
    <div class="user">
      <img
        v-if="userInfo.head_img"
        :src="' http://157.122.54.189:9083' + userInfo.head_img"
        alt=""
        class="userImg"
      />
      <img v-else src="@/assets/1.png" alt="" class="userImg" />
      <div class="info">
        <div class="name">
          <span
            class="iconfont"
            :class="{
              iconxingbienan: userInfo.gender === 1,
              iconxingbienv: userInfo.gender === 0,
            }"
          ></span>
          {{ userInfo.nickname || userInfo.username }}
        </div>
        <div class="date">2020-11-20</div>
      </div>
      <div class="iconfont iconjiantou1" @click="goEdit"></div>
    </div>
    <ProfileBar text="我的关注" message="关注的用户" />
    <ProfileBar text="我的跟帖" message="跟帖/回复" />
    <ProfileBar text="我的收藏" message="文章/视频" />
    <ProfileBar text="设置" />
    <ProfileBar text="退出" @click.native="logout" />
  </div>
</template>

<script>
import ProfileBar from "@/components/ProfileBar";
export default {
  components: {
    ProfileBar,
  },
  data() {
    return {
      userInfo: {},
    };
  },
  created() {
    this.$axios({
      url: "http://157.122.54.189:9083/user/" + localStorage.getItem("userId"),
      headers: { Authorization: localStorage.getItem("token") },
    }).then((res) => {
      const { message, data } = res.data;
      if (message === "获取成功") {
        this.userInfo = data;
      }
    });
  },
  methods: {
    logout() {
      // 退出清除token和id
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      this.$toast("退出成功");
      // 退出后直接倒回登录页，不能再返回到当前页
      this.$router.replace("/login");
    },
    goEdit() {
      this.$router.push("/edit");
    },
  },
};
</script>

<style lang="less" scoped>
.user {
  display: flex;
  align-items: center;
  border-bottom: 5px solid #e4e4e4;
  padding: 24 /360 * 100vw 20 /360 * 100vw;
  color: rgba(148, 148, 148, 0.866666666666667);

  .userImg {
    width: 70/360 * 100vw;
    height: 70/360 * 100vw;
    border-radius: 50%;
  }
  .info {
    flex-grow: 1;
    padding-left: 10 /360 * 100vw;

    .name {
      color: #333;
      font-size: 16/360 * 100vw;
      .iconxingbienan {
        color: #80bfed;
      }
      .iconxingbienv {
        color: #ef3fbf;
      }
    }
    .date {
      color: #888;
      font-size: 14/360 * 100vw;
      margin-top: 6 /360 * 100vw;
    }
  }
}
</style>