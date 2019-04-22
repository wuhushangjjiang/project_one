# 页面头部

## 统一使用h5的doctype：

```html
<!DOCTYPE html>
```

##  页面编码

默认使用gbk，特定情况了以使用utf-8

```html
<meta charset="GBK">
<meta charset="UTF-8">
```



## TDK

页面标题：页面名称-产品中文全称-官方网站，28个汉字以内

```html
<title>抓金角银角大王每周末放送装备 - 地下城与勇士官方网站</title>
```

**页面关键字(Keywords)**

Keywords为产品名、专题名、专题相关名词，之间用英文半角逗号隔开

```html
<meta name="keywords" content="音乐，教育，娱乐" />
```

**页面描述(Description)**

不超过150个字符，描述内容要和页面内容相关。

<meta name="description" content="音乐教育，与娱乐相结合，学音乐的同时给大家带来快乐" />



## 页面Meta

PC端Meta：

```html
<meta charset="gbk" /> 
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="robots" content="all">
<meta name="author" content="Tencent-CP" />
<meta name="Copyright" content="Tencent" />
<meta name="Description" content="页面的描述内容" />
<meta name="Keywords" content="页面关键字" />
```

移动端Meta：

```html
<meta charset="gbk" /> 
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
<!-- 为了防止页面数字被识别为电话号码，可根据实际需要添加： -->
<meta name="format-detection" content="telephone=no"> 
<!-- 让添加到主屏幕的网页再次打开时全屏展示，可添加：   -->
<meta content="yes" name="mobile-web-app-capable">
<meta content="yes" name="apple-mobile-web-app-capable">
<meta name="robots" content="all">
<meta name="author" content="Tencent-CP" />
<meta name="Copyright" content="Tencent" />
<meta name="Description" content="页面的描述内容" />
<meta name="Keywords" content="页面关键字" />
```

##  页面跳转

如为双端页面，需要自动判断跳转，PC访问移动端页面，跳转到对应的PC专题上，反之亦然。

PC端添加：

```javascript
(function() {
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)){var a=document.referrer,b={"baidu.com":"seo_baidu","sogou.com":"seo_sogou","sm.cn":"seo_sm","so.com":"seo_360","bing.com":"seo_bing","google.com":"seo_google"},c;for(c in b){if(-1!=a.indexOf(c)){a=b[c];if(window.sessionStorage){sessionStorage.setItem("channel",a)}else{var d=d||0,b="";0!=d&&(b=new Date,b.setTime(b.getTime()+1000*d),b="; expires="+b.toGMTString());document.cookie="channel="+escape(a)+b+"; path=/"}break}}window.location.href="/m/"+location.search};
})();
```

移动端添加：

```javascript
if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    window.location.href = "PC端专题地址"+location.search;
}
```

# HTML

## html标签

1. 标签必须合法且闭合、嵌套正确，标签名需小写
2. 标签语法无错误，需要符合语义化
3. 标签的自定义属性以`data-`开头，如：`<a href="#" data-num='18'></a>`
4. 除非有特定的功能、组件要求等，禁止随意使用id来定义元素样式

## 链接

1. 给 `<a>` 标签加上title属性
2. `<a>`标签的`href`属性必须写上链接地址，暂无的加上`javascript:alert('敬请期待！')`
3. 非本专题的页面间跳转，采用打开新窗口模式：`target="_blank"`

## https协议自适应

