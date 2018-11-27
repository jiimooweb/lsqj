
import {router} from '../router'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// Vue.use(VueAxios, axios)
class Token {
    constructor(){
        this.token = ''
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
            url:'https://www.rdoorweb.com/lvshui/public/wechat/verify',
            method:'post',
            headers:{
                token:this.token
            },
            data:{}
        }).then(res=>{
            // console.log(res);
        }).catch(err=>{
            localStorage.clear('token')
            this.getToken()
        })
        
    }

    getToken(){
        //3、重新获取token
        var url = encodeURIComponent('http://localhost:8080/#'+router.history.current.fullPath)
        location.href = 'https://www.rdoorweb.com/lvshui/public/wechat/oauth?url=' + url
    }
    
    initToken(tooken){
        if(this.localStorageHasToken()){
            this.token = localStorage.getItem('token')
            this.verifyToken()
        }else if(this.linkHasToken(tooken)){
            localStorage.setItem('token',tooken)
            return false
        }else{
            this.getToken()
        }
    }
}


export default Token