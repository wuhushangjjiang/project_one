import vue from 'vue'
import vueRouter from 'vue-router'

import routes from './router'

vue.use(vueRouter)

export default new vueRouter({
    routes
})