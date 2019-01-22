
import { router } from '../router'
import axios from 'axios'
import env from '../../config/env'
// Vue.use(VueAxios, axios)
class Token {
    constructor() {
        this.token = '',
            this.url = ''
    }
    //解析href
    getUrlparam(param) {
        
        const reg = new RegExp('(^|&)' + param + '=([^&]*)(&|$)');
        const r = window.location.search.substr(1).match(reg) || window.location.hash.substring((window.location.hash.search(/\?/)) + 1).match(reg);
        if (r != null) {
            return decodeURIComponent(r[2]);
        }
        
    };
    localStorageHasToken() {
        //1、查看缓存是否有token
        // console.log(!(localStorage.getItem('token') == null) && typeof(localStorage.getItem('token')) != "undefined");
        console.log(localStorage.getItem('token') != "undefined");

        return !(localStorage.getItem('token') == null) && localStorage.getItem('token') != "undefined"
    }

    linkHasToken(tooken) {
        //2、链接是否传入token
        return typeof (tooken) != "undefined"
    }

    verifyToken() {
        //验证token是否过期
        //wechat/verify
        //post
        
        // return
        axios.request({
            url: 'https://zhlsqj.com/wechat/verify',
            method: 'post',
            headers: {
                token: this.token || localStorage.getItem("token")
            },
            data: {}
        }).then(res => {
            // console.log(res);
            // alert('token没过期')
            localStorage.setItem('token',(localStorage.getItem("token") || this.token))
        }).catch(err => {
            // console.log('重新获取token');
            // console.log(localStorage.getItem("token"));
            
            // return
            // localStorage.setItem('hasToken', '过期')
            // localStorage.clear('token')
            // return
            alert('重新获取')
            this.getToken()
        })

    }

    getToken() {
        //3、重新获取token
        if (env === 'development') {
            //本地测试使用
            if (router.history.current.query.id) {
                this.url = encodeURIComponent('http://localhost:8081/#' + router.history.current.path + '?id=' + router.history.current.query.id)
            } else {
                this.url = encodeURIComponent('http://localhost:8081/#' + router.history.current.path)
            }
        } else {
            //上传服务器使用
            if (router.history.current.query.id) {
                this.url = encodeURIComponent('https://zhlsqj.com/#' + router.history.current.path + '?id=' + router.history.current.query.id)
            } else {
                this.url = encodeURIComponent('https://zhlsqj.com/#' + router.history.current.path)
            }
        }
        localStorage.setItem('url', this.url)
        location.href = 'https://zhlsqj.com/wechat/oauth?url=' + this.url
    }

    initToken(tooken) {
        if (this.localStorageHasToken()) {
            // alert('缓存有token')
            this.token = localStorage.getItem('token')
            // this.verifyToken()
        } else if (tooken) {
            // alert('连接有token')
            // this.verifyToken()
            this.token = tooken
            localStorage.setItem('token', tooken)
        } else {
            // return
            this.getToken()
        }
    }
}


export default Token