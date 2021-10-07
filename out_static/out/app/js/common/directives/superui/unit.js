"use strict";define(function(require){var app=require("app");app.factory("LayoutService",function($q,http,config,utils,$mdDialog,PageDesignService){var services={};return angular.extend(services,{showWidgetPop:function(type){var deferred=$q.defer(),promise=deferred.promise;return PageDesignService.getWidgetList(type).then(function(widgetList){$mdDialog.show({controller:"LayoutUnitCtrl",templateUrl:"common/directives/superui/layout_unit.html",clickOutsideToClose:!0,locals:{modalData:widgetList}}).then(function(newFieldData){var view_key=newFieldData.key;PageDesignService.getFormSchemeWithUuid(view_key).then(function(json){deferred.resolve(json)})})}),promise}}),services}),app.controller("LayoutUnitCtrl",function($scope,$mdDialog,modalData){var vm=$scope.vm={};angular.extend(vm,{init:function(){this.modalData=modalData},select:function($index){this.currentIndex=$index,this.current=modalData[$index]},save:function(){$mdDialog.hide(this.current)},cancel:function(){$mdDialog.cancel()}}),vm.init()})});