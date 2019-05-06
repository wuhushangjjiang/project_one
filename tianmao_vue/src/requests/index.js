import axios from 'axios'
import { Indicator, Toast } from 'mint-ui'

const ajax = axios.create({
    baseURL: 'http://www.xiongmaoyouxuan.com'
})

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

export const getMallList = () => {
    return ajax.get("/api/tab/3?start=0")
}

export const getMallbannerList = () => {
    return ajax.get("/api/tabs?sa=")
}

// 获取详情
export const getProductDetails = (id) => {
    return ajax.get(`/api/detail?id=${id}`)
}