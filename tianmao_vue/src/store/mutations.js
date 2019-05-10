export default {
  //添加购物车，并判断是新增的还是本来就有
  addtocart (state, productInfo) {
    const isInCart = state.cart.some(item => item.id === productInfo.id)
    if(isInCart){
      //本来就有
      state.cart = state.cart.map(item => {
        if(item.id === productInfo.id){
          item.count+=1
        }
        return item
      })
    }else{
      //新增
      state.cart.push({
        ...productInfo,
        ischecked: true,
        count: 1
      })
    }
  },
  pluscont(state, id){
    state.cart = state.cart.map(item => {
      if(item.id === id){
        item.count += 1
      }
      return item
    })
    
    
  },
  reducecount(state, id){
    state.cart = state.cart.map(item => {
      if(item.id === id && item.count > 1){
        item.count -= 1
      }
      return item
    })
  },
  //input事件
  inputischecked(state, id){
    return state.cart.filter(item => item.id === id)
      .map(item => {
        return item.ischecked = !item.ischecked
      })
  },
  //删除计算
  deleteev(state, id){ 
    return state.cart.map((item, index) => {
      if(item.id === id){
        state.cart.splice(index, 1)
      }
    })
  },
  //全选按钮
  isallcartchecked(state){
    if(state.cart.every(item => item.ischecked === true)){
      state.cart = state.cart.map(item => {
        item.ischecked = false
        return item
      })
    }else{
      state.cart = state.cart.map(item => {
        item.ischecked = true
        return item
      })
    }
    console.log('aaa')
  }
}