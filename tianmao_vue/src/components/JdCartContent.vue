<template>
  <div class="details-name">
    <label class="checkbox">
      <input type="checkbox" :checked="ischecked">
      <span></span>
    </label>
    <div class="details-img">
      <img
        :src="img"
        alt
      >
    </div>
    <div class="details-more">
      <div class="details-more__top">
        <p>{{title}}</p>
      </div>
      <div class="details-more__bottom">
        <p>
          ￥
          <span>{{price}}</span>
        </p>
        <div class="details-more__bottom__counter">
          <span class="cart-reduce" @click="reducecount(id)">&#xe624;</span>
          <span class="cart-number">{{count}}</span>
          <span class="cart-plus" @click="pluscont(id)">&#xe65a;</span>
        </div>
      </div>
      <span class="delete">
        <em>删除</em>
      </span>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'JdCartContent',
  props: {
    id: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    count: {
      type: Number,
      default: 0,
    },
    ischecked: {
      type: Boolean,
      default: true
    },
  },
  methods: {
    ...mapMutations([
      'reducecount',
      'pluscont'
    ])
  }
};
</script>

<style lang="scss" scoped>
.details-name {
  display: flex;
  margin: 0.18rem 0;
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
  .details-img {
    width: 0.75rem;
    height: 0.75rem;
    img {
      max-width: 100%;
    }
  }
  .details-more {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 0.12rem;
    &__top {
      > p {
        font-size: 0.14rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display:-webkit-box; 
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
      }
    }
    &__bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      > p {
        color: #e4393c;
        text-align: center;
        > span {
          font-size: 0.14rem;
        }
      }
      &__counter {
        span {
          display: inline-block;
          width: 0.18rem;
          height: 0.16rem;
          text-align: center;
          line-height: 0.16rem;
          padding: 0.04rem;
          color: #999;
          font-size: 0.16rem;
        }
        .cart-reduce {
          font-family: iconfont;
        }
        .cart-number {
          width: auto;
        }
        .cart-plus {
          font-family: iconfont;
        }
      }
    }
    .delete{
      display: flex;
      flex-direction: row-reverse;
      padding-right: .04rem;
      color: #999;
    }
  }
}
</style>