将调用静态域名 `www.baidu.com` ` 的外部请求，写法上一律去掉协议`http:`部分，采用自适应的写法。具体方法如下：

```html
<style>
//CSS背景图片 
.bg{background: url(//game.gtimg.cn/images/cf/cp/a20161021sqjs/hd.jpg) no-repeat;}
</style>
//链接URL
<a href="//cf.qq.com/main.shtml">进入官网</a>
//图片SRC
<img src="//game.gtimg.cn/images/cf/web201610/logo.png">
//JS链接
<script src="//ossweb-img.qq.com/images/js/title.js"></script>
```

##  flash

页面禁止使用flash，动画使用video、CSS3、canvas等方式实现，低版本浏览器使用背景图片降级。

# CSS规范

## 选择器

1. CSS类名命名参考[注释与命名](https://tgideas.qq.com/doc/frontend/spec/common/name.html#%E5%91%BD%E5%90%8D)
2. 禁止使用层级过深的选择器，最多3级。
3. 除非有特定的功能、组件要求等，禁止随意使用id来定义元素样式
4. 除非是样式reset需要，禁止对纯元素选择器设置特定样式，避免样式污染

##  reset示例

###  PC端

```css
body,dl,dd,ul,ol,h1,h2,h3,h4,h5,h6,p,form,header,section,article,footer{margin:0;}
body,button,input,select,textarea{font:12px/1.5 tahoma,'\5FAE\8F6F\96C5\9ED1',sans-serif}
h1,h2,h3,h4,h5,h6{font-size:100%}
em,b{font-style:normal}
a{text-decoration:none} 
a:hover{text-decoration:underline}
img{border:0} 
body{padding-top:42px} 
button,input,select,textarea{font-size:100%;outline:none}
table{border-collapse:collapse;border-spacing:0}
td,th,ul,ol{padding:0}
```

###  移动端

有较多文字的文章类页面：

```css
/* 移动端常用reset.css (文字版本) */
/* reset */
html,body,div,p,ul,li,dl,dt,dd,em,i,span,a,img,input,h1,h2,h3,h4,h5 {margin:0;padding:0}
a,img,input {border:none;}
body{font: 14px/1.75 -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif;}
a {text-decoration:none;}
ul,li{list-style: none}
```

如果页面无文字，或者不希望文字被长按选中，可使用下面的reset；适合于大多数专题页面

```css
/* 移动端常用reset.css (无文字版本) */
/* reset */
html,body,div,p,ul,li,dl,dt,dd,em,i,span,a,img,input,h1,h2,h3,h4,h5 {margin:0;padding:0}
a,img,input {border:none;}
body{font: 14px/1.75  -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif;-webkit-tap-highlight-color: rgba(0,0,0,0);}
a {text-decoration:none;}
ul,li{list-style: none}
a, img {-webkit-touch-callout: none; /* 禁止长按链接与图片弹出菜单 */}
html, body {
    -webkit-user-select: none;   /* 禁止选中文本（如无文本选中需求，此为必选项） */
    user-select: none;
}
```



每个缩进使用4个空格，不允许使用 2 个空格 或 tab

```css
//正确
.sample {
    display: flex;
}
//错误
.sample {
  display: flex;
}
```

属性名与冒号之间不允许包含空格， 冒号与属性值之间必须包含空格

```css
//正确
display: flex;
//错误
display:flex
display : flex
display :flex
```

逗号前不允许有空格，逗号后必须跟一个空格

```css
//正确
font-family: Helvetica, Arial
//错误
font-family: Helvetica , Arial
font-family: Helvetica ,Arial
font-family: Helvetica, Arial
```

一组变量的定义，尽量以冒号对齐

```css
//推荐
$link-hover-color        : #29e;
$hover-color-gray        : #ebebeb;
$icon-hover-color        : #4d4d4d;
$btn-hover-color         : #f0f0f0;
$btn-hover-color-form    : #f9f9f9;
$btn-hover-color-cancel  : #f63737;
//不推荐
$link-hover-color : #29e;
$hover-color-gray : #ebebeb;
$icon-hover-color : #4d4d4d;
$btn-hover-color : #f0f0f0;
$btn-hover-color-form : #f9f9f9;
$btn-hover-color-cancel : #f63737;
```

多个并行选择器使用同一规则，必须换行

```css
//正确
.a,
.b,
.c {
    box-sizing: border-box;
}
//错误
.a, .b, .c {
    box-sizing: border-box;
}
```

