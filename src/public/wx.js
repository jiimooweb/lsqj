import wx from 'weixin-js-sdk'
import axios from 'axios'
class wxApi{
    constructor(){
        
    }
    wxInit(token,config,path){
        //初始化微信设置
        // console.log(config);
        
        this.getWxConfig(token,config,path)
    }
    getWxConfig(token,config,path){
        axios.request({
            url:'https://zhlsqj.com/wechat/config',
            method:'get',
            headers:{
                token:token,
                // url:'https://zhlsqj.com'
                url:'https://zhlsqj.com/#'+path
            }
        }).then(res=>{
            console.log(res.data.jssdk);
            
            this.wxConfig(res.data.jssdk)
            this.wxReader(config)
        })
    }
    wxConfig(config){
        wx.config(config)
    }
    
    wxReader(config){
        wx.ready(()=>{
            // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
            this.share(config)
        });
    }
    share(config){
        //分享给朋友、qq、朋友圈、qq空间
        
        wx.updateAppMessageShareData(config);
        wx.updateTimelineShareData(config);
        wx.onMenuShareAppMessage(config);
        wx.onMenuShareTimeline(config);
        
    }
}

export default wxApi