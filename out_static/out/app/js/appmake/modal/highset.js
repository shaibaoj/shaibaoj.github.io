"use strict";define(function(require){var app=require("app");require("./highsetmodule"),require("./highsetmodulefield"),require("./highsetnavigator"),require("common/directives/form-select"),require("common/modal/modal-header"),require("common/modal/modal-footer"),app.controller("HighSetCtrl",["$scope","$mdDialog","utils","http","config","params",function($scope,$mdDialog,utils,http,config,params){var vm=$scope.vm={};angular.extend(vm,{init:function(){this.getUriList()},getUriList:function(){var flag=params.group_key,url=config.getAPI("geturilist").replace("{group_key}",flag);http(url).then(function(resp){vm.uriList=resp.result,vm.changeUri(vm.uriList[0].identifier)})["catch"](function(rej){})},changeUri:function(id){var url=config.getAPI("geturidetail").replace("{uri_id}",id);http(url).then(function(resp){vm.currentUri=resp.result,vm.initParams()})["catch"](function(){})},initParams:function(){angular.forEach(vm.currentUri.queries,function(q,key){q.default_value&&(q.value=q.default_value)})},selectModule:function(uri){this.selectTypeHandler&&this.selectTypeHandler[uri.quote]&&this.selectTypeHandler[uri.quote](uri)},selectTypeHandler:{module:function(uri){var hightSetModulePop=utils.mdDialog({templateUrl:"appmake/modal/highsetmodule.html",controller:"HighSetModuleCtrl",locals:{highSetData:{quote:uri.quote}}}),self=this;uri.value=uri.value?uri.value:"",hightSetModulePop.then(function(settings){uri.value=self.format(settings.dataId,uri)})},format:function(str,uri){return uri.dynamic&&(str="{"+str+"}"),str},content:function(uri){this.module(uri)},model_fields:function(uri){var hightSetModuleFieldPop=utils.mdDialog({templateUrl:"appmake/modal/highsetmodulefield.html",controller:"HighSetModuleFieldCtrl",locals:{params:{quote:uri.quote,model_id:params.model_id}}}),self=this;uri.value=uri.value?uri.value:"",hightSetModuleFieldPop.then(function(settings){uri.value=self.format(settings.dataId,uri)})},navigator:function(uri){var hightSetNavigatorPop=utils.mdDialog({templateUrl:"appmake/modal/highsetnavigator.html",controller:"HighSetNavigatorCtrl",locals:{params:{quote:uri.quote,model_id:params.model_id}}}),self=this;uri.value=uri.value?uri.value:"",hightSetNavigatorPop.then(function(settings){uri.value=self.format(settings.dataId,uri)})}},save:function(){var uri=this.ping();$mdDialog.hide({uri:uri})},ping:function(){var uri;return console.log(vm.currentUri,"123"),uri=vm.currentUri&&vm.currentUri.uri&&vm.currentUri.uri.indexOf("?")==-1?vm.currentUri.uri+"?":vm.currentUri.uri+"&",vm.currentUri.queries&&vm.currentUri.queries.length>0&&angular.forEach(vm.currentUri.queries,function(querie,key){void 0==querie.value&&(querie.value=""),"boolean"==querie.type&&(querie.value=querie.value?1:0),1==querie.hide&&(querie.value=querie.default_value),querie.value=encodeURIComponent(querie.value),uri+=querie.key+"="+querie.value+"&"}),uri+=vm.currentUri.has_callback?"c=1":"c=0"}}),vm.init()}])});