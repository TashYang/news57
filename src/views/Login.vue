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
      placeholder="请输入密码"
      type="password"
      :rule="/^\d{3,12}$/"
      errMsg="密码必须是3到12位的数字"
      @setVal="setPassword"
    />
    <AuthBtn btnText="登录" @click.native="login" />
  </div>
</template>

<script>
import AuthInput from "../components/AuthInput";
import AuthBtn from "../components/AuthBtn";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  components: {
    AuthInput,
    AuthBtn,
  },
  methods: {
    // 接受值
    setUsername(newVal) {
      this.username = newVal;
    },
    setPassword(newVal) {
      this.password = newVal;
      console.log(this.password);
    },
    login() {
      if (this.username && this.password) {
        this.$axios({
          method: "post",
          url: "/login",
          data: {
            username: this.username,
            password: this.password,
          },
        }).then((res) => {
          const { message, data } = res.data;
          if (message === "登录成功") {
            this.$toast.success("登录成功");
            // 存储token
            localStorage.setItem("token", data.token);
            localStorage.setItem("userId", data.user.id);
            // 跳转页面
            this.$router.push("/user");
          }
        });
      } else {
        this.$toast.fail("用户名或密码不能为空");
      }
    },
  },
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