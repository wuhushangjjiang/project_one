<template>
  <div class="jd-home-footer">
    <div class="jd-home-footer_icon">
      <router-link tag="a" class="alink" to="/home">
        <img
          v-show="this.$route.path === '/home'"
          src="https://m.360buyimg.com/mobilecms/jfs/t15145/137/2502885754/3106/de5e0b14/5aa10cd2N46f18ce6.png"
          alt
        >
        <img
          v-show="this.$route.path !== '/home'"
          src="https://m.360buyimg.com/mobilecms/jfs/t18526/211/696109898/3876/a61be82c/5aa10cd2N1318ac50.png"
        >
      </router-link>
      <router-link tag="a" class="alink" to="/">
        <img
          src="https://m.360buyimg.com/mobilecms/jfs/t19183/49/696491919/3763/dec8cceb/5aa10cdbNa9cd0320.png"
          alt
        >
      </router-link>
      <router-link tag="a" class="alink" to="/mall/search/2">
        <img
          v-show="this.$route.path.includes('/mall/search')"
          src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t26308/300/329634942/2532/1b7a4155/5b8e4acdN888f9e54.png"
        >
        <img
          v-show="!this.$route.path.includes('/mall/search')"
          src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t25261/337/1250179439/2765/db2976c3/5b8e4ac3N749fb56e.png"
          alt
        >
      </router-link>
      <router-link tag="a" class="alink" to="/cart">
        <img
          src="https://m.360buyimg.com/mobilecms/jfs/t18583/69/717127328/4407/5e47882b/5aa10ceaN649eec12.png"
          alt
        >
      </router-link>
      <router-link tag="a" class="alink" to="/mine">
        <img
          v-show="this.$route.path !== '/mine'"
          src="https://m.360buyimg.com/mobilecms/jfs/t17782/11/2358895717/4684/ad19de7f/5af43af1N04ef5a16.png"
          alt
        >
        <img
          v-show="this.$route.path === '/mine'"
          src="https://m.360buyimg.com/mobilecms/jfs/t18598/41/712219415/3756/7828621f/5aa10cf6Nbfbdc1af.png"
        >
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.jd-home-footer {
  height: 0.5rem;
  width: 3.75rem;
  font-size: 0.12rem;
  &_icon {
    height: 0.5rem;
    width: 3.75rem;
    display: flex;
    justify-content: space-between;
    .alink {
      width: 0.6rem;
      height: 0.46rem;
      img {
        width: 0.6rem;
        height: 0.46rem;
      }
    }
  }
}
</style>
