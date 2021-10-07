"use strict";define(function(require){var app=require("app");require("common/services/modelService"),require("member/modal/addSearchTag"),require("common/modal/modal-header"),require("common/modal/modal-footer"),app.controller("seniorSearch",["$scope","utils","$mdDialog","config","http","modelService",function($scope,utils,$mdDialog,config,http,modelService){var vm=$scope.vm={};angular.extend(vm,{utils:utils,init:function(){this.initParams(),this.getGroup(),this.getMemberGroup()},initParams:function(){vm.Realname=!1,vm.nodetime=!1,vm.registerTime=!1,vm.nickname="",vm.mobile="",vm.email="",vm.invite_type="",vm.source="",vm.inviter="",vm.system_member_group="",vm.associate_member_group="",vm.login_start="",vm.login_end="",vm.register_start="",vm.register_end="",vm.sourceList=[{slug:"client_end",name:"客户端"},{slug:"admin_end",name:"制作端"}],vm.inviteType=[{slug:"client_end",name:"会员邀请"},{slug:"admin_end",name:"用户邀请"}],vm.scibeList={},vm.membergroupList="",vm.associatelimit="",vm.memberlimit="",vm.typelimit="",vm.getSourceName=""},associateSelect:function(val){vm.associatelimit=val.name,vm.associate_model=val.id},memberSelect:function(val){vm.memberlimit=val.name,vm.member_type=val.id},TypeSelect:function(val){vm.typelimit=val.name,vm.invite_type=val.slug},getSource:function(val){vm.getSourceName=val.name,vm.source=val.slug},getGroup:function(flag,param){param=param?param:{};var url=config.getAdminAPI("membergroup");vm.loading=!0,param.type="associate",http(url,{method:"get",params:param}).then(function(data){vm.loading=!1,data&&0==data.error_code&&(vm.scibeList=data.result.data)})},getMemberGroup:function(){var params={};params.type="system";var url=config.getAdminAPI("membergroup").replace("{guid}",vm.guid);http(url,{method:"get",params:params}).then(function(data){vm.membergroupList=data.result.data})},nodeTimeDown:function(){vm.nodetime=!vm.nodetime},registerTimeDown:function(){vm.registerTime=!vm.registerTime},addSearchTag:function(){utils.mdDialog({controller:"AddSearchTag",templateUrl:"member/modal/addSearchTag.html",multiple:!1,locals:{data:{nickname:vm.nickname,mobile:vm.mobile,email:vm.email,invite_type:vm.invite_type,inviter:vm.inviter,system_member_group:vm.member_type,associate_member_group:vm.associate_model,source:vm.source,login_start:vm.login_start,login_end:vm.login_end,register_start:vm.register_start,register_end:vm.register_end}}})},close:function(){$mdDialog.cancel()},search:function(){var params={source:vm.source||void 0,nick_name:vm.nickname||void 0,mobile:vm.mobile||void 0,email:vm.email||void 0,invite_type:vm.invite_type||void 0,inviter:vm.inviter||void 0,system_member_group:vm.member_type||void 0,associate_member_group:vm.associate_model||void 0,login_start:Date.parse(new Date(vm.login_start))/1e3||void 0,login_end:Date.parse(new Date(vm.login_end))/1e3||void 0,register_start:Date.parse(new Date(vm.register_start))/1e3||void 0,register_end:Date.parse(new Date(vm.register_end))/1e3||void 0};return vm.hasAnySearchKey(params)?void $mdDialog.hide(params):void utils.error("请输出搜索关键词")},hasAnySearchKey:function(params){for(var _key in params)if(params[_key])return!0;return!1}}),vm.init()}])});