
import {router} from '../router'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
class Token {
    constructor(){
        this.token = ''
    }
    localStorageHasToken(){
        //1、查看缓存是否有token
        return localStorage.getItem('token') !== '' && localStorage.getItem('token') !== null && localStorage.getItem('token') !== undefined
    }
    
    linkHasToken(){
        //2、链接是否传入token
        // console.log(router.history.current.query.token !== '');
        console.log(router);
        let y = router.history.current.query
        console.log(y);
        console.log('router.history.current.query.token');
        
        return router.history.current.query.token !== ''
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
            localStorage.setItem('token','')
            this.getToken()
        })
        
    }

    getToken(){
        //3、重新获取token
        var url = encodeURIComponent('http://localhost:8081/#'+router.history.current.fullPath)
        // console.log(url);
        location.href = 'https://www.rdoorweb.com/lvshui/public/wechat/oauth?url=' + url
    }
    
    initToken(){
        if(this.localStorageHasToken()){
            this.token = localStorage.getItem('token')
            this.verifyToken()
            return
        }else if(this.linkHasToken()){
            let tt = router.history.current.query.token
            localStorage.setItem('token',tt)    
            return
        }else{
            this.getToken()
        }
    }
}


export default Token