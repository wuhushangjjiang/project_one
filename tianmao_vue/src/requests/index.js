import axios from 'axios'
import { Indicator, Toast } from 'mint-ui'

const ajax = axios.create()

ajax.interceptors.request.use(config => {
    Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
    })
    return config
})

ajax.interceptors.response.use(resp => {
    Indicator.close()
    if (resp.data.code === 200) {
        return resp.data.data
    } else {
        // 在实际的工作中，这里应该有一个后端返回的错误信息
        Toast('出错了！')
    }
})
//获取首页的数据
export const getHomeData=(start=1)=>{
    return ajax.get(`api/tab/1/feeds?start=${start}&sort=0`)
}