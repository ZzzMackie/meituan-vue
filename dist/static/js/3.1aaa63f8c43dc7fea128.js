webpackJsonp([3],{"/aKq":function(t,e){},LdHK:function(t,e){},"XO/U":function(t,e){},b56n:function(t,e){},l4WT:function(t,e){},n2Qm:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("QzXw"),n={name:"MyMenu",data:function(){return{menuList:[],curDetail:null}},created:function(){var t=this;a.a.getMenuList().then(function(e){"success"===e.data.status&&(t.menuList=e.data.data)})},methods:{onEnter:function(t){this.curDetail=t},onLeave:function(){var t=this;console.log(this.curDetail),this.timer=setTimeout(function(){t.curDetail=null},500)},curEnter:function(){clearTimeout(this.timer)},curLeave:function(){this.curDetail=null}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"m-menu"},[s("dl",{staticClass:"nav",on:{mouseleave:t.onLeave}},[s("dt",[t._v("全部分类")]),t._v(" "),t._l(t.menuList,function(e){return s("dd",{key:e.name,on:{mouseenter:function(s){return t.onEnter(e)}}},[s("i",{class:e.type}),t._v("\n            "+t._s(e.name)+"\n            "),s("span",{staticClass:"arrow"})])})],2),t._v(" "),t.curDetail?s("div",{staticClass:"detail",on:{mouseenter:t.curEnter,mouseleave:t.curLeave}},[t._l(t.curDetail.items,function(e,a){return[s("h4",{key:a},[t._v("\n                "+t._s(e.title)+"\n            ")]),t._v(" "),t._l(e.items,function(e,a){return s("span",{key:e+""+a},[t._v("\n                "+t._s(e)+"\n            ")])})]})],2):t._e()])},staticRenderFns:[]};var l=s("VU/8")(n,i,!1,function(t){s("LdHK")},"data-v-b3dba9d4",null).exports,r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"slide"},[e("el-carousel",{attrs:{height:"240"}},this._l(this.imgList,function(t){return e("el-carousel-item",{key:t.url},[e("img",{attrs:{src:t.img,alt:""}})])}),1)],1)},staticRenderFns:[]};var c={name:"MyLife",data:function(){return{}},components:{MySlider:s("VU/8")({data:function(){return{imgList:[{url:"#xxx",img:"https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png"},{url:"#ass",img:"http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg"},{url:"#vc",img:"http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg"}]}}},r,!1,function(t){s("b56n")},"data-v-0ae18006",null).exports}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"m-life"},[s("el-row",[s("ul",{staticClass:"nav"},[s("li",[s("router-link",{staticClass:"takeout",attrs:{to:"/"}},[t._v("美团外卖")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/"}},[t._v("猫眼电影")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/"}},[t._v("美团酒店")])],1),t._v(" "),s("li",[s("router-link",{staticClass:"apartment",attrs:{to:"/"}},[t._v("民宿/公寓")])],1),t._v(" "),s("li",[s("router-link",{staticClass:"business",attrs:{to:"/"}},[t._v("商家入驻")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/"}},[t._v("美团公益")])],1)])]),t._v(" "),s("el-row",[s("el-col",{attrs:{span:14}},[s("my-slider")],1),t._v(" "),s("el-col",{attrs:{span:4}},[s("div",{staticClass:"m-life-pic"})]),t._v(" "),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"m-life-login"},[s("h4",[s("img",{attrs:{src:"//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg",alt:""}})]),t._v(" "),s("p",{staticClass:"m-life-login-name"},[t._v("'Hi,你好'")]),t._v(" "),s("p",[s("router-link",{attrs:{to:{name:"register"}}},[s("el-button",{attrs:{round:""}},[t._v("注册")])],1)],1),t._v(" "),s("p",[s("router-link",{attrs:{to:{name:"login"}}},[s("el-button",{attrs:{round:""}},[t._v("立即登陆")])],1)],1)])])],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:7}},[s("div",{staticClass:"m-life-hotel"})]),t._v(" "),s("el-col",{attrs:{span:7}},[s("div",{staticClass:"m-life-music"})]),t._v(" "),s("el-col",{attrs:{span:4}},[s("div",{staticClass:"m-life-coop"})]),t._v(" "),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"m-life-downapp"},[s("img",{attrs:{src:"//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png",alt:"下载APP"}}),t._v(" "),s("p",[t._v("美团APP手机版")]),t._v(" "),s("p",{staticClass:"last-p"},[s("span",{staticClass:"red"},[t._v("1元起")]),t._v("\n                  吃喝玩乐\n              ")])])])],1)],1)},staticRenderFns:[]};var u=s("VU/8")(c,o,!1,function(t){s("l4WT")},null,null).exports,v={props:["status"],data:function(){return{kind:"all",list:{}}},created:function(){var t=this;a.a.resultsByKeywords().then(function(e){t.list=e.data.data,console.log(t.list)})},methods:{onOver:function(t){var e=t.target;if("dd"!=e.tagName.toLowerCase())return!1;this.kind=e.getAttribute("data-type")}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"m-istyle"},[s("div",{class:t.status.class,on:{mouseover:t.onOver}},[s("dl",{class:t.status.class,on:{mouseover:t.onOver}},[s("dt",[t._v(t._s(t.status.title))]),t._v(" "),t._l(t.status.list,function(e,a){return s("dd",{key:a,class:{active:t.kind==e.tab},attrs:{"data-type":e.tab}},[t._v(t._s(e.text))])})],2),t._v(" "),s("ul",{staticClass:"ibody"},t._l(t.list[t.kind],function(e,a){return s("li",{key:a},[s("el-card",{attrs:{"body-style":{padding:"0px"},shadow:"never"}},[s("img",{staticClass:"image",attrs:{src:e.image}}),t._v(" "),s("div",{staticClass:"cbody"},[s("div",{staticClass:"title",attrs:{title:e.title}},[t._v(t._s(e.title))]),t._v(" "),s("div",{staticClass:"sub-title",attrs:{title:e.subTitle}},[t._v(t._s(e.subTitle))]),t._v(" "),s("div",{staticClass:"price-info"},[s("span",{staticClass:"current-price-wrapper"},[s("span",{staticClass:"price-symbol numfont"},[t._v("¥")]),t._v(" "),s("span",{staticClass:"current-price numfont"},[t._v(t._s(e.price))]),t._v(" "),s("span",{staticClass:"units"},[t._v("/人均")])])])])])],1)}),0)])])},staticRenderFns:[]};var m={name:"PageIndex",data:function(){return{iStyle:{class:"istyle",title:"有格调",list:[{text:"全部",tab:"all"},{text:"约会聚餐",tab:"food"},{text:"丽人SPA",tab:"spa"},{text:"电影演出",tab:"movie"},{text:"品质出游",tab:"travel"}]},recomment:{class:"youhui",title:"很优惠",list:[{text:"全部",tab:"all"},{text:"美食",tab:"food"},{text:"休闲",tab:"xiuxian"}]}}},components:{myContainer:s("VU/8")(v,d,!1,function(t){s("/aKq")},"data-v-0fdbb182",null).exports,myMenu:l,myLife:u}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-index"},[e("el-row",[e("el-col",{attrs:{span:5}},[e("my-menu")],1),this._v(" "),e("el-col",{attrs:{span:19}},[e("my-life")],1)],1),this._v(" "),e("el-row",[e("el-col",{attrs:{span:24}},[e("my-container",{attrs:{status:this.iStyle}})],1)],1),this._v(" "),e("el-row",[e("el-col",{attrs:{span:24}},[e("my-container",{attrs:{status:this.recomment}})],1)],1)],1)},staticRenderFns:[]};var f=s("VU/8")(m,_,!1,function(t){s("XO/U")},null,null);e.default=f.exports}});
//# sourceMappingURL=3.1aaa63f8c43dc7fea128.js.map