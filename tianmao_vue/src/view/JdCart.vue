<template>
  <div class="jd-cart">
    <div class="jd-cart-header">
      <div class="jd-cart-header-left" @click="back">
        <span>&#xe60c;</span>
      </div>
      <div class="jd-cart-header-center">
        <p>购物车</p>
      </div>
      <div class="jd-cart-header-right" @click="headerEv">
        <span>&#xe620;</span>
        <div class="jd-cart-header-right__list" v-show="headerBl">
          <div class="right-list">
            <span class="right-list-one">&#xe607;</span>
            <span class="right-list-two">首页</span>
          </div>
          <div class="right-list">
            <span class="right-list-one">&#xe608;</span>
            <span class="right-list-two">分类搜索</span>
          </div>
          <div class="right-list">
            <span class="right-list-one">&#xe606;</span>
            <span class="right-list-two">购物车</span>
          </div>
          <div class="right-list">
            <span class="right-list-one">&#xe62b;</span>
            <span class="right-list-two">我的京东</span>
          </div>
          <div class="right-list">
            <span class="right-list-one">&#xe605;</span>
            <span class="right-list-two">浏览记录</span>
          </div>
        </div>
      </div>
    </div>
    <div class="jd-cart-main">
      <div class="jd-cart-main__content">
        <div class="jd-cart-main__content__top">
          <div class="top-map">
            <span class="top-map-one">&#xe6f4;</span>
            <span class="top-map-two">成都市温江区</span>
            <span>{{countTotal}}</span>
          </div>
          <div class="top-edit">
            <span>编辑商品</span>
          </div>
        </div>
        <div v-if="cartpage" class="cartpage">
          <img src="@/assets/jingdong.png" alt="">
          <p>购物车空空如也，快去逛逛吧~</p>
        </div>
        <div v-else>
          <JdCartContent
            v-for="item in cart"
            :key="item.id"
            :id="item.id"
            :title="item.title"
            :img="item.img"
            :price="item.price"
            :ischecked="item.ischecked"
            :count="item.count"
          ></JdCartContent>
        </div>
      </div>
      <div style="text-align:center">可能你还想要</div>
      <div class="jd-cart-main__details">
        <JdCartList
          v-for="item in cartlistdata"
          :key="item.id"
          :id="item.id"
          :title="item.title"
          :img="item.image"
          :price ="item.price"
        ></JdCartList>
      </div>
    </div>
    <div class="jd-cart-footer" v-if="!cartpage">
      <div class="jd-cart-footer__allelection">
        <label class="checkbox">
          <input type="checkbox" :checked="isallchecked" @change="isallcartchecked"/>
          <span></span>
        </label>
        <span>全选</span>
      </div>
      <div class="jd-cart-footer__footerprice">
        <div class="footerprice-one">
          <span>
            总计:
            <span class="footerprice-one__price">￥{{totalPrice}}</span>
          </span>
        </div>
        <div class="footerprice-two">
          <span class="footerprice-two__total">
            总额￥
            <span>{{totalPrice}}</span>
          </span>
          <span>
            立减￥
            <span>0.00</span>
          </span>
        </div>
      </div>
      <div class="jd-cart-footer__Settlement">
        <p>
          去结算
          <span>({{checkedtrue}}件)</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import JdCartContent from "@/components/JdCartContent";
import JdCartList from "@/components/JdCartList";
import {mapState, mapGetters, mapMutations} from 'vuex'
export default {
  components: {
    JdCartContent,
    JdCartList
  },
  name: "JdCart",
  computed: {
    ...mapState([
      'cart'
    ]),
    ...mapGetters([
      'countTotal',
      'checkedtrue',
      'totalPrice',
      'cartpage',
      'isallchecked'
    ]),
    
  },
  data() {
    return {
      headerBl: false,
      cartlistdata: []
    };
  },
  created () {
    this.$http.getcartdata()
      .then(resp => {
        this.cartlistdata = resp.items.list
      })
  },
  methods: {
    headerEv() {
      this.headerBl = !this.headerBl;
    },
    ...mapMutations([
      'isallcartchecked'
    ]),
    back(){
      this.$router.go(-1)
    }
  }
};

</script>

