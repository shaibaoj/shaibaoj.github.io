"use strict";define(function(require){var app=require("app");require("common/services/dingdone_selector_service"),app.directive("dingdoneWidgetText",function($compile,dingdoneSelectorService){return{scope:{widget:"="},replace:!0,templateUrl:"common/directives/superui/text.html",require:["?^dingdoneWidgetItem","?^dingdoneWidget"],link:function($scope,el,attrs,parentCtrl){var vm=$scope.vm={},dingdoneWidgetItem=parentCtrl[0],dingdoneWidget=parentCtrl[1];angular.extend(vm,{dynamicParam:{},init:function(){var _this=this;this.value=dingdoneWidgetItem.getValue(),$scope.widget.enabled_bind&&dingdoneSelectorService.init({pageId:dingdoneWidget.pageId,pageModelId:dingdoneWidget.pageModelId}).then(function(result){_this.selector=result;var key=_this.value.replace("{{","").replace("}}","");key&&(_this.dynamicParam={key:key,name:_this.selector.dictionary[key]})})},selectField:function(){var _this=this;dingdoneSelectorService.showPop({selector:_this.selector,pageId:dingdoneWidget.pageId,currentKey:_this.dynamicParam.key||"",dataTypes:["address","datetime","list","number","price","short_text"]}).then(function(data){_this.dynamicParam=data,vm.value=["{{",_this.dynamicParam.key,"}}"].join("")})}}),vm.init(),$scope.$watch("vm.value",function(newVal,oldVal){angular.equals(newVal,oldVal)||dingdoneWidgetItem.setValue(newVal,null,!0)})}}})});