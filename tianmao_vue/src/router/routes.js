import JdCart from '@/view/JdCart'
import JdHome from '@/view/JdHome'



export default [
  {
    path: '/',
    name: 'home',
    components: {
      default: JdHome
    }
  },
  {
    path: '/cart',
    name: 'cart',
    components: {
      default: JdCart
    }
  }
]