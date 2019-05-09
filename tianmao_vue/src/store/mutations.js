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
}