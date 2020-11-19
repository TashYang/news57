<template>
  <div class="container">
    <div class="edit">
      <div class="editUserImg">
        <p>
          <span class="iconfont iconjiantou2"></span>
          <span>编辑资料</span>
        </p>
        <div class="editPicture">
          <img src="" alt="" class="userImg" />
        </div>
      </div>
    </div>

    <Info text="昵称" message="牛"></Info>
    <Info text="密码" message="******"></Info>
    <Info text="性别" message="男"></Info>
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
.container {
  .edit {
    padding: 15/360 * 100vw 0 0 20/360 * 100vw;
    .editUserImg {
      p {
        position: relative;
        font-family: "Arial Negreta", "Arial Normal", Arial;
        font-weight: 700;
        font-style: normal;
        text-align: center;
        font-size: 14/360 * 100vw;
      }
      .editPicture {
        width: 70/360 * 100vw;
        height: 70/360 * 100vw;
        background-color: tomato;
        border-radius: 50%;
        margin: 30/360 * 100vw auto;
      }
    }
  }
}
.iconjiantou2 {
  position: absolute;
  left: 0;
  font-size: 15/360 * 100vw;
  color: rgb(180, 187, 197);
}
</style>