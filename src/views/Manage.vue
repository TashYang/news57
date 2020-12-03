<template>
  <div class="manage">
    <TopNav title="栏目管理" />
    <div class="activeList">
      <h2>点击删除以下频道</h2>
      <div class="list">
        <div class="item" v-for="item in activeList" :key="item.id">
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="deactiveList">
      <h2>点击添加以下频道</h2>
      <div class="list">
        <div class="item" v-for="item in deactiveList" :key="item.id">
          {{ item.id }}
        </div>
      </div>
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
      activeList: [],
      deactiveList: [],
    };
  },
  created() {
    this.$axios({
      url: "/category",
    }).then((res) => {
      console.log(res);
      this.activeList = res.data.data;
    });
  },
};
</script>

<style lang="less" scoped>
.manage {
  padding: 10 /360 * 100vw;
  h2 {
    font-weight: 400;
    font-size: 14 /360 * 100vw;
    color: #888;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    .item {
      font-size: 16 /360 * 100vw;
      padding: 6 /360 * 100vw 14 /360 * 100vw;
      border: 1px solid #888;
      margin: 10 /360 * 100vw;
    }
  }
}
</style>