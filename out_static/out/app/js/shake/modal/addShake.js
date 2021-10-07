"use strict";define(function(require){var app=require("app");require("common/services/modelService"),require("common/modal/modal-header"),require("common/modal/modal-footer"),app.controller("addShakeCtrl",["$scope","$mdDialog","http","config","utils","$timeout","upload","modalData",function($scope,$mdDialog,http,config,utils,$timeout,upload,modalData){var vm=$scope.vm={};angular.extend(vm,{init:function(){vm.shakeList=[],vm.itemlist={},vm.select=-1,vm.getShake()},getShake:function(){var url=config.getAPI("shakeItem.shakePage");http(url).then(function(resp){0==resp.error_code&&(angular.forEach(resp.result,function(val,index){vm.shakeList.push({id:index,img:val,status:!1})}),angular.forEach(vm.shakeList,function(val,index){val.img==modalData.flag&&(val.status=!0)}),vm.loading="complete")})["catch"](function(reject){vm.loading="complete"})},uploadPage:function(file){var url=config.getAPI("upload");upload(url,file,180,80).then(function(res){console.log(res),vm.shakeList.push({id:vm.shakeList.length+1,img:res.url}),console.log(vm.shakeList)})["catch"](function(reject){utils.error("活动背景图上传出错")})},setShake:function(item,obj){angular.forEach(vm.shakeList,function(val,index){val.status=!1}),vm.shakeList[item].status=!vm.shakeList[item].status,vm.befoSave(obj)},befoSave:function(val){angular.forEach(vm.itemlist,function(value,index){delete vm.itemlist[index]}),vm.itemlist[val.id]={id:val.id,img:val.img}},save:function(){return console.log(vm.itemlist),null==vm.itemlist||angular.equals({},vm.itemlist)?void utils.error("请选择至少一张背景图"):void $mdDialog.hide(vm.itemlist)},close:function(event){$mdDialog.cancel()}}),vm.init()}])});
