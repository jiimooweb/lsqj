
import {router} from '../router'
import axios from 'axios'
// Vue.use(VueAxios, axios)
class Token {
    constructor(){
        this.token = '',
        this.url = ''
    }
    localStorageHasToken(){
        //1、查看缓存是否有token
        // console.log(!(localStorage.getItem('token') == null) && typeof(localStorage.getItem('token')) != "undefined");
        
        return !(localStorage.getItem('token') == null) && typeof(localStorage.getItem('token')) != "undefined"
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
            // alert('token没过期')
        }).catch(err=>{
            // alert('重新获取token')
            localStorage.setItem('hasToken','过期')
            localStorage.clear('token')
            // return
            this.getToken()
        })
        
    }

    getToken(){
        localStorage.clear('token')
        //3、重新获取token
        // var url = encodeURIComponent('https://zhlsqj.com/#'+router.history.current.path)
        // var url = encodeURIComponent('http://localhost:8081/#'+router.history.current.path)
        if(router.history.current.query.id){
            this.url = encodeURIComponent('http://localhost:8081/#'+router.history.current.path+'?id='+router.history.current.query.id)
        }else{
            this.url = encodeURIComponent('http://localhost:8081/#'+router.history.current.path)
        }

        // if(router.history.current.query.id){
        //     this.url = encodeURIComponent('https://zhlsqj.com/#'+router.history.current.path+'?id='+router.history.current.query.id)
        // }else{
        //     this.url = encodeURIComponent('https://zhlsqj.com/#'+router.history.current.path)
        // }
        localStorage.setItem('url',this.url)
        location.href = 'https://zhlsqj.com/wechat/oauth?url=' + this.url
    }
    
    initToken(tooken){
        if(this.localStorageHasToken()){
            // alert('缓存有token')
            this.token = localStorage.getItem('token')
            this.verifyToken()
        }else if(this.linkHasToken(tooken)){
            // alert('连接有token')
            localStorage.setItem('token',tooken)
        }else{
            // return
            // alert('啥token都没有')
            this.getToken()
        }
    }
}


export default Token