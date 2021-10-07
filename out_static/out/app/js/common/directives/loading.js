"use strict";define(function(require){var app=require("app");app.directive("dingdoneLoading",["$compile",function($compile){var loadingTemplate='          <div class="dingdone-loading flex" ng-click="stopPropagation( $event )">              <div class="loading-wrap sys-flex sys-flex-center">                  <span class="spinner" role="spinner">                    <div class="spinner-icon"></div>                  </span>                  <span class="message" ng-if="ismessage">{{loadMessage}}</span>              </div>          </div>';return{restrict:"EA",scope:{dingdoneLoading:"=",loadMessage:"@",ismessage:"@",loadingColor:"@",loadingSelf:"@"},link:function(scope,element,attr){scope.stopPropagation=function($event){$event.stopPropagation()},scope.loadMessage=scope.loadMessage||"加载数据中...",scope.$watch("dingdoneLoading",function(loading){loading?element.triggerHandler("destroy"):element.triggerHandler("loading")}),element.on({_create:function(event,cssInfo){this.loading=$compile(loadingTemplate)(scope).appendTo(element).css({position:"absolute",width:"100%",height:"100%",left:0,top:0,"z-index":cssInfo["z-index"]>1e5?cssInfo["z-index"]:1e5}),scope.loadingColor&&this.loading.find(".spinner").css({"border-top-color":scope.loadingColor,"border-left-color":scope.loadingColor}),scope.loadingSelf&&this.loading.find(".spinner").css("position","absolute"),this.loading.show(),$compile(this.loading.contents())(scope)},loading:function(){var cssInfo={};this.loading||("static"==element.css("position")&&element.css({position:"relative"}),$.extend(cssInfo,element.offset()),cssInfo.width=element.outerWidth(),cssInfo.height=element.outerHeight(),cssInfo["z-index"]=element.css("z-index"),element.triggerHandler("_create",[cssInfo]))},destroy:function(){var _this=this;setTimeout(function(){_this.loading&&element.find(".dingdone-loading").remove(),_this.loading=null},500)}})}}}])});