"use strict";define(function(require){var app=require("app");require("../../appmake/services/appMakeService"),require("../services/URIService"),require("common/directives/pager-redirect"),require("common/directives/pagination/page1"),require("common/modal/modal-header"),require("common/modal/modal-footer"),app.controller("HighSetModuleCtrl",["$scope","http","config","utils","appMakeService","$mdDialog","URIService","highSetData",function($scope,http,config,utils,appMakeService,$mdDialog,URIService,highSetData){var vm=$scope.vm={};angular.extend(vm,{currentTab:"module",list:[],newList:[],categoryCache:[],imgpath:"",init:function(){vm.page_view_id=URIService.getPageId(),vm.currentTab=highSetData.quote,this.showAllList();var current_modelId=0;this.getContentcategoryData(),this.initListdata(current_modelId),vm.watchCurrentPage(),this.watchCategoryCache(),this.watchCurrentPage2(),this.initLoading()},initLoading:function(){vm.loading1="init",vm.loading2="init",vm.loading3="init"},changeTab:function(flag){vm.currentTab=flag},getModuleList:function(){vm.loading=!1;var url=config.getAPI("v3modluelist").replace("{module_id}",vm.page_view_id),params=this.collectListParam();http(url,{method:"get",params:params}).then(function(resp){0==resp.error_code&&(vm.listdata1=resp.result,vm.nodata=!vm.listdata1.length,vm.loading="complete",vm.handleModulepic(),vm.initPagination(resp.result))})["catch"](function(reject){vm.loading1="complete"})},collectListParam:function(){var params={};return vm.pagination1&&vm.pagination1.currentPage&&(params.page=vm.pagination1.currentPage,params.count=3),params},initPagination:function(options){vm.pagination1=vm.pagination1||{},vm.pagination1Loading="complete",angular.extend(vm.pagination1,{totalItems:options.total,numPages:options.last_page,itemsPerPage:options.per_page,maxSize:options.last_page,currentPage:options.current_page,pagecount:3}),0==vm.pagination1.currentPage&&(vm.nodata=!1)},watchCurrentPage:function(){var _this=this;$scope.$watch("vm.pagination1.currentPage",function(currentpage,old){currentpage&&old&&(console.log(currentpage,"当前页",old,"cc"),_this.getModuleList())}),$scope.$watch("vm.pagination1.pagecount",function(currentpagecount,old){currentpagecount&&old&&(vm.pagination1Loading=!1,console.log(currentpagecount,"当前页条数!!!!!!!",old),_this.getModuleList())})},handleModulepic:function(){angular.forEach(vm.listdata1,function(value){value.iconpic=appMakeService.getModulePic(value.pic),value.press_iconpic=appMakeService.getModulePic(value.press_pic)})},showMainList:function(){vm.loading=!1,vm.showpagination1=!1,vm.isall=!1;var url=config.getAPI("appModuleList")+"?is_display=1";http(url,{method:"get"}).then(function(resp){vm.listdata1=resp.result.data,vm.handleModulepic(),vm.loading="complete"})},showAllList:function(){vm.showpagination1=!0,vm.isall=!0,this.getModuleList()},initListdata:function(current_modelId){this.setModelId(current_modelId),this.initParams(current_modelId),this.getListData()},initParams:function(){vm.node_id="",vm.keywords="",vm.pagination2&&(vm.pagination2.currentPage=1),vm.currentid=vm.currentmodelId},setModelId:function(modelId){vm.currentmodelId=modelId||0,vm.currentModel=vm.currentmodelId,this._getCurrentModel1(vm.currentModel)},_getCurrentModel1:function(modelid){angular.forEach(vm.modelList,function(model,i){model.id===modelid&&(vm.currentModelModel=model)})},getContentcategoryData:function(current_modelId){var diymodel_url=config.getAPI("diymodel");http(diymodel_url).then(function(data){data.error?utils.error(data.error.message):(vm.modelList=data.user_models,vm.categoryCache.push(data.user_models)),vm.categoryloading="complete"})["catch"](function(reject){vm.categoryloading="complete"})},showNextCategory:function(index,model){var _this=this;vm.categoryloading=!1,this.getModelId(model);var url=config.getAPI("nodechildren"),parent_id=model.model_id?model.id:0;url=url.replace("{model_id}",vm.currentmodelId).replace("{parent_id}",parent_id),http(url).then(function(data){data.error?utils.error(data.error.message):(vm.categoryCache.push(data.nodes),data.nodes.length&&_this.selectnode(data.nodes[0])),vm.categoryloading="complete"})["catch"](function(reject){vm.categoryloading="complete"})},getModelId:function(node){vm.currentmodelId=node.model_id?node.model_id:node.id,vm.currentModel=vm.currentmodelId,this._getCurrentModel2(vm.currentModel)},_getCurrentModel2:function(modelid){angular.forEach(vm.modelList,function(model,i){model.id===modelid&&(vm.currentModelModel=model)})},selectnode:function(node){vm.currentid=node.id,vm.node_id=node.model_id?node.id:0,vm.currentNode=node,this.getModelId(node),this.getListData(),vm.categoryloading=!1},getListData:function(){var _this=this;this.initlistnav(function(navdata){_this.ajaxListData(navdata)})},initlistnav:function(callback){var url=config.getAPI("listnav");return url=url.replace("{model_id}",vm.currentmodelId),http(url).then(function(data){angular.isFunction(callback)&&callback(data)})},watchCategoryCache:function(){$scope.$watch("vm.categoryCache",function(newVal){var length=vm.categoryCache.length,margin=(110*vm.categoryCache.length+10,length>1?-110*(vm.categoryCache.length-1):0);vm.sortStyle={"margin-left":margin+"px"}},!0)},delCache:function(node){vm.categoryCache.pop();var parent_node=this.findParent(node[0]);this.selectnode(parent_node)},findParent:function(options){var len=vm.categoryCache.length,parent_arr=vm.categoryCache[len-1],origin_obj={};return angular.forEach(parent_arr,function(value){options.parent_id&&options.parent_id==value.id?origin_obj=value:options.model_id==value.id&&(origin_obj=value)}),origin_obj},ajaxListData:function(navdata){var _this=this,url=config.getAPI("contentlist"),params=this.collectListParam2(),config_indexpic=config.picConfig.list_indexpic;vm.loading2=!1,http(url,{params:params}).then(function(data){_this.handlelistnavdata(navdata),vm.listdata2=data.data,angular.forEach(vm.listdata,function(value,key){value.data&&value.data.indexpic&&(value.data.indexpic=utils.getImgUrl(value.data.indexpic,config_indexpic.width,config_indexpic.height))}),data.meta&&_this.initPagination2(data.meta.pagination),vm.loading2="complete",vm.categoryloading="complete"})["catch"](function(reject){vm.loading2="complete"})},handlelistnavdata:function(data){data=data.list_nav;var tmp={},first_key="";angular.forEach(data,function(value,key){first_key=key,"nodes"!==key&&"indexpic"!==key&&"iscomment"!==key&&"pic_num"!==key&&"publish_time"!==key&&(tmp[key]=value)}),tmp.title||(tmp.title==tmp[first_key],delete tmp[first_key]),vm.listnav=tmp},collectListParam2:function(){var params={model_id:vm.currentmodelId,node_id:vm.node_id,keywords:vm.keywords};return vm.pagination2&&vm.pagination2.currentPage&&(params.page=vm.pagination2.currentPage,params.count=7),params},initPagination2:function(options){vm.pagination2=vm.pagination2||{},vm.pagination2Loading="complete",angular.extend(vm.pagination2,{totalItems:options.total,numPages:options.total_pages,itemsPerPage:options.per_page,maxSize:options.total_pages,currentPage:options.current_page,countconfig:config.listcount,pagecount:options.per_page})},searchListData:function(){this.getListData()},watchCurrentPage2:function(){var _this=this;$scope.$watch("vm.pagination2.currentPage",function(currentpage,old){currentpage&&old&&(vm.paginationLoading=!1,_this.getListData())}),$scope.$watch("vm.pagination2.pagecount",function(currentpagecount,old){currentpagecount&&old&&(vm.paginationLoading=!1,_this.getListData())})},save:function(){$mdDialog.hide({dataId:vm.selectItem})}}),vm.init()}])});