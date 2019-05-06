<template>
  <div class="datu">
    <router-link :to="`/detail/${id}`">
      <img class="datu_img" :src="image">
      <div class="title">{{title}}</div>
      <div class="price">
        <span class="price_P">￥{{price}}</span>
        <span class="saleNum">月销{{saleNum}}笔</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CateList",
  props: {
    title: String,
    image: String,
    price: Number,
    saleNum: Number,
    id: Number
  }
};
</script>

<style lang="scss" scoped>
.datu {
  width: 1.86rem;
  height: 3.33rem;
  &_img {
    width: 1.86rem;
    height: 2.79rem;
  }
  .title {
    width: 1.86rem;
    height: 0.18rem;
    font-size: 0.12rem;
    line-height: 0.18rem;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .price {
    width: 1.58rem;
    display: flex;
    justify-content: space-between;
    .price_P {
      color: #dd2727;
      font-size: 0.14rem;
      line-height: 0.18rem;
      font-weight: bold;
    }
    .saleNum {
      color: #999;
      font-size: 0.12rem;
      line-height: 0.14rem;
      font-weight: 400;
    }
  }
}
</style>
