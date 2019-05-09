import axios from 'axios'

const ajax = axios.create()

//请求拦截
ajax.interceptors.request.use(config => {
  return config
})

//响应拦截
ajax.interceptors.response.use(resp => {
  if(resp.data.code === 200){
    return resp.data
  }
})

//请求购物车页列表数据
export const getcartdata = () => {
  return ajax.get('http://www.xiongmaoyouxuan.com/api/tab/5?start=0')
}