"use strict";define(function(require){var app=require("app"),moment=require("moment");require("common/directives/pager-redirect"),require("common/services/modelService"),app.controller("FullBenefitCtrl",["$scope","utils","navconfig","config","http","$state","$stateParams","$modal",function($scope,utils,navconfig,config,http,$state,$stateParams,$modal){var vm=$scope.vm={};angular.extend(vm,{currentstate:0,init:function(guid){vm.loading=!0,vm.watchCurrentPage(),this.getecshopmarketlist(),vm.guid=guid},getecshopmarketlist:function(){var _url=config.getAPI("activitylist").replace("{guid}",vm.guid).replace("{promo_type}","reach_discount"),params=this.collectListParam();http(_url,{params:params}).then(function(data){data&&data.data&&(vm.timestamp_trans(data.data),vm.currentlist=angular.copy(data.data),vm.statue_change(vm.currentstate),vm.initPagination(data.meta.pagination),vm.loading="complete")})["catch"](function(){vm.loading="complete"})},initParams:function(current_modelId){vm.node_id="",vm.keywords="",vm.pagination&&(vm.pagination.currentPage=1),vm.currentid=vm.currentmodelId},initPagination:function(options){vm.pagination=vm.pagination||{},angular.extend(vm.pagination,{totalItems:options.total,numPages:options.total_pages,itemsPerPage:options.per_page,maxSize:options.total_pages,currentPage:options.current_page,countconfig:config.listcount,pagecount:options.per_page})},collectListParam:function(status){var params={};return status&&(params.status=status),vm.pagination&&vm.pagination.currentPage&&(params.page=vm.pagination.currentPage,params.count=vm.pagination.pagecount),params},watchCurrentPage:function(status){var _this=this;$scope.$watch("vm.pagination.currentPage",function(currentpage,old){currentpage&&old&&_this.getecshopmarketlist()}),$scope.$watch("vm.pagination.pagecount",function(currentpagecount,old){currentpagecount&&old&&_this.getecshopmarketlist()})},creatActive:function(){$state.go("mainLayout.createfullbenefit")},editActive:function(index){$state.go("mainLayout.createfullbenefit",{product_id:index})},delete_active:function(index,id,statue){utils.confirm({headTitle:"删除提醒",msg:"确定删除选中的数据吗?"},function(sure){if(sure){var _url=config.getAPI("activitydelete").replace("{guid}",vm.guid).replace("{promotion_id}",id);vm.loading=!1,http(_url,{method:"delete"}).then(function(data){data.error?utils.error(data.error.message):(vm.pagination.totalItems-=1,vm.activelist.splice(index,1),vm.getecshopmarketlist(),!vm.activelist.length&&(vm.nodata=!0),vm.loading="complete")})["catch"](function(){vm.loading="complete"})}})},timestamp_trans:function(obj){angular.forEach(obj,function(value){value.from_time=moment(value.from_time).format("YYYY-MM-DD HH:mm:ss"),value.to_time=moment(value.to_time).format("YYYY-MM-DD HH:mm:ss"),value.create_time=moment(value.create_time).format("YYYY-MM-DD HH:mm:ss")})},statue_change:function(statue){var _obj=[];0==statue?_obj=vm.currentlist:angular.forEach(vm.currentlist,function(value){value.status==statue&&_obj.push(value)}),vm.activelist=_obj,vm.currentstate=statue,0==vm.activelist.length&&(vm.nodata=!0),0!=vm.activelist.length&&(vm.nodata=!1)}}),$scope.$on("checkApp",function(event,first_appinfo){var guid=first_appinfo.guid;vm.init(guid)})}])});