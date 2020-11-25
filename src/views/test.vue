<template>
  <div>
    <button @click="addCollect(68)">添加收藏</button>
  </div>
</template>

<script>
export default {
  methods: {
    addCollect(id) {
      this.$axios({
        url: "/post_star/" + id,
      }).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style>
</style>