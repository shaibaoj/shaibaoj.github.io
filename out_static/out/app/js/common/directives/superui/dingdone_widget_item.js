"use strict";define(function(require){var app=require("app");require("common/directives/superui/uri"),require("common/directives/superui/text"),require("common/directives/superui/color"),require("common/directives/superui/image"),require("common/directives/superui/range"),require("common/directives/superui/corner"),require("common/directives/superui/border"),require("common/directives/superui/margin"),require("common/directives/superui/number"),require("common/directives/superui/shadow"),require("common/directives/superui/switch"),require("common/directives/superui/child_view"),require("common/directives/superui/field_bind"),require("common/directives/superui/radio_text"),require("common/directives/superui/radio_image"),require("common/directives/superui/color_style"),require("common/directives/superui/image_color"),require("common/directives/superui/checkbox_text"),require("common/directives/superui/checkbox_image"),require("common/directives/superui/extend"),require("common/directives/superui/layout"),require("common/directives/superui/bar"),require("common/directives/superui/tabitem"),require("common/directives/superui/moduleset"),require("common/directives/superui/event"),require("common/directives/superui/advanced"),require("common/directives/superui/search_data"),require("common/directives/superui/global_bar"),require("common/directives/superui/condition"),app.directive("dingdoneWidgetItem",["$compile","$sce",function($compile,$sce){return{scope:{eachAttr:"=",pageId:"=",direction:"="},replace:!0,templateUrl:"common/directives/superui/dingdone_widget_item.html",require:"?^dingdoneWidget",link:function($scope,el,attrs,dingdoneWidget){var vm=$scope.vm={};$scope.pageId=dingdoneWidget?dingdoneWidget.getPageId():"",vm.descHTML=$sce.trustAsHtml($scope.eachAttr.description),angular.extend(vm,{getValue:function(){var me=$scope.eachAttr,value=void 0,attribute_link=me.attribute_link&&Object.keys(me.attribute_link).length?me.attribute_link:null;if(attribute_link){var attributeKeyObj={};for(var valueKey in attribute_link)for(var key in attribute_link[valueKey])attributeKeyObj[key]=dingdoneWidget&&dingdoneWidget.getValue(key);var optionValue="";for(var _valueKey in attribute_link)_.isEqual(attribute_link[_valueKey],attributeKeyObj)&&(optionValue=_valueKey);value=optionValue}else value=dingdoneWidget&&dingdoneWidget.getValue(me.attribute_key);if(me&&me.widget_link){var theLinkWidget=me.widget_link[value+""];dingdoneWidget&&dingdoneWidget.toggle(theLinkWidget)}return value},getPageId:function(){return $scope.pageId},refreshView:function(value,resource,iscallback){var me=$scope.eachAttr,attribute_link=me.attribute_link&&Object.keys(me.attribute_link).length?me.attribute_link:null;if(me&&!attribute_link&&dingdoneWidget.refreshView({id:me.id,attribute_key:me.attribute_key,value:value},resource,iscallback),me&&attribute_link){var theLinkAttr=attribute_link[value];angular.forEach(theLinkAttr,function(attrVal,attrKey){dingdoneWidget.refreshView({id:me.id,attribute_key:attrKey,value:attrVal},resource,iscallback)}),dingdoneWidget.refreshViewWithLink(attribute_link[value])}if(me&&me.widget_link){var theLinkWidget=me.widget_link[value+""];dingdoneWidget.toggle(theLinkWidget)}}}),$scope.$on("toggleWidget",function(event,theLinkWidget){var id=$scope.eachAttr.id;theLinkWidget&&theLinkWidget[id]&&theLinkWidget[id].attrs&&($scope.eachAttr.attrs=theLinkWidget[id].attrs)})},controller:function($scope){this.compile=function(childScope,dom){if(childScope.children){var html='<dingdone-widget-item ng-repeat="eachAttr in children" each-attr="eachAttr"></dingdone-widget-item>';$compile(html)(childScope).appendTo(dom)}},this.setValue=function(value,resource,iscallback){$scope.vm.refreshView(value,resource,iscallback)},this.getPageId=function(){return $scope.pageId},this.getValue=function(){return $scope.vm.getValue()}}}}])});