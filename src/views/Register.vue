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
      :rule="/^.{3,12}$/"
      errMsg="请输入正确的用户名"
      @setVal="setUsername"
    />
    <AuthInput
      placeholder="请输入昵称"
      type="text"
      :rule="/^.{3,12}$/"
      errMsg="请输入合法的昵称"
      @setVal="setNickname"
    />
    <AuthInput
      placeholder="请输入密码"
      type="password"
      :rule="/^\d{3,12}$/"
      errMsg="密码必须是3到12位的数字"
      @setVal="setPassword"
    />
    <AuthBtn btnText="注册" @click.native="register" />
  </div>
</template>

<script>
import AuthInput from "../components/AuthInput";
import AuthBtn from "../components/AuthBtn";

export default {
  components: { AuthInput, AuthBtn },
  data() {
    return {
      username: "",
      password: "",
      nickname: "",
    };
  },
  methods: {
    setUsername(newVal) {
      this.username = newVal;
    },
    setNickname(newVal) {
      this.nickname = newVal;
    },
    setPassword(newVal) {
      this.password = newVal;
    },
    register() {
      if (this.username && this.nickname && this.password) {
        this.$axios({
          method: "post",
          url: "/register",
          data: {
            username: this.username,
            nickname: this.nickname,
            password: this.password,
          },
        }).then((res) => {
          if (res.data.message === "注册成功") {
            this.$toast.success("注册成功");
          } else {
            this.$toast.fail("用户名已存在");
          }
        });
      } else {
        this.$toast.fail("输入不能为空");
      }
    },
  },
};
</script>

<style lang="less" scoped>
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