(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35e35010"],{"0653":function(t,i,e){"use strict";e("68ef")},"19de":function(t,i,e){"use strict";e("68ef"),e("5fbe")},"1f5b":function(t,i,e){},"234f":function(t,i,e){"use strict";var n=e("fe7e"),s=e("b650"),a=e("9584");i["a"]=Object(n["a"])({render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("van-button",{class:t.b(),attrs:{square:"",size:"large",loading:t.loading,disabled:t.disabled,type:t.primary?"danger":"warning"},on:{click:t.onClick}},[t._t("default",[t._v(t._s(t.text))])],2)},name:"goods-action-big-btn",mixins:[a["a"]],components:{VanButton:s["a"]},props:{text:String,primary:Boolean,loading:Boolean,disabled:Boolean},methods:{onClick:function(t){this.$emit("click",t),this.routerLink()}}})},"2bb1":function(t,i,e){"use strict";var n=e("fe7e");i["a"]=Object(n["a"])({render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{class:t.b(),style:t.style},[t._t("default")],2)},name:"swipe-item",data:function(){return{offset:0}},computed:{style:function(){var t=this.$parent,i=t.vertical,e=t.computedWidth,n=t.computedHeight;return{width:e+"px",height:i?n+"px":"100%",transform:"translate"+(i?"Y":"X")+"("+this.offset+"px)"}}},beforeCreate:function(){this.$parent.swipes.push(this)},destroyed:function(){this.$parent.swipes.splice(this.$parent.swipes.indexOf(this),1)}})},3875:function(t,i,e){"use strict";var n=10;function s(t,i){return t>i&&t>n?"horizontal":i>t&&i>n?"vertical":""}i["a"]={data:function(){return{direction:""}},methods:{touchStart:function(t){this.resetTouchStatus(),this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY},touchMove:function(t){var i=t.touches[0];this.deltaX=i.clientX-this.startX,this.deltaY=i.clientY-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY),this.direction=this.direction||s(this.offsetX,this.offsetY)},resetTouchStatus:function(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0}}}},3966:function(t,i,e){"use strict";e.r(i);var n,s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"mall_page"},[e("van-swipe",{attrs:{autoplay:3e3}},t._l(t.arrSwipes,function(i,n){return e("van-swipe-item",{key:n,on:{click:function(i){t.to(n)}}},[e("img",{attrs:{src:i.url,alt:"",width:"100%",height:"auto"}})])})),t._m(0),e("div",{staticClass:"goods_page"},[e("div",[e("van-row",{attrs:{justify:"space-between"}},t._l(t.arrGoods,function(i,n){return n>3?t._e():e("van-col",{key:n,attrs:{span:"10",offset:"1"}},[e("div",{staticClass:"good_page"},[e("img",{attrs:{src:i.url,alt:""}}),e("p",[t._v(t._s(i.title))]),e("p",{staticClass:"good_price"},[e("span",{staticClass:"discount"},[t._v(t._s(i.discount))]),e("span",{staticClass:"price"},[t._v(t._s(i.price))])]),e("van-goods-action-big-btn",{attrs:{text:"立即购买",primary:""},on:{click:t.onClickBigBtn}})],1)])}))],1)])],1)},a=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"hot_album"},[e("button",{staticClass:"module_title"},[t._v(" 会员专享 ")])])}],o=e("ade3"),c=(e("f908"),e("b528")),r=(e("19de"),e("234f")),u=(e("93ac"),e("bb33")),l=(e("81e6"),e("9ffb")),f=(e("4d48"),e("d1e1")),d=(e("0653"),e("34e9")),h=(e("c194"),e("7744")),p=(e("4b0a"),e("2bb1")),b=(e("7f7f"),e("7844"),e("5596")),v={components:(n={},Object(o["a"])(n,b["a"].name,b["a"]),Object(o["a"])(n,p["a"].name,p["a"]),Object(o["a"])(n,h["a"].name,h["a"]),Object(o["a"])(n,d["a"].name,d["a"]),Object(o["a"])(n,f["a"].name,f["a"]),Object(o["a"])(n,l["a"].name,l["a"]),Object(o["a"])(n,u["a"].name,u["a"]),Object(o["a"])(n,r["a"].name,r["a"]),Object(o["a"])(n,c["a"].name,c["a"]),n),data:function(){return{arrSwipes:[{url:"https://download.rdoorweb.com/20181121/7ba2c0f39ccf7c136d44152698d4b3db.jpg"},{url:"https://download.rdoorweb.com/20181121/c3b1feec4b38ffa20289de1acd834283.jpg"}],arrGoods:[{url:"https://download.rdoorweb.com/20181120/b30bd84f4208296befd1a70b0577771d.jpg",title:"1测试",price:"￥100",discount:"￥50"},{url:"https://download.rdoorweb.com/20181120/b30bd84f4208296befd1a70b0577771d.jpg",title:"2测试测试测试测试测试测试测试测试测试测试测",price:"￥100",discount:"￥50"},{url:"https://download.rdoorweb.com/20181120/b30bd84f4208296befd1a70b0577771d.jpg",title:"3测试测试测试测试测试测试测试测试测试测试测",price:"￥100",discount:"￥50"},{url:"https://download.rdoorweb.com/20181120/b30bd84f4208296befd1a70b0577771d.jpg",title:"4测试测试测试测试测试测试测试测试测试测试测",price:"￥100",discount:"￥50"},{url:"https://download.rdoorweb.com/20181120/b30bd84f4208296befd1a70b0577771d.jpg",title:"5测试测试测试测试测试测试测试测试测试测试测",price:"￥100",discount:"￥50"}]}},mounted:function(){},methods:{to:function(t){},onClickBigBtn:function(){}}},m=v,g=(e("917a"),e("2877")),w=Object(g["a"])(m,s,a,!1,null,null,null);w.options.__file="index.vue";i["default"]=w.exports},"4b0a":function(t,i,e){"use strict";e("68ef"),e("786d")},"4cf9":function(t,i,e){},"4d48":function(t,i,e){"use strict";e("68ef"),e("bf60")},5596:function(t,i,e){"use strict";var n=e("fe7e"),s=e("3875"),a=e("db78");i["a"]=Object(n["a"])({render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{class:t.b()},[e("div",{class:t.b("track"),style:t.trackStyle,on:{touchstart:t.onTouchStart,touchmove:t.onTouchMove,touchend:t.onTouchEnd,touchcancel:t.onTouchEnd,transitionend:function(i){t.$emit("change",t.activeIndicator)}}},[t._t("default")],2),t._t("indicator",[t.showIndicators&&t.count>1?e("div",{class:t.b("indicators",{vertical:t.vertical})},t._l(t.count,function(i){return e("i",{class:t.b("indicator",{active:i-1===t.activeIndicator})})})):t._e()])],2)},name:"swipe",mixins:[s["a"]],props:{width:Number,height:Number,autoplay:Number,vertical:Boolean,loop:{type:Boolean,default:!0},touchable:{type:Boolean,default:!0},initialSwipe:{type:Number,default:0},showIndicators:{type:Boolean,default:!0},duration:{type:Number,default:500}},data:function(){return{computedWidth:0,computedHeight:0,offset:0,active:0,deltaX:0,deltaY:0,swipes:[],swiping:!1}},mounted:function(){this.initialize(),this.$isServer||Object(a["b"])(window,"resize",this.onResize,!0)},destroyed:function(){this.clear(),this.$isServer||Object(a["a"])(window,"resize",this.onResize,!0)},watch:{swipes:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t?this.autoPlay():this.clear()}},computed:{count:function(){return this.swipes.length},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t,i=this.vertical?"height":"width",e=this.vertical?"width":"height";return t={},t[i]=this.trackSize+"px",t[e]=this[e]?this[e]+"px":"",t.transitionDuration=(this.swiping?0:this.duration)+"ms",t.transform="translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)",t}},methods:{initialize:function(t){if(void 0===t&&(t=this.initialSwipe),clearTimeout(this.timer),this.$el){var i=this.$el.getBoundingClientRect();this.computedWidth=this.width||i.width,this.computedHeight=this.height||i.height}this.swiping=!0,this.active=t,this.offset=this.count>1?-this.size*this.active:0,this.swipes.forEach(function(t){t.offset=0}),this.autoPlay()},onResize:function(){this.initialize(this.activeIndicator)},onTouchStart:function(t){this.touchable&&(this.clear(),this.swiping=!0,this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&(t.preventDefault(),t.stopPropagation(),this.move(0,Math.min(Math.max(this.delta,-this.size),this.size))))},onTouchEnd:function(){if(this.touchable&&this.swiping){if(this.delta&&this.isCorrectDirection){var t=this.vertical?this.offsetY:this.offsetX;this.move(t>0?this.delta>0?-1:1:0)}this.swiping=!1,this.autoPlay()}},move:function(t,i){void 0===t&&(t=0),void 0===i&&(i=0);var e=this.delta,n=this.active,s=this.count,a=this.swipes,o=this.trackSize,c=0===n,r=n===s-1,u=!this.loop&&(c&&(i>0||t<0)||r&&(i<0||t>0));u||s<=1||(a[0].offset=r&&(e<0||t>0)?o:0,a[s-1].offset=c&&(e>0||t<0)?-o:0,t&&n+t>=-1&&n+t<=s&&(this.active+=t),this.offset=i-this.active*this.size)},swipeTo:function(t){var i=this;this.swiping=!0,this.correctPosition(),setTimeout(function(){i.swiping=!1,i.move(t%i.count-i.active)},30)},correctPosition:function(){this.active<=-1&&this.move(this.count),this.active>=this.count&&this.move(-this.count)},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,i=this.autoplay;i&&this.count>1&&(this.clear(),this.timer=setTimeout(function(){t.swiping=!0,t.resetTouchStatus(),t.correctPosition(),setTimeout(function(){t.swiping=!1,t.move(1),t.autoPlay()},30)},i))}}})},"5fbe":function(t,i,e){},7844:function(t,i,e){"use strict";e("68ef"),e("8270")},"786d":function(t,i,e){},"7b0a":function(t,i,e){},"81e6":function(t,i,e){"use strict";e("68ef"),e("7b0a")},8270:function(t,i,e){},"917a":function(t,i,e){"use strict";var n=e("a359"),s=e.n(n);s.a},"93ac":function(t,i,e){"use strict";e("68ef"),e("4cf9")},"9ffb":function(t,i,e){"use strict";var n=e("fe7e");i["a"]=Object(n["a"])({render:function(){var t,i=this,e=i.$createElement,n=i._self._c||e;return n(i.tag,{tag:"component",class:i.b((t={},t[i.span]=i.span,t["offset-"+i.offset]=i.offset,t)),style:i.style},[i._t("default")],2)},name:"col",props:{span:[Number,String],offset:[Number,String],tag:{type:String,default:"div"}},computed:{gutter:function(){return this.$parent&&Number(this.$parent.gutter)||0},style:function(){var t=this.gutter/2+"px";return this.gutter?{paddingLeft:t,paddingRight:t}:{}}}})},a359:function(t,i,e){},b528:function(t,i,e){"use strict";var n=e("fe7e"),s=e("9584");i["a"]=Object(n["a"])({render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"van-hairline",class:t.b(),on:{click:t.onClick}},[e("icon",{class:[t.b("icon"),t.iconClass],attrs:{info:t.info,name:t.icon}}),t._t("default",[t._v(t._s(t.text))])],2)},name:"goods-action-mini-btn",mixins:[s["a"]],props:{text:String,info:[String,Number],icon:String,iconClass:String},methods:{onClick:function(t){this.$emit("click",t),this.routerLink()}}})},b650:function(t,i,e){"use strict";var n=e("fe7e");i["a"]=Object(n["a"])({render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e(t.tag,{tag:"component",class:t.b([t.type,t.size,{block:t.block,plain:t.plain,round:t.round,square:t.square,loading:t.loading,disabled:t.disabled,unclickable:t.disabled||t.loading,"bottom-action":t.bottomAction}]),attrs:{type:t.nativeType,disabled:t.disabled},on:{click:t.onClick}},[t.loading?e("loading",{attrs:{size:"20px",color:"default"===t.type?void 0:""}}):e("span",{class:t.b("text")},[t._t("default",[t._v(t._s(t.text))])],2)],1)},name:"button",props:{text:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,disabled:Boolean,nativeType:String,bottomAction:Boolean,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"}},methods:{onClick:function(t){this.loading||this.disabled||this.$emit("click",t)}}})},bb33:function(t,i,e){"use strict";var n=e("fe7e");i["a"]=Object(n["a"])({render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{class:t.b()},[t._t("default")],2)},name:"goods-action"})},bf60:function(t,i,e){},c194:function(t,i,e){"use strict";e("68ef")},d1e1:function(t,i,e){"use strict";var n=e("fe7e");i["a"]=Object(n["a"])({render:function(){var t,i=this,e=i.$createElement,n=i._self._c||e;return n(i.tag,{tag:"component",class:i.b((t={flex:i.flex},t["align-"+i.align]=i.flex&&i.align,t["justify-"+i.justify]=i.flex&&i.justify,t)),style:i.style},[i._t("default")],2)},name:"row",props:{type:String,align:String,justify:String,tag:{type:String,default:"div"},gutter:{type:[Number,String],default:0}},computed:{flex:function(){return"flex"===this.type},style:function(){var t="-"+Number(this.gutter)/2+"px";return this.gutter?{marginLeft:t,marginRight:t}:{}}}})},db78:function(t,i,e){"use strict";e.d(i,"b",function(){return o}),e.d(i,"a",function(){return c});var n=e("a142"),s=!1;if(!n["e"])try{var a={};Object.defineProperty(a,"passive",{get:function(){s=!0}}),window.addEventListener("test-passive",null,a)}catch(r){}function o(t,i,e,a){void 0===a&&(a=!1),!n["e"]&&t.addEventListener(i,e,!!s&&{capture:!1,passive:a})}function c(t,i,e){!n["e"]&&t.removeEventListener(i,e)}},f908:function(t,i,e){"use strict";e("68ef"),e("1f5b")}}]);
//# sourceMappingURL=chunk-35e35010.b837c468.js.map