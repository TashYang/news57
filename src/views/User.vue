<template>
  <div class="container">
    <div class="user">
      <div class="user_left">
        <img src="" alt="" class="userImg" />
      </div>
      <div class="user_right">
        <div class="userName">
          <span class="iconfont iconxingbienan"></span>牛
        </div>
        <div class="date">
          <p><span>2020-11-19</span></p>
        </div>
        <span class="iconfont iconjiantou1"></span>
      </div>
    </div>
    <Info text="我的关注" message="关注的用户"></Info>
    <Info text="我的跟帖" message="跟帖/回复"></Info>
    <Info text="我的收藏" message="文章/视频"></Info>
    <Info text="设置"></Info>
  </div>
</template>

<script>
import Info from "../components/Info";
export default {
  components: {
    Info,
  },
};
</script>

<style lang="less" scoped>
.user {
  height: 150/360 * 100vw;
  border-bottom: 5/360 * 100vw solid #e4e4e4;
  position: relative;
  .user_left {
    position: absolute;
    width: 70/360 * 100vw;
    height: 70/360 * 100vw;
    background-color: tomato;
    border-radius: 50%;
    left: 20/360 * 100vw;
    top: 40/360 * 100vw;
  }
  .user_right {
    position: relative;
    left: 100/360 * 100vw;
    top: 55/360 * 100vw;
    .userName {
      margin-bottom: 5/360 * 100vw;
      color: #333333;
    }
    .date {
      width: 75/360 * 100vw;
      height: 18/360 * 100vw;
      color: rgba(148, 148, 148, 0.866666666666667);
      font-size: 14/360 * 100vw;
    }
    .iconjiantou1 {
      position: absolute;
      right: 110/360 * 100vw;
      top: 10/360 * 100vw;
      font-size: 17/360 * 100vw;
    }
  }
}

.iconxingbienan {
  font-size: 18/360 * 100vw;
  margin-right: 3/360 * 100vw;
  color: #80bfed;
  vertical-align: middle;
}
.iconjiantou1 {
  position: absolute;
  right: 10/360 * 100vw;
  //   top: 10/360 * 100vw;
  font-size: 17/360 * 100vw;
  color: rgba(148, 148, 148, 0.866666666666667);
}
</style>