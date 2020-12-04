<template>
  <div class="manage">
    <TopNav title="栏目管理" />
    <div class="activeList">
      <h2>点击删除以下频道</h2>
      <div class="list">
        <div
          class="item"
          v-for="(item, index) in activeList"
          :key="item.id"
          @click="deactive(index)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="deactiveList">
      <h2>点击添加以下频道</h2>
      <div class="list">
        <div
          class="item"
          v-for="(item, index) in deactiveList"
          :key="index"
          @click="active(index)"
        >
          {{ item.name }}
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
    // 先判定本地是否有栏目，没有的话再发送请求
    if (localStorage.getItem("activeList")) {
      this.activeList = JSON.parse(localStorage.getItem("activeList"));
      if (localStorage.getItem("deactiveList")) {
        this.deactiveList = JSON.parse(localStorage.getItem("deactiveList"));
      }
    } else {
      this.$axios({
        url: "/category",
      }).then((res) => {
        this.activeList = res.data.data;
      });
    }
  },
  watch: {
    // 监听栏目，保存数据到本地
    activeList() {
      localStorage.setItem("activeList", JSON.stringify(this.activeList));
    },
    deactiveList() {
      localStorage.setItem("deactiveList", JSON.stringify(this.deactiveList));
    },
  },
  methods: {
    deactive(index) {
      // 判断激活的栏目，至少得有一个
      if (this.activeList.length == 1) {
        return;
      }
      this.deactiveList.push(this.activeList[index]);
      this.activeList.splice(index, 1);
    },
    active(index) {
      this.activeList.push(this.deactiveList[index]);
      this.deactiveList.splice(index, 1);
    },
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