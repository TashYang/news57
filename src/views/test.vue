<template>
  <div>
    <button @click="isShow = !isShow">按钮</button>
    <transition
      enter-active-class="animate__animated animate__flip"
      leave-active-class="animate__animated animate__lightSpeedOutRight"
    >
      <div id="box" v-if="isShow"></div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return { isShow: true };
  },
};
</script>

<style lang="less" scoped>
#box {
  width: 200px;
  height: 200px;
  background-color: pink;
}
.animate__animated {
  animation-duration: 3s;
}
</style>