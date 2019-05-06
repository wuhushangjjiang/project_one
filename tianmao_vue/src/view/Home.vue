<template>
  <div class="jingdonghome">
    <div class="home-header">
      <JdHeader></JdHeader>
    </div>
    <div class="home-main" @mousewheel="mainscroll($event)">
      <div class="swiper-container" >
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(img,index) in swiperData" :key="index">
            <router-link to="/">
              <img :src="img" alt>
            </router-link>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <div class="home-main-banner">
        <div class="home-main-banner_left">
          <img src="https://m.360buyimg.com/mobilecms/s250x200_jfs/t1/33314/36/10317/94712/5cce49b8Ed6d2539d/69e02796c48d986a.jpg!q70.jpg.dpg" alt="">
        </div>
        <div class="home-main-banner_center">
          <img src="https://m.360buyimg.com/mobilecms/s250x200_jfs/t1/40217/31/5504/93158/5cce49e4Ed7432481/dbd934af95363520.jpg!q70.jpg.dpg" alt="">
        </div>
        <div class="home-main-banner_right">
          <img src="https://m.360buyimg.com/mobilecms/s250x200_jfs/t1/37352/25/8296/81922/5cce4a0aE4a927c71/7f29c654108b76ba.jpg!q70.jpg.dpg" alt="">
        </div>
      </div>
      <li>dadad</li>
      <li>dadad</li>
      <li>dadad</li>
      <li>dadad</li>
      <li>dadad</li>
      <li>dadad</li>
      <li>dadad</li>
      <li>dadad</li>
      <li>dadad</li>
      <li>dadad</li>
      <li>dadad</li>
      <li>dadad</li>
      <li>dadad</li>
      <li>dadad</li>
      <li>dadad</li>
      <li>dadad</li>
      <li>dadad</li>
      <li>dadad</li>
    </div>

    <div class="home-footer">
      <JdFooter></JdFooter>
    </div>
  </div>
</template>

<script>
import JdHeader from "@/components/JdHeader";
import JdFooter from "@/components/JdFooter";
import Swiper from "swiper/dist/js/swiper.min.js";
import "swiper/dist/css/swiper.css";
export default {
  data() {
    return {
      swiperData: [
        "https://imgcps.jd.com/ling4/6644068/5Liq5oqk5YGl5bq36LSt6auY5pWI/5aW95ZOB6LSo5peg6ZyA5aSa6K-0/p-5c136f5e82acdd181ddfed62/4fbe5253/cr_1125x549_0_72/s1125x690/q70.jpg",
        "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/39712/34/5999/137430/5ccfcf63E88418193/5692b0a77f34d807.jpg!cr_1125x549_0_72!q70.jpg.dpg",
        "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/43716/16/1728/99717/5cc7a919E18bc33f0/de86517ac412d8eb.jpg!cr_1125x549_0_72!q70.jpg.dpg",
        "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/37261/4/7278/117092/5cc7baf2E75330b45/34672932c4c48ca9.jpg!cr_1125x549_0_72!q70.jpg.dpg",
        "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/37681/14/6933/72042/5cc7fabcEf6f38e7f/dd7624a043d6a138.jpg!cr_1125x549_0_72!q70.jpg.dpg",
        "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/33646/11/10506/98043/5ccf9becE9493106a/b9fec6397a46e9dd.jpg!cr_1125x549_0_72!q70.jpg.dpg"
      ]
    };
  },
  components: {
    JdHeader,
    JdFooter
  },
  created() {
    this.$nextTick(() => {
      this.banner();
    });
  },
  methods: {
    mainscroll(e){
      let scTop = e.path.filter(item=>{
        if(item.className==='home-main'){
          return item
        }
      })[0].scrollTop
      if(scTop>10 ){
        document.querySelector('.home-header').style='background-color:red;'
      }else{
        document.querySelector('.home-header').style='background-color:transparent;'
      }
    },
    banner() {
      var mySwiper = new Swiper(".swiper-container", {
        autoplay:true,
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      });
    }
  }
};
</script>

<style lang='scss' scoped>
html,
body {
  height: 100%;
  width: 100%;
}
img{
  vertical-align: top;
}
.jingdonghome {
  width: 3.75rem;
  display: flex;
  flex-direction: column;
  height: 100vh;
  .home-header {
    z-index: 2;
    width: 3.75rem;
    height: 0.44rem;
  }
  .home-main {
    margin-top: -0.44rem;
    flex: 1;
    overflow: auto;
    .swiper-container {
      width: 100%;
      height: 1.83rem;
      img{
        width: 100%;
        height: 1.83rem;          
      }
    }
    .home-main-banner{
      width: 3.75rem;
      height: 1rem;
      display: flex;
      img{
        margin-top: 0rem;
        height: 1rem;
        width: 1.25rem;
      }
    }
  }
  .home-footer {
    width: 3.75rem;
    height: 0.5rem;
    background-color: green;
  }
}
</style>
