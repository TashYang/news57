<template>
  <div class="container">
    <TopNav title="我的关注" />
    <div class="search">
      <input
        type="text"
        class="idInput"
        placeholder="请输入要关注的用户id"
        v-model="searchId"
      />
      <span class="iconfont iconsearch" @click="followUser"></span>
    </div>

    <div class="fence" v-for="item in followList" :key="item.id">
      <img
        v-if="item.head_img"
        :src="$axios.defaults.baseURL + item.head_img"
        alt=""
        class="avatar"
      />
      <img v-else src="@/assets/1.png" alt="" class="avatar" />
      <div class="info">
        <div class="name">{{ item.nickname }}</div>
        <div class="date">2020-11-20</div>
      </div>
      <button class="unfollow" @click="unfollow(item.id)">取消关注</button>
    </div>
  </div>
</template>

<script>
import TopNav from "@/components/TopNav";
export default {
  components: {
    TopNav,
  },
  data() {
    return {
      followList: [],
      searchId: "",
    };
  },
  created() {
    // 获取关注数据
    this.loadPage();
  },
  methods: {
    loadPage() {
      this.$axios({
        url: "user_follows",
      }).then((res) => {
        console.log(res);
        this.followList = res.data.data;
      });
    },
    unfollow(userId) {
      this.$axios({
        url: "/user_unfollow/" + userId,
      }).then((res) => {
        this.loadPage();
      });
    },
    followUser(searchId) {
      const pattern = /^\d{1,6}$/;
      if (pattern.test(this.searchId)) {
        this.$axios({
          url: "/user_follows/" + this.searchId,
        }).then((res) => {
          this.searchId = "";
          this.loadPage();
        });
      } else {
        this.$toast("请输入正确的id名");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  .search {
    display: flex;
    align-items: center;
    justify-content: center;
    .idInput {
      width: 200/360 * 100vw;
      height: 28/360 * 100vw;
      background-color: #d7d7d7;
      padding-left: 10/360 * 100vw;
      border: none;
      outline: none;
    }
    .iconsearch {
      font-size: 25/360 * 100vw;
      color: #6cf;
    }
  }

  .fence {
    display: flex;
    align-items: center;
    border-bottom: 2px solid#d7d7d7;
    padding: 20/360 * 100vw;

    .avatar {
      width: 40/360 * 100vw;
      height: 40/360 * 100vw;
      object-fit: cover;
      border-radius: 50%;
    }
    .info {
      flex: 1;
      padding-left: 10/360 * 100vw;

      .name {
        font-size: 16 /360 * 100vw;
        color: #333;
      }
      .date {
        color: #888;
        font-size: 14/360 * 100vw;
        padding-top: 4 /360 * 100vw;
      }
    }

    .unfollow {
      width: 73/360 * 100vw;
      height: 30/360 * 100vw;
      line-height: 30/360 * 100vw;
      border-radius: 15/360 * 100vw;
      background-color: rgba(153, 153, 153, 0.2);
      text-align: center;
      font-size: 12/360 * 100vw;
      border: 0;
    }
  }
}
</style>