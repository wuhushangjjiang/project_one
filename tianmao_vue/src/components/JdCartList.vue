<template>
  <div class="jd-cart-main__list">
    <div class="cart-list-img">
      <img :src="img" alt="">
    </div>
    <p>{{title}}</p>
    <div class="pluscart">
      <span>￥<span>{{price}}</span></span>
      <span @click="addtocart({id, title, price, img})">购物车</span>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    }
  },
  computed: {
    
  },
  methods: {
    ...mapMutations([
      'addtocart'
    ])
  },
}
</script>

<style lang="scss" scoped>
.jd-cart-main__list{
  display: inline-block;
  width: 50%;
  box-sizing: border-box;
  padding: .04rem;
  .cart-list-img{
    width: 100%;
    height: 0;
    padding-top: 100%;
    position: relative;
    img{
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      max-width: 100%;
    }
  }
  > p{
    margin: .1rem;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display:-webkit-box; 
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2; 
  }
  .pluscart{
    display: flex;
    justify-content: space-between;
    & :first-child{
      color: red;
    }
  }
}
</style>
