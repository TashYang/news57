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
    <ul class="editUserInfo">
      <li class="userName">
        <p>
          昵称
          <i>牛</i>
          <span class="iconfont iconjiantou1"></span>
        </p>
      </li>
      <li class="userPwd">
        <p>
          密码
          <i>******</i>
          <span class="iconfont iconjiantou1"></span>
        </p>
      </li>
      <li class="userGender">
        <p>
          性别
          <i>男</i>
          <span class="iconfont iconjiantou1"></span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.container {
  padding: 15/360 * 100vw 0 0 20/360 * 100vw;
  .edit {
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
  .editUserInfo {
    li {
      border-bottom: 2/360 * 100vw solid #e4e4e4;
      padding: 10/360 * 100vw 0;
      p {
        position: relative;
        font-family: "Roboto Regular", "Roboto";
        font-weight: 400;
        font-style: normal;
        font-size: 14/360 * 100vw;
        color: #333333;
        i {
          position: absolute;
          right: 30/360 * 100vw;
          font-style: normal;
          font-size: 13/360 * 100vw;
          color: rgba(148, 148, 148, 0.866666666666667);
        }
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
.iconjiantou1 {
  position: absolute;
  right: 10/360 * 100vw;
  //   top: 10/360 * 100vw;
  font-size: 17/360 * 100vw;
  color: rgba(148, 148, 148, 0.866666666666667);
}
</style>