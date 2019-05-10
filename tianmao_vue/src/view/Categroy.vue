<template>
  <div
    v-infinite-scroll="getData"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10"
    class="catebox"
  >
    <CateList
      v-for="(item,index) in productlists"
      :key="index"
      :title="item.title"
      :image="item.image"
      :price="item.price"
      :saleNum="item.saleNum"
      :id="item.id"
    />
    <div v-if="isEnd" class="load-more-btn no-more">没有更多了</div>
    <div v-else class="load-more-btn" @click="getData">加载更多…</div>
  </div>
</template>

<script>
import CateList from "@/components/CateList";
export default {
  components: {
    CateList
  },
  data() {
    return {
      productlists: [],
      start: 0,
      loading: false,
      isEnd: false
    };
  },
  methods: {
    getData() {
      this.loading = true;
      const { id } = this.$route.params;
      this.$http.getProductList(id, this.start).then(resp => {
        this.productlists = this.productlists.concat(resp.items.list);
        // console.log(resp);
        this.start = resp.items.nextIndex;
        this.isEnd = resp.items.isEndlse;
        this.loading = false;
      });
    }
  },
  // beforeRouteEnter(to, from, next) {
  //   next(vm => {
  //     vm.getData();
  //   });
  // },
  beforeRouteUpdate(to, from, next) {
    this.productlists = [];
    this.start = 0;
    next();
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
.catebox {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: hidden;
}
</style>
