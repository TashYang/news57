<template>
  <div>
    <HomeHeader />
    <van-tabs v-model="activeIndex" background="#e4e4e4">
      <van-tab
        :title="category.name"
        v-for="category in categoryList"
        :key="category.id"
      >
        <PostItem
          v-for="post in category.postList"
          :key="post.id"
          :postData="post"
        />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import HomeHeader from "../components/HomeHeader";
import PostItem from "../components/PostItem";
export default {
  components: {
    HomeHeader,
    PostItem,
  },
  data() {
    return {
      activeIndex: 0, // 激活状态
      categoryList: [],
      // postList:[]
    };
  },
  // 监控激活状态
  watch: {
    activeIndex() {
      this.loadPost();
    },
  },
  created() {
    this.$axios({
      url: "/category",
    }).then((res) => {
      this.categoryList = res.data.data.map((item) => {
        // .map 映射一个新的数组
        return {
          ...item, //  相当于复制了一样的数组
          postList: [], //   给新数组添加了 postList的属性，会是每一个item都有自己的postList，而不是共用一个postList
        };
      });
      this.loadPost();
    });
  },
  methods: {
    loadPost() {
      // 当前激活分类的索引是 this.activeIndex
      // 当前激活的分类 this.categoryList[this.activeIndex]
      const currentCategory = this.categoryList[this.activeIndex];
      this.$axios({
        url: "/post",
        params: { category: currentCategory.id }, // 参数category是栏目的id
      }).then((res) => {
        currentCategory.postList = res.data.data;
        console.log(this.categoryList);
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>