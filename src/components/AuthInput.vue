<template>
  <div class="inputWrapper">
    <input
      :placeholder="placeholder"
      :type="type"
      v-model="value"
      :class="{
        error: !isOk,
      }"
      @blur="showErr"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      isOk: true,
    };
  },
  props: ["placeholder", "type", "rule", "errMsg"],
  watch: {
    value(newVal) {
      if (this.rule.test(newVal)) {
        this.isOk = true;
      } else {
        this.isOk = false;
      }
    },
  },
  methods: {
    showErr() {
      if (!this.isOk) {
        alert(this.errMsg);
      }
    },
  },
};
</script>

<style lang='less' scoped>
.inputWrapper {
  input {
    width: 100%;
    border: none;
    outline: none;
    line-height: 40/360 * 100vw;
    font-size: 18/360 * 100vw;
    border-bottom: 1px solid #000;
    margin-bottom: 10/360 * 100vw;
    background-color: #f2f2f2;
  }
  .error {
    border-color: red;
  }
}
</style>