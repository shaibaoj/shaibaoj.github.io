"use strict";define(function(require){var app=require("app");require("common/services/modelService"),require("common/modal/modal-header"),require("common/modal/modal-footer"),app.controller("removeMember",["$scope","$mdDialog","config","http","utils",function($scope,$mdDialog,config,http,utils){var vm=$scope.vm={};angular.extend(vm,{init:function(){},initParams:function(){},close:function(){$mdDialog.cancel()},save:function(){$mdDialog.hide()}}),vm.init()}])});