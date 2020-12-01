<template>
  <div>
    <div class="header">
      <span class="iconfont iconjiantou2" @click="goback"></span>
      <div class="search">
        <span class="iconfont iconsearch"></span>
        <input type="text" v-model="keyword" />
      </div>
      <div class="btn" @click="handleSearch">搜索</div>
    </div>
    <div class="historyList" v-if="postList.length == 0">
      <h2>历史记录</h2>
      <div class="list">
        <div
          class="item"
          v-for="(item, index) in history"
          :key="index"
          @click="searchHistory(item)"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <div class="resList">
      <PostItem
        :postData="post"
        v-for="post in postList"
        :key="post.id"
        @click.native="$router.push('/postDetail/' + post.id)"
      />
    </div>
  </div>
</template>

<script>
import PostItem from "../components/PostItem";
export default {
  components: {
    PostItem,
  },
  data() {
    return {
      keyword: "",
      postList: [],
      history: [],
    };
  },
  watch: {
    keyword(newVal) {
      console.log(newVal);
      if (!newVal) {
        this.postList = [];
      }
    },
    history() {
      // 历史记录持久化第一步,每当数组变化就要存入 localStorage
      localStorage.setItem("history", JSON.stringify(this.history));
    },
  },
  created() {
    // 历史记录持久化第二步,如果进入页面时发现本地储存有历史数据, 应该恢复
    if (localStorage.getItem("history")) {
      this.history = JSON.parse(localStorage.getItem("history"));
    }
  },
  methods: {
    handleSearch() {
      this.history.push(this.keyword);
      this.$axios({
        url: "/post_search",
        params: { keyword: this.keyword },
      }).then((res) => {
        this.postList = res.data.data;
      });
      //   this.keyword = "";
    },
    goback() {
      // 如果搜索栏还有关键字就清空搜索栏，没有的话再跳回上一页
      if (this.postList.length > 0) {
        this.postList = [];
        this.keyword = "";
      } else {
        this.$router.back();
      }
    },
    // 点击历史记录会出现关联文章
    searchHistory(item) {
      this.keyword = item;
      this.handleSearch();
    },
  },
};
</script>
<style lang="less" scoped>
.header {
  display: flex;
  height: 58 /360 * 100vw;
  align-items: center;
  padding: 0 16 /360 * 100vw;
  .search {
    flex-grow: 1;
    border: 1px solid #888;
    height: 30 /360 * 100vw;
    display: flex;
    align-items: center;
    padding: 0 10 /360 * 100vw;
    margin: 0 16 /360 * 100vw;
    border-radius: 19 /360 * 100vw;
    .iconfont {
      padding-right: 10 /360 * 100vw;
    }
    input {
      width: 180 /360 * 100vw;
      border: none;
      outline: none;
      background-color: #f2f2f2;
    }
  }
  .btn {
    font-size: 16 /360 * 100vw;
  }
}
.historyList {
  padding: 16 /360 * 100vw;

  h2 {
    font-size: 18/360 * 100vw;
  }
  .list {
    display: flex;
    .item {
      padding: 10 /360 * 100vw;
      padding-left: 0;
    }
  }
}
</style>