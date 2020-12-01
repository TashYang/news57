<template>
  <div>
    <div class="header">
      <span class="iconfont iconjiantou2"></span>
      <div class="search">
        <span class="iconfont iconsearch"></span>
        <input type="text" />
      </div>
      <div class="btn">搜索</div>
    </div>
    <div class="historyList">
      <h2>历史记录</h2>
      <div class="list">
        <div class="item">华为</div>
        <div class="item">苹果</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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