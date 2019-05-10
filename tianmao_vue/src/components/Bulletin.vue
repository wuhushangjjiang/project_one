<template>
  <div class="home-main-bulletin">
    <div class="home-main-bulletin_text">
      <img
        src="https://m.360buyimg.com/mobilecms/jfs/t14752/82/2574581467/6535/c8158ace/5aa8935bN94e31ff6.jpg.dpg"
        alt
      >
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(text,index1) in bulletinSwiper" :key="index1">
            <router-link tag="div" to="/">
              <span>{{text}}</span>
            </router-link>
          </div>
        </div>
      </div>
      <span class="home-main-bulletin_text-span">更多</span>
    </div>
    <!-- <router-link
        tag="div"
        :to="`/detail/${item.id}`"
        class="home-main-bulletin_img"
        v-for="item in Products"
        :key="item.id"
      > -->
    <div class="home-main-bulletin_img">
      <div class="swiper-containerx">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in Products" :key="item.id" >
            <router-link tag="div" :to="`/detail/${item.id}`">
              <img :src="item.image" :alt="item.title">
              <p class="price">￥{{item.price}}</p>
              <p class="originprice">￥{{item.originPrice}}</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- </router-link> -->
  </div>
</template>

<script>
import Swiper from "swiper/dist/js/swiper.min.js";
import "swiper/dist/css/swiper.css";
export default {
  data() {
    return {
      bulletinSwiper: [
        "京东数字科技CEO陈生强",
        "用数字科技去实现数字经济",
        "字经济和数字科技的理解做"
      ],
      Products: []
    };
  },
  created() {
    this.$http.getHomeData(5).then(resp => {
      const { list } = resp;
      this.Products = list;
      this.$nextTick(() => {
      this.banner1();
      this.banner2();
    });
    });
    
  },
  methods: {
    banner1() {
      var mSwiper = new Swiper(".swiper-container", {
        loop: true,
        direction: "vertical",
        autoplay: {
          delay: 2000 //2秒切换一次
        }
      });
    },
    banner2(){
      var nSwiper = new Swiper(".swiper-containerx", {
          slidesPerView:5,
          freeMode:true
      });        
    }
  }
};
</script>

<style lang='scss' scoped>
.home-main-bulletin {
  width: 100%;
  height: 1.9rem;
  font-size: 0.16rem;
  &_text {
    height: 0.2rem;
    width: 100%;
    display: flex;
    .swiper-container {
      height: 0.2rem;
      width: 2.3rem;
      span{
          line-height: 0.18rem;
      }
    }
    img {
      height: 0.16rem;
      max-width: 0.73rem;
    }
    &-span {
      line-height: 0.16rem;
      float: right;
      width: 0.32rem;
      height: 0.16rem;
    }
  }
  &_img{
    .swiper-containerx{
        width: 100%;
        height: 1.2rem;
        img{
            padding: 0 0.1rem;
            width: 0.56rem;
            height: 0.76rem;
        }
        .price{
            color: red;
        }
        .originprice{
            color:  #999;
            text-decoration: line-through;
        }
    }
  }
}
</style>
