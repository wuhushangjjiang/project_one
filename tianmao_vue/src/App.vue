<template>
  <div class="jdProject">
    <router-view>

    </router-view>
  </div>
</template>

<script>
export default {
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
}
</script>

<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
// HTML5 display-role reset for older browsers
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
html,
body{
  height:100%;
  font-size: 0.12rem
}
.jdProject{
  height: 100%
}
</style>

