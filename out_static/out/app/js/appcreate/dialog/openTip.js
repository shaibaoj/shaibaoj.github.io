"use strict";define(function(require){var app=require("app");app.controller("resolveTip",["$rootScope","$scope","$state","$mdDialog","$timeout","navconfig","utils",function($rootScope,$scope,$state,$mdDialog,$timeout,navconfig,utils){var vm=$scope.vm={};angular.extend(vm,{close:function(){$mdDialog.hide()}})}])});
