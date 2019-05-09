<template>
  <div>
    <div class="mine_head">
      <img
        src="https://img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png"
      >
      <div class="userinfo">
        <div class="tel">153****0929</div>
        <div class="username">用户名:whl</div>
      </div>
      <div class="setmine">账号管理</div>
    </div>
    <div class="mine_main">
      <div class="mine_main-list1">
        <div class="mine_main-list1_item" v-for="(item,index) in mineinfo_one" :key="index">
          <img :src="item.img">
          <div class="title">{{item.title}}</div>
        </div>
      </div>
      <div class="mine_main-list1">
        <div class="mine_main-list1_item" v-for="(item,index) in mineinfo_two" :key="index">
          <img :src="item.img">
          <div class="title">{{item.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mine",
  data() {
    return {
      mineinfo_one: [
        {
          img:
            "https://img11.360buyimg.com/jdphoto/s40x40_jfs/t14911/113/1615678148/168/7734f24f/5a53578eN0e2811b6.png",
          title: "待付款"
        },
        {
          img:
            "https://img11.360buyimg.com/jdphoto/s40x40_jfs/t14608/2/1636876268/266/b4ebb3f2/5a535791N627c296c.png",
          title: "待收货"
        },
        {
          img:
            "https://img11.360buyimg.com/jdphoto/s40x40_jfs/t15049/345/1573771240/492/7ef15694/5a5357eaNab882dcb.png",
          title: "退换/售后"
        },
        {
          img:
            "https://img30.360buyimg.com/jdphoto/jfs/t14953/346/2113764063/185/1a1dcd24/5a6d7b8bN8431ea1a.png",
          title: "全部订单"
        },
        {
          img:
            "https://img11.360buyimg.com/jdphoto/s40x40_jfs/t20329/11/1228908740/243/73a7934c/5b235f37Ne85fdb85.png",
          title: "我的资产"
        }
      ],
      mineinfo_two: [
        {
          img:
            "https://img14.360buyimg.com/jdphoto/jfs/t1/24988/22/12030/2316/5c94d6d4E7cdcf995/c8fe8e84d89685f7.png!q70.webp",
          title: "我的预约"
        },
        {
          img:
            "https://img10.360buyimg.com/jdphoto/jfs/t12931/150/1327543095/1276/e9e67341/5a1e9ee2Nb5baf153.png!q70.webp",
          title: "火车票"
        },
        {
          img:
            "https://img12.360buyimg.com/jdphoto/jfs/t13612/121/1346421356/1355/9014e74f/5a1e9f1cNab886864.png!q70.webp",
          title: "应用推荐"
        },
        {
          img:
            "https://img12.360buyimg.com/jdphoto/jfs/t7711/100/3983515381/1466/1049e625/5a1e9f28N2460c691.png!q70.webp",
          title: "通信营业厅"
        },
        {
          img:
            "https://img12.360buyimg.com/jdphoto/jfs/t12514/60/1318835455/1723/d6ae70f5/5a1e9e39Ndc5e9285.png!q70.webp",
          title: "用户福利"
        },
        {
          img:
            "https://img12.360buyimg.com/jdphoto/jfs/t18940/299/476632277/2164/4453d9e4/5a813897N7c80dea2.png!q70.webp",
          title: "飞机票"
        },
        {
          img:
            "https://img12.360buyimg.com/jdphoto/jfs/t16390/157/2010422417/341/bb4c68c4/5a8138f2Nfd5de7b7.png!q70.webp",
          title: "酒店"
        }
      ]
    };
  }
};
</script>

<style lang='scss' scoped>
.mine_head {
  width: 3.55rem;
  height: 1.2rem;
  margin: 0.1rem auto;
  background: linear-gradient(90deg, #eb3c3c, #ff7459);
  box-shadow: 0 2px 4px rgba(228, 57, 60, 0.4);
  border-radius: 0.1rem;
  position: relative;
  display: flex;
  align-items: center;
  img {
    width: 0.6rem;
    margin-left: 0.2rem;
  }
  .userinfo {
    font-size: 0.14rem;
    color: #fff;
    margin: 0 0.2rem;
    line-height: 0.2rem;
  }
  .setmine {
    position: absolute;
    top: 0.1rem;
    right: 0.2rem;
    background: url("https://img11.360buyimg.com/jdphoto/s26x26_jfs/t14701/329/1603887827/338/bdda401f/5a53570bN44d2baad.png")
      0px 0px no-repeat;
    background-size: 0.12rem 0.12rem;
    padding-left: 0.14rem;
  }
}
.mine_main {
  margin-top: 0.3rem;
  &-list1 {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 0.3rem;
    &_item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 25%;
      img {
        width: 0.2rem;
      }
      .title {
        font-size: 0.12rem;
        color: #666;
        line-height: 0.42rem;
        text-align: center;
      }
    }
  }
}
</style>
