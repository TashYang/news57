<template>
  <div class="container">
    <div class="closeBtn">
      <span class="iconfont iconicon-test"></span>
    </div>
    <div class="logoWrapper">
      <span class="iconfont iconnew"></span>
    </div>
    <AuthInput
      placeholder="请输入用户名"
      type="text"
      :rule="/^.{6}$/"
      errMsg="请输入正确的用户名"
    />
    <AuthInput
      placeholder="请输入密码"
      type="password"
      :rule="/^\d{6,12}$/"
      errMsg="密码必须是6到12位的数字"
    />
    <AuthBtn btnText="登录" />
  </div>
</template>

<script>
import AuthInput from "../components/AuthInput";
import AuthBtn from "../components/AuthBtn";
export default {
  components: {
    AuthInput,
    AuthBtn,
  },
  // methods:{

  // }
};
</script>

<style lang='less' scoped>
.container {
  padding: 20/360 * 100vw;
}

.iconicon-test {
  font-size: 27/360 * 100vw;
}

.logoWrapper {
  text-align: center;
  .iconnew {
    font-size: 126/360 * 100vw;
    color: #d81e06;
  }
}
</style>