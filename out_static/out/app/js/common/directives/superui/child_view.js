"use strict";define(function(require){var app=require("app");app.directive("dingdoneWidgetChildView",["config","$q","http","$compile",function(config,$q,http,$compile){return{scope:{widget:"="},replace:!0,templateUrl:"common/directives/superui/child_view.html",require:"?^dingdoneWidgetItem",link:function($scope,el){var vm=$scope.vm={};angular.extend(vm,{VIEWS:$scope.widget.VIEWS,init:function(){this.getView().then(function(){vm.compileDom()})},getView:function(){var defer=$q.defer(),view_key=$scope.widget.view_key,url=config.getAdminAPI("views.getView").replace("{view_key}",view_key),_this=this;return http(url).then(function(json){var result=json.result,parentViewId=$scope.widget.root_view_id,parentView=$scope.widget.VIEWS[parentViewId],viewId=parentView[view_key];viewId||(viewId=result.app_view_id,parentView[view_key]=viewId,vm.VIEWS[viewId]=result.default_attrs),$scope.$emit("layoutCreate",view_key,viewId),_this.form_scheme=result.form_scheme,_this.attribute_values=vm.VIEWS[viewId],defer.resolve()}),defer.promise},compileDom:function(lineViewId){var dom='<dingdone-widget class="form-horizontal common" form-scheme="vm.form_scheme" dynamic-compile="true" attribute-values="vm.attribute_values" callback="vm.previewCallback( info )"></dingdone-widget>';$compile(dom)($scope).appendTo(el.empty())}}),vm.init()}}}])});