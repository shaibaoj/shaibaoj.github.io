"use strict";define(function(require){var app=require("app");app.controller("ModalPreviewHelper",["$scope","$mdDialog",function($scope,$mdDialog){var vm=$scope.vm={};angular.extend(vm,{close:function(){$mdDialog.hide()},install:function(){$mdDialog.hide(!0),localStorage.isinstall=!0}})}])});