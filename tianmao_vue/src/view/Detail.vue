<template>
  <div>
    <div class="detail_head" v-show="headshow" ref="detailhead">
      <div class="backTo" @click="backTo"></div>
      <div v-anthor="'#top'" class="detail_shop">商品</div>
      <div v-anthor="'#pingjia'" class="detail_pingjia">评价</div>
      <div v-anthor="'#xq'" class="detail_xq">详情</div>
      <div class="goCart" @click="backTo"></div>
    </div>
    <div class="detail_swiper" id="top">
      <div class="backTo" @click="backTo"></div>
      <div class="swiper-container" ref="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="banner in img_swiper" :key="banner.id">
            <img :src="banner.url">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="detail_shop_price">￥{{price}}</div>
      <div class="detail_shop_title">{{title}}</div>
    </div>
    <mt-button type="primary" style="width:100%;">加入购物车</mt-button>
  </div>
</template>

<script>
import Swiper from "swiper/dist/js/swiper.min.js";
import "swiper/dist/css/swiper.css";
export default {
  data() {
    return {
      headshow: false,
      img_swiper: [],
      price: "",
      title: ""
    };
  },
  methods: {
    getData() {
      const { id } = this.$route.params;
      this.$http.getProductDetails(id).then(resp => {
        this.img_swiper = resp.detail.photo;
        this.price = resp.detail.price;
        this.title = resp.detail.title;
        this.$nextTick(() => {
          this.initSwiper();
        });
      });
    },
    initSwiper() {
      this.swiper = new Swiper(this.$refs.swiper, {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        }
      });
    },
    backTo() {
      this.$router.go(-1);
    },

    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 0) {
        this.headshow = true;
      } else {
        this.headshow = false;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
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
.detail_head {
  width: 100%;
  height: 0.44rem;
  position: fixed;
  top: 0;
  z-index: 3;
  background: #fff;
  display: flex;
  justify-content: space-around;
  font-size: 0.13rem;
  color: #999;
  line-height: 0.44rem;
  .backTo {
    position: relative;
    background: 0 0;
    &::after {
      border-color: #000000;
    }
  }
}
.backTo {
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
  width: 0.3rem;
  height: 0.3rem;
  background: rgba($color: #000000, $alpha: 0.5);
  z-index: 2;
  border-radius: 50%;
  &::after {
    content: "";
    position: absolute;
    width: 0.1rem;
    height: 0.1rem;
    border: 2px solid #fff;
    border-width: 0 0 2px 2px;
    top: 0.08rem;
    left: 0.12rem;
    transform: rotateZ(45deg);
  }
}
.swiper-container {
  .swiper-wrapper {
    .swiper-slide {
      img {
        width: 100%;
      }
    }
  }
  .swiper-pagination {
    display: inline-block;
    position: absolute;
    left: auto;
    right: 0.1rem;
    width: 0.5rem;
    background-color: rgba(100, 100, 100, 0.6);
    border-radius: 0.1rem;
    line-height: 0.2rem;
    height: 0.2rem;
    color: #fff;
    text-align: center;
  }
}
.detail_shop_price {
  color: #fa585a;
  font-size: 0.3rem;
  line-height: 0.33rem;
  margin: 0.2rem 0.1rem;
}
.detail_shop_title {
  font-size: 0.18rem;
  line-height: 0.24rem;
  margin: 0.2rem 0.2rem;
}
</style>
