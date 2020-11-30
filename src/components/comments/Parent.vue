<template>
  <div class="parentBox">
    <Parent v-if="parentData.parent" :parentData="parentData.parent" />
    <div class="info">
      <div class="name">火星网友</div>
      <div class="date">2小时前</div>
      <div class="reply">回复</div>
    </div>
    <div class="content">
      {{ parentData.content }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Parent",
  props: ["parentData"],
};
</script>
<style lang="less" scoped>
.parentBox {
  padding: 2px;
  margin: 2px;
  border: 1px solid #e4e4e4;
  .info {
    display: flex;
    align-items: center;
    margin-bottom: 10/360 * 100vw;
    padding-left: 10/360 * 100vw;
    color: #333;
    font-size: 14/360 * 100vw;

    .date {
      flex-grow: 1;
      padding-left: 5/360 * 100vw;
      font-size: 12/360 * 100vw;
      color: #888;
    }

    .reply {
      font-size: 12 /360 * 100vw;
      color: #888;
    }
  }
}
</style>