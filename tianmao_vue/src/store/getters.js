export default {
  //总件数
  countTotal(state){
    return state.cart.reduce((acc, cur) => {
      acc += cur.count
      return acc 
    }, 0)
  },
  //购物车页面的显示计算
  cartpage(state, {countTotal}){
    return countTotal === 0
  },
  //选中总件数
  checkedtrue(state){
    return state.cart.filter(item => item.ischecked === true)
      .reduce((acc, cur) => {
        acc += cur.count
        return acc
      }, 0)
  },
  //总计价格
  totalPrice(state) {
    return state.cart.filter(item => item.ischecked === true)
      .reduce((acc, cur) => {
        return acc += (cur.count * cur.price)
      }, 0)
  },
  //全选按钮
  isallchecked(state){
    return state.cart.every(item => item.ischecked === true)
  }
}