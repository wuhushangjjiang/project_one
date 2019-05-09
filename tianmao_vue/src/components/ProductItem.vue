<template>
  <div
    class="jd-product"
    v-infinite-scroll="getData"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10"
  >
    <router-link
      tag="div"
      :to="`/detail/${item.id}`"
      class="jd-product-item"
      v-for="(item,index) in Products"
      :key="index"
    >
      <div class="jd-product-item_img">
        <img :src="item.image" :alt="item.title">
      </div>
      <p class="jd-product-item_title">{{item.title}}</p>
      <div class="jd-product-item_footer">
        <span class="price">￥{{item.price}}</span>
        <span class="btn">加入购物车</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  data() {
    return {
        start:1,
        loading:false,
        isEnd:false,
        Products: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
        this.loading = true;
        this.$http.getHomeData(this.start).then(resp => {
            console.log(resp);
            this.Products = this.Products.concat(resp.list);
            this.start = resp.nextIndex;
            this.isEnd = resp.isEndlse;
            this.loading = false;
        });
    }
  }
};
</script>

<style lang='scss' scoped>
.jd-product {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .jd-product-item {
    font-size: 0.13rem;
    width: 1.76rem;
    height: 2.67rem;
    display: flex;
    flex-direction: column;
    &_img {
      width: 100%;
      height: 1.76rem;
      background-color: yellow;
      img {
        width: 100%;
        height: 1.76rem;
      }
    }
    &_title {
      width: 100%;
      padding: 0 0.02rem;
      line-height: 0.15rem;
      height: 0.15rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &_footer {
      flex: 1;
      width: 100%;
      .price {
        padding: 0.06rem 0;
        display: inline-block;
        color: red;
      }
      .btn {
        float: right;
        display: inline-block;
        height: 0.25rem;
        width: 0.8rem;
        text-align: center;
        background-color: #26a2ff;
        line-height: 0.25rem;
        border-radius: 0.03rem;
      }
    }
  }
}
</style>
