<template>
  <div class="catebox">
    <CateList
      v-for="(item,index) in productlists"
      :key="index"
      :title="item.title"
      :image="item.image"
      :price="item.price"
      :saleNum="item.saleNum"
      :id="item.id"
    />
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
      productlists: []
    };
  },
  methods: {
    getData() {
      this.$http.getMallList().then(resp => {
        this.productlists = resp.items.list;
        console.log(this.productlists);
      });
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getData();
    });
  },
  beforeRouteUpdate(to, from, next) {
    next();
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
.catebox {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
