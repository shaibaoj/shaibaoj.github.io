"use strict";define(function(require){var app=require("app");require("moment");require("./dingdone-bind-modal"),require("common/services/dingdone_selector_service"),require("common/directives/model/dingdone-condition"),require("common/services/modelService"),app.directive("dingdoneBind",function($rootScope,config,http,utils,$q,$modal,dingdoneSelectorService,$stateParams,modelService){return{scope:{model:"=",pageId:"=",mapping:"=",keyList:"=",title:"=",currentkey:"=",pageModelId:"=",advanceConfig:"=",hideConfig:"=",view:"=",forbidParams:"=",currentCompConfig:"=",selfmodel:"=",hideView:"="},replace:!0,templateUrl:"common/directives/model/dingdone-bind.html",link:function($scope){var vm=$scope.vm={};angular.extend(vm,{title:$scope.title||["显示字段","内容字段"],selector:{},init:function(isReset){$scope.mapping=$scope.mapping||{},this.loading=!0,vm.initData()},initData:function(){var _this=this,defer=$q.defer();return($scope.model&&$scope.model.id||$scope.pageModelId)&&$scope.keyList?dingdoneSelectorService.init({pageId:$scope.pageId,model:$scope.model,pageModelId:$scope.pageModelId,currentCompConfig:$scope.currentCompConfig,scope:"binding"}).then(function(result){_this.selector=result,defer.resolve(result)}):$scope.keyList&&$scope.selfmodel?dingdoneSelectorService.initGlobal({pageId:$scope.pageId}).then(function(result){_this.selector=result,angular.forEach($scope.selfmodel.fields,function(field){_this.selector.dictionary[field.key]=field.name}),_this.selector.modelList.push($scope.selfmodel),defer.resolve(result)}):dingdoneSelectorService.initGlobal({pageId:$scope.pageId}).then(function(result){_this.selector=result,defer.resolve(result)}),defer.promise},hasAdvance:function(unit){return!$scope.advanceConfig||unit.data_types||$scope.hideConfig?!(!$scope.advanceConfig||!$scope.mapping[unit.key]||$scope.hideConfig||!vm.getCname(unit.key)&&!$scope.mapping[unit.key].value)&&1:2},regularConfig:["固定文本","固定图片"],getCname:function(unitKey,unitName){var field=$scope.mapping[unitKey],unitValueKey=field?field.field_key:"";return unitValueKey?unitValueKey.indexOf("node.")>-1?vm.getNodeName(unitValueKey):vm.selector.dictionary&&vm.selector.dictionary[unitValueKey]:!unitValueKey&&field&&(field.tpl_text||field.value)?decodeURIComponent(field.tpl_text||field.value):unitName&&unitName.indexOf(this.regularConfig)>-1?unitName:""},nodeNameCache:{},getNodeName:function(unitValueKey){var node_id=unitValueKey.split(".")[1];return this.nodeNameCache[node_id]?this.nodeNameCache[node_id]:node_id?void modelService.getNodeName(node_id).then(function(data){return vm.nodeNameCache[node_id]=data,vm.nodeNameCache[node_id]}):""},initValueShow:function(unit){var field=$scope.mapping[unit.key];return"switch"==unit.widget_type?field.tpl_text&&"0"!=field.tpl_text||field.value&&"0"!=field.value?"是":"否":decodeURIComponent(field.tpl_text||field.value)},changeUnit:function(item){$scope.currentkey=item.key,$rootScope.$broadcast("fieldHover",item.key)},leaveUnit:function(){$rootScope.$broadcast("fieldHover","leaveUnit")},showBindingPop:function($index){vm.loading=!1;var widget=$scope.keyList[$index],widgetKey=widget.key,fieldKey=$scope.mapping[widgetKey]?$scope.mapping[widgetKey].field_key:null,value=$scope.mapping[widgetKey]?$scope.mapping[widgetKey].value?$scope.mapping[widgetKey].value:$scope.mapping[widgetKey].tpl_text:"";vm.initData().then(function(data){vm.loading="complete",dingdoneSelectorService.showPop({selector:vm.selector,pageId:$scope.pageId,currentKey:fieldKey,currentValue:value,widgetKey:widgetKey,forbidParams:$scope.forbidParams,dataTypes:widget.data_types,widget_types:widget.widget_types,widget_type:widget.widget_type}).then(function(data){$scope.mapping[widgetKey]?"":$scope.mapping[widgetKey]={},data.key||void 0!=data.value?$scope.mapping[widgetKey].field_key==data.key&&$scope.mapping[widgetKey].field_key==data.value||(vm.delBinding(widgetKey),$scope.mapping[widgetKey].field_key=data.key,$scope.mapping[widgetKey].value=data.value,$scope.mapping[widgetKey].field_name=data.name,$scope.mapping[widgetKey].data_type=data.data_type):vm.delBinding(widgetKey)})})["catch"](function(){vm.loading="complete"})},showConfigPop:function($index,unit){var widget=$scope.keyList[$index],widgetKey=widget.key,keymapping=$scope.mapping[widgetKey]?$scope.mapping[widgetKey]:{},__ui_control__=$scope.advanceConfig[unit.key]||[];keymapping.field_name=unit.key&&this.getCname(unit.key),dingdoneSelectorService.showDataFormatPop(this.selector,$scope.pageId,unit,$scope.model,keymapping,__ui_control__,$scope.selfmodel,$scope.pageModelId,$scope.hideView).then(function(data){__ui_control__[0]=data.data,$scope.advanceConfig[unit.key][0]=data.data,keymapping.tpl_text=data.str})},delBinding:function(unitKey){$scope.mapping[unitKey]={},$scope.advanceConfig&&$scope.advanceConfig[unitKey]&&($scope.advanceConfig[unitKey][0]={})}}),$scope.$watch("model",function(newVal,oldVal){var isReset=newVal&&oldVal&&!angular.equals(newVal,oldVal);vm.init(isReset)},!0),$scope.$watch("keyList",function(newVal,oldVal){vm.init()}),$scope.$watch("pageModelId",function(newValue,oldValue){vm.init()},!0)}}})});