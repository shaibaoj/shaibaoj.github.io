"use strict";define(function(require){var app=require("app");require("common/directives/pager-redirect"),require("common/services/modelService"),require("content/list/services/recordService"),app.controller("dingdoneSelectContentCtrl",["$scope","http","$mdDialog","config","modalData","modelService","RecordService","utils","$q",function($scope,http,$mdDialog,config,modalData,modelService,RecordService,utils,$q){var vm=$scope.vm={};angular.extend(vm,{modalData:modalData,init:function(){vm.loading="init",vm.noadd=!0,vm.getModelList(),vm.watchCurrentPage()},getModelList:function(){vm.loading=!1,modelService.fetchModelList().then(function(data){vm.modellist=data,vm.loading="complete",console.log(modalData,"modalData"),vm.originmodelId=vm.modalData&&vm.modalData.model_id?vm.modalData.model_id:"",vm.currentmodelId=vm.modalData&&vm.modalData.model_id?vm.modalData.model_id:"",vm.getContentList()})},getContentList:function(){vm.listdata=[];var params=this.collectListParam(),defer=$q.defer(),url=config.getAPI("recordlistall");return http(url,{method:"get",params:params}).then(function(data){console.log(data.data,"获取内容数据"),vm.contentlist=data.data,angular.forEach(vm.contentlist,function(val){val.src=val.data.indexpic.host+val.data.indexpic.dir+val.data.indexpic.filepath+val.data.indexpic.filename,vm.listdata.push(val)}),vm.list=vm.listdata,vm.nodata=!vm.list.length,vm.initPagination(data.meta.pagination),angular.forEach(vm.list,function(item){vm.modalData&&item.id==vm.modalData.content_id&&(vm.title=item.title)}),defer.resolve(data.data)}),defer.promise},selectCurrentModel:function(index){vm.checked=!1,vm.noadd=!0,vm.keywords="",vm.currentmodel=vm.modellist[index].name,vm.currentmodelId=vm.modellist[index].id,vm.getContentList()},selectAllContent:function(){vm.checked=!1,vm.noadd=!0,vm.currentmodel="全部内容",vm.currentmodelId="",vm.keywords="",vm.getContentList()},searchListData:function(){vm.getContentList()},isEnter:function(event){13==event.keyCode&&this.searchListData()},initPagination:function(options){vm.pagination=vm.pagination||{},vm.paginationLoading="complete",vm.advertlistcount=[{name:"每页10条",id:10},{name:"每页20条",id:20},{name:"每页40条",id:40}],angular.extend(vm.pagination,{totalItems:options.total,numPages:options.total_pages,itemsPerPage:options.per_page,maxSize:options.last_page,currentPage:options.current_page,countconfig:vm.advertlistcount,pagecount:options.per_page}),0==vm.pagination.currentPage&&(vm.nodata=!1)},collectListParam:function(){var params={model_id:vm.currentmodelId,node_id:vm.node_id,keywords:vm.keywords};return vm.pagination&&vm.pagination.currentPage&&(params.page=vm.pagination.currentPage,params.count=vm.pagination.pagecount),params},watchCurrentPage:function(){var _this=this;$scope.$watch("vm.pagination.currentPage",function(currentpage,old){currentpage&&old&&(vm.paginationLoading=!1,_this.getContentList())}),$scope.$watch("vm.pagination.pagecount",function(currentpagecount,old){currentpagecount&&old&&(vm.paginationLoading=!1,_this.getContentList())})},selectCurrentContent:function(){var id_info={content_id:"model"==vm.modalData.slug?"instance":"product",model_id:vm.originmodelId,title:"model"==vm.modalData.slug?"当前内容":"当前商品"};$mdDialog.hide(id_info)},selectContent:function(list){vm.checked=list,vm.noadd=!1,vm.content_id=list.id,vm.model_id=list.model_id,vm.title=list.data.title},saveSelectContent:function(){var id_info={content_id:vm.content_id,model_id:vm.model_id,title:vm.title};$mdDialog.hide(id_info)},close:function(){$mdDialog.cancel()}}),vm.init()}])});