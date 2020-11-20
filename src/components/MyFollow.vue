<template>
  <div class="fence">
    <img src="@/assets/1.png" alt="" class="newsImg" />
    <div class="news">
      <div class="newsTitle">火星新闻联播</div>
      <div class="newsDate">2020-11-20</div>
    </div>
    <div class="unfollow">取消关注</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.fence {
  display: flex;
  align-items: center;
  border-bottom: 2px solid#d7d7d7;
  padding: 15/360 * 100vw;
  padding-left: 0;

  .newsImg {
    width: 40/360 * 100vw;
    height: 40/360 * 100vw;
    border-radius: 50%;
    margin-left: 20/360 * 100vw;
  }
  .news {
    flex: 1;
    margin-left: 10/360 * 100vw;

    .newsTitle {
      font-size: 16 /360 * 100vw;
      color: #333;
    }
    .newsDate {
      color: #888;
      font-size: 14/360 * 100vw;
    }
  }

  .unfollow {
    width: 73/360 * 100vw;
    height: 30/360 * 100vw;
    line-height: 30/360 * 100vw;
    border-radius: 50/360 * 100vw;
    background-color: rgba(153, 153, 153, 0.2);
    text-align: center;
    font-size: 12/360 * 100vw;
  }
}
</style>