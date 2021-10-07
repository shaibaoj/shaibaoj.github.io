"use strict";define(function(require){var app=require("app");require("common/modal/modal-header"),require("common/modal/modal-footer"),app.controller("setGroupManageCtrl",["$scope","$mdDialog","upload","config","http","utils","modalData",function($scope,$mdDialog,upload,config,http,utils,modalData){var vm=$scope.vm={};angular.extend(vm,{init:function(){vm.loading=!0,vm.picloading=!0,vm.currentLength=0,vm.groupChatInfo={},vm.watchTitle(),modalData.group&&(vm.groupInfo=modalData.group,vm.icon=vm.groupInfo.icon,vm.title=vm.groupInfo.name,vm.limit=vm.groupInfo.maximum)},uploadPic:function(file){var url=config.getAPI("upload");vm.picloading=!1,upload(url,file,100,100,"groupIcon").then(function(res){vm.pic_obj=res.material,vm.icon=res.url,vm.picloading="complete"})["catch"](function(reject){vm.picloading="complete"})},watchTitle:function(){$scope.$watch("vm.title",function(val){vm.title&&vm.calcTitleLength()})},calcTitleLength:function(){vm.currentLength=0;for(var len=vm.title.length,charCode=-1,i=0;i<len;i++)charCode=vm.title.charCodeAt(i),charCode>=0&&charCode<=128?vm.currentLength+=1:vm.currentLength+=2;vm.currentLength=parseInt(vm.currentLength/2)},upperLimit:function(val){vm.limit=val},save:function(){vm.groupChatInfo.name=vm.title,vm.groupChatInfo.maximum=vm.limit?vm.limit:50,vm.groupChatInfo.icon=vm.icon?vm.icon:"",vm.formCheck()&&(vm.groupInfo?vm.updataGroupInfo():vm.creatGroupInfo())},formCheck:function(){if(vm.title){if(vm.currentLength<=10)return!0;utils.error("群组名称超过10个字符")}else utils.error("群组名称必须填写")},creatGroupInfo:function(){var url=config.getAdminAPI("groupmanage.creategroup");vm.loading=!1,http(url,{method:"post",data:vm.groupChatInfo}).then(function(data){data.error_code&&data.error_message?utils.error(data.error_message):(vm.groupChatInfo=data.result,$mdDialog.hide({createGroupInfo:vm.groupChatInfo}),vm.loading="complete",$mdDialog.cancel("cancel"))})},updataGroupInfo:function(){var url=config.getAdminAPI("groupmanage.editgroup").replace("{group_id}",vm.groupInfo.id);vm.loading=!1,http(url,{method:"put",data:vm.groupChatInfo}).then(function(data){data.error_code&&data.error_message?utils.error(data.error_message):(vm.groupChatInfo.id=vm.groupInfo.id,$mdDialog.hide({newGroupInfo:vm.groupChatInfo}),vm.loading="complete",$mdDialog.cancel("cancel"))})}}),vm.init()}])});