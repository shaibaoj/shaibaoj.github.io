function parseParams(e){try{var t=[];for(var i in e){var n=encodeURIComponent(i),o=encodeURIComponent(e[i]);t.push(n+"="+o)}return t.join("&")}catch(e){return""}}function getUrlSearch(e,t){var i=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),n=e.slice(e.indexOf("?")+1).match(i);if(null!=n)try{return decodeURIComponent(n[2])}catch(e){return null}return null}Vue.use(VueStorage,{namespace:"pro__",name:"ls",storage:"local"}),URLPrefix.token=Vue.ls.get("member_token");var page=function(e,t){t=t||"",setTimeout(function(){window.location.href=e+".html"+t},50)},pageAll=function(e){setTimeout(function(){window.open(e)},50)};function Request(e){var t=location.href;if(-1!=t.indexOf(e)){var i=t.indexOf(e);return t=t.substring(i+e.length+1)}}var HTTPurl=window.location.protocol,isHTTPurl=HTTPurl.substring(0,HTTPurl.length-1),config={_url:"",urls:"/",isHTTP:function(){var e=window.location.protocol;return e.substring(0,e.length-1)},getUrl:function(e){var t=new RegExp("(https?|ftp|file|http)://[-A-Za-z0-9+&@@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@@#/%=~_|]","ig"),i=e.match(t);return null!=i?i:null},getVideoUrl:function(e){var t=new RegExp("(https?|ftp|file|http)://[-A-Za-z0-9+&@@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@@#/%=~_|]+.mp4","ig"),i=e.match(t);return null!=i?i:null},ImgSizeFun:function(e,t){for(var i=0;i<t.length;i++)e[i]=t[i]+config.ImgSize;return e}},ajaxGet=function(e,t,i,n){var o=function(e,t){};n&&(o=n),$.ajax({type:"GET",url:0===e.indexOf("http")?e:URLPrefix.api_url+e,data:Object.assign(t,{times:URLPrefix.times,url_sign:URLPrefix.url_sign,member_token:URLPrefix.token}),dataType:"json",timeout:3e4,success:i,error:o,xhrFields:{withCredentials:!0}})},ajaxPost=function(e,t,i,n){var o=function(e,t){};n&&(o=n),$.ajax({type:"POST",url:0===e.indexOf("http")?e:URLPrefix.api_url+e,data:Object.assign(t,{times:URLPrefix.times,url_sign:URLPrefix.url_sign,member_token:URLPrefix.token}),dataType:"json",timeout:3e4,success:i,error:o,xhrFields:{withCredentials:!0}})},ajaxGetJsonp=function(e,t,i,n){var o=function(e,t){};n&&(o=n),$.ajax({type:"GET",url:e,data:t,dataType:"jsonp",timeout:3e4,success:i,error:o,xhrFields:{withCredentials:!0}})};function CurrentUser(){var i={};this.set=function(e,t){i[e]=t},this.get=function(e){return i[e]},this.is_login=function(){return!!i.is_login}}function Urls(){var i={};this.set=function(e,t){i[e]=t},this.get=function(e){return i[e]}}function AjaxUrls(){var n={};this.set=function(e,t){var i=(new Date).getTime();0<=t.indexOf("?")?t+="&_="+i:t+="?_="+i,n[e]=t},this.get=function(e){return n[e]}}function Config(){this.urls=new Urls,this.ajax_urls=new AjaxUrls}$(function(){scrollTopRun=function(){var e=$("#scrollTop"),t=$(document).scrollTop();$(window).width()<=200?e.hide():1e3<t?(e.show(),e.unbind(),e.bind("click",function(){$("body,html").animate({scrollTop:0},300)})):e.hide(),setTimeout("scrollTopRun()",500)},scrollTopRun()}),$(function(){String.prototype.replaceAll=function(e,t){return this.replace(new RegExp(e,"gm"),t)},String.prototype.format=function(e){var t=this;if(arguments.length<1)return t;var i=arguments;for(var n in 1==arguments.length&&"object"==typeof e&&(i=e),i){var o=i[n];null!=o&&(t=t.replaceAll("\\{"+n+"\\}",o))}return t}}),$(function(){$("img.lazy").lazyload({effect:"fadeIn"})}),$(window).scroll(function(){30<$(window).scrollTop()?$("#top-header").addClass("fixedNav hui-fadeinT"):$("#top-header").removeClass("fixedNav hui-fadeinT")}),0<$("#kw").length&&($(document).on("click","#js-eb-search-btn",function(){return""!=$.trim($("#kw").val())&&$("#filterForm").submit(),!1}),$(document).on("keydown","#kw",function(e){13==e.keyCode&&""!=$.trim($("#kw").val())&&$("#js-eb-search-btn").click()}),$(document).on("click",".search-tabs li",function(){var e=$(this).attr("data-s"),t=$(this).clone();1==e?$(this).parent().parent().find("#mod").val("index"):2==e?$(this).parent().parent().find("#mod").val("queqiao"):3==e&&$(this).parent().parent().find("#mod").val("promo"),$("#kw").attr("placeholder",$(this).attr("data-p")),$(t).addClass("current"),$(".search-tabs li").removeClass("current"),$(this).remove(),$(".search-tabs").prepend(t)}),$(".search-tabs").hover(function(){$(this).find("li").not(".current").show()},function(){$(this).find("li").not(".current").hide()}),$("#del").bind("click",function(){$("#kw").val("").focus(),$("#filterForm").submit()})),function(r){var e={init:function(){},pid_list:function(){r.getJSON(URLPrefix.api_url+g_config.ajax_urls.get("user_ajax"),{entity:"pid",times:URLPrefix.times,url_sign:URLPrefix.url_sign,member_token:URLPrefix.token},function(e){r("#promotion-box>.chooses").html("");var i="",n="",o="";e.items&&(r.each(e.items,function(e,t){n=null!=t.user_pid_id?t.user_pid_id:"",o=null!=t.pid?t.pid:"",i=i+'<div promotion-media-id="'+(null!=t.user_pid_id?t.user_pid_id:"")+'" pid="'+(null!=t.pid?t.pid:"")+'" class="promotion-media-choose">'+(null!=t.pid_name?t.pid_name:"")+"</div>"}),i+="<div style='clear:both'></div>"),r("#promotion-box>.chooses").html(i),""!=i&&(r("#promotion-box").show(),HPT.pid_set(n,o,""))})},pid_set:function(e,t,i){r.getJSON(URLPrefix.api_url+g_config.ajax_urls.get("user_ajax"),{entity:"pid_default",qz:i,id:e,pid:t,times:URLPrefix.times,url_sign:URLPrefix.url_sign,member_token:URLPrefix.token},function(e){var t=e.items.id,i=e.items.pid;if(void 0!==t&&""!=t&&void 0!==i&&""!=i){var n=r("div[promotion-media-id="+t+"]",r("#promotion-box"));n&&0<n.length&&(r(".promotion-media-choose").removeClass("active"),n.addClass("active"),r(".pid-text").attr("pid",i).text(n.text()),current_user.set("current_pid",i))}})},qunfa:function(e){r.post(URLPrefix.api_url+"/api/user/tools/zhushou/qunfa",{num_iid:e,times:URLPrefix.times,url_sign:URLPrefix.url_sign,member_token:URLPrefix.token},function(e){0==e.info.status?layer.msg(e.info.status_err,{icon:1,time:1e3},function(){}):layer.msg(e.info.status_err,{icon:2,time:1e3},function(){})})},agent_list:function(){r.getJSON(URLPrefix.api_url+g_config.ajax_urls.get("user_ajax"),{entity:"agent",times:URLPrefix.times,url_sign:URLPrefix.url_sign,member_token:URLPrefix.token},function(e){r("#promotion-box>.chooses").html("");var i="";void 0!==e&&void 0!==e.result&&(e=e.info);var n="",o="";e.items&&(r.each(e.items,function(e,t){n=null!=t.user_cms_user_item_id?t.user_cms_user_item_id:"",o=null!=t.user_id?t.user_id:"",i=i+'<div aid="'+(null!=t.user_cms_user_item_id?t.user_cms_user_item_id:"")+'" uid="'+(null!=t.user_id?t.user_id:"")+'" pid="'+(null!=t.app_id?t.app_id:"")+'" class="promotion-media-choose">'+(null!=t.agent.user_name?t.agent.user_name:"")+"</div>"}),i+="<div style='clear:both'></div>"),r("#promotion-box>.chooses").html(i),""!=i&&(r("#promotion-box").show(),HPT.agent_set(n,o,""))})},agent_set:function(e,t,i){r.getJSON(URLPrefix.api_url+g_config.ajax_urls.get("user_ajax"),{entity:"agent_default",qz:i,aid:e,uid:t,times:URLPrefix.times,url_sign:URLPrefix.url_sign,member_token:URLPrefix.token},function(e){void 0!==e&&void 0!==e.result&&(e=e.info);var t=e.items.aid,i=e.items.uid;if(void 0!==t&&""!=t&&void 0!==i&&""!=i){var n=r("div[aid="+t+"]",r("#promotion-box"));r(".promotion-media-choose").removeClass("active"),n.addClass("active"),r(".pid-text").attr("aid",t).text(n.text()),current_user.set("current_agent_aid",t)}})},qunfa_product:function(e){r.getJSON(URLPrefix.api_url+g_config.ajax_urls.get("user_info"),{action:"user",mod:"qunfa_product",id:e,times:URLPrefix.times,url_sign:URLPrefix.url_sign,member_token:URLPrefix.token},function(e){1==e.info.status?layer.msg(e.info.status_err,{icon:1,time:1e3},function(){}):layer.msg(e.info.status_err,{icon:2,time:1e3},function(){})})}};window.HPT=e,window.HPT.init()}(jQuery),$(function(){$(".copytext-btn",$(".goods-list")).on("click",function(e){$this=$(this);$this.closest(".goods").find(".media-text-area").html().replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");var t=new ClipboardJS(".copytext-btn",{target:function(e){return $this.closest(".goods").find(".media-text-area")[0]}});t.on("success",function(e){e.clearSelection(),t.destroy(),layer.msg("复制成功",{time:2e3})}),t.on("error",function(e){console.log(e)})}),$(document).on("mouseenter",".copytext-btn",function(e){var t=$(this).data("goods-id"),i=$(this).closest(".goods").find(".media-list-box"),n=i.children(".media-text-area"),o=$.trim(n.html());$(window).width()-$(this).offset().left-120<340&&(i.css({left:-186}),i.children("b").css({left:304,borderLeftColor:"#212121",borderLeftWidth:9,borderRightColor:"transparent",borderRightWidth:5})),o&&i.show(),o||$.post(URLPrefix.api_url+"/api/common/goods/viewComment",{num_iid:t,times:URLPrefix.times,url_sign:URLPrefix.url_sign,member_token:URLPrefix.token},function(e){e.data.content&&(n.html(e.data.content),i.show())})}),$(document).on("mouseleave",".copytext-btn",function(){$(this).closest(".goods").find(".media-list-box").hide()}),$(document).on("mouseenter",".goods",function(){$(this).find(".media-list-box").hide()}),$(document).on("click",".go-old",function(){window.location.href="http://old.haopintui.net"})}),vmUserMenu=new Vue({el:"#vmUserMenu",data:{queryInit:!1,user:{user_name:""}},mounted:function(){this.init()},methods:{init:function(){this.query()},query:function(){var t=this;ajaxPost("/api/user/home/user",{},function(e){e.data&&e.data.user&&e.data.user.user_id&&(t.user=e.data.user),t.queryInit=!0})},logout:function(){Vue.ls.remove("member_token"),window.location.href="/"}}});