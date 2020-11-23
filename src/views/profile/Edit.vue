<template>
  <div class="container">
    <TopNav title="编辑资料" />
    <div class="imgWrapper">
      <van-uploader :after-read="afterRead">
        <img
          v-if="userInfo.head_img"
          :src="$axios.defaults.baseURL + userInfo.head_img"
          class="userImg"
        />
        <img v-else src="@/assets/1.png" alt="" class="userImg" />
      </van-uploader>
    </div>

    <ProfileBar
      text="昵称"
      :message="userInfo.nickname"
      @click.native="isShowNickname = true"
    />
    <ProfileBar text="密码" message="******" @click.native="isShowPwd = true" />
    <ProfileBar
      text="性别"
      :message="userInfo.gender === 1 ? '猛男' : '仙女'"
      @click.native="isShowGender = true"
    />

    <!-- 弹出框 -->
    <van-dialog
      v-model="isShowNickname"
      title="修改昵称"
      show-cancel-button
      @confirm="setNickname"
    >
      <van-field v-model="newNickName" placeholder="请输入昵称" />
    </van-dialog>

    <van-dialog
      v-model="isShowPwd"
      title="修改密码"
      show-cancel-button
      @confirm="setPassword"
    >
      <van-field
        v-model="newPassword"
        type="password"
        placeholder="请输入密码"
      />
    </van-dialog>

    <van-action-sheet
      v-model="isShowGender"
      :actions="genderList"
      cancel-text="取消"
      close-on-click-action
      @select="setGender"
    />
  </div>
</template>

<script>
import ProfileBar from "@/components/ProfileBar";
import TopNav from "@/components/TopNav";
export default {
  components: {
    ProfileBar,
    TopNav,
  },
  data() {
    return {
      userInfo: {},
      isShowNickname: false,
      newNickName: "",
      isShowPwd: false,
      isShowGender: false,
      genderList: [
        { name: "男", gender: 1 },
        { name: "女", gender: 0 },
      ],
      isShowImg: false,
      newPassword: "",
    };
  },
  created() {
    this.loadPage();
  },
  methods: {
    // 获取数据
    loadPage() {
      this.$axios({
        url: "/user/" + localStorage.getItem("userId"),
        headers: { Authorization: localStorage.getItem("token") },
      }).then((res) => {
        const { message, data } = res.data;
        if (message === "获取成功") {
          this.userInfo = data;
        }
      });
    },
    // 封装修改请求
    editProfile(newData) {
      this.$axios({
        url: "/user_update/" + localStorage.getItem("userId"),
        method: "post",
        data: newData,
      }).then((res) => {
        // console.log(res);
        // 修改完毕, 刷新数据
        this.loadPage();
      });
    },
    // 修改昵称
    setNickname() {
      const newData = { nickname: this.newNickName };
      this.editProfile(newData);
      // 确认后清空掉输入框的数据
      this.newNickName = "";
    },
    // 修改密码
    setPassword() {
      const newData = { password: this.newPassword };
      this.editProfile(newData);
      this.newPassword = "";
    },
    // 修改性别
    setGender(action) {
      const newData = { gender: action.gender };
      this.editProfile(newData);
    },
    // 修改头像
    afterRead(fileObj) {
      console.log(fileObj);
      const formdata = new FormData();
      formdata.append("file", fileObj.file);
      this.$axios({
        url: "/upload",
        method: "post",
        data: formdata,
      }).then((res) => {
        const { message, data } = res.data;
        if (message === "文件上传成功") {
          // console.log(data.url);
          // 如果文件上传成功，将url的地址传入到head_img的属性
          const newData = { head_img: data.url };
          this.editProfile(newData);
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.imgWrapper {
  display: flex;
  justify-content: center;
  margin: 20/360 * 100vw 0;
  .userImg {
    width: 70/360 * 100vw;
    height: 70/360 * 100vw;
    border-radius: 50%;
    // 让照片平铺
    object-fit: cover;
  }
}
</style>