// axios基础的封装（4个基地址 超时时间 请求响应拦截器）
import axios from  'axios'

// 接口基地址+接口超时时间
const httpInstance = axios.create({
    baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout:5000

})
// axios请求拦截器
httpInstance.interceptors.request.use(config =>{
    return config
}, e=> Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res =>res.data, e =>{
    return Promise.reject(e)
})


export default httpInstance