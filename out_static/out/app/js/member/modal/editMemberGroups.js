"use strict";define(function(require){var app=require("app");require("common/services/modelService"),require("common/modal/modal-header"),require("common/modal/modal-footer"),app.controller("EditGroups",["$scope","$mdDialog","data","http","config","utils",function($scope,$mdDialog,data,http,config,utils){var vm=$scope.vm={};angular.extend(vm,{init:function(){this.initParams()},initParams:function(){vm.name=data.name,vm.newname="",vm.resource_perms=vm.set_perms_data(data.resource_perms)},set_perms_data:function(perm_data){return _.isArray(perm_data)&&perm_data.length?perm_data:[]},close:function(){$mdDialog.cancel()},save:function(){var params=(data.id,{name:vm.name,type:"system"});if(""==params.name)utils.error("会员名称不能为空");else{var url=config.getAdminAPI("editgroups").replace("{id}",data.id);http(url,{method:"put",data:params}).then(function(data){vm.loading="complete",0==data.error_code&&(utils.success("操作成功!").then(function(){$mdDialog.hide()}),vm.loading="complete")})}}}),vm.init()}])});
