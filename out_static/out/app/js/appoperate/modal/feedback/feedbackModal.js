"use strict";define(function(require){var app=require("app");app.controller("ModalFeedbackCtrl",["$scope","$state","navconfig","utils","config","http","$modalInstance","currentBackInfo",function($scope,$state,navconfig,utils,config,http,$modalInstance,currentBackInfo){var vm=$scope.vm={};angular.extend(vm,{currentBackInfo:currentBackInfo,flag:!0,init:function(){vm.loading="init",vm.getBackList()},getBackList:function(){var url=config.getAPI("getbacklist");http(url,{method:"post",data:{device_token:vm.currentBackInfo.device_token}}).then(function(resp){resp.error||(vm.list=resp.result)})},save:function(){var len=vm.list.length-1,url=config.getAPI("replycontent");vm.flag&&(vm.flag=!1,http(url,{method:"post",data:{id:vm.list[len].id,content:vm.content}}).then(function(resp){resp.error||(utils.success("回复成功"),vm.flag=!0,setTimeout(function(){$modalInstance.close(vm.currentBackInfo)},1500))}))},close:function(){$modalInstance.close()}}),vm.init()}])});