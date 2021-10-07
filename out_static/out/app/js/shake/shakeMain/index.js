"use strict";define(function(require){var app=require("app");require("common/directives/form-select"),require("common/modal/modal-header"),require("shake/modal/addShake"),require("appmake/services/pageManagerService"),require("common/directives/pagination/page4"),require("common/modal/modal-footer"),app.controller("ShakeCtrl",["$scope","$modal","$state","navconfig","utils","config","http","pageManagerService","$timeout","$q","$interval",function($scope,$modal,$state,navconfig,utils,config,http,pageManagerService,$timeout,$q,$interval){var vm=$scope.vm={};angular.extend(vm,{init:function(){vm.loading="false",vm.tab="valid",vm.selId=null,vm.currcount=8,vm.shakeshow=!0,pageManagerService.getUriList("shake").then(function(){vm.getAllshakelist(vm.tab,!0)}),vm.watchCurrentPage(),vm.tokenIdentificat()},tokenIdentificat:function(){var url=config.getAPI("pagedesign.getFunModule").replace("{type}","func-module");http(url).then(function(data){1==data.result.shake.status?(vm.tokenIdent=!0,console.log("开启啦")):(vm.tokenIdent=!1,console.log("没有开启啦"))})},initPagination:function(options){vm.paginationLoading="complete",angular.extend(vm.pageNalist,{totalItems:options.totalItems,currentPage:options.currentPage,itemsPerPage:options.itemsPerPage,maxSize:options.maxSize})},changeStatus:function(id,bool,shakeItem){var url=config.getAPI("shakeItem.startpage").replace("{activityId}",id),_bool=bool;vm.loading=!1,http(url,{method:"put",data:{enable:_bool}}).then(function(data){vm.loading="complete",_bool&&(data.error_code&&0==data.error_code?(vm.loading="complete",shakeItem.bopages=!1,shakeItem.enable=!0):(vm.loading="complete",shakeItem.bopages=!0,shakeItem.enable=!1))})},addShake:function(index,shakeItem){var _id=index;utils.mdDialog({controller:"addShakeCtrl",templateUrl:"shake/modal/addShake.html",locals:{modalData:{flag:shakeItem.image}}}).then(function(data){angular.forEach(data,function(value,index){vm.selId=index,vm.requirePage(value,_id),vm.requireImg(value,shakeItem.id)})})},requireImg:function(val,id){var url=config.getAPI("shakeItem.setImg").replace("{activityId}",id);http(url,{method:"put",data:{image:val.img}}).then(function(resp){0==resp.error_code&&(vm.loading="complete")})["catch"](function(reject){vm.loading="complete"})},requirePage:function(data,id){vm.shakeList[id].image=data.img},getstatusShake:function(tab){vm.tab=tab,vm.getAllshakelist(tab,!0)},addShakelist:function(){vm.tokenIdent?$state.go("mainLayout.compileShake",{jsonString:null}):utils.error("请在功能模块中开启后进行摇一摇添加")},getAllshakelist:function(type,bool){vm.loading=!1,vm.shakeshow=!1,pageManagerService.getPages(),console.log("pageManagerService.getPages()",pageManagerService.getPages()),vm.time=0;var url=config.getAPI("shakeItem.activityList"),params=this.collectListParam(bool);params.type=type,http(url,{params:params}).then(function(resp){if(console.log("列表数据",resp),resp.result[0].count.total>0?vm.maintab=!0:vm.maintab=!1,resp&&0==resp.error_code&&resp.result[0].count[vm.tab]>0){if("valid"==vm.tab?(vm.shakesvalid=!1,vm.shakesinvalid=!0,vm.navcoming=!1,vm.navover=!0,angular.forEach(resp.result.slice(1,resp.result.length),function(val,index){val.status=!1})):(vm.shakesinvalid=!0,vm.shakesvalid=!1,vm.navbar=!0,vm.navcoming=!1,vm.navover=!0,vm.tabs=!0,angular.forEach(resp.result.slice(1,resp.result.length),function(val,index){val.status=!0})),bool){var options={totalItems:resp.result[0].count[vm.tab],currentPage:1,itemsPerPage:vm.currcount,maxSize:5};vm.initPagination(options)}vm.time++,1==vm.time&&(vm.shakeList=resp.result.slice(1,resp.result.length),angular.forEach(vm.shakeList,function(val,index){val.eventname=pageManagerService.getPageName(val.eventUri),val.bopages=!1}),vm.shakeshow=!0,vm.getOvertime(),vm.loading="complete")}else"valid"==vm.tab?(vm.shakesvalid=!1,vm.shakesinvalid=!1,vm.navcoming=!0,vm.navover=!0):(vm.shakesinvalid=!1,vm.shakesvalid=!1,vm.navcoming=!1,vm.navover=!1),vm.shakeList=[],vm.loading="complete"})["catch"](function(reject){vm.loading="complete"})},ShowCountDown:function(endtime){angular.forEach(vm.shakeList,function(val,index){var now=new Date;vm.dealNum(val.start_time.substr(0,val.start_time.length-3))-now.getTime()>=0?(val.reshaow=!0,val.remainingTime=vm.pagetoTime(vm.dealNum(val.start_time.substr(0,val.start_time.length-3))-now.getTime())):val.reshaow=!1})},getOvertime:function(){$interval(function(){vm.ShowCountDown()},1e3)},dealNum:function(num){var time=num,timearr=time.replace(" ",":").replace(/\:/g,"-").split("-"),month=timearr[1]<10?timearr[1].substr(1,1):timearr[1],date=new Date(timearr[0],month-1,timearr[2],timearr[3],timearr[4],timearr[5]).getTime();return date},pagetoTime:function(second_time){var time,days=Math.floor(second_time/864e5),leave1=second_time%864e5,hours=Math.floor(leave1/36e5),leave2=leave1%36e5,minutes=Math.floor(leave2/6e4),leave3=leave2%6e4,seconds=Math.round(leave3/1e3);return time=days+"天"+hours+"小时"+minutes+"分"+seconds+"秒后开始活动"},collectListParam:function(bool){var params={};return vm.pageNalist=vm.pageNalist||{},bool&&(vm.pageNalist.currentPage=1),vm.pageNalist&&vm.pageNalist.currentPage&&(params.page=vm.pageNalist.currentPage,params.count=vm.currcount),params},watchCurrentPage:function(){var _this=this;$scope.$watch("vm.pageNalist.currentPage",function(currentPage,old){currentPage&&old&&(console.log("currentPage",currentPage),_this.getAllshakelist(vm.tab,!1))})},delShakelist:function(id,index){utils.confirm({headTitle:"删除提示",msg:"确定要删除该活动吗?"},function(sure){if(sure){var url=config.getAPI("shakeItem.delpageList").replace("{activityId}",id);vm.loading=!1,http(url,{method:"delete"}).then(function(datas){0==datas.error_code&&(vm.shakeList.splice(index,1),0==vm.shakeList.length&&vm.getAllshakelist(vm.tab,!0)),vm.loading="complete"})}})},goeditor:function(id){$state.go("mainLayout.compileShake",{jsonString:id})}}),$scope.$on("checkApp",function(event,first_appinfo){vm.init()})}])});