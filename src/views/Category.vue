<template>
  <div class="category">
    <div class="top">
      <div class="header">
        <span class="iconfont iconjiantou2"></span>
        <span class="iconfont iconnew"></span>
        <div class="isFollow">已关注</div>
      </div>
      <div class="headline">
        <h3 class="title">车主注意啦！9月下旬部分临时泊位进行 清洁保养</h3>
        <div class="info">
          <div class="name">火星时报</div>
          <div class="date">2019-10-10</div>
        </div>
        <p class="content">
          为营造临时泊位“干静、整洁、平安、有序”面貌迎国庆，市交通部门拟在9月下旬对部分城市道路临时泊位进行清洁保养，请市民群众配合在清洁保养期间将车辆驶离泊位。第一阶段临时泊位清洁保养计划（涉及17条路段）：
        </p>
      </div>

      <div class="share">
        <div class="agree"><span class="iconfont icondianzan"></span> 112</div>
        <div class="agree"><span class="iconfont iconweixin"></span> 微信</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.category {
  padding: 0 15/360 * 100vw;
  border-bottom: 5px solid #ccc;

  .header {
    display: flex;
    align-items: center;

    .iconjiantou2 {
      font-size: 15/360 * 100vw;
      margin-right: 5 /360 * 100vw;
    }
    .iconnew {
      flex: 1;
      font-size: 54/360 * 100vw;
    }
    .isFollow {
      width: 62/360 * 100vw;
      height: 26/360 * 100vw;
      line-height: 26/360 * 100vw;
      border-radius: 13/360 * 100vw;
      border-color: rgb(215, 215, 215);
      border: 1px solid #ccc;
      text-align: center;
      font-size: 12/360 * 100vw;
    }
  }
  .headline {
    .title {
      font-size: 18/360 * 100vw;
      color: #333;
    }
    .info {
      display: flex;
      align-items: center;
      color: #888;
      font-size: 13/360 * 100vw;
      margin: 5/360 * 100vw 0 20/360 * 100vw;
      .name {
        margin-right: 10/360 * 100vw;
      }
    }
    .content {
      font-size: 14/360 * 100vw;
      line-height: 28/360 * 100vw;
    }
  }
  .share {
    display: flex;
    justify-content: space-evenly;
    padding: 30/360 * 100vw 0;

    .agree {
      width: 79/360 * 100vw;
      height: 29/360 * 100vw;
      line-height: 29/360 * 100vw;
      border-radius: 18/360 * 100vw;
      border-color: rgb(215, 215, 215);
      border: 1px solid #ccc;
      text-align: center;
      color: #666;
      font-size: 14/360 * 100vw;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .icondianzan {
        font-size: 17/360 * 100vw;
      }
      .iconweixin {
        color: #00c800;
        font-size: 17/360 * 100vw;
      }
    }
  }
}
</style>