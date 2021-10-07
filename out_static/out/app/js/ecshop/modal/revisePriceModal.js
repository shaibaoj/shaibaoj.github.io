"use strict";define(function(require){var app=require("app");require("common/modal/modal-header"),require("common/modal/modal-footer"),app.controller("RevisePriceModalCtrl",["$scope","utils","config","http","$mdDialog","order",function($scope,utils,config,http,$mdDialog,order){var vm=$scope.vm={};angular.extend(vm,{order:order,init:function(){vm.loading=!0,vm.oringintotalprice=0,vm.initData()},initData:function(){angular.forEach(vm.order.items,function(val){vm.oringintotalprice=parseFloat(vm.oringintotalprice)+parseFloat(val.number*val.unit_price)}),vm.oldactualprice=parseFloat(vm.oringintotalprice)+parseFloat(vm.order.express_fee)},calc_price:function(){vm.total_price&&vm.logistics_price?vm._actual_price=1*vm.total_price+1*vm.logistics_price:vm._actual_price=""},save:function(){if(!vm.total_price)return void utils.error("请填写商品总价！");if(!vm.logistics_price)return void utils.error("请填写运费!");vm.loading=!1;var url=config.getAPI("changeprice").replace("{order_no}",vm.order.order_no);http(url,{method:"post",data:{express_fee:+vm.logistics_price,goods_price:+vm.total_price}}).then(function(data){0==+data.error_code&&(vm.loading="complete",vm.hide({total_price:vm.total_price,logistics_price:vm.logistics_price,actual_price:vm.actual_price}))})["catch"](function(resp){vm.loading="complete"})},hide:function(data){$mdDialog.hide(data)},cancel:function(){$mdDialog.cancel()}}),vm.init()}])});