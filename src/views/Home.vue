<template>
  <div>
    <HomeHeader />
    <van-tabs v-model="activeIndex" background="#e4e4e4">
      <van-tab
        :title="category.name"
        v-for="category in categoryList"
        :key="category.id"
      >
        <!-- :immediate-check="false" 禁止页面进来时马上发送请求 -->
        <van-list
          v-model="category.loading"
          :immediate-check="false"
          :finished="category.finished"
          finished-text="我一点都没有了"
          @load="loadMore"
        >
          <PostItem
            v-for="post in category.postList"
            :key="post.id"
            :postData="post"
            @click.native="$router.push('/postDetail/' + post.id)"
          />
        </van-list>
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
    };
  },
  // 监控激活状态
  watch: {
    // 切换分类会触发这个监听器
    activeIndex() {
      const currentCategory = this.categoryList[this.activeIndex];
      // console.log(currentCategory.postList.length);
      // 当前栏目如果已经有文章就不需要再获取
      if (currentCategory.postList.length == 0) {
        this.loadPost();
      }
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
          postList: [], //   给每个分类添加了 postList的属性，每一个item都有自己的postList，而不是共用一个postList
          pageIndex: 1,
          pageSize: 7,
          // 只要拉到底部组件会自动将这个设为 true, 就不会重复发请求了
          loading: false,
          finished: false,
        };
      });
      this.categoryList.push({
        name: "+",
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
        params: {
          category: currentCategory.id, // 根据当前激活分类的id获取该分类的文章列表
          pageSize: currentCategory.pageSize,
          pageIndex: currentCategory.pageIndex,
        },
      }).then((res) => {
        // 1. 获取的数据不应该覆盖, 而是拼接
        // 之前获取数据都覆盖源数据，但是现在是翻页, 所以新数组应该拼接在旧数组的后面
        currentCategory.postList = [
          ...currentCategory.postList,
          ...res.data.data,
        ];

        // 2. 加载完数据应该通知组件, 加载状态变为 false 可以继续后面的翻页了
        currentCategory.loading = false;

        // 3. 每当结果长度比要求长度小, 证明页面到底, 告诉组件不能在加载下一页了
        if (res.data.data.length < currentCategory.pageSize) {
          currentCategory.finished = true;
        }
        console.log(this.categoryList);
      });
    },
    // 列表拉到最底部会触发的函数
    loadMore() {
      // 将当前分类的页码加一然后获取数据
      const currentCategory = this.categoryList[this.activeIndex];
      currentCategory.pageIndex += 1;
      this.loadPost();
    },
  },
};
</script>

<style lang="less" scoped>
/deep/ .van-tab:nth-last-child(2) {
  background: #e4e4e4;
  position: sticky;
  right: -8px;
  width: 44px;
  line-height: 44px;
}
</style>