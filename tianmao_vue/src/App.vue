<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  created() {
    (function(win, doc) {
      if (!win.addEventListener) return;
      function setFont() {
        var html = document.documentElement;
        var k = 375;
        html.style.fontSize = (html.clientWidth / k) * 100 + "px";
      }
      setFont();
      setTimeout(function() {
        setFont();
      }, 300);
      doc.addEventListener("DOMContentLoaded", setFont, false);
      win.addEventListener("resize", setFont, false);
      win.addEventListener("load", setFont, false);
    })(window, document);
  }
};
</script>

<style lang='scss'>
* {
  margin: 0;
  padding: 0;
}
</style>