<style lang="scss" scoped>
.jd {
  &-cart {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    &-header {
      width: 100%;
      height: 0.44rem;
      display: flex;
      &-left {
        width: 0.44rem;
        height: 100%;
        text-align: center;
        > span {
          font-family: iconfont;
          line-height: 0.44rem;
          font-size: 0.16rem;
          font-weight: 600;
          color: #aca9a9b2;
        }
      }
      &-center {
        flex: 1;
        height: 100%;
        line-height: 0.44rem;
        text-align: center;
        font-size: 0.18rem;
        color: #333;
      }
      &-right {
        width: 0.44rem;
        height: 100%;
        text-align: center;
        > span {
          font-family: iconfont;
          line-height: 0.44rem;
          font-size: 0.16rem;
          font-weight: 600;
          color: #aca9a9b2;
        }
        &__list {
          width: 0.86rem;
          background-color: rgba(0, 0, 0, 0.9);
          border-radius: 0.04rem;
          position: absolute;
          top: .4rem;
          left: 2.8rem;
          z-index: 2;
          .right-list {
            display: flex;
            justify-content: space-between;
          }
          span {
            color: #fff;
            font-size: 0.12rem;
            display: inline-block;
            height: 0.22rem;
            line-height: 0.22rem;
            padding: 0.06rem 0;
          }
          .right-list-one {
            width: 20%;
            font-family: iconfont;
            margin-right: 0.04rem;
          }
          .right-list-two {
            width: 80%;
            text-align: left;
            border-bottom: 1px solid #8c7f7fa8;
          }
        }
      }
    }
    &-main {
      flex: 1;
      overflow-x: hidden;
      display: flex;
      flex-direction: column;
      padding: 0 0.08rem;
      .jd-cart-main__content {
        &__top {
          display: flex;
          justify-content: space-between;
          .top-map {
            color: #999;
            font-size: 0.14rem;
            &-one {
              font-family: iconfont;
            }
          }
          .top-edit {
            font-size: 0.14rem;
            color: #e4393c;
          }
        }
        .cartpage{
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
          margin: .1rem 0;
          > img{
            width: .9rem;
            height: .9rem;
          }
          > p{
            display: block;
            font-size: .16rem;
            color: rgba(51,51,51,.66);
            padding: .08rem 0;
          }
        }
      }
      &__details{
        margin-top: 0.2rem;
      }
    }
    &-footer {
      display: flex;
      &__allelection {
        margin: 0.08rem;
        width: 0.4rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .checkbox {
          & > input {
            display: none;
            &:checked + span {
              background-color: #e4393c;
              border-color: #e4393c;
              &:after {
                content: "";
                width: 0.12rem;
                height: 0.06rem;
                left: 0.03rem;
                top: 0.04rem;
                border: 0.02rem solid #fff;
                position: absolute;
                border-width: 0 0 0.02rem 0.02rem;
                transform: rotateZ(-45deg);
              }
            }
          }
          & > span {
            display: block;
            width: 0.2rem;
            height: 0.2rem;
            border: 1px solid #999;
            border-radius: 0.1rem;
            position: relative;
          }
        }
        > span {
          display: inline-block;
          color: #999;
        }
      }
      &__footerprice {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin: 0.08rem;
        .footerprice-one {
          width: auto;
          margin-bottom: 0.06rem;
          &:first-child {
            font-size: 0.16rem;
            font-weight: 600;
          }
          &__price {
            font-size: 0.16rem;
            color: #e93b3d;
          }
        }
        .footerprice-two {
          width: auto;
          color: #999;
          &__total {
            margin-right: 0.06rem;
          }
        }
      }
      &__Settlement {
        width: 1.1rem;
        background-color: #e4393c;
        text-align: center;
        line-height: 0.5rem;
        color: #fff;
        & > p {
          display: block;
          font-size: 0.16rem;
          font-weight: 700;
          & > span {
            font-size: 0.12rem;
          }
        }
      }
    }
  }
}

@font-face {
  font-family: 'iconfont';  /* project id 1044373 */
  src: url('//at.alicdn.com/t/font_1044373_ffyqvgw6ru.eot');
  src: url('//at.alicdn.com/t/font_1044373_ffyqvgw6ru.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1044373_ffyqvgw6ru.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1044373_ffyqvgw6ru.woff') format('woff'),
  url('//at.alicdn.com/t/font_1044373_ffyqvgw6ru.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1044373_ffyqvgw6ru.svg#iconfont') format('svg');
}
</style>
