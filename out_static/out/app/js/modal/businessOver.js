"use strict";define(function(require){var app=require("app");app.controller("BusinessOverCtrl",["$scope","$state","$mdDialog",function($scope,$state,$mdDialog){var vm=$scope.vm={};angular.extend(vm,{init:function(){console.log("打开弹窗!"),vm.noShow=!0},close:function(){$mdDialog.hide()},sure:function(){$mdDialog.hide(),$state.go("mainLayout.noBusinessAuth")}}),vm.init()}])});