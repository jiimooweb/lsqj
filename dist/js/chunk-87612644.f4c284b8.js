(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-87612644"],{"0150":function(t,e,i){"use strict";var n=i("a980"),s=i.n(n);s.a},"023d":function(t,e,i){"use strict";var n=i("a142");e["a"]={getScrollEventTarget:function(t,e){void 0===e&&(e=window);var i=t;while(i&&"HTML"!==i.tagName&&"BODY"!==i.tagName&&1===i.nodeType&&i!==e){var n=this.getComputedStyle(i).overflowY;if("scroll"===n||"auto"===n)return i;i=i.parentNode}return e},getScrollTop:function(t){return"scrollTop"in t?t.scrollTop:t.pageYOffset},setScrollTop:function(t,e){"scrollTop"in t?t.scrollTop=e:t.scrollTo(t.scrollX,e)},getElementTop:function(t){return(t===window?0:t.getBoundingClientRect().top)+this.getScrollTop(window)},getVisibleHeight:function(t){return t===window?t.innerHeight:t.getBoundingClientRect().height},getComputedStyle:!n["e"]&&document.defaultView.getComputedStyle.bind(document.defaultView)}},3875:function(t,e,i){"use strict";var n=10;function s(t,e){return t>e&&t>n?"horizontal":e>t&&e>n?"vertical":""}e["a"]={data:function(){return{direction:""}},methods:{touchStart:function(t){this.resetTouchStatus(),this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY},touchMove:function(t){var e=t.touches[0];this.deltaX=e.clientX-this.startX,this.deltaY=e.clientY-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY),this.direction=this.direction||s(this.offsetX,this.offsetY)},resetTouchStatus:function(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0}}}},"634a":function(t,e,i){"use strict";i.r(e);var n,s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"order"},[t._m(0),i("van-tabs",{staticClass:"order-tab",on:{click:function(e){t.getOrder()}},model:{value:t.orderType,callback:function(e){t.orderType=e},expression:"orderType"}},t._l(t.orderText,function(t,e){return i("van-tab",{key:e,attrs:{title:t.label}})})),i("div",{staticClass:"order-list"},t._l(t.orderList,function(e,n){return i("div",{key:n,staticClass:"order-list-item"},[i("div",{staticClass:"order-list-item-conter"},[i("div",{staticClass:"order-list-item-conter-img"},[i("img",{attrs:{src:t.img}})]),t._m(1,!0)]),i("div",{staticClass:"order-list-item-click"},[i("van-button",{staticClass:"order-list-item-click-intoDefail",attrs:{round:"",type:"default",size:"small"},on:{click:function(e){t.inOrderDetail()}}},[t._v("订单详情")]),i("van-button",{staticClass:"order-list-item-click-qrcode",attrs:{round:"",type:"default",size:"small"}},[t._v("核销二维码")])],1)])}))],1)},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"order-title"},[i("span",[t._v("我的订单")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"order-list-item-conter-text"},[i("p",{staticClass:"order-list-item-conter-text-name"},[t._v("苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果")]),i("p",{staticClass:"order-list-item-conter-text-price"},[i("span",{staticClass:"order-list-item-conter-text-price-price"},[t._v("¥12")]),i("span",{staticClass:"order-list-item-conter-text-price-piece"},[t._v("合计2件")])])])}],r=i("ade3"),a=(i("66b9"),i("b650")),c=(i("68ef"),i("b807"),i("fe7e")),l=i("8624"),u=i("db78"),d=i("023d"),f=i("3875"),h=Object(c["a"])({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.b([t.type])},[i("div",{ref:"wrap",class:[t.b("wrap",{scrollable:t.scrollable}),{"van-hairline--top-bottom":"line"===t.type}],style:t.wrapStyle},[i("div",{ref:"nav",class:t.b("nav",[t.type]),style:t.navStyle},["line"===t.type?i("div",{class:t.b("line"),style:t.lineStyle}):t._e(),t._l(t.tabs,function(e,n){return i("div",{ref:"tabs",refInFor:!0,staticClass:"van-tab",class:{"van-tab--active":n===t.curActive,"van-tab--disabled":e.disabled},style:t.getTabStyle(e,n),on:{click:function(e){t.onClick(n)}}},[i("span",{ref:"title",refInFor:!0,staticClass:"van-ellipsis"},[t._v(t._s(e.title))])])})],2)]),i("div",{ref:"content",class:t.b("content")},[t._t("default")],2)])},name:"tabs",mixins:[f["a"]],model:{prop:"active"},props:{color:String,sticky:Boolean,lineWidth:Number,swipeable:Boolean,active:{type:[Number,String],default:0},type:{type:String,default:"line"},duration:{type:Number,default:.2},swipeThreshold:{type:Number,default:4},offsetTop:{type:Number,default:0}},data:function(){return{tabs:[],position:"",curActive:null,lineStyle:{},events:{resize:!1,sticky:!1,swipeable:!1}}},computed:{scrollable:function(){return this.tabs.length>this.swipeThreshold},wrapStyle:function(){switch(this.position){case"top":return{top:this.offsetTop+"px",position:"fixed"};case"bottom":return{top:"auto",bottom:0};default:return null}},navStyle:function(){return{borderColor:this.color}}},watch:{active:function(t){t!==this.curActive&&this.correctActive(t)},color:function(){this.setLine()},tabs:function(t){this.correctActive(this.curActive||this.active),this.scrollIntoView(),this.setLine()},curActive:function(){this.scrollIntoView(),this.setLine(),"page-top"!==this.position&&"content-bottom"!==this.position||d["a"].setScrollTop(window,d["a"].getElementTop(this.$el))},sticky:function(){this.handlers(!0)},swipeable:function(){this.handlers(!0)}},mounted:function(){var t=this;this.correctActive(this.active),this.setLine(),this.$nextTick(function(){t.handlers(!0),t.scrollIntoView(!0)})},activated:function(){var t=this;this.$nextTick(function(){t.handlers(!0),t.scrollIntoView(!0)})},deactivated:function(){this.handlers(!1)},beforeDestroy:function(){this.handlers(!1)},methods:{handlers:function(t){var e=this.events,i=this.sticky&&t,n=this.swipeable&&t;if(e.resize!==t&&(e.resize=t,(t?u["b"]:u["a"])(window,"resize",this.setLine,!0)),e.sticky!==i&&(e.sticky=i,this.scrollEl=this.scrollEl||d["a"].getScrollEventTarget(this.$el),(i?u["b"]:u["a"])(this.scrollEl,"scroll",this.onScroll,!0),this.onScroll()),e.swipeable!==n){e.swipeable=n;var s=this.$refs.content,o=n?u["b"]:u["a"];o(s,"touchstart",this.touchStart),o(s,"touchmove",this.touchMove),o(s,"touchend",this.onTouchEnd),o(s,"touchcancel",this.onTouchEnd)}},onTouchEnd:function(){var t=this.direction,e=this.deltaX,i=this.curActive,n=50;"horizontal"===t&&this.offsetX>=n&&(e>0&&0!==i?this.setCurActive(i-1):e<0&&i!==this.tabs.length-1&&this.setCurActive(i+1))},onScroll:function(){var t=d["a"].getScrollTop(window)+this.offsetTop,e=d["a"].getElementTop(this.$el),i=e+this.$el.offsetHeight-this.$refs.wrap.offsetHeight;this.position=t>i?"bottom":t>e?"top":"";var n={scrollTop:t,isFixed:"top"===this.position};this.$emit("scroll",n)},setLine:function(){var t=this;this.$nextTick(function(){if(t.$refs.tabs&&"line"===t.type){var e=t.$refs.tabs[t.curActive],i=t.lineWidth||e.offsetWidth/2,n=e.offsetLeft+(e.offsetWidth-i)/2;t.lineStyle={width:i+"px",backgroundColor:t.color,transform:"translateX("+n+"px)",transitionDuration:t.duration+"s"}}})},correctActive:function(t){t=+t;var e=this.tabs.some(function(e){return e.index===t}),i=(this.tabs[0]||{}).index||0;this.setCurActive(e?t:i)},setCurActive:function(t){t=this.findAvailableTab(t,t<this.curActive),this.isDef(t)&&t!==this.curActive&&(this.$emit("input",t),null!==this.curActive&&this.$emit("change",t,this.tabs[t].title),this.curActive=t)},findAvailableTab:function(t,e){var i=e?-1:1,n=t;while(n>=0&&n<this.tabs.length){if(!this.tabs[n].disabled)return n;n+=i}},onClick:function(t){var e=this.tabs[t],i=e.title,n=e.disabled;n?this.$emit("disabled",t,i):(this.setCurActive(t),this.$emit("click",t,i))},scrollIntoView:function(t){if(this.scrollable&&this.$refs.tabs){var e=this.$refs.tabs[this.curActive],i=this.$refs.nav,n=i.scrollLeft,s=i.offsetWidth,o=e.offsetLeft,r=e.offsetWidth;this.scrollTo(i,n,o-(s-r)/2,t)}},scrollTo:function(t,e,i,n){if(n)t.scrollLeft+=i-e;else{var s=0,o=Math.round(1e3*this.duration/16),r=function n(){t.scrollLeft+=(i-e)/o,++s<o&&Object(l["a"])(n)};r()}},renderTitle:function(t,e){var i=this;this.$nextTick(function(){var n=i.$refs.title[e];n.parentNode.replaceChild(t,n)})},getTabStyle:function(t,e){var i={},n=this.color,s=e===this.curActive,o="card"===this.type;return n&&(t.disabled||o===s||(i.color=n),!t.disabled&&o&&s&&(i.backgroundColor=n),o&&(i.borderColor=n)),i}}}),p=(i("7f7f"),i("f319"),i("f331")),v=Object(c["a"])({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.isSelected,expression:"isSelected"}],class:t.b("pane")},[t.inited?t._t("default"):t._e(),t.$slots.title?i("div",{ref:"title"},[t._t("title")],2):t._e()],2)},name:"tab",mixins:[p["a"]],props:{title:String,disabled:Boolean},data:function(){return{inited:!1}},computed:{index:function(){return this.parent.tabs.indexOf(this)},isSelected:function(){return this.index===this.parent.curActive}},watch:{"parent.curActive":function(){this.inited=this.inited||this.isSelected},title:function(){this.parent.setLine()}},created:function(){this.findParent("van-tabs")},mounted:function(){var t=this.parent.tabs,e=this.parent.$slots.default.indexOf(this.$vnode);t.splice(-1===e?t.length:e,0,this),this.$slots.title&&this.parent.renderTitle(this.$refs.title,this.index)},beforeDestroy:function(){this.parent.tabs.splice(this.index,1)}}),b={components:(n={},Object(r["a"])(n,v.name,v),Object(r["a"])(n,h.name,h),Object(r["a"])(n,a["a"].name,a["a"]),n),data:function(){return{orderType:0,orderText:[{label:"全部",key:"-2"},{label:"未支付",key:"0"},{label:"已支付",key:"1"},{label:"已使用",key:"1"}],orderList:[{name:1},{name:1},{name:1},{name:1}],img:"https://camo.githubusercontent.com/8ef9e5d3ef085affbcabf7754b02312a4ea10039/68747470733a2f2f696d672e797a63646e2e636e2f7075626c69635f66696c65732f323031372f31322f31382f66643738636636626235643132653261313139643035373662656466643233302e706e67"}},methods:{inOrderDetail:function(){this.$router.push("/orderDetail")},getOrder:function(){axios.request({url:"/activity/activitys/wx",method:"get"}).then(function(t){console.log(t)})}},mounted:function(){this.getOrder()}},m=b,g=(i("0150"),i("2877")),y=Object(g["a"])(m,s,o,!1,null,null,null);y.options.__file="index.vue";e["default"]=y.exports},"66b9":function(t,e,i){"use strict";i("68ef")},8624:function(t,e,i){"use strict";(function(t){i.d(e,"a",function(){return c});var n=i("a142"),s=Date.now();function o(t){var e=Date.now(),i=Math.max(0,16-(e-s)),n=setTimeout(t,i);return s=e+i,n}var r=n["e"]?t:window,a=r.requestAnimationFrame||r.webkitRequestAnimationFrame||o;r.cancelAnimationFrame||r.webkitCancelAnimationFrame||r.clearTimeout;function c(t){return a.call(r,t)}}).call(this,i("c8ba"))},a980:function(t,e,i){},b650:function(t,e,i){"use strict";var n=i("fe7e");e["a"]=Object(n["a"])({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i(t.tag,{tag:"component",class:t.b([t.type,t.size,{block:t.block,plain:t.plain,round:t.round,square:t.square,loading:t.loading,disabled:t.disabled,unclickable:t.disabled||t.loading,"bottom-action":t.bottomAction}]),attrs:{type:t.nativeType,disabled:t.disabled},on:{click:t.onClick}},[t.loading?i("loading",{attrs:{size:"20px",color:"default"===t.type?void 0:""}}):i("span",{class:t.b("text")},[t._t("default",[t._v(t._s(t.text))])],2)],1)},name:"button",props:{text:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,disabled:Boolean,nativeType:String,bottomAction:Boolean,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"}},methods:{onClick:function(t){this.loading||this.disabled||this.$emit("click",t)}}})},b807:function(t,e,i){},db78:function(t,e,i){"use strict";i.d(e,"b",function(){return r}),i.d(e,"a",function(){return a});var n=i("a142"),s=!1;if(!n["e"])try{var o={};Object.defineProperty(o,"passive",{get:function(){s=!0}}),window.addEventListener("test-passive",null,o)}catch(c){}function r(t,e,i,o){void 0===o&&(o=!1),!n["e"]&&t.addEventListener(e,i,!!s&&{capture:!1,passive:o})}function a(t,e,i){!n["e"]&&t.removeEventListener(e,i)}},f319:function(t,e,i){},f331:function(t,e,i){"use strict";e["a"]={data:function(){return{parent:null}},methods:{findParent:function(t){var e=this.$parent;while(e){if(e.$options.name===t){this.parent=e;break}e=e.$parent}}}}}}]);
//# sourceMappingURL=chunk-87612644.f4c284b8.js.map