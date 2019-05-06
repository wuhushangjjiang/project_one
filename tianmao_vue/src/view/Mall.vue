<template>
  <div>
    <div class="Mall_head">
      <div class="Mall_head_top">
        <span @click="backTo">
          <img src="@/assets/lt.png" alt srcset>
        </span>
        <input type="search" value="四件套纯棉">
        <span @click="toggleShow">···</span>
        <ul v-show="isShow">
          <router-link to="/">
            <li>首页</li>
          </router-link>
          <router-link to="/catelist">
            <li>分类搜索</li>
          </router-link>
          <router-link to="/cart">
            <li>购物车</li>
          </router-link>
          <router-link to="/mine">
            <li>我的京东</li>
          </router-link>
          <router-link to="/record">
            <li>浏览记录</li>
          </router-link>
        </ul>
      </div>
      <div v-show="showSwiper" class="Mall_head_center">
        <div class="Mall_head_center_list1">今日推荐</div>
        <div class="Mall_head_center_list2">
          <div class="swiper-container" ref="swiper">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(banner,index) in categoryTitle"
                :key="index"
              >{{banner}}</div>
            </div>
          </div>
        </div>
        <div @click="toggleSwiper" class="Mall_head_center_list3">
          <img src="@/assets/listcategory.png" alt srcset>
        </div>
      </div>
      <div v-show="!showSwiper" class="Mall_head_center2">
        <div class="Mall_head_center2_title">
          全部分类
          <span @click="toggleSwiper">x</span>
        </div>
        <ul>
          <li v-for="(item,index) in list" :key="index" class="list">
            <img :src="item.imageUrl" alt>
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="Mall_head_bottom"></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Swiper from "swiper/dist/js/swiper.min.js";
import "swiper/dist/css/swiper.css";
export default {
  name: "Mall",
  data() {
    return {
      list: [],
      isShow: false,
      showSwiper: true,
      categoryTitle: [
        "女装",
        "男装",
        "美妆推荐",
        "配饰",
        "女鞋",
        "男鞋",
        "零食王国",
        "内衣袜子",
        "母婴用品",
        "箱包",
        "个人洗护",
        "手机周边",
        "数码家电",
        "成人用品",
        "日用家居",
        "文体娱乐"
      ]
    };
  },
  created() {
    this.$http.getMallList().then(() => {
      this.$nextTick(() => {
        this.initSwiper();
      });
    });
    this.$http.getMallbannerList().then(resp => {
      this.list = resp.list;
    });
  },
  methods: {
    toggleShow() {
      this.isShow = !this.isShow;
    },
    initSwiper() {
      this.swiper = new Swiper(this.$refs.swiper, {
        slidesPerView: 4,
        freeMode: true
      });
    },
    toggleSwiper() {
      this.showSwiper = !this.showSwiper;
    },
    backTo() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 0.5rem;

  .swiper-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .swiper-slide {
      line-height: 0.5rem;
      width: auto !important;
      margin: 0 0.09rem;
    }
  }
}
.Mall_head {
  &_top {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 0.44rem;
    & span:nth-child(1) img {
      height: 0.2rem;
      width: 0.2rem;
    }
    input {
      width: 2.48rem;
      height: 0.3rem;
      border: none;
      color: #232326;
      background-color: #f7f7f7;
      background-image: url();
      border-radius: 0.15rem;
      text-align: center;
    }
    & span:nth-child(3) {
      font-size: 0.3rem;
    }
    ul {
      position: absolute;
      top: 0.4rem;
      right: 0.1rem;
      background: #232326;
      width: 1.25rem;
      height: 2.05rem;
      border-radius: 0.06rem;
      z-index: 2;
      &::before {
        content: "";
        position: absolute;
        height: 0.05rem;
        width: 0.105rem;
        background: url(../assets/up.png) no-repeat 50%;
        background-size: 100% 100%;
        top: -0.05rem;
        right: 0.1rem;
      }
      li {
        color: #f7f7f7;
        height: 0.41rem;
        line-height: 0.41rem;
        font-size: 0.14rem;
        text-align: center;
      }
    }
  }
  &_center {
    display: flex;
    justify-content: space-around;
    height: 0.5rem;
    align-items: center;
    &_list1 {
      width: 0.6rem;
      font-size: 0.14rem;
      border-right: 0.02rem solid #877a73;
    }
    &_list3 {
      img {
        width: 0.21rem;
        height: 0.21rem;
      }
    }
    &_list2 {
      width: 2.31rem;
      overflow: hidden;
      // flex: 1;
    }
  }
  &_center2 {
    text-align: center;
    font-size: 0.14rem;
    &_title {
      height: 0.5rem;
      line-height: 0.5rem;
      span {
        position: absolute;
        right: 0.1rem;
        font-size: 0.2rem;
      }
    }
    ul {
      position: absolute;
      display: flex;
      z-index: 2;
      flex-wrap: wrap;
      justify-content: space-between;
      background: #f7f7f7;
      li {
        width: 0.9rem;
        height: 0.67rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 0.1rem;
        color: #877a73;
        img {
          width: 0.48rem;
          height: 0.48rem;
          display: block;
        }
      }
    }
  }
}
</style>
