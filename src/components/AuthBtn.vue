<template>
  <div class="btn" :class="myClass">{{ btnText }}</div>
</template>

<script>
export default {
  props: ["btnText", "myClass"],
};
</script>

<style lang="less" scoped>
.btn {
  margin-top: 20/360 * 100vw;
  height: 48/360 * 100vw;
  line-height: 48/360 * 100vw;
  border-radius: 24/360 * 100vw;
  background-color: rgba(204, 51, 0, 1);
  font-size: 18/360 * 100vw;
  text-align: center;
  color: #fff;
}
.btn2 {
  position: fixed;
  bottom: 0;
  width: 100vw;
  margin-top: 0;
}
</style>