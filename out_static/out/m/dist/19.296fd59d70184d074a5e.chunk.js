webpackJsonp([19],{261:function(t,e,r){"use strict";function n(t){l||r(447)}Object.defineProperty(e,"__esModule",{value:!0});var i=r(367),a=r.n(i);for(var o in i)["default","default"].indexOf(o)<0&&function(t){r.d(e,t,function(){return i[t]})}(o);var s=r(396),c=r.n(s),l=!1,u=r(93),f=n,d=u(a.a,c.a,!1,f,"data-v-3f5c01fa",null);d.options.__file="src/views/member/top.vue",e.default=d.exports},271:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(272),a=(n(i),r(277)),o=n(a),s=r(41),c=n(s),l=r(42),u=(n(l),r(39)),f=n(u),d=r(92),p=(n(d),r(276)),m=(n(p),r(26)),v=n(m),y=window.location.hostname,h={};h.post=function(t,e,n,i,a,s){var l=o.default.apiUrl;e=e||{};var u=(new Date).getTime();if(e.time=u,e.url_sign="youdanhuiapp",e.hpt_host=y,e.hpt_from="web",e.platform="web",cms_app_id&&""!=cms_app_id&&(e.app_id=cms_app_id),n){var d=window.localStorage.getItem("member_token");d?e.hpt_token=d:(d=v.default.getCookie("member_token"))&&(e.hpt_token=d)}var p=window.localStorage.getItem("fromInviteCode");p?e.hpt_invite_code=p:(p=v.default.getCookie("fromInviteCode"))&&(e.hpt_invite_code=p);var m={"Content-Type":"application/x-www-form-urlencoded"};e=r(278).stringify(e),(0,c.default)({method:"post",url:""+l+t,data:e,headers:m,timeout:6e4}).then(function(t){(0,f.default)(i)&&(t.data&&!t.data.info||0!==t.data.info.status?100==t.data.info.status?s.replace({path:"/login"}):(0,f.default)(a)&&a(t.data.info.status_err):i(t.data.data))})},e.default=h},272:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default="production"},273:function(t,e,r){"use strict";var n=String.prototype.replace,i=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return n.call(t,i,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},274:function(t,e,r){"use strict";var n=Object.prototype.hasOwnProperty,i=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}();e.arrayToObject=function(t,e){for(var r=e&&e.plainObjects?Object.create(null):{},n=0;n<t.length;++n)void 0!==t[n]&&(r[n]=t[n]);return r},e.merge=function(t,r,i){if(!r)return t;if("object"!=typeof r){if(Array.isArray(t))t.push(r);else{if("object"!=typeof t)return[t,r];(i.plainObjects||i.allowPrototypes||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if("object"!=typeof t)return[t].concat(r);var a=t;return Array.isArray(t)&&!Array.isArray(r)&&(a=e.arrayToObject(t,i)),Array.isArray(t)&&Array.isArray(r)?(r.forEach(function(r,a){n.call(t,a)?t[a]&&"object"==typeof t[a]?t[a]=e.merge(t[a],r,i):t.push(r):t[a]=r}),t):Object.keys(r).reduce(function(t,n){var a=r[n];return Object.prototype.hasOwnProperty.call(t,n)?t[n]=e.merge(t[n],a,i):t[n]=a,t},a)},e.decode=function(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(e){return t}},e.encode=function(t){if(0===t.length)return t;for(var e="string"==typeof t?t:String(t),r="",n=0;n<e.length;++n){var a=e.charCodeAt(n);45===a||46===a||95===a||126===a||a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122?r+=e.charAt(n):a<128?r+=i[a]:a<2048?r+=i[192|a>>6]+i[128|63&a]:a<55296||a>=57344?r+=i[224|a>>12]+i[128|a>>6&63]+i[128|63&a]:(n+=1,a=65536+((1023&a)<<10|1023&e.charCodeAt(n)),r+=i[240|a>>18]+i[128|a>>12&63]+i[128|a>>6&63]+i[128|63&a])}return r},e.compact=function(t,r){if("object"!=typeof t||null===t)return t;var n=r||[],i=n.indexOf(t);if(-1!==i)return n[i];if(n.push(t),Array.isArray(t)){for(var a=[],o=0;o<t.length;++o)t[o]&&"object"==typeof t[o]?a.push(e.compact(t[o],n)):void 0!==t[o]&&a.push(t[o]);return a}return Object.keys(t).forEach(function(r){t[r]=e.compact(t[r],n)}),t},e.isRegExp=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},e.isBuffer=function(t){return null!==t&&void 0!==t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))}},276:function(t,e){function r(t){return void 0===t}t.exports=r},277:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(272),i=function(t){return t&&t.__esModule?t:{default:t}}(n),a={env:i.default,filePath:"https://file.youdanhui.com/file/",apiUrl:"https://s.youdanhui.com",version:40,liveVersion:1};"development"===a.env&&(a.filePath="http://127.0.0.1:9800/overview/",a.apiUrl="//test.s.youdanhui.com"),e.default=a},278:function(t,e,r){"use strict";var n=r(280),i=r(279),a=r(273);t.exports={formats:a,parse:i,stringify:n}},279:function(t,e,r){"use strict";var n=r(274),i=Object.prototype.hasOwnProperty,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:n.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},o=function(t,e){for(var r={},n=t.split(e.delimiter,e.parameterLimit===1/0?void 0:e.parameterLimit),a=0;a<n.length;++a){var o,s,c=n[a],l=-1===c.indexOf("]=")?c.indexOf("="):c.indexOf("]=")+1;-1===l?(o=e.decoder(c),s=e.strictNullHandling?null:""):(o=e.decoder(c.slice(0,l)),s=e.decoder(c.slice(l+1))),i.call(r,o)?r[o]=[].concat(r[o]).concat(s):r[o]=s}return r},s=function(t,e,r){if(!t.length)return e;var n,i=t.shift();if("[]"===i)n=[],n=n.concat(s(t,e,r));else{n=r.plainObjects?Object.create(null):{};var a="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,o=parseInt(a,10);!isNaN(o)&&i!==a&&String(o)===a&&o>=0&&r.parseArrays&&o<=r.arrayLimit?(n=[],n[o]=s(t,e,r)):n[a]=s(t,e,r)}return n},c=function(t,e,r){if(t){var n=r.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,a=/(\[[^[\]]*])/,o=/(\[[^[\]]*])/g,c=a.exec(n),l=c?n.slice(0,c.index):n,u=[];if(l){if(!r.plainObjects&&i.call(Object.prototype,l)&&!r.allowPrototypes)return;u.push(l)}for(var f=0;null!==(c=o.exec(n))&&f<r.depth;){if(f+=1,!r.plainObjects&&i.call(Object.prototype,c[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(c[1])}return c&&u.push("["+n.slice(c.index)+"]"),s(u,e,r)}};t.exports=function(t,e){var r=e||{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.delimiter="string"==typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:a.delimiter,r.depth="number"==typeof r.depth?r.depth:a.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:a.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:a.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:a.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:a.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:a.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:a.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:a.strictNullHandling,""===t||null===t||void 0===t)return r.plainObjects?Object.create(null):{};for(var i="string"==typeof t?o(t,r):t,s=r.plainObjects?Object.create(null):{},l=Object.keys(i),u=0;u<l.length;++u){var f=l[u],d=c(f,i[f],r);s=n.merge(s,d,r)}return n.compact(s)}},280:function(t,e,r){"use strict";var n=r(274),i=r(273),a={brackets:function(t){return t+"[]"},indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},o=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,serializeDate:function(t){return o.call(t)},skipNulls:!1,strictNullHandling:!1},c=function t(e,r,i,a,o,s,c,l,u,f,d,p){var m=e;if("function"==typeof c)m=c(r,m);else if(m instanceof Date)m=f(m);else if(null===m){if(a)return s&&!p?s(r):r;m=""}if("string"==typeof m||"number"==typeof m||"boolean"==typeof m||n.isBuffer(m)){if(s){return[d(p?r:s(r))+"="+d(s(m))]}return[d(r)+"="+d(String(m))]}var v=[];if(void 0===m)return v;var y;if(Array.isArray(c))y=c;else{var h=Object.keys(m);y=l?h.sort(l):h}for(var _=0;_<y.length;++_){var b=y[_];o&&null===m[b]||(v=Array.isArray(m)?v.concat(t(m[b],i(r,b),i,a,o,s,c,l,u,f,d,p)):v.concat(t(m[b],r+(u?"."+b:"["+b+"]"),i,a,o,s,c,l,u,f,d,p)))}return v};t.exports=function(t,e){var r=t,n=e||{};if(null!==n.encoder&&void 0!==n.encoder&&"function"!=typeof n.encoder)throw new TypeError("Encoder has to be a function.");var o=void 0===n.delimiter?s.delimiter:n.delimiter,l="boolean"==typeof n.strictNullHandling?n.strictNullHandling:s.strictNullHandling,u="boolean"==typeof n.skipNulls?n.skipNulls:s.skipNulls,f="boolean"==typeof n.encode?n.encode:s.encode,d="function"==typeof n.encoder?n.encoder:s.encoder,p="function"==typeof n.sort?n.sort:null,m=void 0!==n.allowDots&&n.allowDots,v="function"==typeof n.serializeDate?n.serializeDate:s.serializeDate,y="boolean"==typeof n.encodeValuesOnly?n.encodeValuesOnly:s.encodeValuesOnly;if(void 0===n.format)n.format=i.default;else if(!Object.prototype.hasOwnProperty.call(i.formatters,n.format))throw new TypeError("Unknown format option provided.");var h,_,b=i.formatters[n.format];"function"==typeof n.filter?(_=n.filter,r=_("",r)):Array.isArray(n.filter)&&(_=n.filter,h=_);var g=[];if("object"!=typeof r||null===r)return"";var w;w=n.arrayFormat in a?n.arrayFormat:"indices"in n?n.indices?"indices":"repeat":"indices";var O=a[w];h||(h=Object.keys(r)),p&&h.sort(p);for(var j=0;j<h.length;++j){var k=h[j];u&&null===r[k]||(g=g.concat(c(r[k],k,O,l,u,f?d:null,_,p,m,v,b,y)))}return g.join(o)}},282:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(271);(function(t){t&&t.__esModule})(n),r(15);e.default={components:{},props:{title:{default:""},fixed:{default:!1,type:Boolean},rText:{default:""}},data:function(){return{}},methods:{handleSelect:function(t){var e=this;this.$nextTick(function(){e.$router.push(t)})},back:function(){this.$router.go(-1)},clickRight:function(){this.$emit("rightClick",{})}},created:function(){},computed:{}}},289:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"nav",class:[t.fixed?"fixed":""]},[r("div",{staticClass:"content"},[r("i",{staticClass:"cmsfont icon-back",on:{click:t.back}}),t._v(" "),r("span",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),r("i",{on:{click:t.clickRight}},[t._v(t._s(t.rText))])])])},i=[];n._withStripped=!0;var a={render:n,staticRenderFns:i};e.default=a},311:function(t,e){},312:function(t,e,r){"use strict";function n(t){l||r(311)}Object.defineProperty(e,"__esModule",{value:!0});var i=r(282),a=r.n(i);for(var o in i)["default","default"].indexOf(o)<0&&function(t){r.d(e,t,function(){return i[t]})}(o);var s=r(289),c=r.n(s),l=!1,u=r(93),f=n,d=u(a.a,c.a,!1,f,"data-v-0276edc3",null);d.options.__file="src/components/nav.vue",e.default=d.exports},367:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(92),a=(n(i),r(271)),o=n(a),s=r(312),c=n(s);e.default={components:{"ydh-nav":c.default},props:{},data:function(){return{data:{items:[],items_weekly:[],item:[],item_weekly:[]},bangIndex:1,refresh:{loading:!1}}},created:function(){},mounted:function(){this.init()},methods:{init:function(){this.query()},query:function(){var t=this;o.default.post("/cms/top/income",{},!0,function(e){e.data&&(e.data.items&&(t.data.items=e.data.items),e.data.items_weekly&&(t.data.items_weekly=e.data.items_weekly),e.data.item&&(t.data.item=e.data.item),e.data.item_weekly&&(t.data.item_weekly=e.data.item_weekly))},function(t){},this.$router)},back:function(){this.$router.go(-1)},handleSelect:function(t){var e=this;this.$nextTick(function(){e.$router.push(t)})},onRefresh:function(){var t=this;this.init(),setTimeout(function(){t.$toast("刷新成功"),t.refresh.loading=!1},500)},show_bangdan:function(t){this.bangIndex=t}},computed:{items:function(){return 1==this.bangIndex?this.data.items:this.data.items_weekly},topItem:function(){return 1==this.bangIndex?this.data.item:this.data.item_weekly}}}},396:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.refresh.loading,callback:function(e){t.$set(t.refresh,"loading",e)},expression:"refresh.loading"}},[r("div",{staticClass:"wrapper"},[r("div",{staticClass:"nav"},[r("i",{staticClass:"cmsfont icon-back",on:{click:t.back}}),t._v(" "),r("span",{staticClass:"title"},[t._v("收入排行榜")]),t._v(" "),r("i",{staticClass:"cmsfont"})]),t._v(" "),r("div",{staticClass:"content"},[r("section",[r("div",{staticClass:"bangdan"},[r("span",{staticClass:"item today",class:[1==t.bangIndex?"sel":""],on:{click:function(e){t.show_bangdan(1)}}},[t._v("今日收入榜单")]),t._v(" "),r("span",{staticClass:"item weekly",class:[2==t.bangIndex?"sel":""],on:{click:function(e){t.show_bangdan(2)}}},[t._v("7日收入榜单")])])]),t._v(" "),r("section",[r("div",{staticClass:"top1"},[r("img",{staticClass:"img",attrs:{src:"https://shaibaoj.gitee.io/app_static/images/app/member/top/1.png"}}),t._v(" "),r("span",{staticClass:"price"},[t._v("￥"+t._s(t.topItem.money))]),t._v(" "),r("span",{staticClass:"name"},[t._v(t._s(t.topItem.name))])])]),t._v(" "),r("section",[r("div",{staticClass:"top-content"},t._l(t.items,function(e,n){return r("div",{staticClass:"top-item"},[0==n?r("img",{staticClass:"top-img",attrs:{src:"https://shaibaoj.gitee.io/app_static/images/app/member/top/2.png"}}):1==n?r("img",{staticClass:"top-img",attrs:{src:"https://shaibaoj.gitee.io/app_static/images/app/member/top/3.png"}}):r("span",{staticClass:"top-img"},[t._v(t._s(n+2))]),t._v(" "),r("div",{staticClass:"top-text"},[r("div",{staticClass:"top-text-content"},[r("span",{staticClass:"top-name"},[t._v(t._s(e.name))]),t._v(" "),r("span",{staticClass:"top-price"},[t._v("￥"+t._s(e.money))])])])])}))])])])])},i=[];n._withStripped=!0;var a={render:n,staticRenderFns:i};e.default=a},447:function(t,e){}});