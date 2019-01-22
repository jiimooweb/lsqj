import Axios from 'axios'
import baseURL from '../../config/url'
import Token from "./util.js";
const token = new Token();
class httpRequest {
    constructor() {
        this.options = {
            method: '',
            url: ''
        }
        // 存储请求队列
        this.queue = {}
    }
    // 销毁请求实例
    destroy(url) {
        delete this.queue[url]
        const queue = Object.keys(this.queue)
        return queue.length
    }
    // 请求拦截
    interceptors(instance, url) {
        // 添加请求拦截器

        instance.interceptors.request.use(config => {
            // 在发送请求之前做些什么
            return config
        }, error => {
            // 对请求错误做些什么
            return Promise.reject(error)
        })

        // 添加响应拦截器
        instance.interceptors.response.use((res) => {
            let { data } = res

            const is = this.destroy(url)
            return data
        }, (error) => {
            /*
            error :{
              config
              request
              response
            }
            */
            if(error.response.status === 401){
                token.getToken();
            }
            // 对响应错误做点什么
            return Promise.reject(error)
        })

    }
    
    // 创建实例
    create() {
        let conf = {
            baseURL: baseURL,
            // timeout: 2000,
            headers: {
                // token: (token.getUrlparam('token') || localStorage.getItem("token"))
                token: 123
            }
        }   
        
        return Axios.create(conf)
    }
    // 合并请求实例
    // mergeReqest(instances = []) {
        
    // }
    // 请求实例
    request(options) {
        var instance = this.create()
        
        this.interceptors(instance, options.url)
        options = Object.assign({}, options)
        this.queue[options.url] = instance
        if(!token.getUrlparam('token') || !localStorage.getItem("token")){
            // token.getToken()
        }
        let tooken = token.getUrlparam('token') || localStorage.getItem("token")
        
        localStorage.setItem('token',(token.getUrlparam('token') || localStorage.getItem("token")))
        options.headers = {token : tooken}
        
        
        return instance(options)
    }
}
export default httpRequest
