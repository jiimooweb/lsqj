(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70fb3236"],{"023d":function(e,t,n){"use strict";var a=n("a142");t["a"]={getScrollEventTarget:function(e,t){void 0===t&&(t=window);var n=e;while(n&&"HTML"!==n.tagName&&"BODY"!==n.tagName&&1===n.nodeType&&n!==t){var a=this.getComputedStyle(n).overflowY;if("scroll"===a||"auto"===a)return n;n=n.parentNode}return t},getScrollTop:function(e){return"scrollTop"in e?e.scrollTop:e.pageYOffset},setScrollTop:function(e,t){"scrollTop"in e?e.scrollTop=t:e.scrollTo(e.scrollX,t)},getElementTop:function(e){return(e===window?0:e.getBoundingClientRect().top)+this.getScrollTop(window)},getVisibleHeight:function(e){return e===window?e.innerHeight:e.getBoundingClientRect().height},getComputedStyle:!a["e"]&&document.defaultView.getComputedStyle.bind(document.defaultView)}},1044:function(e,t,n){"use strict";n.r(t);var a,i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.pageShow?n("div",{staticClass:"sharePage"},[0!==e.isAdmin?n("div",{staticClass:"intoAdmin"},[n("van-button",{staticClass:"admin-btn",attrs:{type:"primary",size:"small"},on:{click:function(t){e.returnAdmin()}}},[e._v("管理员")])],1):e._e(),n("div",{staticClass:"userImg"},[e.imgShow?n("img",{attrs:{src:e.indexData.headimgurl}}):e._e()]),n("div",{staticClass:"btnPage"},["share"===e.shareType||e.userData.id==this.$route.query.id?n("van-button",{staticClass:"shareBtn",attrs:{type:"warning",size:"large"},on:{click:function(t){e.showFix(!0)}}},[e._v("分享给别人")]):e._e(),"beshare"===e.shareType&&e.userData.id!=this.$route.query.id?n("van-button",{staticClass:"shareBtn",attrs:{type:"warning",size:"large"},on:{click:function(t){e.getFollow()}}},[e._v("为他助力")]):e._e(),"have"===e.shareType?n("van-button",{staticClass:"shareBtn",attrs:{type:"warning",size:"large"},on:{click:function(t){e.showFix(!0)}}},[e._v("已助力，我也要分享")]):e._e(),"record"===e.shareType?n("van-button",{staticClass:"shareBtn",attrs:{type:"warning",size:"large"},on:{click:function(t){e.userDataShow=!0}}},[e._v("活动任务已完成,填写资料领取")]):e._e(),"over"===e.shareType?n("van-button",{staticClass:"shareBtn",attrs:{type:"warning",size:"large"}},[e._v("资料已填写")]):e._e()],1),n("div",{staticClass:"shareMember"},[n("p",{staticClass:"memberText"},[e._v("助力好友")]),n("div",{staticClass:"helpList"},e._l(e.helpList,function(t,a){return e.helpList.length>0?n("div",{key:a,staticClass:"helpList-item"},[n("img",{staticClass:"helpList-item-img",attrs:{src:t.headimgurl}}),n("p",{staticClass:"helpList-item-name"},[e._v(e._s(t.nickname))])]):n("p",{staticClass:"helpList-p"},[e._v("暂无好友助力")])}))]),n("div",{staticClass:"shareText"},[n("p",[e._v("活动细则")]),n("p",[e._v("1、每个人只能为每位好友各助力一次")]),n("p",[e._v("2、满 "+e._s(e.shareNum)+"个好友助力即可获得一次免费采摘机会")]),n("p",[e._v("3、自己无法给自己助力")]),n("p",[e._v("4、每个人只能完成一次任务")]),n("p",[e._v("5、完成分享任务后需填写相关资料，获取采摘机会")]),n("p",[e._v("6、到店时与店员确认使用该次机会")])]),n("p",{staticClass:"shareTip"},[e._v("本活动最终解释权归绿水清江所有")]),e.fixDisplay?n("div",{staticClass:"shareFix",on:{click:function(t){e.showFix(!1)}}},[n("p",[e._v("点击右上角 ... 发送给朋友")])]):e._e(),n("van-dialog",{attrs:{"show-cancel-button":""},on:{confirm:function(t){e.inputData()}},model:{value:e.userDataShow,callback:function(t){e.userDataShow=t},expression:"userDataShow"}},[n("van-field",{attrs:{label:"姓名",placeholder:"请输入姓名"},model:{value:e.userCurrentData.name,callback:function(t){e.$set(e.userCurrentData,"name",t)},expression:"userCurrentData.name"}}),n("van-field",{attrs:{label:"联系方式",placeholder:"请输入联系方式"},model:{value:e.userCurrentData.phone,callback:function(t){e.$set(e.userCurrentData,"phone",t)},expression:"userCurrentData.phone"}})],1)],1):e._e()},o=[],s=n("ade3"),r=(n("68ef"),n("1146"),n("c31d")),c=n("fe7e"),l=n("a142"),u=Object(c["a"])({render:function(){var e,t=this,n=t.$createElement,a=t._self._c||n;return a("cell",{class:t.b((e={error:t.error,disabled:t.$attrs.disabled,"min-height":"textarea"===t.type&&!t.autosize},e["label-"+t.labelAlign]=t.labelAlign,e)),attrs:{icon:t.leftIcon,title:t.label,center:t.center,border:t.border,"is-link":t.isLink,required:t.required}},[t._t("left-icon",null,{slot:"icon"}),t._t("label",null,{slot:"title"}),a("div",{class:t.b("body")},["textarea"===t.type?a("textarea",t._g(t._b({ref:"input",class:t.b("control",t.inputAlign),attrs:{readonly:t.readonly},domProps:{value:t.value}},"textarea",t.$attrs,!1),t.listeners)):a("input",t._g(t._b({ref:"input",class:t.b("control",t.inputAlign),attrs:{type:t.type,readonly:t.readonly},domProps:{value:t.value}},"input",t.$attrs,!1),t.listeners)),t.showClear?a("icon",{class:t.b("clear"),attrs:{name:"clear"},on:{touchstart:function(e){return e.preventDefault(),t.onClear(e)}}}):t._e(),t.$slots.icon||t.icon?a("div",{class:t.b("icon"),on:{click:t.onClickIcon}},[t._t("icon",[a("icon",{attrs:{name:t.icon}})])],2):t._e(),t.$slots.button?a("div",{class:t.b("button")},[t._t("button")],2):t._e()],1),t.errorMessage?a("div",{class:t.b("error-message"),domProps:{textContent:t._s(t.errorMessage)}}):t._e()],2)},name:"field",inheritAttrs:!1,props:{value:[String,Number],icon:String,label:String,error:Boolean,center:Boolean,isLink:Boolean,leftIcon:String,readonly:Boolean,required:Boolean,clearable:Boolean,labelAlign:String,inputAlign:String,onIconClick:Function,autosize:[Boolean,Object],errorMessage:String,type:{type:String,default:"text"},border:{type:Boolean,default:!0}},data:function(){return{focused:!1}},watch:{value:function(){this.$nextTick(this.adjustSize)}},mounted:function(){this.format(),this.$nextTick(this.adjustSize)},computed:{showClear:function(){return this.clearable&&this.focused&&""!==this.value&&this.isDef(this.value)&&!this.readonly},listeners:function(){return Object(r["a"])({},this.$listeners,{input:this.onInput,keypress:this.onKeypress,focus:this.onFocus,blur:this.onBlur})}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},format:function(e){void 0===e&&(e=this.$refs.input);var t=e,n=t.value,a=this.$attrs.maxlength;return this.isDef(a)&&n.length>a&&(n=n.slice(0,a),e.value=n),n},onInput:function(e){this.$emit("input",this.format(e.target))},onFocus:function(e){this.focused=!0,this.$emit("focus",e),this.readonly&&this.blur()},onBlur:function(e){this.focused=!1,this.$emit("blur",e)},onClickIcon:function(){this.$emit("click-icon"),this.onIconClick&&this.onIconClick()},onClear:function(){this.$emit("input",""),this.$emit("clear")},onKeypress:function(e){if("number"===this.type){var t=e.keyCode,n=-1===String(this.value).indexOf("."),a=t>=48&&t<=57||46===t&&n||45===t;a||e.preventDefault()}"search"===this.type&&13===e.keyCode&&this.blur(),this.$emit("keypress",e)},adjustSize:function(){var e=this.$refs.input;if("textarea"===this.type&&this.autosize&&e){e.style.height="auto";var t=e.scrollHeight;if(Object(l["d"])(this.autosize)){var n=this.autosize,a=n.maxHeight,i=n.minHeight;a&&(t=Math.min(t,a)),i&&(t=Math.max(t,i))}t&&(e.style.height=t+"px")}}}}),d=(n("e7e5"),n("d399")),h=(n("7f7f"),n("66b9"),n("b650")),f=(n("e17f"),n("2241")),p=(n("cadf"),n("551c"),n("097d"),n("2b0e")),m=n("bc3a"),g=n.n(m),v=n("a01c"),y=n("d4ec"),b=n("bee2"),k=n("18a0"),S=n.n(k),w=function(){function e(){Object(y["a"])(this,e)}return Object(b["a"])(e,[{key:"wxInit",value:function(e,t,n){this.getWxConfig(e,t,n)}},{key:"getWxConfig",value:function(e,t,n){var a=this;g.a.request({url:"https://zhlsqj.com/wechat/config",method:"get",headers:{token:e,url:"https://zhlsqj.com/#"+n}}).then(function(e){console.log(e.data.jssdk),a.wxConfig(e.data.jssdk),a.wxReader(t)})}},{key:"wxConfig",value:function(e){S.a.config(e)}},{key:"wxReader",value:function(e){var t=this;S.a.ready(function(){t.share(e)})}},{key:"share",value:function(e){S.a.updateAppMessageShareData(e),S.a.updateTimelineShareData(e),S.a.onMenuShareAppMessage(e),S.a.onMenuShareTimeline(e)}}]),e}(),_=w;p["a"].use(f["a"]);var C=new v["a"],x=new _,T={components:(a={},Object(s["a"])(a,h["a"].name,h["a"]),Object(s["a"])(a,d["a"].name,d["a"]),Object(s["a"])(a,u.name,u),a),data:function(){return{isAdmin:0,isSubscribe:0,userDataShow:!1,userCurrentData:{name:"",phone:""},shareNum:1,url:"https://zhlsqj.com/",shareType:"share",pageShow:!1,fixDisplay:!1,configData:{img:"",introduce:"",name:""},imgShow:!1,indexData:{nickname:"",headimgurl:"",id:"",admin:""},userData:{nickname:"",headimgurl:"",id:"",admin:""},helpList:[{name:1,url:""}]}},watch:{$route:function(e,t){this.getShowAndBeShow()},pjtToken:function(){this.getShowAndBeShow()}},methods:{init:function(){console.log("init"),C.initToken(this.$route.query.token),this.getShowAndBeShow()},showFix:function(e){this.fixDisplay=e},getShowAndBeShow:function(){var e=this;void 0!=this.$route.query.id&&this.userData.id!=this.$route.query.id?g.a.request({url:this.url+"share/wx/beshow",method:"post",headers:{token:localStorage.getItem("token")||this.$route.query.token},data:{share_id:this.$route.query.id}}).then(function(t){e.shareType=t.data.data.flag,e.shareNum=t.data.data.task.task_target,e.configData.img=t.data.data.task.img,e.configData.introduce=t.data.data.task.introduce,e.configData.name=t.data.data.task.name,e.indexData.nickname=t.data.data.share_data.nickname,e.indexData.headimgurl=t.data.data.share_data.headimgurl,e.indexData.id=t.data.data.share_data.id,e.indexData.admin=t.data.data.share_data.admin,e.helpList=[];for(var n=0;n<t.data.data.share.length;n++)e.helpList.push(t.data.data.share[n].beshare);e.pageShow=!0,e.getUesr()}).catch(function(e){C.getToken()}):g.a.request({url:this.url+"share/wx/show",method:"post",headers:{token:localStorage.getItem("token")||this.$route.query.token}}).then(function(t){e.shareType=t.data.data.flag,e.shareNum=t.data.data.task.task_target,e.configData.img=t.data.data.task.img,e.configData.introduce=t.data.data.task.introduce,e.configData.name=t.data.data.task.name,e.indexData.nickname=t.data.data.share_data.nickname,e.indexData.headimgurl=t.data.data.share_data.headimgurl,e.indexData.id=t.data.data.share_data.id,e.indexData.admin=t.data.data.share_data.admin,e.helpList=[];for(var n=0;n<t.data.data.share.length;n++)e.helpList.push(t.data.data.share[n].beshare);e.pageShow=!0,e.getUesr()}).catch(function(e){C.getToken()})},getUesr:function(){var e=this;g.a.request({url:this.url+"user",method:"get",headers:{token:localStorage.getItem("token")||this.$route.query.token}}).then(function(t){e.isAdmin=null===t.data.data.admin?0:1,e.isSubscribe=t.data.data.subscribe,e.userData.nickname=t.data.data.nickname,e.userData.headimgurl=t.data.data.headimgurl,e.userData.id=t.data.data.id,e.userData.admin=t.data.data.admin,e.pageShow=!0,e.imgShow=!0,e.fx(e.$route.path)}).catch(function(e){C.getToken()})},fx:function(e){var t={title:this.configData.name,desc:this.configData.introduce,link:"https://zhlsqj.com/#/share?id="+this.userData.id,imgUrl:this.configData.img,success:function(){d["a"].success("分享成功")}};console.log(t),x.wxInit(localStorage.getItem("token"),t,e)},showUserModal:function(e){this.userDataShow=e},getFollow:function(){var e=this;0!==this.isSubscribe?g.a.request({url:this.url+"share/follow",method:"post",headers:{token:localStorage.getItem("token")},data:{share_id:this.$route.query.id}}).then(function(t){e.getShowAndBeShow(),d["a"].success("已为他助力")}):d["a"].fail("请先关注‘绿水清江’公众号")},inputData:function(){var e=this;console.log("提交信息"),0!==this.isSubscribe?""!==this.userCurrentData.name&&""!==this.userCurrentData.phone?g.a.request({url:this.url+"share/over/register",method:"post",headers:{token:localStorage.getItem("token")},data:{name:this.userCurrentData.name,contact_way:this.userCurrentData.phone}}).then(function(t){e.getShowAndBeShow(),d["a"].success("已为填写资料")}):d["a"].fail("资料不完整"):d["a"].fail("请先关注‘绿水清江’公众号")},returnAdmin:function(){this.$router.push({name:"shareManage"})}},mounted:function(){this.pjtToken=this.$route.query.token,this.init()}},I=T,B=(n("889c"),n("2877")),O=Object(B["a"])(I,i,o,!1,null,null,null);O.options.__file="index.vue";t["default"]=O.exports},1146:function(e,t,n){},"18a0":function(e,t){!function(t,n){e.exports=n(t)}(window,function(e,t){function n(t,n,a){e.WeixinJSBridge?WeixinJSBridge.invoke(t,i(n),function(e){r(t,e,a)}):u(t,a)}function a(t,n,a){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){a&&a.trigger&&a.trigger(e),r(t,e,n)}):u(t,a||n)}function i(e){return e=e||{},e.appId=D.appId,e.verifyAppId=D.appId,e.verifySignType="sha1",e.verifyTimestamp=D.timestamp+"",e.verifyNonceStr=D.nonceStr,e.verifySignature=D.signature,e}function o(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function s(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function r(e,t,n){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var a=t.errMsg;a||(a=t.err_msg,delete t.err_msg,a=c(e,a),t.errMsg=a),(n=n||{})._complete&&(n._complete(t),delete n._complete),a=t.errMsg||"",D.debug&&!n.isInnerInvoke&&alert(JSON.stringify(t));var i=a.indexOf(":");switch(a.substring(i+1)){case"ok":n.success&&n.success(t);break;case"cancel":n.cancel&&n.cancel(t);break;default:n.fail&&n.fail(t)}n.complete&&n.complete(t)}function c(e,t){var n=e,a=v[n];a&&(n=a);var i="ok";if(t){var o=t.indexOf(":");"confirm"==(i=t.substring(o+1))&&(i="ok"),"failed"==i&&(i="fail"),-1!=i.indexOf("failed_")&&(i=i.substring(7)),-1!=i.indexOf("fail_")&&(i=i.substring(5)),"access denied"!=(i=(i=i.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=i||(i="permission denied"),"config"==n&&"function not exist"==i&&(i="ok"),""==i&&(i="fail")}return n+":"+i}function l(e){if(e){for(var t=0,n=e.length;t<n;++t){var a=e[t],i=g[a];i&&(e[t]=i)}return e}}function u(e,t){if(!(!D.debug||t&&t.isInnerInvoke)){var n=v[e];n&&(e=n),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function d(e){if(!(w||_||D.debug||I<"6.0.2"||O.systemType<0)){var t=new Image;O.appId=D.appId,O.initTime=B.initEndTime-B.initStartTime,O.preVerifyTime=B.preVerifyEndTime-B.preVerifyStartTime,j.getNetworkType({isInnerInvoke:!0,success:function(e){O.networkType=e.networkType;var n="https://open.weixin.qq.com/sdk/report?v="+O.version+"&o="+O.isPreVerifyOk+"&s="+O.systemType+"&c="+O.clientVersion+"&a="+O.appId+"&n="+O.networkType+"&i="+O.initTime+"&p="+O.preVerifyTime+"&u="+O.url;t.src=n}})}}function h(){return(new Date).getTime()}function f(t){C&&(e.WeixinJSBridge?t():y.addEventListener&&y.addEventListener("WeixinJSBridgeReady",t,!1))}function p(){j.invoke||(j.invoke=function(t,n,a){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,i(n),a)},j.on=function(t,n){e.WeixinJSBridge&&WeixinJSBridge.on(t,n)})}function m(e){if("string"==typeof e&&e.length>0){var t=e.split("?")[0],n=e.split("?")[1];return t+=".html",void 0!==n?t+"?"+n:t}}if(!e.jWeixin){var g={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},v=function(){var e={};for(var t in g)e[g[t]]=t;return e}(),y=e.document,b=y.title,k=navigator.userAgent.toLowerCase(),S=navigator.platform.toLowerCase(),w=!(!S.match("mac")&&!S.match("win")),_=-1!=k.indexOf("wxdebugger"),C=-1!=k.indexOf("micromessenger"),x=-1!=k.indexOf("android"),T=-1!=k.indexOf("iphone")||-1!=k.indexOf("ipad"),I=function(){var e=k.match(/micromessenger\/(\d+\.\d+\.\d+)/)||k.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),B={initStartTime:h(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},O={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:T?1:x?2:-1,clientVersion:I,url:encodeURIComponent(location.href)},D={},M={_completes:[]},$={state:0,data:{}};f(function(){B.initEndTime=h()});var A=!1,P=[],j={config:function(e){D=e,u("config",e);var t=!1!==D.check;f(function(){if(t)n(g.config,{verifyJsApiList:l(D.jsApiList)},function(){M._complete=function(e){B.preVerifyEndTime=h(),$.state=1,$.data=e},M.success=function(e){O.isPreVerifyOk=0},M.fail=function(e){M._fail?M._fail(e):$.state=-1};var e=M._completes;return e.push(function(){d()}),M.complete=function(t){for(var n=0,a=e.length;n<a;++n)e[n]();M._completes=[]},M}()),B.preVerifyStartTime=h();else{$.state=1;for(var e=M._completes,a=0,i=e.length;a<i;++a)e[a]();M._completes=[]}}),p()},ready:function(e){0!=$.state?e():(M._completes.push(e),!C&&D.debug&&e())},error:function(e){I<"6.0.2"||(-1==$.state?e($.data):M._fail=e)},checkJsApi:function(e){var t=function(e){var t=e.checkResult;for(var n in t){var a=v[n];a&&(t[a]=t[n],delete t[n])}return e};n("checkJsApi",{jsApiList:l(e.jsApiList)},(e._complete=function(e){if(x){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=t(e)},e))},onMenuShareTimeline:function(e){a(g.onMenuShareTimeline,{complete:function(){n("shareTimeline",{title:e.title||b,desc:e.title||b,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){a(g.onMenuShareAppMessage,{complete:function(t){"favorite"===t.scene?n("sendAppMessage",{title:e.title||b,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):n("sendAppMessage",{title:e.title||b,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){a(g.onMenuShareQQ,{complete:function(){n("shareQQ",{title:e.title||b,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){a(g.onMenuShareWeibo,{complete:function(){n("shareWeiboApp",{title:e.title||b,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){a(g.onMenuShareQZone,{complete:function(){n("shareQZone",{title:e.title||b,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){n("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){n("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){n("startRecord",{},e)},stopRecord:function(e){n("stopRecord",{},e)},onVoiceRecordEnd:function(e){a("onVoiceRecordEnd",e)},playVoice:function(e){n("playVoice",{localId:e.localId},e)},pauseVoice:function(e){n("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){n("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){a("onVoicePlayEnd",e)},uploadVoice:function(e){n("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){n("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){n("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){n("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(x){var t=e.localIds;try{t&&(e.localIds=JSON.parse(t))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){n(g.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){n("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){n("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===A?(A=!0,n("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(A=!1,P.length>0){var t=P.shift();wx.getLocalImgData(t)}},e))):P.push(e)},getNetworkType:function(e){var t=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var n=e.subtype;if(delete e.subtype,n)e.networkType=n;else{var a=t.indexOf(":"),i=t.substring(a+1);switch(i){case"wifi":case"edge":case"wwan":e.networkType=i;break;default:e.errMsg="getNetworkType:fail"}}return e};n("getNetworkType",{},(e._complete=function(e){e=t(e)},e))},openLocation:function(e){n("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},n(g.getLocation,{type:e.type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){n("hideOptionMenu",{},e)},showOptionMenu:function(e){n("showOptionMenu",{},e)},closeWindow:function(e){n("closeWindow",{},e=e||{})},hideMenuItems:function(e){n("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){n("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){n("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){n("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){n("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(T){var t=e.resultStr;if(t){var n=JSON.parse(t);e.resultStr=n&&n.scan_code&&n.scan_code.scan_result}}},e))},openAddress:function(e){n(g.openAddress,{},(e._complete=function(e){e=s(e)},e))},openProductSpecificView:function(e){n(g.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,a=[],i=0,o=t.length;i<o;++i){var s=t[i],r={card_id:s.cardId,card_ext:s.cardExt};a.push(r)}n(g.addCard,{card_list:a},(e._complete=function(e){var t=e.card_list;if(t){for(var n=0,a=(t=JSON.parse(t)).length;n<a;++n){var i=t[n];i.cardId=i.card_id,i.cardExt=i.card_ext,i.isSuccess=!!i.is_succ,delete i.card_id,delete i.card_ext,delete i.is_succ}e.cardList=t,delete e.card_list}},e))},chooseCard:function(e){n("chooseCard",{app_id:D.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var t=e.cardList,a=[],i=0,o=t.length;i<o;++i){var s=t[i],r={card_id:s.cardId,code:s.code};a.push(r)}n(g.openCard,{card_list:a},e)},consumeAndShareCard:function(e){n(g.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){n(g.chooseWXPay,o(e),e)},openEnterpriseRedPacket:function(e){n(g.openEnterpriseRedPacket,o(e),e)},startSearchBeacons:function(e){n(g.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){n(g.stopSearchBeacons,{},e)},onSearchBeacons:function(e){a(g.onSearchBeacons,e)},openEnterpriseChat:function(e){n("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){n("launchMiniProgram",{targetAppId:e.targetAppId,path:m(e.path),envVersion:e.envVersion},e)},miniProgram:{navigateBack:function(e){e=e||{},f(function(){n("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)})},navigateTo:function(e){f(function(){n("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)})},redirectTo:function(e){f(function(){n("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)})},switchTab:function(e){f(function(){n("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)})},reLaunch:function(e){f(function(){n("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)})},postMessage:function(e){f(function(){n("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)})},getEnv:function(t){f(function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})})}}},L=1,N={};return y.addEventListener("error",function(e){if(!x){var t=e.target,n=t.tagName,a=t.src;if(("IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n)&&-1!=a.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var i=t["wx-id"];if(i||(i=L++,t["wx-id"]=i),N[i])return;N[i]=!0,wx.ready(function(){wx.getLocalImgData({localId:a,success:function(e){t.src=e.localData}})})}}},!0),y.addEventListener("load",function(e){if(!x){var t=e.target,n=t.tagName;if(t.src,"IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n){var a=t["wx-id"];a&&(N[a]=!1)}}},!0),t&&(e.wx=e.jWeixin=j),j}})},2241:function(e,t,n){"use strict";var a,i=n("c31d"),o=n("2b0e"),s=n("fe7e"),r=n("b650"),c=n("6605"),l=Object(s["a"])({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"van-dialog-bounce"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],class:[e.b(),e.className]},[e.title?n("div",{class:e.b("header",{isolated:!e.message&&!e.$slots.default}),domProps:{textContent:e._s(e.title)}}):e._e(),e.message||e.$slots.default?n("div",{class:e.b("content")},[e._t("default",[e.message?n("div",{class:e.b("message",{"has-title":e.title}),domProps:{innerHTML:e._s(e.message)}}):e._e()])],2):e._e(),n("div",{staticClass:"van-hairline--top",class:e.b("footer",{buttons:e.showCancelButton&&e.showConfirmButton})},[n("van-button",{directives:[{name:"show",rawName:"v-show",value:e.showCancelButton,expression:"showCancelButton"}],class:e.b("cancel"),attrs:{loading:e.loading.cancel,size:"large"},on:{click:function(t){e.handleAction("cancel")}}},[e._v("\n        "+e._s(e.cancelButtonText||e.$t("cancel"))+"\n      ")]),n("van-button",{directives:[{name:"show",rawName:"v-show",value:e.showConfirmButton,expression:"showConfirmButton"}],class:[e.b("confirm"),{"van-hairline--left":e.showCancelButton&&e.showConfirmButton}],attrs:{size:"large",loading:e.loading.confirm},on:{click:function(t){e.handleAction("confirm")}}},[e._v("\n        "+e._s(e.confirmButtonText||e.$t("confirm"))+"\n      ")])],1)])])},name:"dialog",components:{VanButton:r["a"]},mixins:[c["a"]],props:{title:String,message:String,callback:Function,className:[String,Object,Array],beforeClose:Function,confirmButtonText:String,cancelButtonText:String,showCancelButton:Boolean,showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{handleAction:function(e){var t=this;this.beforeClose?(this.loading[e]=!0,this.beforeClose(e,function(n){!1!==n&&t.onClose(e),t.loading[e]=!1})):this.onClose(e)},onClose:function(e){this.$emit("input",!1),this.$emit(e),this.callback&&this.callback(e)}}}),u=n("a142"),d=function(){a=new(o["a"].extend(l))({el:document.createElement("div")}),a.$on("input",function(e){a.value=e}),document.body.appendChild(a.$el)},h=function(e){return u["e"]?Promise.resolve():new Promise(function(t,n){a||d(),Object(i["a"])(a,Object(i["a"])({resolve:t,reject:n},e))})};h.defaultOptions={value:!0,title:"",message:"",overlay:!0,className:"",lockScroll:!0,beforeClose:null,confirmButtonText:"",cancelButtonText:"",showConfirmButton:!0,showCancelButton:!1,closeOnClickOverlay:!1,callback:function(e){a["confirm"===e?"resolve":"reject"](e)}},h.alert=function(e){return h(Object(i["a"])({},h.currentOptions,e))},h.confirm=function(e){return h(Object(i["a"])({},h.currentOptions,{showCancelButton:!0},e))},h.close=function(){a&&(a.value=!1)},h.setDefaultOptions=function(e){Object(i["a"])(h.currentOptions,e)},h.resetDefaultOptions=function(){h.currentOptions=Object(i["a"])({},h.defaultOptions)},h.install=function(){o["a"].use(l)},o["a"].prototype.$dialog=h,h.resetDefaultOptions();t["a"]=h},"2fcb":function(e,t,n){},3875:function(e,t,n){"use strict";var a=10;function i(e,t){return e>t&&e>a?"horizontal":t>e&&t>a?"vertical":""}t["a"]={data:function(){return{direction:""}},methods:{touchStart:function(e){this.resetTouchStatus(),this.startX=e.touches[0].clientX,this.startY=e.touches[0].clientY},touchMove:function(e){var t=e.touches[0];this.deltaX=t.clientX-this.startX,this.deltaY=t.clientY-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY),this.direction=this.direction||i(this.offsetX,this.offsetY)},resetTouchStatus:function(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0}}}},4553:function(e,t,n){},"4d75":function(e,t,n){},6605:function(e,t,n){"use strict";var a=n("c31d"),i=n("2b0e"),o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"van-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"van-modal",class:e.className,style:e.style,on:{touchmove:function(e){e.preventDefault(),e.stopPropagation()},click:function(t){e.$emit("click",t)}}})])},name:"modal",props:{visible:Boolean,zIndex:Number,className:String,customStyle:Object},computed:{style:function(){return Object(a["a"])({zIndex:this.zIndex},this.customStyle)}}},s={zIndex:2e3,stack:[],lockCount:0,get top(){return this.stack[this.stack.length-1]}},r={className:"",customStyle:{}},c={open:function(e,t){if(!s.stack.some(function(t){return t.vm===e})){var n=e.$el,a=n&&n.parentNode?n.parentNode:document.body;s.stack.push({vm:e,config:t,target:a}),this.update()}},close:function(e){var t=s.stack;t.length&&(s.top.vm===e?(t.pop(),this.update()):s.stack=t.filter(function(t){return t.vm!==e}))},update:function(){var e=s.modal;if(e||(e=new(i["a"].extend(o))({el:document.createElement("div")}),e.$on("click",this.onClick),s.modal=e),e.$el.parentNode&&(e.visible=!1),s.top){var t=s.top,n=t.target,c=t.config;n.appendChild(e.$el),Object(a["a"])(e,Object(a["a"])({},r,c,{visible:!0}))}},onClick:function(){if(s.top){var e=s.top.vm;e.$emit("click-overlay"),e.closeOnClickOverlay&&e.$emit("input",!1)}}},l=n("023d"),u=n("db78"),d=n("3875");t["a"]={mixins:[d["a"]],props:{value:Boolean,overlay:Boolean,overlayStyle:Object,overlayClass:String,closeOnClickOverlay:Boolean,zIndex:[String,Number],getContainer:[String,Function],lockScroll:{type:Boolean,default:!0},lazyRender:{type:Boolean,default:!0}},data:function(){return{inited:this.value}},computed:{shouldRender:function(){return this.inited||!this.lazyRender}},watch:{value:function(e){this.inited=this.inited||this.value,this[e?"open":"close"]()},getContainer:function(){this.move()},overlay:function(){this.renderOverlay()}},mounted:function(){this.getContainer&&this.move(),this.value&&this.open()},activated:function(){this.value&&this.open()},beforeDestroy:function(){this.close(),this.getContainer&&this.$parent.$el.appendChild(this.$el)},deactivated:function(){this.close()},methods:{open:function(){this.$isServer||this.opened||(void 0!==this.zIndex&&(s.zIndex=this.zIndex),this.opened=!0,this.renderOverlay(),this.lockScroll&&(Object(u["b"])(document,"touchstart",this.touchStart),Object(u["b"])(document,"touchmove",this.onTouchMove),s.lockCount||document.body.classList.add("van-overflow-hidden"),s.lockCount++))},close:function(){this.opened&&(this.lockScroll&&(s.lockCount--,Object(u["a"])(document,"touchstart",this.touchStart),Object(u["a"])(document,"touchmove",this.onTouchMove),s.lockCount||document.body.classList.remove("van-overflow-hidden")),this.opened=!1,c.close(this),this.$emit("input",!1))},move:function(){var e,t=this.getContainer;t?e="string"===typeof t?document.querySelector(t):t():this.$parent&&(e=this.$parent.$el),e&&e.appendChild(this.$el)},onTouchMove:function(e){this.touchMove(e);var t=this.deltaY>0?"10":"01",n=l["a"].getScrollEventTarget(e.target,this.$el),a=n.scrollHeight,i=n.offsetHeight,o=n.scrollTop,s="11";0===o?s=i>=a?"00":"01":o+i>=a&&(s="10"),"11"===s||"vertical"!==this.direction||parseInt(s,2)&parseInt(t,2)||(e.preventDefault(),e.stopPropagation())},renderOverlay:function(){var e=this;this.overlay?c.open(this,{zIndex:s.zIndex++,className:this.overlayClass,customStyle:this.overlayStyle}):c.close(this),this.$nextTick(function(){e.$el.style.zIndex=s.zIndex++})}}}},"66b9":function(e,t,n){"use strict";n("68ef")},"889c":function(e,t,n){"use strict";var a=n("4553"),i=n.n(a);i.a},b258:function(e,t,n){},b650:function(e,t,n){"use strict";var a=n("fe7e");t["a"]=Object(a["a"])({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.tag,{tag:"component",class:e.b([e.type,e.size,{block:e.block,plain:e.plain,round:e.round,square:e.square,loading:e.loading,disabled:e.disabled,unclickable:e.disabled||e.loading,"bottom-action":e.bottomAction}]),attrs:{type:e.nativeType,disabled:e.disabled},on:{click:e.onClick}},[e.loading?n("loading",{attrs:{size:"20px",color:"default"===e.type?void 0:""}}):n("span",{class:e.b("text")},[e._t("default",[e._v(e._s(e.text))])],2)],1)},name:"button",props:{text:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,disabled:Boolean,nativeType:String,bottomAction:Boolean,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"}},methods:{onClick:function(e){this.loading||this.disabled||this.$emit("click",e)}}})},d399:function(e,t,n){"use strict";var a=n("c31d"),i=n("2b0e"),o=n("fe7e"),s=n("6605"),r=["success","fail","loading"],c=Object(o["a"])({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"van-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],class:e.b([e.style,e.position])},["text"===e.style?n("div",[e._v(e._s(e.message))]):e._e(),"html"===e.style?n("div",{domProps:{innerHTML:e._s(e.message)}}):e._e(),"default"===e.style?["loading"===e.type?n("loading",{attrs:{color:"white",type:e.loadingType}}):n("icon",{class:e.b("icon"),attrs:{name:e.type}}),e.isDef(e.message)?n("div",{class:e.b("text")},[e._v(e._s(e.message))]):e._e()]:e._e()],2)])},name:"toast",mixins:[s["a"]],props:{forbidClick:Boolean,message:[String,Number],type:{type:String,default:"text"},loadingType:{type:String,default:"circular"},position:{type:String,default:"middle"},lockScroll:{type:Boolean,default:!1}},data:function(){return{clickable:!1}},computed:{style:function(){return-1!==r.indexOf(this.type)?"default":this.type}},mounted:function(){this.toggleClickale()},destroyed:function(){this.toggleClickale()},watch:{value:function(){this.toggleClickale()},forbidClick:function(){this.toggleClickale()}},methods:{toggleClickale:function(){var e=this.value&&this.forbidClick;if(this.clickable!==e){this.clickable=e;var t=e?"add":"remove";document.body.classList[t]("van-toast--unclickable")}}}}),l=n("a142"),u={type:"text",mask:!1,message:"",value:!0,duration:3e3,position:"middle",loadingType:"circular",forbidClick:!1,overlayStyle:{}},d=function(e){return Object(l["d"])(e)?e:{message:e}},h=[],f=!0,p=Object(a["a"])({},u);function m(){if(l["e"])return{};if(!h.length||!f){var e=new(i["a"].extend(c))({el:document.createElement("div")});document.body.appendChild(e.$el),h.push(e)}return h[h.length-1]}function g(e){return e.overlay=e.mask,e}function v(e){void 0===e&&(e={});var t=m();return e=Object(a["a"])({},p,d(e),{clear:function(){t.value=!1,f||l["e"]||(document.body.removeChild(t.$el),t.$destroy())}}),Object(a["a"])(t,g(e)),clearTimeout(t.timer),e.duration>0&&(t.timer=setTimeout(function(){t.clear()},e.duration)),t}var y=function(e){return function(t){return v(Object(a["a"])({type:e},d(t)))}};["loading","success","fail"].forEach(function(e){v[e]=y(e)}),v.clear=function(e){h.length&&(e?(h.forEach(function(e){e.clear()}),h=[]):f?h[0].clear():h.shift().clear())},v.setDefaultOptions=function(e){Object(a["a"])(p,e)},v.resetDefaultOptions=function(){p=Object(a["a"])({},u)},v.allowMultiple=function(e){void 0===e&&(e=!0),f=!e},v.install=function(){i["a"].use(c)},i["a"].prototype.$toast=v;t["a"]=v},db78:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return r});var a=n("a142"),i=!1;if(!a["e"])try{var o={};Object.defineProperty(o,"passive",{get:function(){i=!0}}),window.addEventListener("test-passive",null,o)}catch(c){}function s(e,t,n,o){void 0===o&&(o=!1),!a["e"]&&e.addEventListener(t,n,!!i&&{capture:!1,passive:o})}function r(e,t,n){!a["e"]&&e.removeEventListener(t,n)}},e17f:function(e,t,n){"use strict";n("68ef"),n("4d75"),n("2fcb")},e7e5:function(e,t,n){"use strict";n("68ef"),n("4d75"),n("b258")}}]);
//# sourceMappingURL=chunk-70fb3236.ab51bfa7.js.map