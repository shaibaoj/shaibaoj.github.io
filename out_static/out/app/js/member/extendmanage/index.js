"use strict";define(function(require){var app=require("app");require("common/directives/pager-redirect"),require("member/modal/editExtendDataModal"),require("member/modal/addExtendDataModal"),require("common/directives/pagination/page1"),app.controller("MemberExtendCtrl",["$rootScope","$scope","$state","$stateParams","utils","http","config","navconfig",function($rootScope,$scope,$state,$stateParams,utils,http,config,navconfig){var vm=$scope.vm={};angular.extend(vm,{utils:utils,init:function(){vm.guid=$stateParams.guid,vm.getExtendData(!0),vm.initParams()},initParams:function(){vm.TypeList={string:"字符",date:"日期",image:"图片","int":"整数"}},addExtendData:function(){utils.mdDialog({controller:"AddExtendData",templateUrl:"member/modal/addExtendData.html",multiple:!1}).then(function(data){var options={per_page:vm.pagination.itemsPerPage,current_page:1,total:vm.pagination.totalItems,total_pages:vm.pagination.numPages};options.total=options.total+1,data.field_type_name=vm.TypeList[data.field_type],vm.listData.push(data),vm.initPagination(options)})},initPagination:function(options){vm.pagination={totalItems:options.total,numPages:options.total_pages,itemsPerPage:options.per_page,maxSize:options.total_pages,currentPage:options.current_page}},watchCurrentPage:function(){var _this=this;$scope.$watch("vm.pagination.currentPage",function(currentpage,old){currentpage&&old&&_this.getExtendData()})},del:function(item,index){utils.confirm({headTitle:"删除提示",msg:"您确定要删除该字段吗?"},function(data){data&&vm.delItem(item,index)})},edit:function(item){utils.mdDialog({controller:"editExtendData",templateUrl:"member/modal/addExtendData.html",multiple:!1,locals:{data:item}}).then(function(){vm.getExtendData()})},delItem:function(item,index){var params=[item.field],url=config.getAdminAPI("delextend");http(url,{method:"delete",data:params}).then(function(data){data&&0==data.error_code&&vm.handleList(index)})},handleList:function(index){vm.pagination.totalItems<vm.pagination.itemsPerPage?vm.listData.splice(index,1):vm.getExtendData(!0)},getExtendData:function(flag){vm.pagination=vm.pagination||{},flag&&(vm.pagination.currentPage=1);var params={"api.size":20,"api.page":vm.pagination.currentPage},url=config.getAdminAPI("extendList");http(url,{method:"get",params:params}).then(function(data){0==data.error_code&&(vm.loading="complete",vm.handleExtend(data))})},handleExtend:function(data){console.log("请求到的列表数据:",data),angular.forEach(data.result,function(val){val.field_type_name=vm.TypeList[val.field_type]}),vm.listData=data.result},change:function(item){var params={new_version:!0,fields:[{field_type:item.field_type,name:item.name,is_enabled:item.is_enabled,field:item.field}]},url=config.getAdminAPI("addextend");http(url,{method:"post",data:params}).then(function(data){data&&0==data.error_code&&utils.success("修改成功")})}}),$scope.$on("checkApp",function(event,first_appinfo){vm.init()})}])});