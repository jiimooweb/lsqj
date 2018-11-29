
import {router} from '../router'
import Vue from 'vue'
import axios from 'axios'

import VueAxios from 'vue-axios'
// Vue.use(VueAxios, axios)
class Token {
    constructor(){
        this.token = '',
        this.url = ''
    }
    localStorageHasToken(){
        //1、查看缓存是否有token
        return !(localStorage.getItem('token') == null) && !(typeof(localStorage.getItem('token')) != "undefined")
    }
    
    linkHasToken(tooken){
        //2、链接是否传入token
        return typeof(tooken) != "undefined"
    }
    
    verifyToken(){
        //验证token是否过期
        //wechat/verify
        //post
        axios.request({
            url:'https://zhlsqj.com/wechat/verify',
            method:'post',
            headers:{
                token:this.token
            },
            data:{}
        }).then(res=>{
            // console.log(res);
        }).catch(err=>{
            localStorage.setItem('hasToken','过期')
            localStorage.clear('token')
            // return
            this.getToken()
        })
        
    }

    getToken(){
        // return
        localStorage.clear('token')
        //3、重新获取token
        // var url = encodeURIComponent('https://zhlsqj.com/#'+router.history.current.path)
        // var url = encodeURIComponent('http://localhost:8081/#'+router.history.current.path)
        if(router.history.current.query.id){
            this.url = encodeURIComponent('https://zhlsqj.com/#'+router.history.current.path+'?id='+router.history.current.query.id)
        }else{
            this.url = encodeURIComponent('https://zhlsqj.com/#'+router.history.current.path)
        }
        location.href = 'https://zhlsqj.com/wechat/oauth?url=' + this.url
    }
    
    initToken(tooken){
        if(this.localStorageHasToken()){
            this.token = localStorage.getItem('token')
            this.verifyToken()
        }else if(this.linkHasToken(tooken)){
            localStorage.setItem('token',tooken)
        }else{
            // return
            this.getToken()
        }
    }
}


export default Token