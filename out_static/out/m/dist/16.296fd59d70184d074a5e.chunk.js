webpackJsonp([16],{238:function(t,e,o){"use strict";function n(t){u||o(441)}Object.defineProperty(e,"__esModule",{value:!0});var i=o(344),r=o.n(i);for(var s in i)["default","default"].indexOf(s)<0&&function(t){o.d(e,t,function(){return i[t]})}(s);var a=o(390),c=o.n(a),u=!1,l=o(93),f=n,d=l(r.a,c.a,!1,f,"data-v-2f23a2ac",null);d.options.__file="src/views/goods.vue",e.default=d.exports},270:function(t,e,o){var n=o(108)("wks"),i=o(109),r=o(24).Symbol,s="function"==typeof r;(t.exports=function(t){return n[t]||(n[t]=s&&r[t]||(s?r:i)("Symbol."+t))}).store=n},271:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(272),r=(n(i),o(277)),s=n(r),a=o(41),c=n(a),u=o(42),l=(n(u),o(39)),f=n(l),d=o(92),p=(n(d),o(276)),v=(n(p),o(26)),m=n(v),y=window.location.hostname,h={};h.post=function(t,e,n,i,r,a){var u=s.default.apiUrl;e=e||{};var l=(new Date).getTime();if(e.time=l,e.url_sign="youdanhuiapp",e.hpt_host=y,e.hpt_from="web",e.platform="web",cms_app_id&&""!=cms_app_id&&(e.app_id=cms_app_id),n){var d=window.localStorage.getItem("member_token");d?e.hpt_token=d:(d=m.default.getCookie("member_token"))&&(e.hpt_token=d)}var p=window.localStorage.getItem("fromInviteCode");p?e.hpt_invite_code=p:(p=m.default.getCookie("fromInviteCode"))&&(e.hpt_invite_code=p);var v={"Content-Type":"application/x-www-form-urlencoded"};e=o(278).stringify(e),(0,c.default)({method:"post",url:""+u+t,data:e,headers:v,timeout:6e4}).then(function(t){(0,f.default)(i)&&(t.data&&!t.data.info||0!==t.data.info.status?100==t.data.info.status?a.replace({path:"/login"}):(0,f.default)(r)&&r(t.data.info.status_err):i(t.data.data))})},e.default=h},272:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default="production"},273:function(t,e,o){"use strict";var n=String.prototype.replace,i=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return n.call(t,i,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},274:function(t,e,o){"use strict";var n=Object.prototype.hasOwnProperty,i=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}();e.arrayToObject=function(t,e){for(var o=e&&e.plainObjects?Object.create(null):{},n=0;n<t.length;++n)void 0!==t[n]&&(o[n]=t[n]);return o},e.merge=function(t,o,i){if(!o)return t;if("object"!=typeof o){if(Array.isArray(t))t.push(o);else{if("object"!=typeof t)return[t,o];(i.plainObjects||i.allowPrototypes||!n.call(Object.prototype,o))&&(t[o]=!0)}return t}if("object"!=typeof t)return[t].concat(o);var r=t;return Array.isArray(t)&&!Array.isArray(o)&&(r=e.arrayToObject(t,i)),Array.isArray(t)&&Array.isArray(o)?(o.forEach(function(o,r){n.call(t,r)?t[r]&&"object"==typeof t[r]?t[r]=e.merge(t[r],o,i):t.push(o):t[r]=o}),t):Object.keys(o).reduce(function(t,n){var r=o[n];return Object.prototype.hasOwnProperty.call(t,n)?t[n]=e.merge(t[n],r,i):t[n]=r,t},r)},e.decode=function(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(e){return t}},e.encode=function(t){if(0===t.length)return t;for(var e="string"==typeof t?t:String(t),o="",n=0;n<e.length;++n){var r=e.charCodeAt(n);45===r||46===r||95===r||126===r||r>=48&&r<=57||r>=65&&r<=90||r>=97&&r<=122?o+=e.charAt(n):r<128?o+=i[r]:r<2048?o+=i[192|r>>6]+i[128|63&r]:r<55296||r>=57344?o+=i[224|r>>12]+i[128|r>>6&63]+i[128|63&r]:(n+=1,r=65536+((1023&r)<<10|1023&e.charCodeAt(n)),o+=i[240|r>>18]+i[128|r>>12&63]+i[128|r>>6&63]+i[128|63&r])}return o},e.compact=function(t,o){if("object"!=typeof t||null===t)return t;var n=o||[],i=n.indexOf(t);if(-1!==i)return n[i];if(n.push(t),Array.isArray(t)){for(var r=[],s=0;s<t.length;++s)t[s]&&"object"==typeof t[s]?r.push(e.compact(t[s],n)):void 0!==t[s]&&r.push(t[s]);return r}return Object.keys(t).forEach(function(o){t[o]=e.compact(t[o],n)}),t},e.isRegExp=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},e.isBuffer=function(t){return null!==t&&void 0!==t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))}},275:function(t,e){t.exports={}},276:function(t,e){function o(t){return void 0===t}t.exports=o},277:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(272),i=function(t){return t&&t.__esModule?t:{default:t}}(n),r={env:i.default,filePath:"https://file.youdanhui.com/file/",apiUrl:"https://s.youdanhui.com",version:40,liveVersion:1};"development"===r.env&&(r.filePath="http://127.0.0.1:9800/overview/",r.apiUrl="//test.s.youdanhui.com"),e.default=r},278:function(t,e,o){"use strict";var n=o(280),i=o(279),r=o(273);t.exports={formats:r,parse:i,stringify:n}},279:function(t,e,o){"use strict";var n=o(274),i=Object.prototype.hasOwnProperty,r={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:n.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},s=function(t,e){for(var o={},n=t.split(e.delimiter,e.parameterLimit===1/0?void 0:e.parameterLimit),r=0;r<n.length;++r){var s,a,c=n[r],u=-1===c.indexOf("]=")?c.indexOf("="):c.indexOf("]=")+1;-1===u?(s=e.decoder(c),a=e.strictNullHandling?null:""):(s=e.decoder(c.slice(0,u)),a=e.decoder(c.slice(u+1))),i.call(o,s)?o[s]=[].concat(o[s]).concat(a):o[s]=a}return o},a=function(t,e,o){if(!t.length)return e;var n,i=t.shift();if("[]"===i)n=[],n=n.concat(a(t,e,o));else{n=o.plainObjects?Object.create(null):{};var r="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,s=parseInt(r,10);!isNaN(s)&&i!==r&&String(s)===r&&s>=0&&o.parseArrays&&s<=o.arrayLimit?(n=[],n[s]=a(t,e,o)):n[r]=a(t,e,o)}return n},c=function(t,e,o){if(t){var n=o.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,r=/(\[[^[\]]*])/,s=/(\[[^[\]]*])/g,c=r.exec(n),u=c?n.slice(0,c.index):n,l=[];if(u){if(!o.plainObjects&&i.call(Object.prototype,u)&&!o.allowPrototypes)return;l.push(u)}for(var f=0;null!==(c=s.exec(n))&&f<o.depth;){if(f+=1,!o.plainObjects&&i.call(Object.prototype,c[1].slice(1,-1))&&!o.allowPrototypes)return;l.push(c[1])}return c&&l.push("["+n.slice(c.index)+"]"),a(l,e,o)}};t.exports=function(t,e){var o=e||{};if(null!==o.decoder&&void 0!==o.decoder&&"function"!=typeof o.decoder)throw new TypeError("Decoder has to be a function.");if(o.delimiter="string"==typeof o.delimiter||n.isRegExp(o.delimiter)?o.delimiter:r.delimiter,o.depth="number"==typeof o.depth?o.depth:r.depth,o.arrayLimit="number"==typeof o.arrayLimit?o.arrayLimit:r.arrayLimit,o.parseArrays=!1!==o.parseArrays,o.decoder="function"==typeof o.decoder?o.decoder:r.decoder,o.allowDots="boolean"==typeof o.allowDots?o.allowDots:r.allowDots,o.plainObjects="boolean"==typeof o.plainObjects?o.plainObjects:r.plainObjects,o.allowPrototypes="boolean"==typeof o.allowPrototypes?o.allowPrototypes:r.allowPrototypes,o.parameterLimit="number"==typeof o.parameterLimit?o.parameterLimit:r.parameterLimit,o.strictNullHandling="boolean"==typeof o.strictNullHandling?o.strictNullHandling:r.strictNullHandling,""===t||null===t||void 0===t)return o.plainObjects?Object.create(null):{};for(var i="string"==typeof t?s(t,o):t,a=o.plainObjects?Object.create(null):{},u=Object.keys(i),l=0;l<u.length;++l){var f=u[l],d=c(f,i[f],o);a=n.merge(a,d,o)}return n.compact(a)}},280:function(t,e,o){"use strict";var n=o(274),i=o(273),r={brackets:function(t){return t+"[]"},indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},s=Date.prototype.toISOString,a={delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,serializeDate:function(t){return s.call(t)},skipNulls:!1,strictNullHandling:!1},c=function t(e,o,i,r,s,a,c,u,l,f,d,p){var v=e;if("function"==typeof c)v=c(o,v);else if(v instanceof Date)v=f(v);else if(null===v){if(r)return a&&!p?a(o):o;v=""}if("string"==typeof v||"number"==typeof v||"boolean"==typeof v||n.isBuffer(v)){if(a){return[d(p?o:a(o))+"="+d(a(v))]}return[d(o)+"="+d(String(v))]}var m=[];if(void 0===v)return m;var y;if(Array.isArray(c))y=c;else{var h=Object.keys(v);y=u?h.sort(u):h}for(var _=0;_<y.length;++_){var g=y[_];s&&null===v[g]||(m=Array.isArray(v)?m.concat(t(v[g],i(o,g),i,r,s,a,c,u,l,f,d,p)):m.concat(t(v[g],o+(l?"."+g:"["+g+"]"),i,r,s,a,c,u,l,f,d,p)))}return m};t.exports=function(t,e){var o=t,n=e||{};if(null!==n.encoder&&void 0!==n.encoder&&"function"!=typeof n.encoder)throw new TypeError("Encoder has to be a function.");var s=void 0===n.delimiter?a.delimiter:n.delimiter,u="boolean"==typeof n.strictNullHandling?n.strictNullHandling:a.strictNullHandling,l="boolean"==typeof n.skipNulls?n.skipNulls:a.skipNulls,f="boolean"==typeof n.encode?n.encode:a.encode,d="function"==typeof n.encoder?n.encoder:a.encoder,p="function"==typeof n.sort?n.sort:null,v=void 0!==n.allowDots&&n.allowDots,m="function"==typeof n.serializeDate?n.serializeDate:a.serializeDate,y="boolean"==typeof n.encodeValuesOnly?n.encodeValuesOnly:a.encodeValuesOnly;if(void 0===n.format)n.format=i.default;else if(!Object.prototype.hasOwnProperty.call(i.formatters,n.format))throw new TypeError("Unknown format option provided.");var h,_,g=i.formatters[n.format];"function"==typeof n.filter?(_=n.filter,o=_("",o)):Array.isArray(n.filter)&&(_=n.filter,h=_);var b=[];if("object"!=typeof o||null===o)return"";var C;C=n.arrayFormat in r?n.arrayFormat:"indices"in n?n.indices?"indices":"repeat":"indices";var w=r[C];h||(h=Object.keys(o)),p&&h.sort(p);for(var O=0;O<h.length;++O){var k=h[O];l&&null===o[k]||(b=b.concat(c(o[k],k,w,u,l,f?d:null,_,p,v,m,g,y)))}return b.join(s)}},281:function(t,e,o){var n=o(97).f,i=o(40),r=o(270)("toStringTag");t.exports=function(t,e,o){t&&!i(t=o?t:t.prototype,r)&&n(t,r,{configurable:!0,value:e})}},283:function(t,e,o){"use strict";var n=o(104),i=o(96),r=o(305),s=o(94),a=o(275),c=o(299),u=o(281),l=o(303),f=o(270)("iterator"),d=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,o,v,m,y,h){c(o,e,v);var _,g,b,C=function(t){if(!d&&t in x)return x[t];switch(t){case"keys":case"values":return function(){return new o(this,t)}}return function(){return new o(this,t)}},w=e+" Iterator",O="values"==m,k=!1,x=t.prototype,j=x[f]||x["@@iterator"]||m&&x[m],S=j||C(m),M=m?O?C("entries"):S:void 0,L="Array"==e?x.entries||j:j;if(L&&(b=l(L.call(new t)))!==Object.prototype&&b.next&&(u(b,w,!0),n||"function"==typeof b[f]||s(b,f,p)),O&&j&&"values"!==j.name&&(k=!0,S=function(){return j.call(this)}),n&&!h||!d&&!k&&x[f]||s(x,f,S),a[e]=S,a[w]=p,m)if(_={values:O?S:C("values"),keys:y?S:C("keys"),entries:M},h)for(g in _)g in x||r(x,g,_[g]);else i(i.P+i.F*(d||k),e,_);return _}},284:function(t,e,o){var n=o(102),i=o(270)("toStringTag"),r="Arguments"==n(function(){return arguments}()),s=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,o,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(o=s(e=Object(t),i))?o:r?n(e):"Object"==(a=n(e))&&"function"==typeof e.callee?"Arguments":a}},285:function(t,e,o){var n=o(24).document;t.exports=n&&n.documentElement},286:function(t,e,o){var n=o(284),i=o(270)("iterator"),r=o(275);t.exports=o(23).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||r[n(t)]}},287:function(t,e,o){"use strict";var n=o(306)(!0);o(283)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,o=this._i;return o>=e.length?{value:void 0,done:!0}:(t=n(e,o),this._i+=t.length,{value:t,done:!1})})},288:function(t,e,o){o(308);for(var n=o(24),i=o(94),r=o(275),s=o(270)("toStringTag"),a="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<a.length;c++){var u=a[c],l=n[u],f=l&&l.prototype;f&&!f[s]&&i(f,s,u),r[u]=r.Array}},290:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(291),r=n(i),s=o(294),a=n(s),c=o(105),u=n(c),l=o(293),f=n(l),d=o(39),p=n(d),v=o(92),m=n(v),y=o(276),h=n(y),_=o(46),g=n(_),b={isFunction:function(t){return(0,p.default)(t)},isObject:function(t){return(0,g.default)(t)},isEmpty:function(t){return(0,m.default)(t)},isUndefined:function(t){return(0,h.default)(t)},isEmptyObject:function(t){return 0===(0,f.default)(t).length&&t.constructor===Object},mergeDeep:function(t){for(var e=arguments.length,o=Array(e>1?e-1:0),n=1;n<e;n++)o[n-1]=arguments[n];if(!o.length)return t;var i=o.shift();if((0,g.default)(t)&&(0,g.default)(i))for(var r in i)(0,g.default)(i[r])?(t[r]||(0,u.default)(t,(0,a.default)({},r,{})),b.mergeDeep(t[r],i[r])):(0,u.default)(t,(0,a.default)({},r,i[r]));return b.mergeDeep.apply(b,[t].concat(o))},fetch_domain:function(t,e){if(!(0,m.default)(t)&&!(0,m.default)(e)){var o=!0,n=!1,i=void 0;try{for(var s,a=(0,r.default)(t);!(o=(s=a.next()).done);o=!0){var c=s.value,u=!0,l=!1,f=void 0;try{for(var d,p=(0,r.default)(c.domain);!(u=(d=p.next()).done);u=!0){if(e==d.value)return c}}catch(t){l=!0,f=t}finally{try{!u&&p.return&&p.return()}finally{if(l)throw f}}}}catch(t){n=!0,i=t}finally{try{!o&&a.return&&a.return()}finally{if(n)throw i}}}return null},dateDiff:function(t,e){if(t&&e&&""!=t&&""!=e&&null!=t&&null!=e){return b.getDataLarge(t,e)<0}return(!t||""==t||null==t)&&!(!e||""==e||""==e)},getDataLarge:function(t,e){var o=t.replace(/-/g,"/"),n=e.replace(/-/g,"/"),i=Date.parse(o);return(Date.parse(n)-i)/3600/1e3},formatDate:function(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var o={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var n in o)if(new RegExp("("+n+")").test(e)){var i=o[n]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?i:this.padLeftZero(i))}return e},padLeftZero:function(t){return("00"+t).substr(t.length)},stringToDate:function(t){var e=t.split("-");return new Date(e[0],e[1]-1,e[2],0,0,0)}};e.default=b},291:function(t,e,o){t.exports={default:o(295),__esModule:!0}},292:function(t,e,o){t.exports={default:o(296),__esModule:!0}},293:function(t,e,o){t.exports={default:o(297),__esModule:!0}},294:function(t,e,o){"use strict";e.__esModule=!0;var n=o(292),i=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t,e,o){return e in t?(0,i.default)(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}},295:function(t,e,o){o(288),o(287),t.exports=o(307)},296:function(t,e,o){o(309);var n=o(23).Object;t.exports=function(t,e,o){return n.defineProperty(t,e,o)}},297:function(t,e,o){o(310),t.exports=o(23).Object.keys},298:function(t,e){t.exports=function(){}},299:function(t,e,o){"use strict";var n=o(301),i=o(107),r=o(281),s={};o(94)(s,o(270)("iterator"),function(){return this}),t.exports=function(t,e,o){t.prototype=n(s,{next:i(1,o)}),r(t,e+" Iterator")}},300:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},301:function(t,e,o){var n=o(95),i=o(302),r=o(106),s=o(99)("IE_PROTO"),a=function(){},c=function(){var t,e=o(103)("iframe"),n=r.length;for(e.style.display="none",o(285).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;n--;)delete c.prototype[r[n]];return c()};t.exports=Object.create||function(t,e){var o;return null!==t?(a.prototype=n(t),o=new a,a.prototype=null,o[s]=t):o=c(),void 0===e?o:i(o,e)}},302:function(t,e,o){var n=o(97),i=o(95),r=o(98);t.exports=o(25)?Object.defineProperties:function(t,e){i(t);for(var o,s=r(e),a=s.length,c=0;a>c;)n.f(t,o=s[c++],e[o]);return t}},303:function(t,e,o){var n=o(40),i=o(100),r=o(99)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),n(t,r)?t[r]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},304:function(t,e,o){var n=o(96),i=o(23),r=o(27);t.exports=function(t,e){var o=(i.Object||{})[t]||Object[t],s={};s[t]=e(o),n(n.S+n.F*r(function(){o(1)}),"Object",s)}},305:function(t,e,o){t.exports=o(94)},306:function(t,e,o){var n=o(44),i=o(43);t.exports=function(t){return function(e,o){var r,s,a=String(i(e)),c=n(o),u=a.length;return c<0||c>=u?t?"":void 0:(r=a.charCodeAt(c),r<55296||r>56319||c+1===u||(s=a.charCodeAt(c+1))<56320||s>57343?t?a.charAt(c):r:t?a.slice(c,c+2):s-56320+(r-55296<<10)+65536)}}},307:function(t,e,o){var n=o(95),i=o(286);t.exports=o(23).getIterator=function(t){var e=i(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return n(e.call(t))}},308:function(t,e,o){"use strict";var n=o(298),i=o(300),r=o(275),s=o(45);t.exports=o(283)(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,o=this._i++;return!t||o>=t.length?(this._t=void 0,i(1)):"keys"==e?i(0,o):"values"==e?i(0,t[o]):i(0,[o,t[o]])},"values"),r.Arguments=r.Array,n("keys"),n("values"),n("entries")},309:function(t,e,o){var n=o(96);n(n.S+n.F*!o(25),"Object",{defineProperty:o(97).f})},310:function(t,e,o){var n=o(100),i=o(98);o(304)("keys",function(){return function(t){return i(n(t))}})},332:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(290),i=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={components:{},props:{fontSize:{default:"32px"},value:{default:""},borderRadius:{default:""},couponMoney:{default:""},couponStartTime:{default:""},couponEndTime:{default:""}},methods:{clickCoupon:function(){this.$emit("clickCoupon",{})}},computed:{},filters:{formatDate:function(t){if(!t||"null"==t)return"";t=t.replace(/-/g,"/");var e=new Date(t);return i.default.formatDate(e,"yyyy-MM-dd")}}}},339:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.couponMoney>0?o("div",{staticClass:"wrapper"},[o("div",{staticClass:"coupon"},[t._m(0),t._v(" "),o("div",{staticClass:"item time"},[o("span",{staticClass:"priceTxt couponMoney"},[t._v(t._s(t.couponMoney)+"元优惠券")]),t._v(" "),o("div",{staticClass:"price"},[o("span",{staticClass:"couponTime"},[t._v("使用期间:"+t._s(t._f("formatDate")(t.couponStartTime))+"-"+t._s(t._f("formatDate")(t.couponEndTime)))])])]),t._v(" "),o("div",{staticClass:"item line"}),t._v(" "),o("div",{staticClass:"item buy",on:{click:t.clickCoupon}},[t._m(1)]),t._v(" "),t._m(2)])]):t._e()},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"item circle"},[o("div",{staticClass:"circleLeftItem"})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{clss:"price"}},[o("span",{staticClass:"priceTxt"},[t._v("立即领券")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"item circle"},[o("div",{staticClass:"circleRightItem"})])}];n._withStripped=!0;var r={render:n,staticRenderFns:i};e.default=r},341:function(t,e){},342:function(t,e,o){"use strict";function n(t){u||o(341)}Object.defineProperty(e,"__esModule",{value:!0});var i=o(332),r=o.n(i);for(var s in i)["default","default"].indexOf(s)<0&&function(t){o.d(e,t,function(){return i[t]})}(s);var a=o(339),c=o.n(a),u=!1,l=o(93),f=n,d=l(r.a,c.a,!1,f,"data-v-ce79d048",null);d.options.__file="src/components/model/coupon.vue",e.default=d.exports},344:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(101),r=n(i),s=o(92),a=n(s),c=o(271),u=n(c),l=o(342),f=n(l),d=o(26),p=n(d),v=o(15);e.default={components:{"ydh-coupon":f.default},props:{},data:function(){return{num_iid:"",goods:{price:{},click:{},goods:{},coupon:{}},copyStatus:0,model:{goods:!1,share:!1},ua:navigator.userAgent.toLowerCase()}},created:function(){this.init()},mounted:function(){},methods:(0,r.default)({},(0,v.mapActions)(["getMember","getMemberData","saveMember","saveMemberData"]),{init:function(){(0,a.default)(this.$route.query.inviteCode)||(this.$store.commit("saveFromInviteCode",this.$route.query.inviteCode),p.default.setCookie("saveFromInviteCode",this.$route.query.inviteCode)),(0,a.default)(this.$route.params.id)||(this.num_iid=this.$route.params.id),this.query(),this.listenerCopy()},query:function(){(0,a.default)(this.num_iid)||this.query_goods(),this.query_relation()},query_goods:function(){var t=this;u.default.post("/cms/goods/view",{num_iid:this.num_iid},!0,function(e){e.item&&(t.goods=e.item)},function(e){t.$toast(e)},this.$router)},query_relation:function(){var t=this;u.default.post("/common/goods/list",{ipage:this.ipage,cid:this.cid,column:1,pageSize:8},!0,function(e){e.items&&(t.items=e.items),e.pager&&(t.count=e.pager.count)},function(e){t.$toast(e)},this.$router)},clickCoupon:function(t){this.buyCoupon()},back:function(){this.$router.go(-1)},handleSelect:function(t){var e=this;this.$nextTick(function(){e.$router.push(t)})},buyCoupon:function(){this.isWeixinBrowser?(this.model.goods=!0,this.copyStatus=0):window.location.href=this.goods.click.taoke_url},copyToken:function(){},listenerCopy:function(){document.addEventListener("selectionchange",function(t){if("copy_key_android"==window.getSelection().anchorNode.parentNode.id&&document.getElementById("copy_key_android").innerText!=window.getSelection()){var e=document.getElementById("copy_key_android");window.getSelection().selectAllChildren(e)}},!1),document.addEventListener("selectionchange",function(t){if("copy_key_ios"==window.getSelection().anchorNode.parentNode.id&&document.getElementById("copy_key_ios").innerText!=window.getSelection()){var e=document.getElementById("copy_key_ios");window.getSelection().selectAllChildren(e)}},!1)},collect:function(){var t=this;u.default.post("/cms/member/favorite/pin",{object_id:this.num_iid,object_type:"goods"},!0,function(e){t.$toast("收藏成功")},function(e){t.$toast(e)},this.$router)},share:function(){this.model.share=!0},shareAction:function(t){1==t?(this.model.goods=!0,this.copyStatus=0,this.model.share=!1):2==t||3==t&&this.shareLink()},shareLink:function(){}}),computed:(0,r.default)({},(0,v.mapGetters)({member:"showMember",showMemberData:"showMemberData",showMid:"showMid",showInviteCode:"showInviteCode"}),{title:function(){if(this.goods.goods)return this.goods.goods.short_name?this.goods.goods.short_name:this.goods.goods.title},isShareCommssion:function(){return!!this.goods.price.share_commssion},copyContent:function(){return this.goods.goods.title+this.goods.price.price+"元，领券后【"+this.goods.price.buy_price+"元】  复制这条信息，打开「手机淘宝」领券下单 "+this.goods.click.tao_token},copyString:function(){return 0==this.copyStatus?"一键复制":1==this.copyStatus?"已经复制成功":"复制失败"},isIos:function(){return!!this.ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)},isWeixinBrowser:function(){return!!/micromessenger/.test(this.ua)},shareUrl:function(){var t=window.location.href;return(0,a.default)(this.showInviteCode)||(t.lastIndexOf("?")>0?t+="&":t+="?",t=t+"inviteCode="+this.showInviteCode),t}})}},390:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrapper"},[o("div",{staticClass:"nav"},[o("i",{staticClass:"back cmsfont icon-back",on:{click:t.back}})]),t._v(" "),o("mt-swipe",{attrs:{auto:4e3}},t._l(t.goods.pic_list,function(t,e){return o("mt-swipe-item",{staticClass:"slide"},[o("img",{attrs:{src:t+"_400x400.jpg"}})])})),t._v(" "),o("div",{staticClass:"goods-content"},[o("div",{staticClass:"title"},[o("span",[t._v(t._s(t.title))])]),t._v(" "),t.goods.coupon.coupon_money>0?o("div",{staticClass:"goods-prop"},[o("div",{staticClass:"prop-price"},[o("span",{staticClass:"prop-price-txt"},[t._v("￥")]),t._v(" "),o("span",{staticClass:"prop-price-number"},[t._v(t._s(t.goods.price.buy_price))])]),t._v(" "),t.goods.coupon.coupon_money>0?o("span",{staticClass:"goods-price goods-price-org"},[t._v("原价￥"+t._s(t.goods.price.price))]):o("span",{staticClass:"goods-price goods-price-org"},[t._v("原价￥"+t._s(t.goods.price.ori_price))]),t._v(" "),o("span",{staticClass:"prop-center"}),t._v(" "),t.goods.goods.volume>0?o("span",{staticClass:"prop-volume"},[t._v("月销"+t._s(t.goods.goods.volume))]):t._e()]):t._e(),t._v(" "),o("ydh-coupon",{attrs:{"border-radius":"20px",couponMoney:t.goods.coupon.coupon_money,couponStartTime:t.goods.coupon.coupon_start_time,couponEndTime:t.goods.coupon.coupon_end_time},on:{clickCoupon:t.clickCoupon}})],1),t._v(" "),o("div",{staticClass:"detail"},[t._m(0),t._v(" "),o("div",{staticClass:"list"},t._l(t.goods.images,function(t){return o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"img"}]})}))]),t._v(" "),o("div",{staticClass:"footer"},[o("div",{staticClass:"item back",on:{click:function(e){t.back()}}},[o("span",{staticClass:"ic cmsfont icon-fanhui"}),t._v(" "),o("span",{staticClass:"ic"},[t._v("返回")])]),t._v(" "),o("div",{staticClass:"item collect",on:{click:function(e){t.collect()}}},[o("span",{staticClass:"ic cmsfont icon-shoucang"}),t._v(" "),o("span",{staticClass:"ic"},[t._v("收藏")])]),t._v(" "),o("div",{staticClass:"item share",on:{click:function(e){t.share()}}},[t._m(1),t._v(" "),t.isShareCommssion?o("div",{staticClass:"share-item"},[o("span",{staticClass:"share-txt"},[t._v("分享预赚")]),t._v(" "),o("span",{staticClass:"share-txt"},[t._v("￥"+t._s(t.goods.price.share_commssion))])]):t._e()]),t._v(" "),o("div",{staticClass:"item coupon",on:{click:function(e){t.buyCoupon()}}},[o("div",{staticClass:"price"},[o("span",{staticClass:"tip"},[t._v("￥")]),t._v(" "),o("span",{},[t._v(t._s(t.goods.price.buy_price))])]),t._v(" "),t.goods.coupon.coupon_money>0?o("div",[t._v("领券购买")]):o("div",[t._v("折扣购买")])])]),t._v(" "),o("van-popup",{model:{value:t.model.goods,callback:function(e){t.$set(t.model,"goods",e)},expression:"model.goods"}},[o("div",{staticClass:"copy-goods"},[o("div",{staticClass:"copy-token"},[t.isIos?o("span",{staticClass:"copywriting-content",attrs:{id:"copy_key_ios"}},[t._v(" \n                     点下面一键复制:按钮，复制整条信息，打开「手机淘宝」领券下单就能省钱。\n                     "+t._s(t.goods.click.tao_token)+"                    \n                ")]):o("textarea",{staticClass:"copywriting-content",attrs:{id:"copy_key_android",type:"text"}},[t._v("点下面一键复制:按钮，复制整条信息，打开「手机淘宝」领券下单就能省钱。 "+t._s(t.goods.click.tao_token)+" ")])]),t._v(" "),o("div",{staticClass:"copy-btn",on:{click:t.copyToken}},[t._v(t._s(t.copyString))]),t._v(" "),o("div",{staticClass:"copy-memo"},[o("p",[t._v("点击一键复制，打开手机淘宝")]),t._v(" "),o("p",[t._v("若失败请长按框内文字或使用浏览器打开")])])])]),t._v(" "),o("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:t.model.share,callback:function(e){t.$set(t.model,"share",e)},expression:"model.share"}},[o("div",{staticClass:"share-action"},[o("div",{staticClass:"share-items"},[o("div",{staticClass:"share-item share-item-btn",on:{click:function(e){t.shareAction(1)}}},[o("div",{staticClass:"share-icon cmsfont "},[o("i",{staticClass:"cmsfont icon-wenanfengmian wenan"})]),t._v(" "),o("span",[t._v("文案")])]),t._v(" "),o("div",{staticClass:"share-item share-item-btn",on:{click:function(e){t.shareAction(2)}}},[o("div",{staticClass:"share-icon cmsfont"},[o("i",{staticClass:"cmsfont icon-wenanfengmian tu"})]),t._v(" "),o("span",[t._v("二维码图")])]),t._v(" "),o("div",{staticClass:"share-item share-item-btn",on:{click:function(e){t.shareAction(3)}}},[o("div",{staticClass:"share-icon cmsfont"},[o("i",{staticClass:"cmsfont icon-wenanfengmian"})]),t._v(" "),o("span",[t._v("复制连接")])]),t._v(" "),o("div",{staticClass:"share-item"})])])])],1)},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"title"},[o("span",{staticClass:"line"},[t._v("------")]),t._v(" "),o("span",{staticClass:"text"},[t._v("宝贝图文详情")]),t._v(" "),o("span",{staticClass:"line"},[t._v("------")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"share-item"},[o("span",{staticClass:"ic cmsfont icon-fenxiang"}),t._v(" "),o("span",{staticClass:"ic"},[t._v("分享")])])}];n._withStripped=!0;var r={render:n,staticRenderFns:i};e.default=r},441:function(t,e){}});