(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"04ca":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={name:"scoreCom",props:{score:{type:String},showNumber:{type:Number,required:!1,default:0}},data:function(){return{yellowScore:0,greyScore:5}},created:function(){var e=0;null!=this.score&&void 0!=this.score&&""!=this.score&&(e=this.score),this.yellowScore=parseInt(e/2),this.greyScore=5-this.yellowScore},methods:{}};t.default=r},"0b1d":function(e,t){e.exports="/static/images/prediction.png"},"0de9":function(e,t,n){"use strict";function r(e){var t=Object.prototype.toString.call(e);return t.substring(8,t.length-1)}function i(){return"string"===typeof __channelId__&&__channelId__}function o(e,t){switch(r(t)){case"Function":return"function() { [native code] }";default:return t}}function c(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];console[e].apply(console,n)}function a(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var c=t.shift();if(i())return t.push(t.pop().replace("at ","uni-app:///")),console[c].apply(console,t);var a=t.map((function(e){var t=Object.prototype.toString.call(e).toLowerCase();if("[object object]"===t||"[object array]"===t)try{e="---BEGIN:JSON---"+JSON.stringify(e,o)+"---END:JSON---"}catch(i){e=t}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var n=r(e).toUpperCase();e="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+e+"---END:"+n+"---":String(e)}return e})),s="";if(a.length>1){var u=a.pop();s=a.join("---COMMA---"),0===u.indexOf(" at ")?s+=u:s+="---COMMA---"+u}else s=a[0];console[c](s)}n.r(t),n.d(t,"log",(function(){return c})),n.d(t,"default",(function(){return a}))},1718:function(e,t,n){"use strict";n.r(t);var r=n("a0a1"),i=n("f028");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);var c,a=n("f0c5"),s=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],c);t["default"]=s.exports},"1c40":function(e,t,n){"use strict";n.r(t);var r=n("4394"),i=n("fa29");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);var c,a=n("f0c5"),s=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],c);t["default"]=s.exports},"1c7d":function(e,t,n){"use strict";n.r(t);var r=n("a73f"),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=i.a},"1e99":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("3f58")),i=o(n("7276"));function o(e){return e&&e.__esModule?e:{default:e}}var c={components:{scoreCom:i.default},data:function(){return{swipperUrlList:[],showNumber:1,RecommendationList:[],FactoryProductList:[],animationData:{},animationDataArr:[{},{},{},{},{}]}},onPullDownRefresh:function(){uni.showLoading(),uni.showNavigationBarLoading(),this.changeRecommendation(),uni.stopPullDownRefresh(),uni.hideNavigationBarLoading(),uni.hideLoading()},onUnload:function(){this.animationData={},this.animationDataArr=[]},onLoad:function(){var e=this;this.animation=uni.createAnimation(),this.IsProduction?this.GetCarouselData():this.GetCarouselData_Mock().then((function(t){e.swipperUrlList=t})),this.GetRecommendationData_Mock().then((function(t){e.RecommendationList=t})),this.GetFactoryProductData_Mock().then((function(t){e.FactoryProductList=t}))},methods:{GetCarouselData_Mock:function(){return new Promise((function(e,t){setTimeout((function(){var t=["https://www.motic-electric.com/upload/201506/2015062314402024.jpg","https://www.motic-electric.com/upload/201508/201508111522.jpg","https://www.motic-electric.com/upload/201508/201508111868.jpg","https://www.motic-electric.com/upload/201506/20150623144408769.jpg"];e(t)}),500)}))},GetCarouselData:function(){uni.request({url:"".concat(r.default.serverUrl,"/index/carousel/list"),method:"POST",success:function(t){e("log",t," at pages/index/index.vue:259")}})},GetRecommendationData_Mock:function(){return new Promise((function(e,t){setTimeout((function(){var t=r.default.RecommendationArray.filter((function(e){return e.id>0&&e.id<8}));e(t)}),500)}))},changeRecommendation:function(){var e=this;new Promise((function(t,n){setTimeout((function(){for(var t=[],n=0;n<1e4;n++){var i=Math.floor(Math.random()*r.default.RecommendationArray.length);if(t.indexOf(i)<0&&t.push(i),t.length>=5)break}e.RecommendationList=[],t.forEach((function(t){e.RecommendationList.push(r.default.RecommendationArray[t])}))}),500)}))},GetFactoryProductData_Mock:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t,n){setTimeout((function(){var n=r.default.RecommendationArray.filter((function(t){return"Factory"==t.type&&t.id>10*e&&t.id<=10*e+10}));t(n)}),500)}))},praiseme:function(t){var n=t.currentTarget.dataset.gindex;e("log",n," at pages/index/index.vue:309"),this.animation.translateY(-30).opacity(1).step({duration:400}),this.animationData=this.animation,this.animationDataArr[n]=this.animationData.export(),setTimeout(function(){this.animation.translateY(0).opacity(0).step({duration:0}),this.animationData=this.animation,this.animationDataArr[n]=this.animationData.export()}.bind(this),500)}}};t.default=c}).call(this,n("0de9")["default"])},2241:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r}));var r={scoreCom:n("7276").default},i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("view",{staticClass:e._$s(0,"sc","container"),attrs:{_i:0}},[r("view",{staticClass:e._$s(1,"sc","Up"),attrs:{_i:1}},[r("view",{staticClass:e._$s(2,"sc","Up-L"),attrs:{_i:2}},[r("image",{attrs:{src:e._$s(3,"a-src",n("b7d7")),_i:3}})]),r("view",{staticClass:e._$s(4,"sc","Up-R"),attrs:{_i:4}},[r("input",{ref:"searchTxt",attrs:{_i:5},on:{confirm:e.searchBtn}})])]),e._$s(6,"i",e.IsShowSearchRecommend)?r("view",[e._$s(7,"i",e.showEmpty)?r("view"):e._e(),r("view"),r("view",[r("view",{attrs:{_i:10},on:{click:e.clickSearchCategory}}),r("view",{attrs:{_i:11},on:{click:e.clickSearchCategory}}),r("view",{attrs:{_i:12},on:{click:e.clickSearchCategory}}),r("view",{attrs:{_i:13},on:{click:e.clickSearchCategory}}),r("view",{attrs:{_i:14},on:{click:e.clickSearchCategory}}),r("view",{attrs:{_i:15},on:{click:e.clickSearchCategory}})]),r("view"),r("view",e._l(e._$s(18,"f",{forItems:e.RecommendationList}),(function(t,n,i,o){return r("view",{key:e._$s(18,"f",{forIndex:i,key:t.id})},[r("view",[r("image",{attrs:{src:e._$s("20-"+o,"a-src",t.cover),_i:"20-"+o}})])])})),0)]):r("view",e._l(e._$s(22,"f",{forItems:e.FactoryProductList}),(function(t,i,o,c){return r("view",{key:e._$s(22,"f",{forIndex:o,key:t.id})},[r("view",[r("image",{attrs:{src:e._$s("24-"+c,"a-src",t.cover),_i:"24-"+c}})]),r("view",[r("view",[e._v(e._$s("26-"+c,"t0-0",e._s(t.name)))]),r("view",[r("view",[r("text",[e._v(e._$s("29-"+c,"t0-0",e._s(t.price)))])]),r("view",[r("image",{attrs:{src:e._$s("31-"+c,"a-src",n("9c99")),_i:"31-"+c}})])]),r("scoreCom",{attrs:{score:t.score,showNumber:e.showNumber,_i:"32-"+c}})],1)])})),0)])},o=[]},"2c62":function(e,t){e.exports="/static/images/star.png"},"30f3":function(e,t){e.exports="/static/images/dianzanHL.png"},"39b9":function(e,t,n){"use strict";n.r(t);var r=n("04ca"),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=i.a},"3f58":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r="https://www.imovietrailer.com/superhero",i=[{id:1,name:"\u5149\u5b66\u663e\u5fae\u955c",cover:"http://ku.90sjimg.com/element_origin_min_pic/16/10/27/86038b0052621c01d0efdf19aed1a117.jpg",score:"9.1",desc:"",price:7855.38,type:"Recommendation"},{id:2,name:"Bresser \u900f\u5149\u663e\u5fae\u955c",cover:"http://img63.chem17.com/9/20140728/635421449392132785993.jpg",score:"3.1",type:"Recommendation",desc:"",price:7855.38},{id:3,name:"\u900f\u5c04\u5149\u663e\u5fae\u955c",cover:"http://ku.90sjimg.com/element_origin_min_pic/18/07/26/1ccfac59da49ef573936fca239e2b16d.jpg",score:"6.1",type:"Recommendation",desc:"",price:7855.38},{id:4,name:"\u7535\u5b50\u663e\u5fae\u955c",cover:"http://www.bioon.com.cn/ewebeditor/fckup/2014/11/20141119151503137397.jpg",score:"1.1",type:"Recommendation",desc:"",price:7855.38},{id:5,name:"Junior \u663e\u5fae\u955c",cover:"http://www.shangguang.com/upfile/2016/05/20160520032319_876.jpg",score:"7.1",type:"Recommendation",desc:"",price:7855.38},{id:6,name:"\u7535\u5b50\u663e\u5fae\u955c",cover:"http://www.bioon.com.cn/ewebeditor/fckup/2014/11/20141117144519625852.jpg",score:"8.1",type:"Recommendation",desc:"",price:7855.38},{id:10,name:"P90-UI54 \u5149\u5b66\u663e\u5fae\u955c",cover:"http://img2.app17.com/products/big/20120207/201202071114177060.jpg",score:"8.1",type:"Factory",desc:"\u9002\u7528\u4e8e\u79d1\u5b66\u7814\u7a76\uff0c\u5b9e\u9a8c\u7b49\uff0c\u5728\u7cbe\u786e\u5ea6\u7b49\u65b9\u9762\u6709\u5f88\u597d\u7684\u6548\u679c...",price:2231.5},{id:11,name:"X89-W3C10 \u7535\u5b50\u663e\u5fae\u955c",cover:"http://img42.chem17.com/2/2008/2006121914516539.gif",score:"4.1",type:"Factory",desc:"\u9002\u7528\u4e8e\u79d1\u5b66\u7814\u7a76\uff0c\u5b9e\u9a8c\u7b49\uff0c\u5728\u7cbe\u786e\u5ea6\u7b49\u65b9\u9762\u6709\u5f88\u597d\u7684\u6548\u679c...",price:1856.98},{id:12,name:"F7965-W3C14 \u7535\u5b50\u663e\u5fae\u955c",cover:"http://img3.app17.com/products/big/20130604/201306040516561561.jpg",score:"7",type:"Factory",desc:"\u9002\u7528\u4e8e\u79d1\u5b66\u7814\u7a76\uff0c\u5b9e\u9a8c\u7b49\uff0c\u5728\u7cbe\u786e\u5ea6\u7b49\u65b9\u9762\u6709\u5f88\u597d\u7684\u6548\u679c...",price:4852.11},{id:13,name:"X88-W4C17 \u7535\u5b50\u663e\u5fae\u955c",cover:"http://www.bioon.com.cn/ewebeditor/fckup/2014/11/20141119151503137397.jpg",score:"9.5",type:"Factory",desc:"\u9002\u7528\u4e8e\u79d1\u5b66\u7814\u7a76\uff0c\u5b9e\u9a8c\u7b49\uff0c\u5728\u7cbe\u786e\u5ea6\u7b49\u65b9\u9762\u6709\u5f88\u597d\u7684\u6548\u679c...",price:12821},{id:14,name:"X00-W3C167 \u79d1\u7814\u663e\u5fae\u955c",cover:"http://img2.app17.com/products/big/20120503/201205030930595576.jpg",score:"9.5",type:"Factory",desc:"\u9002\u7528\u4e8e\u79d1\u5b66\u7814\u7a76\uff0c\u5b9e\u9a8c\u7b49\uff0c\u5728\u7cbe\u786e\u5ea6\u7b49\u65b9\u9762\u6709\u5f88\u597d\u7684\u6548\u679c...",price:7843.98},{id:15,name:"K50-WH98 \u7535\u5b50\u663e\u5fae\u955c",cover:"http://www.morcato.com/ProductImages/b/37097.jpg",score:"9.5",type:"Factory",desc:"\u9002\u7528\u4e8e\u79d1\u5b66\u7814\u7a76\uff0c\u5b9e\u9a8c\u7b49\uff0c\u5728\u7cbe\u786e\u5ea6\u7b49\u65b9\u9762\u6709\u5f88\u597d\u7684\u6548\u679c...",price:43855},{id:16,name:"X31-W3C10 \u7535\u5b50\u663e\u5fae\u955c",cover:"http://pic.baike.soso.com/p/20101026/bki-20101026155338-406515898.jpg",score:"6.5",type:"Factory",desc:"\u9002\u7528\u4e8e\u79d1\u5b66\u7814\u7a76\uff0c\u5b9e\u9a8c\u7b49\uff0c\u5728\u7cbe\u786e\u5ea6\u7b49\u65b9\u9762\u6709\u5f88\u597d\u7684\u6548\u679c...",price:2900},{id:17,name:"X81-WER21 \u7535\u5b50\u663e\u5fae\u955c",cover:"http://img3.app17.com/products/big/20130604/201306040516561561.jpg",score:"7.5",type:"Factory",desc:"\u9002\u7528\u4e8e\u79d1\u5b66\u7814\u7a76\uff0c\u5b9e\u9a8c\u7b49\uff0c\u5728\u7cbe\u786e\u5ea6\u7b49\u65b9\u9762\u6709\u5f88\u597d\u7684\u6548\u679c...",price:6851},{id:18,name:"SY1998 \u5b9e\u9a8c\u663e\u5fae\u955c",cover:"http://www.dginfo.com/UpFile/shop/2015/3/17/201531715340699738.jpg",score:"6.2",type:"Factory",desc:"\u9002\u7528\u4e8e\u79d1\u5b66\u7814\u7a76\uff0c\u5b9e\u9a8c\u7b49\uff0c\u5728\u7cbe\u786e\u5ea6\u7b49\u65b9\u9762\u6709\u5f88\u597d\u7684\u6548\u679c...",price:19833},{id:19,name:"FF98-EN5 \u5149\u5b66\u663e\u5fae\u955c",cover:"http://www.shdygx.com/datacache/pic/324_324_987146b7125fbb459affeaf4f918ae97.jpg",score:"9.5",type:"Factory",desc:"\u9002\u7528\u4e8e\u79d1\u5b66\u7814\u7a76\uff0c\u5b9e\u9a8c\u7b49\uff0c\u5728\u7cbe\u786e\u5ea6\u7b49\u65b9\u9762\u6709\u5f88\u597d\u7684\u6548\u679c...",price:9387}],o={serverUrl:r,RecommendationArray:i};t.default=o},4394:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view")},o=[]},"43bd":function(e,t,n){"use strict";n.r(t);var r=n("2241"),i=n("d774");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);var c,a=n("f0c5"),s=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],c);t["default"]=s.exports},4764:function(e,t){e.exports="/static/images/factory.png"},"6cbc":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{}},methods:{}};t.default=r},7276:function(e,t,n){"use strict";n.r(t);var r=n("cdb8"),i=n("39b9");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);var c,a=n("f0c5"),s=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],c);t["default"]=s.exports},"8bbf":function(e,t){e.exports=Vue},9742:function(e,t,n){"use strict";n("ea26");var r=o(n("8bbf")),i=o(n("a51f"));function o(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}r.default.config.productionTip=!1,r.default.prototype.IsProduction=!1,i.default.mpType="app";var u=new r.default(a({},i.default));u.$mount()},"97a1":function(e,t){e.exports="/static/images/starHL.png"},"9c99":function(e,t){e.exports="/static/images/collectHL.png"},a0a1:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r}));var r={scoreCom:n("7276").default},i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("view",{staticClass:e._$s(0,"sc","container"),attrs:{_i:0}},[r("swiper",{attrs:{_i:1}},e._l(e._$s(2,"f",{forItems:e.swipperUrlList}),(function(t,n,i,o){return r("swiper-item",{key:e._$s(2,"f",{forIndex:i,key:n})},[r("view",{staticClass:e._$s("3-"+o,"sc","swiper-item"),attrs:{_i:"3-"+o}},[r("image",{staticClass:e._$s("4-"+o,"sc","carousel"),attrs:{src:e._$s("4-"+o,"a-src",t),_i:"4-"+o}})])])})),0),r("view",[r("view",[r("image",{attrs:{src:e._$s(7,"a-src",n("d3ed")),_i:7}}),r("view")]),r("view",[r("text",{attrs:{_i:10},on:{click:e.changeRecommendation}})])]),r("scroll-view",{},e._l(e._$s(12,"f",{forItems:e.RecommendationList}),(function(t,n,i,o){return r("view",{key:e._$s(12,"f",{forIndex:i,key:t.id})},[r("view",[r("image",{attrs:{src:e._$s("14-"+o,"a-src",t.cover),_i:"14-"+o}}),r("view",[e._v(e._$s("15-"+o,"t0-0",e._s(t.name)))]),r("scoreCom",{attrs:{score:t.score,showNumber:e.showNumber,_i:"16-"+o}})],1)])})),0),r("view",[r("view",[r("image",{attrs:{src:e._$s(19,"a-src",n("0b1d")),_i:19}}),r("view")]),r("view",[r("text")])]),r("view",[r("video",{attrs:{_i:24}}),r("video",{attrs:{_i:25}})]),r("view",[r("view",[r("image",{attrs:{src:e._$s(28,"a-src",n("4764")),_i:28}}),r("view")]),r("view",[r("text")])]),r("view",e._l(e._$s(33,"f",{forItems:e.FactoryProductList}),(function(t,i,o,c){return r("view",{key:e._$s(33,"f",{forIndex:o,key:t.id})},[r("view",[r("image",{attrs:{src:e._$s("35-"+c,"a-src",t.cover),_i:"35-"+c}})]),r("view",[r("view",[e._v(e._$s("37-"+c,"t0-0",e._s(t.name)))]),r("view",[e._v(e._$s("38-"+c,"t0-0",e._s(t.desc)))]),r("view",[r("scoreCom",{attrs:{score:t.score,showNumber:e.showNumber,_i:"40-"+c}})],1),r("view",[r("view",[r("text",[e._v(e._$s("43-"+c,"t0-0",e._s(t.price)))])]),r("view",[r("view",{attrs:{animation:e._$s("45-"+c,"a-animation",e.animationDataArr[i]),_i:"45-"+c}}),r("image",{attrs:{"data-gIndex":e._$s("46-"+c,"a-data-gIndex",i),src:e._$s("46-"+c,"a-src",n("30f3")),_i:"46-"+c},on:{click:e.praiseme}}),r("image",{attrs:{src:e._$s("47-"+c,"a-src",n("9c99")),_i:"47-"+c}})])])])])})),0)])},o=[]},a51f:function(e,t,n){"use strict";n.r(t);var r=n("1c7d");for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);var o,c,a,s,u=n("f0c5"),f=Object(u["a"])(r["default"],o,c,!1,null,null,null,!1,a,s);t["default"]=f.exports},a73f:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={onLaunch:function(){e("warn","\u5f53\u524d\u7ec4\u4ef6\u4ec5\u652f\u6301 uni_modules \u76ee\u5f55\u7ed3\u6784 \uff0c\u8bf7\u5347\u7ea7 HBuilderX \u5230 3.1.0 \u7248\u672c\u4ee5\u4e0a\uff01"," at App.vue:4"),e("log","App Launch"," at App.vue:5")},onShow:function(){e("log","App Show"," at App.vue:8")},onHide:function(){e("log","App Hide"," at App.vue:11")}};t.default=n}).call(this,n("0de9")["default"])},b0c7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("3f58")),i=o(n("7276"));function o(e){return e&&e.__esModule?e:{default:e}}var c={components:{scoreCom:i.default},data:function(){return{IsShowSearchRecommend:!1,showNumber:1,RecommendationList:[],FactoryProductList:[],keyWord:"",currentPage:1,showEmpty:!1}},onShow:function(e){var t;(this.IsShowSearchRecommend=!0,this.showEmpty=!1,this.IsShowSearchRecommend)&&(this.changeRecommendation(),null===(t=this.$refs.searchTxt)||void 0===t||t.$refs.input.focus())},onLoad:function(){},methods:{changeRecommendation:function(){var e=this;new Promise((function(t,n){setTimeout((function(){for(var t=[],n=0;n<1e4;n++){var i=Math.floor(Math.random()*r.default.RecommendationArray.length);if(t.indexOf(i)<0&&t.push(i),t.length>=5)break}e.RecommendationList=[],t.forEach((function(t){e.RecommendationList.push(r.default.RecommendationArray[t])}))}),500)}))},GetFactoryProductData_Mock:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t,n){setTimeout((function(){var n=r.default.RecommendationArray.filter((function(t){return"Factory"==t.type&&t.id>10*e&&t.id<=10*e+10}));t(n)}),500)}))},clickSearchCategory:function(){var e=this;uni.showLoading({title:"loading..."}),uni.showNavigationBarLoading(),this.IsShowSearchRecommend=!1,this.GetFactoryProductData_Mock().then((function(t){e.FactoryProductList=t,uni.hideNavigationBarLoading(),uni.hideLoading()}))},searchBtn:function(e){var t=this,n=e.detail.value;this.keyWord=n;var i=0;this.FactoryProductList=[],new Promise((function(e,o){setTimeout((function(){var o=r.default.RecommendationArray.filter((function(e){return e.name.indexOf(n)>0&&e.id>10*i&&e.id<=10*i+10}));o.length>0?(t.IsShowSearchRecommend=!1,t.FactoryProductList=o):(t.IsShowSearchRecommend=!0,t.showEmpty=!0),e(o)}),500)}))}}};t.default=c},b7d7:function(e,t){e.exports="/static/images/searchIcon.png"},cdb8:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r}));var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("view",[e._l(e._$s(1,"f",{forItems:e.yellowScore}),(function(t,i,o,c){return r("image",{key:e._$s(1,"f",{forIndex:o,key:i}),attrs:{src:e._$s("1-"+c,"a-src",n("97a1")),_i:"1-"+c}})})),e._l(e._$s(2,"f",{forItems:e.greyScore}),(function(t,i,o,c){return r("image",{key:e._$s(2,"f",{forIndex:o,key:"2-"+c}),attrs:{src:e._$s("2-"+c,"a-src",n("2c62")),_i:"2-"+c}})})),e._$s(3,"i",1==e.showNumber)?r("view",[e._v(e._$s(3,"t0-0",e._s(e.score)))]):e._e()],2)},o=[]},d3ed:function(e,t){e.exports="/static/images/fire.png"},d774:function(e,t,n){"use strict";n.r(t);var r=n("b0c7"),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=i.a},ea26:function(e,t,n){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){throw n}))}))}),uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("1718").default)})),__definePage("pages/Search/Search",(function(){return Vue.extend(n("43bd").default)})),__definePage("pages/Profile/Profile",(function(){return Vue.extend(n("1c40").default)}))},f028:function(e,t,n){"use strict";n.r(t);var r=n("1e99"),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=i.a},f0c5:function(e,t,n){"use strict";function r(e,t,n,r,i,o,c,a,s,u){var f,d="function"===typeof e?e.options:e;if(s){d.components||(d.components={});var l=Object.prototype.hasOwnProperty;for(var p in s)l.call(s,p)&&!l.call(d.components,p)&&(d.components[p]=s[p])}if(u&&((u.beforeCreate||(u.beforeCreate=[])).unshift((function(){this[u.__module]=this})),(d.mixins||(d.mixins=[])).push(u)),t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),r&&(d.functional=!0),o&&(d._scopeId="data-v-"+o),c?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(c)},d._ssrRegister=f):i&&(f=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),f)if(d.functional){d._injectStyles=f;var m=d.render;d.render=function(e,t){return f.call(t),m(e,t)}}else{var v=d.beforeCreate;d.beforeCreate=v?[].concat(v,f):[f]}return{exports:e,options:d}}n.d(t,"a",(function(){return r}))},fa29:function(e,t,n){"use strict";n.r(t);var r=n("6cbc"),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=i.a}},[["9742","app-config"]]]);