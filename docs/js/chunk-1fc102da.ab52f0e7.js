(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fc102da"],{"023d":function(e,t,n){"use strict";var i=n("a142");t["a"]={getScrollEventTarget:function(e,t){void 0===t&&(t=window);var n=e;while(n&&"HTML"!==n.tagName&&"BODY"!==n.tagName&&1===n.nodeType&&n!==t){var i=this.getComputedStyle(n).overflowY;if("scroll"===i||"auto"===i)return n;n=n.parentNode}return t},getScrollTop:function(e){return"scrollTop"in e?e.scrollTop:e.pageYOffset},setScrollTop:function(e,t){"scrollTop"in e?e.scrollTop=t:e.scrollTo(e.scrollX,t)},getElementTop:function(e){return(e===window?0:e.getBoundingClientRect().top)+this.getScrollTop(window)},getVisibleHeight:function(e){return e===window?e.innerHeight:e.getBoundingClientRect().height},getComputedStyle:!i["e"]&&document.defaultView.getComputedStyle.bind(document.defaultView)}},1044:function(e,t,n){"use strict";n.r(t);var i,o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.pageShow?n("div",{staticClass:"sharePage"},[n("div",{staticClass:"userImg"},[n("img",{attrs:{src:e.userData.headimgurl}})]),n("div",{staticClass:"btnPage"},["share"===e.shareType&&void 0==this.$route.query.id?n("van-button",{staticClass:"shareBtn",attrs:{type:"warning",size:"large"},on:{click:function(t){e.showFix(!0)}}},[e._v("分享给别人")]):e._e(),void 0!=this.$route.query.id?n("van-button",{staticClass:"shareBtn",attrs:{type:"warning",size:"large"},on:{click:function(t){e.showFix(!0)}}},[e._v("我也要分享")]):e._e(),"share"===e.shareType?n("van-button",{staticClass:"shareBtn",attrs:{type:"warning",size:"large"},on:{click:function(t){e.userDataShow=!0}}},[e._v("活动任务已完成,填写资料领取")]):e._e(),"over"===e.shareType?n("van-button",{staticClass:"shareBtn",attrs:{type:"warning",size:"large"}},[e._v("资料已填写")]):e._e()],1),"share"===e.shareType?n("div",{staticClass:"shareMember"},[n("p",{staticClass:"memberText"},[e._v("助力好友")]),n("div",{staticClass:"helpList"},e._l(e.helpList,function(t,i){return n("div",{key:i,staticClass:"helpList-item"},[n("img",{staticClass:"helpList-item-img",attrs:{src:t.headimgurl}}),n("p",{staticClass:"helpList-item-name"},[e._v(e._s(t.nickname))])])}))]):e._e(),n("div",{staticClass:"shareText"},[n("p",[e._v("活动细则")]),n("p",[e._v("1、每个人只能为每位好友各助力一次")]),n("p",[e._v("2、满 "+e._s(e.task_target)+"个好友助力即可获得一次免费采摘机会")]),n("p",[e._v("3、自己无法给自己助力")]),n("p",[e._v("4、每个人只能完成一次任务")]),n("p",[e._v("5、完成分享任务后需填写相关资料，获取采摘机会")]),n("p",[e._v("6、到店时与店员确认使用该次机会")])]),n("p",{staticClass:"shareTip"},[e._v("本活动最终解释权归绿水清江所有")]),e.fixDisplay?n("div",{staticClass:"shareFix",on:{click:function(t){e.showFix(!1)}}},[n("p",[e._v("点击右上角 ... 发送给朋友")])]):e._e(),n("van-dialog",{attrs:{"show-cancel-button":""},on:{confirm:function(t){e.inputData()}},model:{value:e.userDataShow,callback:function(t){e.userDataShow=t},expression:"userDataShow"}},[n("van-field",{attrs:{label:"姓名",placeholder:"请输入姓名"},model:{value:e.userCurrentData.name,callback:function(t){e.$set(e.userCurrentData,"name",t)},expression:"userCurrentData.name"}}),n("van-field",{attrs:{label:"联系方式",placeholder:"请输入联系方式"},model:{value:e.userCurrentData.phone,callback:function(t){e.$set(e.userCurrentData,"phone",t)},expression:"userCurrentData.phone"}})],1)],1):e._e()},a=[],s=n("ade3"),r=(n("68ef"),n("1146"),n("c31d")),c=n("fe7e"),l=n("a142"),u=Object(c["a"])({render:function(){var e,t=this,n=t.$createElement,i=t._self._c||n;return i("cell",{class:t.b((e={error:t.error,disabled:t.$attrs.disabled,"min-height":"textarea"===t.type&&!t.autosize},e["label-"+t.labelAlign]=t.labelAlign,e)),attrs:{icon:t.leftIcon,title:t.label,center:t.center,border:t.border,"is-link":t.isLink,required:t.required}},[t._t("left-icon",null,{slot:"icon"}),t._t("label",null,{slot:"title"}),i("div",{class:t.b("body")},["textarea"===t.type?i("textarea",t._g(t._b({ref:"input",class:t.b("control",t.inputAlign),attrs:{readonly:t.readonly},domProps:{value:t.value}},"textarea",t.$attrs,!1),t.listeners)):i("input",t._g(t._b({ref:"input",class:t.b("control",t.inputAlign),attrs:{type:t.type,readonly:t.readonly},domProps:{value:t.value}},"input",t.$attrs,!1),t.listeners)),t.showClear?i("icon",{class:t.b("clear"),attrs:{name:"clear"},on:{touchstart:function(e){return e.preventDefault(),t.onClear(e)}}}):t._e(),t.$slots.icon||t.icon?i("div",{class:t.b("icon"),on:{click:t.onClickIcon}},[t._t("icon",[i("icon",{attrs:{name:t.icon}})])],2):t._e(),t.$slots.button?i("div",{class:t.b("button")},[t._t("button")],2):t._e()],1),t.errorMessage?i("div",{class:t.b("error-message"),domProps:{textContent:t._s(t.errorMessage)}}):t._e()],2)},name:"field",inheritAttrs:!1,props:{value:[String,Number],icon:String,label:String,error:Boolean,center:Boolean,isLink:Boolean,leftIcon:String,readonly:Boolean,required:Boolean,clearable:Boolean,labelAlign:String,inputAlign:String,onIconClick:Function,autosize:[Boolean,Object],errorMessage:String,type:{type:String,default:"text"},border:{type:Boolean,default:!0}},data:function(){return{focused:!1}},watch:{value:function(){this.$nextTick(this.adjustSize)}},mounted:function(){this.format(),this.$nextTick(this.adjustSize)},computed:{showClear:function(){return this.clearable&&this.focused&&""!==this.value&&this.isDef(this.value)&&!this.readonly},listeners:function(){return Object(r["a"])({},this.$listeners,{input:this.onInput,keypress:this.onKeypress,focus:this.onFocus,blur:this.onBlur})}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},format:function(e){void 0===e&&(e=this.$refs.input);var t=e,n=t.value,i=this.$attrs.maxlength;return this.isDef(i)&&n.length>i&&(n=n.slice(0,i),e.value=n),n},onInput:function(e){this.$emit("input",this.format(e.target))},onFocus:function(e){this.focused=!0,this.$emit("focus",e),this.readonly&&this.blur()},onBlur:function(e){this.focused=!1,this.$emit("blur",e)},onClickIcon:function(){this.$emit("click-icon"),this.onIconClick&&this.onIconClick()},onClear:function(){this.$emit("input",""),this.$emit("clear")},onKeypress:function(e){if("number"===this.type){var t=e.keyCode,n=-1===String(this.value).indexOf("."),i=t>=48&&t<=57||46===t&&n||45===t;i||e.preventDefault()}"search"===this.type&&13===e.keyCode&&this.blur(),this.$emit("keypress",e)},adjustSize:function(){var e=this.$refs.input;if("textarea"===this.type&&this.autosize&&e){e.style.height="auto";var t=e.scrollHeight;if(Object(l["d"])(this.autosize)){var n=this.autosize,i=n.maxHeight,o=n.minHeight;i&&(t=Math.min(t,i)),o&&(t=Math.max(t,o))}t&&(e.style.height=t+"px")}}}}),d=(n("e7e5"),n("d399")),f=(n("7f7f"),n("66b9"),n("b650")),h=(n("4d75"),n("2fcb"),n("2b0e")),p=n("6605"),m=Object(c["a"])({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"van-dialog-bounce"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],class:[e.b(),e.className]},[e.title?n("div",{class:e.b("header",{isolated:!e.message&&!e.$slots.default}),domProps:{textContent:e._s(e.title)}}):e._e(),e.message||e.$slots.default?n("div",{class:e.b("content")},[e._t("default",[e.message?n("div",{class:e.b("message",{"has-title":e.title}),domProps:{innerHTML:e._s(e.message)}}):e._e()])],2):e._e(),n("div",{staticClass:"van-hairline--top",class:e.b("footer",{buttons:e.showCancelButton&&e.showConfirmButton})},[n("van-button",{directives:[{name:"show",rawName:"v-show",value:e.showCancelButton,expression:"showCancelButton"}],class:e.b("cancel"),attrs:{loading:e.loading.cancel,size:"large"},on:{click:function(t){e.handleAction("cancel")}}},[e._v("\n        "+e._s(e.cancelButtonText||e.$t("cancel"))+"\n      ")]),n("van-button",{directives:[{name:"show",rawName:"v-show",value:e.showConfirmButton,expression:"showConfirmButton"}],class:[e.b("confirm"),{"van-hairline--left":e.showCancelButton&&e.showConfirmButton}],attrs:{size:"large",loading:e.loading.confirm},on:{click:function(t){e.handleAction("confirm")}}},[e._v("\n        "+e._s(e.confirmButtonText||e.$t("confirm"))+"\n      ")])],1)])])},name:"dialog",components:{VanButton:f["a"]},mixins:[p["a"]],props:{title:String,message:String,callback:Function,className:[String,Object,Array],beforeClose:Function,confirmButtonText:String,cancelButtonText:String,showCancelButton:Boolean,showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{handleAction:function(e){var t=this;this.beforeClose?(this.loading[e]=!0,this.beforeClose(e,function(n){!1!==n&&t.onClose(e),t.loading[e]=!1})):this.onClose(e)},onClose:function(e){this.$emit("input",!1),this.$emit(e),this.callback&&this.callback(e)}}}),g=function(){i=new(h["a"].extend(m))({el:document.createElement("div")}),i.$on("input",function(e){i.value=e}),document.body.appendChild(i.$el)},v=function(e){return l["e"]?Promise.resolve():new Promise(function(t,n){i||g(),Object(r["a"])(i,Object(r["a"])({resolve:t,reject:n},e))})};v.defaultOptions={value:!0,title:"",message:"",overlay:!0,className:"",lockScroll:!0,beforeClose:null,confirmButtonText:"",cancelButtonText:"",showConfirmButton:!0,showCancelButton:!1,closeOnClickOverlay:!1,callback:function(e){i["confirm"===e?"resolve":"reject"](e)}},v.alert=function(e){return v(Object(r["a"])({},v.currentOptions,e))},v.confirm=function(e){return v(Object(r["a"])({},v.currentOptions,{showCancelButton:!0},e))},v.close=function(){i&&(i.value=!1)},v.setDefaultOptions=function(e){Object(r["a"])(v.currentOptions,e)},v.resetDefaultOptions=function(){v.currentOptions=Object(r["a"])({},v.defaultOptions)},v.install=function(){h["a"].use(m)},h["a"].prototype.$dialog=v,v.resetDefaultOptions();var y,b=v,k=(n("cadf"),n("551c"),n("097d"),n("bc3a")),S=n.n(k),w=n("a01c"),_=n("d4ec"),C=n("bee2"),x=n("18a0"),I=n.n(x),T=function(){function e(){Object(_["a"])(this,e)}return Object(C["a"])(e,[{key:"wxInit",value:function(e,t){this.getWxConfig(e,t)}},{key:"getWxConfig",value:function(e,t){var n=this;S.a.request({url:"https://zhlsqj.com/config",method:"get",headers:{token:e}}).then(function(e){n.wxConfig(e.jssdk),n.wxReader(t)})}},{key:"wxConfig",value:function(e){I.a.config(e)}},{key:"wxReader",value:function(e){I.a.ready(function(){this.share(e)})}},{key:"share",value:function(e){I.a.updateAppMessageShareData(e),I.a.updateTimelineShareData(e)}}]),e}(),O=T;h["a"].use(b);var B=new w["a"],M=new O,$={components:(y={},Object(s["a"])(y,f["a"].name,f["a"]),Object(s["a"])(y,d["a"].name,d["a"]),Object(s["a"])(y,u.name,u),y),data:function(){return{userDataShow:!1,userCurrentData:{name:"",phone:""},url:"https://zhlsqj.com/",shareType:"share",pageShow:!1,fixDisplay:!1,userData:{},helpList:[{name:1,url:""}]}},methods:{init:function(){B.initToken(this.$route.query.token),this.getShowAndBeShow()},showFix:function(e){this.fixDisplay=e},getShowAndBeShow:function(){var e=this;void 0!=this.$route.query.id&&this.userData.id!=this.$route.query.id?S.a.request({url:this.url+"share/wx/beshow",method:"post",headers:{token:localStorage.getItem("token")},data:{share_id:this.$route.query.id}}).then(function(t){e.shareType="share",e.getUesr(),e.helpList=[];for(var n=0;n<t.data.data.share.length;n++)e.helpList.push(t.data.data.share[n].beshare);e.pageShow=!0}):S.a.request({url:this.url+"share/wx/show",method:"post",headers:{token:localStorage.getItem("token")}}).then(function(t){e.shareType=t.data.data.flag,e.getUesr(),e.helpList=[];for(var n=0;n<t.data.data.share.length;n++)e.helpList.push(t.data.data.share[n].beshare);e.pageShow=!0})},getUesr:function(){var e=this;S.a.request({url:this.url+"user",method:"get",headers:{token:localStorage.getItem("token")}}).then(function(t){e.userData=t.data.data,void 0!=e.$route.query.id&&e.userData.id!=e.$route.query.id&&S.a.request({url:e.url+"share/over/register",method:"post",headers:{token:localStorage.getItem("token")},data:{fan_id:e.$route.query.id}}).then(function(t){d["a"].success("已为他助力"),e.fx()})})},fx:function(){console.log("https://zhlsqj.com/#/share?id="+this.userData.id);var e={title:"绿水清江免费采摘活动",desc:"帮我助力获取免费一次采摘名额",link:"https://zhlsqj.com/#/share?id="+this.userData.id,imgUrl:"//img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png",success:function(){console.log("已分享"),d["a"].success("已分享1")}};M.wxInit(localStorage.getItem("token"),e)},showUserModal:function(e){this.userDataShow=e},inputData:function(){console.log(1)}},mounted:function(){this.init()}},P=$,A=(n("889c"),n("2877")),D=Object(A["a"])(P,o,a,!1,null,null,null);D.options.__file="index.vue";t["default"]=D.exports},1146:function(e,t,n){},"18a0":function(e,t){!function(t,n){e.exports=n(t)}(window,function(e,t){function n(t,n,i){e.WeixinJSBridge?WeixinJSBridge.invoke(t,o(n),function(e){r(t,e,i)}):u(t,i)}function i(t,n,i){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){i&&i.trigger&&i.trigger(e),r(t,e,n)}):u(t,i||n)}function o(e){return e=e||{},e.appId=M.appId,e.verifyAppId=M.appId,e.verifySignType="sha1",e.verifyTimestamp=M.timestamp+"",e.verifyNonceStr=M.nonceStr,e.verifySignature=M.signature,e}function a(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function s(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function r(e,t,n){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var i=t.errMsg;i||(i=t.err_msg,delete t.err_msg,i=c(e,i),t.errMsg=i),(n=n||{})._complete&&(n._complete(t),delete n._complete),i=t.errMsg||"",M.debug&&!n.isInnerInvoke&&alert(JSON.stringify(t));var o=i.indexOf(":");switch(i.substring(o+1)){case"ok":n.success&&n.success(t);break;case"cancel":n.cancel&&n.cancel(t);break;default:n.fail&&n.fail(t)}n.complete&&n.complete(t)}function c(e,t){var n=e,i=v[n];i&&(n=i);var o="ok";if(t){var a=t.indexOf(":");"confirm"==(o=t.substring(a+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==n&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return n+":"+o}function l(e){if(e){for(var t=0,n=e.length;t<n;++t){var i=e[t],o=g[i];o&&(e[t]=o)}return e}}function u(e,t){if(!(!M.debug||t&&t.isInnerInvoke)){var n=v[e];n&&(e=n),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function d(e){if(!(w||_||M.debug||T<"6.0.2"||B.systemType<0)){var t=new Image;B.appId=M.appId,B.initTime=O.initEndTime-O.initStartTime,B.preVerifyTime=O.preVerifyEndTime-O.preVerifyStartTime,j.getNetworkType({isInnerInvoke:!0,success:function(e){B.networkType=e.networkType;var n="https://open.weixin.qq.com/sdk/report?v="+B.version+"&o="+B.isPreVerifyOk+"&s="+B.systemType+"&c="+B.clientVersion+"&a="+B.appId+"&n="+B.networkType+"&i="+B.initTime+"&p="+B.preVerifyTime+"&u="+B.url;t.src=n}})}}function f(){return(new Date).getTime()}function h(t){C&&(e.WeixinJSBridge?t():y.addEventListener&&y.addEventListener("WeixinJSBridgeReady",t,!1))}function p(){j.invoke||(j.invoke=function(t,n,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,o(n),i)},j.on=function(t,n){e.WeixinJSBridge&&WeixinJSBridge.on(t,n)})}function m(e){if("string"==typeof e&&e.length>0){var t=e.split("?")[0],n=e.split("?")[1];return t+=".html",void 0!==n?t+"?"+n:t}}if(!e.jWeixin){var g={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},v=function(){var e={};for(var t in g)e[g[t]]=t;return e}(),y=e.document,b=y.title,k=navigator.userAgent.toLowerCase(),S=navigator.platform.toLowerCase(),w=!(!S.match("mac")&&!S.match("win")),_=-1!=k.indexOf("wxdebugger"),C=-1!=k.indexOf("micromessenger"),x=-1!=k.indexOf("android"),I=-1!=k.indexOf("iphone")||-1!=k.indexOf("ipad"),T=function(){var e=k.match(/micromessenger\/(\d+\.\d+\.\d+)/)||k.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),O={initStartTime:f(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},B={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:I?1:x?2:-1,clientVersion:T,url:encodeURIComponent(location.href)},M={},$={_completes:[]},P={state:0,data:{}};h(function(){O.initEndTime=f()});var A=!1,D=[],j={config:function(e){M=e,u("config",e);var t=!1!==M.check;h(function(){if(t)n(g.config,{verifyJsApiList:l(M.jsApiList)},function(){$._complete=function(e){O.preVerifyEndTime=f(),P.state=1,P.data=e},$.success=function(e){B.isPreVerifyOk=0},$.fail=function(e){$._fail?$._fail(e):P.state=-1};var e=$._completes;return e.push(function(){d()}),$.complete=function(t){for(var n=0,i=e.length;n<i;++n)e[n]();$._completes=[]},$}()),O.preVerifyStartTime=f();else{P.state=1;for(var e=$._completes,i=0,o=e.length;i<o;++i)e[i]();$._completes=[]}}),p()},ready:function(e){0!=P.state?e():($._completes.push(e),!C&&M.debug&&e())},error:function(e){T<"6.0.2"||(-1==P.state?e(P.data):$._fail=e)},checkJsApi:function(e){var t=function(e){var t=e.checkResult;for(var n in t){var i=v[n];i&&(t[i]=t[n],delete t[n])}return e};n("checkJsApi",{jsApiList:l(e.jsApiList)},(e._complete=function(e){if(x){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=t(e)},e))},onMenuShareTimeline:function(e){i(g.onMenuShareTimeline,{complete:function(){n("shareTimeline",{title:e.title||b,desc:e.title||b,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){i(g.onMenuShareAppMessage,{complete:function(t){"favorite"===t.scene?n("sendAppMessage",{title:e.title||b,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):n("sendAppMessage",{title:e.title||b,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){i(g.onMenuShareQQ,{complete:function(){n("shareQQ",{title:e.title||b,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){i(g.onMenuShareWeibo,{complete:function(){n("shareWeiboApp",{title:e.title||b,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){i(g.onMenuShareQZone,{complete:function(){n("shareQZone",{title:e.title||b,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){n("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){n("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){n("startRecord",{},e)},stopRecord:function(e){n("stopRecord",{},e)},onVoiceRecordEnd:function(e){i("onVoiceRecordEnd",e)},playVoice:function(e){n("playVoice",{localId:e.localId},e)},pauseVoice:function(e){n("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){n("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){i("onVoicePlayEnd",e)},uploadVoice:function(e){n("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){n("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){n("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){n("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(x){var t=e.localIds;try{t&&(e.localIds=JSON.parse(t))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){n(g.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){n("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){n("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===A?(A=!0,n("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(A=!1,D.length>0){var t=D.shift();wx.getLocalImgData(t)}},e))):D.push(e)},getNetworkType:function(e){var t=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var n=e.subtype;if(delete e.subtype,n)e.networkType=n;else{var i=t.indexOf(":"),o=t.substring(i+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e};n("getNetworkType",{},(e._complete=function(e){e=t(e)},e))},openLocation:function(e){n("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},n(g.getLocation,{type:e.type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){n("hideOptionMenu",{},e)},showOptionMenu:function(e){n("showOptionMenu",{},e)},closeWindow:function(e){n("closeWindow",{},e=e||{})},hideMenuItems:function(e){n("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){n("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){n("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){n("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){n("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(I){var t=e.resultStr;if(t){var n=JSON.parse(t);e.resultStr=n&&n.scan_code&&n.scan_code.scan_result}}},e))},openAddress:function(e){n(g.openAddress,{},(e._complete=function(e){e=s(e)},e))},openProductSpecificView:function(e){n(g.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,i=[],o=0,a=t.length;o<a;++o){var s=t[o],r={card_id:s.cardId,card_ext:s.cardExt};i.push(r)}n(g.addCard,{card_list:i},(e._complete=function(e){var t=e.card_list;if(t){for(var n=0,i=(t=JSON.parse(t)).length;n<i;++n){var o=t[n];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=t,delete e.card_list}},e))},chooseCard:function(e){n("chooseCard",{app_id:M.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var t=e.cardList,i=[],o=0,a=t.length;o<a;++o){var s=t[o],r={card_id:s.cardId,code:s.code};i.push(r)}n(g.openCard,{card_list:i},e)},consumeAndShareCard:function(e){n(g.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){n(g.chooseWXPay,a(e),e)},openEnterpriseRedPacket:function(e){n(g.openEnterpriseRedPacket,a(e),e)},startSearchBeacons:function(e){n(g.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){n(g.stopSearchBeacons,{},e)},onSearchBeacons:function(e){i(g.onSearchBeacons,e)},openEnterpriseChat:function(e){n("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){n("launchMiniProgram",{targetAppId:e.targetAppId,path:m(e.path),envVersion:e.envVersion},e)},miniProgram:{navigateBack:function(e){e=e||{},h(function(){n("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)})},navigateTo:function(e){h(function(){n("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)})},redirectTo:function(e){h(function(){n("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)})},switchTab:function(e){h(function(){n("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)})},reLaunch:function(e){h(function(){n("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)})},postMessage:function(e){h(function(){n("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)})},getEnv:function(t){h(function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})})}}},L=1,N={};return y.addEventListener("error",function(e){if(!x){var t=e.target,n=t.tagName,i=t.src;if(("IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n)&&-1!=i.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=t["wx-id"];if(o||(o=L++,t["wx-id"]=o),N[o])return;N[o]=!0,wx.ready(function(){wx.getLocalImgData({localId:i,success:function(e){t.src=e.localData}})})}}},!0),y.addEventListener("load",function(e){if(!x){var t=e.target,n=t.tagName;if(t.src,"IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n){var i=t["wx-id"];i&&(N[i]=!1)}}},!0),t&&(e.wx=e.jWeixin=j),j}})},"2fcb":function(e,t,n){},3875:function(e,t,n){"use strict";var i=10;function o(e,t){return e>t&&e>i?"horizontal":t>e&&t>i?"vertical":""}t["a"]={data:function(){return{direction:""}},methods:{touchStart:function(e){this.resetTouchStatus(),this.startX=e.touches[0].clientX,this.startY=e.touches[0].clientY},touchMove:function(e){var t=e.touches[0];this.deltaX=t.clientX-this.startX,this.deltaY=t.clientY-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY),this.direction=this.direction||o(this.offsetX,this.offsetY)},resetTouchStatus:function(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0}}}},4553:function(e,t,n){},"4d75":function(e,t,n){},6605:function(e,t,n){"use strict";var i=n("c31d"),o=n("2b0e"),a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"van-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"van-modal",class:e.className,style:e.style,on:{touchmove:function(e){e.preventDefault(),e.stopPropagation()},click:function(t){e.$emit("click",t)}}})])},name:"modal",props:{visible:Boolean,zIndex:Number,className:String,customStyle:Object},computed:{style:function(){return Object(i["a"])({zIndex:this.zIndex},this.customStyle)}}},s={zIndex:2e3,stack:[],lockCount:0,get top(){return this.stack[this.stack.length-1]}},r={className:"",customStyle:{}},c={open:function(e,t){if(!s.stack.some(function(t){return t.vm===e})){var n=e.$el,i=n&&n.parentNode?n.parentNode:document.body;s.stack.push({vm:e,config:t,target:i}),this.update()}},close:function(e){var t=s.stack;t.length&&(s.top.vm===e?(t.pop(),this.update()):s.stack=t.filter(function(t){return t.vm!==e}))},update:function(){var e=s.modal;if(e||(e=new(o["a"].extend(a))({el:document.createElement("div")}),e.$on("click",this.onClick),s.modal=e),e.$el.parentNode&&(e.visible=!1),s.top){var t=s.top,n=t.target,c=t.config;n.appendChild(e.$el),Object(i["a"])(e,Object(i["a"])({},r,c,{visible:!0}))}},onClick:function(){if(s.top){var e=s.top.vm;e.$emit("click-overlay"),e.closeOnClickOverlay&&e.$emit("input",!1)}}},l=n("023d"),u=n("db78"),d=n("3875");t["a"]={mixins:[d["a"]],props:{value:Boolean,overlay:Boolean,overlayStyle:Object,overlayClass:String,closeOnClickOverlay:Boolean,zIndex:[String,Number],getContainer:[String,Function],lockScroll:{type:Boolean,default:!0},lazyRender:{type:Boolean,default:!0}},data:function(){return{inited:this.value}},computed:{shouldRender:function(){return this.inited||!this.lazyRender}},watch:{value:function(e){this.inited=this.inited||this.value,this[e?"open":"close"]()},getContainer:function(){this.move()},overlay:function(){this.renderOverlay()}},mounted:function(){this.getContainer&&this.move(),this.value&&this.open()},activated:function(){this.value&&this.open()},beforeDestroy:function(){this.close(),this.getContainer&&this.$parent.$el.appendChild(this.$el)},deactivated:function(){this.close()},methods:{open:function(){this.$isServer||this.opened||(void 0!==this.zIndex&&(s.zIndex=this.zIndex),this.opened=!0,this.renderOverlay(),this.lockScroll&&(Object(u["b"])(document,"touchstart",this.touchStart),Object(u["b"])(document,"touchmove",this.onTouchMove),s.lockCount||document.body.classList.add("van-overflow-hidden"),s.lockCount++))},close:function(){this.opened&&(this.lockScroll&&(s.lockCount--,Object(u["a"])(document,"touchstart",this.touchStart),Object(u["a"])(document,"touchmove",this.onTouchMove),s.lockCount||document.body.classList.remove("van-overflow-hidden")),this.opened=!1,c.close(this),this.$emit("input",!1))},move:function(){var e,t=this.getContainer;t?e="string"===typeof t?document.querySelector(t):t():this.$parent&&(e=this.$parent.$el),e&&e.appendChild(this.$el)},onTouchMove:function(e){this.touchMove(e);var t=this.deltaY>0?"10":"01",n=l["a"].getScrollEventTarget(e.target,this.$el),i=n.scrollHeight,o=n.offsetHeight,a=n.scrollTop,s="11";0===a?s=o>=i?"00":"01":a+o>=i&&(s="10"),"11"===s||"vertical"!==this.direction||parseInt(s,2)&parseInt(t,2)||(e.preventDefault(),e.stopPropagation())},renderOverlay:function(){var e=this;this.overlay?c.open(this,{zIndex:s.zIndex++,className:this.overlayClass,customStyle:this.overlayStyle}):c.close(this),this.$nextTick(function(){e.$el.style.zIndex=s.zIndex++})}}}},"66b9":function(e,t,n){"use strict";n("68ef")},"889c":function(e,t,n){"use strict";var i=n("4553"),o=n.n(i);o.a},b258:function(e,t,n){},b650:function(e,t,n){"use strict";var i=n("fe7e");t["a"]=Object(i["a"])({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.tag,{tag:"component",class:e.b([e.type,e.size,{block:e.block,plain:e.plain,round:e.round,square:e.square,loading:e.loading,disabled:e.disabled,unclickable:e.disabled||e.loading,"bottom-action":e.bottomAction}]),attrs:{type:e.nativeType,disabled:e.disabled},on:{click:e.onClick}},[e.loading?n("loading",{attrs:{size:"20px",color:"default"===e.type?void 0:""}}):n("span",{class:e.b("text")},[e._t("default",[e._v(e._s(e.text))])],2)],1)},name:"button",props:{text:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,disabled:Boolean,nativeType:String,bottomAction:Boolean,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"}},methods:{onClick:function(e){this.loading||this.disabled||this.$emit("click",e)}}})},d399:function(e,t,n){"use strict";var i=n("c31d"),o=n("2b0e"),a=n("fe7e"),s=n("6605"),r=["success","fail","loading"],c=Object(a["a"])({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"van-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],class:e.b([e.style,e.position])},["text"===e.style?n("div",[e._v(e._s(e.message))]):e._e(),"html"===e.style?n("div",{domProps:{innerHTML:e._s(e.message)}}):e._e(),"default"===e.style?["loading"===e.type?n("loading",{attrs:{color:"white",type:e.loadingType}}):n("icon",{class:e.b("icon"),attrs:{name:e.type}}),e.isDef(e.message)?n("div",{class:e.b("text")},[e._v(e._s(e.message))]):e._e()]:e._e()],2)])},name:"toast",mixins:[s["a"]],props:{forbidClick:Boolean,message:[String,Number],type:{type:String,default:"text"},loadingType:{type:String,default:"circular"},position:{type:String,default:"middle"},lockScroll:{type:Boolean,default:!1}},data:function(){return{clickable:!1}},computed:{style:function(){return-1!==r.indexOf(this.type)?"default":this.type}},mounted:function(){this.toggleClickale()},destroyed:function(){this.toggleClickale()},watch:{value:function(){this.toggleClickale()},forbidClick:function(){this.toggleClickale()}},methods:{toggleClickale:function(){var e=this.value&&this.forbidClick;if(this.clickable!==e){this.clickable=e;var t=e?"add":"remove";document.body.classList[t]("van-toast--unclickable")}}}}),l=n("a142"),u={type:"text",mask:!1,message:"",value:!0,duration:3e3,position:"middle",loadingType:"circular",forbidClick:!1,overlayStyle:{}},d=function(e){return Object(l["d"])(e)?e:{message:e}},f=[],h=!0,p=Object(i["a"])({},u);function m(){if(l["e"])return{};if(!f.length||!h){var e=new(o["a"].extend(c))({el:document.createElement("div")});document.body.appendChild(e.$el),f.push(e)}return f[f.length-1]}function g(e){return e.overlay=e.mask,e}function v(e){void 0===e&&(e={});var t=m();return e=Object(i["a"])({},p,d(e),{clear:function(){t.value=!1,h||l["e"]||(document.body.removeChild(t.$el),t.$destroy())}}),Object(i["a"])(t,g(e)),clearTimeout(t.timer),e.duration>0&&(t.timer=setTimeout(function(){t.clear()},e.duration)),t}var y=function(e){return function(t){return v(Object(i["a"])({type:e},d(t)))}};["loading","success","fail"].forEach(function(e){v[e]=y(e)}),v.clear=function(e){f.length&&(e?(f.forEach(function(e){e.clear()}),f=[]):h?f[0].clear():f.shift().clear())},v.setDefaultOptions=function(e){Object(i["a"])(p,e)},v.resetDefaultOptions=function(){p=Object(i["a"])({},u)},v.allowMultiple=function(e){void 0===e&&(e=!0),h=!e},v.install=function(){o["a"].use(c)},o["a"].prototype.$toast=v;t["a"]=v},db78:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return r});var i=n("a142"),o=!1;if(!i["e"])try{var a={};Object.defineProperty(a,"passive",{get:function(){o=!0}}),window.addEventListener("test-passive",null,a)}catch(c){}function s(e,t,n,a){void 0===a&&(a=!1),!i["e"]&&e.addEventListener(t,n,!!o&&{capture:!1,passive:a})}function r(e,t,n){!i["e"]&&e.removeEventListener(t,n)}},e7e5:function(e,t,n){"use strict";n("68ef"),n("4d75"),n("b258")}}]);
//# sourceMappingURL=chunk-1fc102da.ab52f0e7.js.map