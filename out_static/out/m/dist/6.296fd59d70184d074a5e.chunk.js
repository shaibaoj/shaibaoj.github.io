webpackJsonp([6],{243:function(t,e,n){"use strict";function r(t){c||n(465)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(350),i=n.n(o);for(var a in o)["default","default"].indexOf(a)<0&&function(t){n.d(e,t,function(){return o[t]})}(a);var s=n(414),u=n.n(s),c=!1,l=n(93),f=r,d=l(i.a,u.a,!1,f,"data-v-bfa1a9a4",null);d.options.__file="src/views/mall.vue",e.default=d.exports},270:function(t,e,n){var r=n(108)("wks"),o=n(109),i=n(24).Symbol,a="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))}).store=r},271:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(272),i=(r(o),n(277)),a=r(i),s=n(41),u=r(s),c=n(42),l=(r(c),n(39)),f=r(l),d=n(92),p=(r(d),n(276)),v=(r(p),n(26)),m=r(v),y=window.location.hostname,h={};h.post=function(t,e,r,o,i,s){var c=a.default.apiUrl;e=e||{};var l=(new Date).getTime();if(e.time=l,e.url_sign="youdanhuiapp",e.hpt_host=y,e.hpt_from="web",e.platform="web",cms_app_id&&""!=cms_app_id&&(e.app_id=cms_app_id),r){var d=window.localStorage.getItem("member_token");d?e.hpt_token=d:(d=m.default.getCookie("member_token"))&&(e.hpt_token=d)}var p=window.localStorage.getItem("fromInviteCode");p?e.hpt_invite_code=p:(p=m.default.getCookie("fromInviteCode"))&&(e.hpt_invite_code=p);var v={"Content-Type":"application/x-www-form-urlencoded"};e=n(278).stringify(e),(0,u.default)({method:"post",url:""+c+t,data:e,headers:v,timeout:6e4}).then(function(t){(0,f.default)(o)&&(t.data&&!t.data.info||0!==t.data.info.status?100==t.data.info.status?s.replace({path:"/login"}):(0,f.default)(i)&&i(t.data.info.status_err):o(t.data.data))})},e.default=h},272:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default="production"},273:function(t,e,n){"use strict";var r=String.prototype.replace,o=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return r.call(t,o,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},274:function(t,e,n){"use strict";var r=Object.prototype.hasOwnProperty,o=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}();e.arrayToObject=function(t,e){for(var n=e&&e.plainObjects?Object.create(null):{},r=0;r<t.length;++r)void 0!==t[r]&&(n[r]=t[r]);return n},e.merge=function(t,n,o){if(!n)return t;if("object"!=typeof n){if(Array.isArray(t))t.push(n);else{if("object"!=typeof t)return[t,n];(o.plainObjects||o.allowPrototypes||!r.call(Object.prototype,n))&&(t[n]=!0)}return t}if("object"!=typeof t)return[t].concat(n);var i=t;return Array.isArray(t)&&!Array.isArray(n)&&(i=e.arrayToObject(t,o)),Array.isArray(t)&&Array.isArray(n)?(n.forEach(function(n,i){r.call(t,i)?t[i]&&"object"==typeof t[i]?t[i]=e.merge(t[i],n,o):t.push(n):t[i]=n}),t):Object.keys(n).reduce(function(t,r){var i=n[r];return Object.prototype.hasOwnProperty.call(t,r)?t[r]=e.merge(t[r],i,o):t[r]=i,t},i)},e.decode=function(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(e){return t}},e.encode=function(t){if(0===t.length)return t;for(var e="string"==typeof t?t:String(t),n="",r=0;r<e.length;++r){var i=e.charCodeAt(r);45===i||46===i||95===i||126===i||i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122?n+=e.charAt(r):i<128?n+=o[i]:i<2048?n+=o[192|i>>6]+o[128|63&i]:i<55296||i>=57344?n+=o[224|i>>12]+o[128|i>>6&63]+o[128|63&i]:(r+=1,i=65536+((1023&i)<<10|1023&e.charCodeAt(r)),n+=o[240|i>>18]+o[128|i>>12&63]+o[128|i>>6&63]+o[128|63&i])}return n},e.compact=function(t,n){if("object"!=typeof t||null===t)return t;var r=n||[],o=r.indexOf(t);if(-1!==o)return r[o];if(r.push(t),Array.isArray(t)){for(var i=[],a=0;a<t.length;++a)t[a]&&"object"==typeof t[a]?i.push(e.compact(t[a],r)):void 0!==t[a]&&i.push(t[a]);return i}return Object.keys(t).forEach(function(n){t[n]=e.compact(t[n],r)}),t},e.isRegExp=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},e.isBuffer=function(t){return null!==t&&void 0!==t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))}},275:function(t,e){t.exports={}},276:function(t,e){function n(t){return void 0===t}t.exports=n},277:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(272),o=function(t){return t&&t.__esModule?t:{default:t}}(r),i={env:o.default,filePath:"https://file.youdanhui.com/file/",apiUrl:"https://s.youdanhui.com",version:40,liveVersion:1};"development"===i.env&&(i.filePath="http://127.0.0.1:9800/overview/",i.apiUrl="//test.s.youdanhui.com"),e.default=i},278:function(t,e,n){"use strict";var r=n(280),o=n(279),i=n(273);t.exports={formats:i,parse:o,stringify:r}},279:function(t,e,n){"use strict";var r=n(274),o=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:r.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(t,e){for(var n={},r=t.split(e.delimiter,e.parameterLimit===1/0?void 0:e.parameterLimit),i=0;i<r.length;++i){var a,s,u=r[i],c=-1===u.indexOf("]=")?u.indexOf("="):u.indexOf("]=")+1;-1===c?(a=e.decoder(u),s=e.strictNullHandling?null:""):(a=e.decoder(u.slice(0,c)),s=e.decoder(u.slice(c+1))),o.call(n,a)?n[a]=[].concat(n[a]).concat(s):n[a]=s}return n},s=function(t,e,n){if(!t.length)return e;var r,o=t.shift();if("[]"===o)r=[],r=r.concat(s(t,e,n));else{r=n.plainObjects?Object.create(null):{};var i="["===o.charAt(0)&&"]"===o.charAt(o.length-1)?o.slice(1,-1):o,a=parseInt(i,10);!isNaN(a)&&o!==i&&String(a)===i&&a>=0&&n.parseArrays&&a<=n.arrayLimit?(r=[],r[a]=s(t,e,n)):r[i]=s(t,e,n)}return r},u=function(t,e,n){if(t){var r=n.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,i=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,u=i.exec(r),c=u?r.slice(0,u.index):r,l=[];if(c){if(!n.plainObjects&&o.call(Object.prototype,c)&&!n.allowPrototypes)return;l.push(c)}for(var f=0;null!==(u=a.exec(r))&&f<n.depth;){if(f+=1,!n.plainObjects&&o.call(Object.prototype,u[1].slice(1,-1))&&!n.allowPrototypes)return;l.push(u[1])}return u&&l.push("["+r.slice(u.index)+"]"),s(l,e,n)}};t.exports=function(t,e){var n=e||{};if(null!==n.decoder&&void 0!==n.decoder&&"function"!=typeof n.decoder)throw new TypeError("Decoder has to be a function.");if(n.delimiter="string"==typeof n.delimiter||r.isRegExp(n.delimiter)?n.delimiter:i.delimiter,n.depth="number"==typeof n.depth?n.depth:i.depth,n.arrayLimit="number"==typeof n.arrayLimit?n.arrayLimit:i.arrayLimit,n.parseArrays=!1!==n.parseArrays,n.decoder="function"==typeof n.decoder?n.decoder:i.decoder,n.allowDots="boolean"==typeof n.allowDots?n.allowDots:i.allowDots,n.plainObjects="boolean"==typeof n.plainObjects?n.plainObjects:i.plainObjects,n.allowPrototypes="boolean"==typeof n.allowPrototypes?n.allowPrototypes:i.allowPrototypes,n.parameterLimit="number"==typeof n.parameterLimit?n.parameterLimit:i.parameterLimit,n.strictNullHandling="boolean"==typeof n.strictNullHandling?n.strictNullHandling:i.strictNullHandling,""===t||null===t||void 0===t)return n.plainObjects?Object.create(null):{};for(var o="string"==typeof t?a(t,n):t,s=n.plainObjects?Object.create(null):{},c=Object.keys(o),l=0;l<c.length;++l){var f=c[l],d=u(f,o[f],n);s=r.merge(s,d,n)}return r.compact(s)}},280:function(t,e,n){"use strict";var r=n(274),o=n(273),i={brackets:function(t){return t+"[]"},indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},a=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,serializeDate:function(t){return a.call(t)},skipNulls:!1,strictNullHandling:!1},u=function t(e,n,o,i,a,s,u,c,l,f,d,p){var v=e;if("function"==typeof u)v=u(n,v);else if(v instanceof Date)v=f(v);else if(null===v){if(i)return s&&!p?s(n):n;v=""}if("string"==typeof v||"number"==typeof v||"boolean"==typeof v||r.isBuffer(v)){if(s){return[d(p?n:s(n))+"="+d(s(v))]}return[d(n)+"="+d(String(v))]}var m=[];if(void 0===v)return m;var y;if(Array.isArray(u))y=u;else{var h=Object.keys(v);y=c?h.sort(c):h}for(var _=0;_<y.length;++_){var g=y[_];a&&null===v[g]||(m=Array.isArray(v)?m.concat(t(v[g],o(n,g),o,i,a,s,u,c,l,f,d,p)):m.concat(t(v[g],n+(l?"."+g:"["+g+"]"),o,i,a,s,u,c,l,f,d,p)))}return m};t.exports=function(t,e){var n=t,r=e||{};if(null!==r.encoder&&void 0!==r.encoder&&"function"!=typeof r.encoder)throw new TypeError("Encoder has to be a function.");var a=void 0===r.delimiter?s.delimiter:r.delimiter,c="boolean"==typeof r.strictNullHandling?r.strictNullHandling:s.strictNullHandling,l="boolean"==typeof r.skipNulls?r.skipNulls:s.skipNulls,f="boolean"==typeof r.encode?r.encode:s.encode,d="function"==typeof r.encoder?r.encoder:s.encoder,p="function"==typeof r.sort?r.sort:null,v=void 0!==r.allowDots&&r.allowDots,m="function"==typeof r.serializeDate?r.serializeDate:s.serializeDate,y="boolean"==typeof r.encodeValuesOnly?r.encodeValuesOnly:s.encodeValuesOnly;if(void 0===r.format)r.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,r.format))throw new TypeError("Unknown format option provided.");var h,_,g=o.formatters[r.format];"function"==typeof r.filter?(_=r.filter,n=_("",n)):Array.isArray(r.filter)&&(_=r.filter,h=_);var b=[];if("object"!=typeof n||null===n)return"";var O;O=r.arrayFormat in i?r.arrayFormat:"indices"in r?r.indices?"indices":"repeat":"indices";var j=i[O];h||(h=Object.keys(n)),p&&h.sort(p);for(var w=0;w<h.length;++w){var x=h[w];l&&null===n[x]||(b=b.concat(u(n[x],x,j,c,l,f?d:null,_,p,v,m,g,y)))}return b.join(a)}},281:function(t,e,n){var r=n(97).f,o=n(40),i=n(270)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},283:function(t,e,n){"use strict";var r=n(104),o=n(96),i=n(305),a=n(94),s=n(275),u=n(299),c=n(281),l=n(303),f=n(270)("iterator"),d=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,v,m,y,h){u(n,e,v);var _,g,b,O=function(t){if(!d&&t in C)return C[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},j=e+" Iterator",w="values"==m,x=!1,C=t.prototype,M=C[f]||C["@@iterator"]||m&&C[m],S=M||O(m),k=m?w?O("entries"):S:void 0,A="Array"==e?C.entries||M:M;if(A&&(b=l(A.call(new t)))!==Object.prototype&&b.next&&(c(b,j,!0),r||"function"==typeof b[f]||a(b,f,p)),w&&M&&"values"!==M.name&&(x=!0,S=function(){return M.call(this)}),r&&!h||!d&&!x&&C[f]||a(C,f,S),s[e]=S,s[j]=p,m)if(_={values:w?S:O("values"),keys:y?S:O("keys"),entries:k},h)for(g in _)g in C||i(C,g,_[g]);else o(o.P+o.F*(d||x),e,_);return _}},284:function(t,e,n){var r=n(102),o=n(270)("toStringTag"),i="Arguments"==r(function(){return arguments}()),a=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=a(e=Object(t),o))?n:i?r(e):"Object"==(s=r(e))&&"function"==typeof e.callee?"Arguments":s}},285:function(t,e,n){var r=n(24).document;t.exports=r&&r.documentElement},286:function(t,e,n){var r=n(284),o=n(270)("iterator"),i=n(275);t.exports=n(23).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},287:function(t,e,n){"use strict";var r=n(306)(!0);n(283)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},288:function(t,e,n){n(308);for(var r=n(24),o=n(94),i=n(275),a=n(270)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<s.length;u++){var c=s[u],l=r[c],f=l&&l.prototype;f&&!f[a]&&o(f,a,c),i[c]=i.Array}},290:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(291),i=r(o),a=n(294),s=r(a),u=n(105),c=r(u),l=n(293),f=r(l),d=n(39),p=r(d),v=n(92),m=r(v),y=n(276),h=r(y),_=n(46),g=r(_),b={isFunction:function(t){return(0,p.default)(t)},isObject:function(t){return(0,g.default)(t)},isEmpty:function(t){return(0,m.default)(t)},isUndefined:function(t){return(0,h.default)(t)},isEmptyObject:function(t){return 0===(0,f.default)(t).length&&t.constructor===Object},mergeDeep:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];if(!n.length)return t;var o=n.shift();if((0,g.default)(t)&&(0,g.default)(o))for(var i in o)(0,g.default)(o[i])?(t[i]||(0,c.default)(t,(0,s.default)({},i,{})),b.mergeDeep(t[i],o[i])):(0,c.default)(t,(0,s.default)({},i,o[i]));return b.mergeDeep.apply(b,[t].concat(n))},fetch_domain:function(t,e){if(!(0,m.default)(t)&&!(0,m.default)(e)){var n=!0,r=!1,o=void 0;try{for(var a,s=(0,i.default)(t);!(n=(a=s.next()).done);n=!0){var u=a.value,c=!0,l=!1,f=void 0;try{for(var d,p=(0,i.default)(u.domain);!(c=(d=p.next()).done);c=!0){if(e==d.value)return u}}catch(t){l=!0,f=t}finally{try{!c&&p.return&&p.return()}finally{if(l)throw f}}}}catch(t){r=!0,o=t}finally{try{!n&&s.return&&s.return()}finally{if(r)throw o}}}return null},dateDiff:function(t,e){if(t&&e&&""!=t&&""!=e&&null!=t&&null!=e){return b.getDataLarge(t,e)<0}return(!t||""==t||null==t)&&!(!e||""==e||""==e)},getDataLarge:function(t,e){var n=t.replace(/-/g,"/"),r=e.replace(/-/g,"/"),o=Date.parse(n);return(Date.parse(r)-o)/3600/1e3},formatDate:function(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var r in n)if(new RegExp("("+r+")").test(e)){var o=n[r]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?o:this.padLeftZero(o))}return e},padLeftZero:function(t){return("00"+t).substr(t.length)},stringToDate:function(t){var e=t.split("-");return new Date(e[0],e[1]-1,e[2],0,0,0)}};e.default=b},291:function(t,e,n){t.exports={default:n(295),__esModule:!0}},292:function(t,e,n){t.exports={default:n(296),__esModule:!0}},293:function(t,e,n){t.exports={default:n(297),__esModule:!0}},294:function(t,e,n){"use strict";e.__esModule=!0;var r=n(292),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t,e,n){return e in t?(0,o.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},295:function(t,e,n){n(288),n(287),t.exports=n(307)},296:function(t,e,n){n(309);var r=n(23).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},297:function(t,e,n){n(310),t.exports=n(23).Object.keys},298:function(t,e){t.exports=function(){}},299:function(t,e,n){"use strict";var r=n(301),o=n(107),i=n(281),a={};n(94)(a,n(270)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(a,{next:o(1,n)}),i(t,e+" Iterator")}},300:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},301:function(t,e,n){var r=n(95),o=n(302),i=n(106),a=n(99)("IE_PROTO"),s=function(){},u=function(){var t,e=n(103)("iframe"),r=i.length;for(e.style.display="none",n(285).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;r--;)delete u.prototype[i[r]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[a]=t):n=u(),void 0===e?n:o(n,e)}},302:function(t,e,n){var r=n(97),o=n(95),i=n(98);t.exports=n(25)?Object.defineProperties:function(t,e){o(t);for(var n,a=i(e),s=a.length,u=0;s>u;)r.f(t,n=a[u++],e[n]);return t}},303:function(t,e,n){var r=n(40),o=n(100),i=n(99)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},304:function(t,e,n){var r=n(96),o=n(23),i=n(27);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",a)}},305:function(t,e,n){t.exports=n(94)},306:function(t,e,n){var r=n(44),o=n(43);t.exports=function(t){return function(e,n){var i,a,s=String(o(e)),u=r(n),c=s.length;return u<0||u>=c?t?"":void 0:(i=s.charCodeAt(u),i<55296||i>56319||u+1===c||(a=s.charCodeAt(u+1))<56320||a>57343?t?s.charAt(u):i:t?s.slice(u,u+2):a-56320+(i-55296<<10)+65536)}}},307:function(t,e,n){var r=n(95),o=n(286);t.exports=n(23).getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},308:function(t,e,n){"use strict";var r=n(298),o=n(300),i=n(275),a=n(45);t.exports=n(283)(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},309:function(t,e,n){var r=n(96);r(r.S+r.F*!n(25),"Object",{defineProperty:n(97).f})},310:function(t,e,n){var r=n(100),o=n(98);n(304)("keys",function(){return function(t){return o(r(t))}})},313:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(101),i=r(o),a=n(271),s=(r(a),n(15));e.default={components:{},props:{activeKey:String},data:function(){return{currentActiveKey:this.activeKey,menus:[{name:"首页",iconClass:"icon-shouye",url:"/"},{name:"9块9",iconClass:"icon-9kuai9",url:"/jiu"},{name:"分类",iconClass:"icon-fenlei",url:"/category"},{name:"拼多多",iconClass:"icon-gengduopintuan",url:"/pinduoduo"},{name:"我的",iconClass:"icon-gerenzhongxin",url:"/member"}]}},watch:{activeKey:function(t){},currentActiveKey:function(t){}},methods:(0,i.default)({},(0,s.mapActions)(["getUser","getUserData","saveUser","saveUserData","removeAll","getDomain"]),{handleSelect:function(t){var e=this;"logout"===t?(this.logout(),this.$router.push("/login")):(this.$nextTick(function(){e.$router.push(t)}),this.currentActiveKey=t)},logout:function(){window.localStorage.removeItem("member_token")}}),created:function(){},computed:(0,i.default)({},(0,s.mapGetters)({member:"showMember",showMemberData:"showMemberData",showMid:"showMid"}))}},314:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(101),i=r(o),a=n(92),s=r(a),u=n(271),c=r(u),l=n(320),f=r(l),d=n(15);e.default={components:{"ydh-footer":f.default},props:{},data:function(){return{activeKey:""}},created:function(){this.init()},mounted:function(){},methods:(0,i.default)({},(0,d.mapActions)(["getMember","getMemberData","saveMember","saveMemberData"]),{init:function(){this.activeKey=this.$route.path},query_user:function(){var t=this;(0,s.default)(this.member)&&c.default.post("/user/home/user",{},!0,function(e){t.member&&!(0,s.default)(e.member.id)&&t.saveMember(e.member)},function(e){t.$toast(e)},this.$router)},handleSelect:function(t){var e=this;this.$nextTick(function(){e.$router.push(t)})}}),computed:(0,i.default)({},(0,d.mapGetters)({member:"showMember",showMemberData:"showMemberData",showUid:"showUid"}))}},315:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(92),i=(r(o),n(271));r(i);e.default={components:{},props:{goods:{default:Object},columns:{default:0},index:{default:0},rank:{default:0}},data:function(){return{}},methods:{init:function(){},handleSelect:function(t){var e=this;this.$nextTick(function(){e.$router.push(t)})}},created:function(){this.init()},mounted:function(){},computed:{title:function(){return this.goods.short_name?this.goods.short_name:this.goods.title}}}},316:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},t._l(t.menus,function(e,r){return n("div",{staticClass:"item",class:[e.url==t.activeKey?"selected":""],on:{click:function(n){t.handleSelect(e.url)}}},[n("i",{staticClass:"cmsfont",class:[e.iconClass]}),t._v(" "),n("span",[t._v(t._s(e.name))])])}))},o=[];r._withStripped=!0;var i={render:r,staticRenderFns:o};e.default=i},317:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"slot"},[t._t("default")],2),t._v(" "),n("ydh-footer",{attrs:{"active-key":t.activeKey}})],1)},o=[];r._withStripped=!0;var i={render:r,staticRenderFns:o};e.default=i},318:function(t,e){},319:function(t,e){},320:function(t,e,n){"use strict";function r(t){c||n(318)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(313),i=n.n(o);for(var a in o)["default","default"].indexOf(a)<0&&function(t){n.d(e,t,function(){return o[t]})}(a);var s=n(316),u=n.n(s),c=!1,l=n(93),f=r,d=l(i.a,u.a,!1,f,"data-v-6c4d8baa",null);d.options.__file="src/components/footer.vue",e.default=d.exports},321:function(t,e,n){"use strict";function r(t){c||n(319)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(314),i=n.n(o);for(var a in o)["default","default"].indexOf(a)<0&&function(t){n.d(e,t,function(){return o[t]})}(a);var s=n(317),u=n.n(s),c=!1,l=n(93),f=r,d=l(i.a,u.a,!1,f,"data-v-6f6af01c",null);d.options.__file="src/components/root.vue",e.default=d.exports},323:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goods",on:{click:function(e){t.handleSelect("/goods/"+t.goods.num_iid)}}},[n("div",{staticClass:"goods-bg",style:"background-image:url("+t.goods.pic_url+");"},[t.rank>0?n("span",{staticClass:"rank today"},[t._v("第"+t._s(t.rank)+"名")]):t._e()]),t._v(" "),n("div",{staticClass:"goods-title"},[n("span",[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticClass:"goods-item"},[t.goods.coupon_money>0?n("div",{staticClass:"goods-price"},[n("span",{staticClass:"tip"},[t._v("原价")]),t._v(" "),n("span",{staticClass:"price"},[t._v("￥"+t._s(t.goods.price))])]):n("div",{staticClass:"goods-price"},[n("span",{staticClass:"tip"},[t._v("原价")]),t._v(" "),n("span",{staticClass:"price"},[t._v("￥"+t._s(t.goods.ori_price))])]),t._v(" "),t.goods.volume>0?n("span",{staticClass:"goods-volume"},[t._v("月销 "+t._s(t.goods.volume))]):t._e()]),t._v(" "),n("div",{staticClass:"goods-item"},[n("div",{staticClass:"coupon-price"},[n("span",{staticClass:"coupon-price-txt"},[t._v("￥")]),t._v(" "),n("span",{staticClass:"coupon-price-number"},[t._v(t._s(t.goods.buy_price))])]),t._v(" "),t.goods.coupon_money>0?n("span",{staticClass:"coupon-text"},[t._v(t._s(t.goods.coupon_money)+"元券")]):t._e()])])},o=[];r._withStripped=!0;var i={render:r,staticRenderFns:o};e.default=i},324:function(t,e){},325:function(t,e,n){"use strict";function r(t){c||n(324)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(315),i=n.n(o);for(var a in o)["default","default"].indexOf(a)<0&&function(t){n.d(e,t,function(){return o[t]})}(a);var s=n(323),u=n.n(s),c=!1,l=n(93),f=r,d=l(i.a,u.a,!1,f,"data-v-dec1b9e0",null);d.options.__file="src/components/model/goods.vue",e.default=d.exports},350:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(321),i=r(o),a=n(92),s=(r(a),n(271)),u=r(s),c=n(290),l=(r(c),n(325));r(l);e.default={components:{iRoot:i.default},data:function(){return{condition:{},data:{index:0,category:[],types:[],items:[]}}},mounted:function(){this.init()},beforeDestroy:function(){},created:function(){},methods:{init:function(){this.query(),this.query_list()},query:function(){var t=this;u.default.post("/cms/mall/type_list",{},!0,function(e){e.items&&e.items.length>0&&(t.data.types=e.items)},function(t){},this.$router)},query_list:function(){var t=this;u.default.post("/cms/mall/list",{type_name:this.data.category.name},!0,function(e){e.items&&e.items.length>0&&(t.data.items=e.items)},function(t){},this.$router)},changeType:function(t,e){this.data.index=t,this.data.category=e,this.query_list()}},computed:{}}},414:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i-root",[n("div",{staticClass:"mall"},[n("div",{staticClass:"type-list"},t._l(t.data.types,function(e,r){return n("div",{staticClass:"type-item",class:[t.data.index==r?"selected":""],on:{click:function(n){t.changeType(r,e)}}},[n("span",[n("a",[t._v(t._s(e.name))])])])})),t._v(" "),n("div",{staticClass:"list"},t._l(t.data.items,function(e,r){return n("a",{attrs:{target:"_blank",href:e.click_url}},[n("div",{staticClass:"malls-item"},[n("img",{staticClass:"mall-logo",attrs:{src:e.pic_url}}),t._v(" "),n("span",{staticClass:"mall-name"},[t._v(t._s(e.sitename))]),t._v(" "),n("span",{staticClass:"mall-rate"},[n("em",[t._v(t._s(e.commission_rate))])])])])}))])])},o=[];r._withStripped=!0;var i={render:r,staticRenderFns:o};e.default=i},465:function(t,e){}});