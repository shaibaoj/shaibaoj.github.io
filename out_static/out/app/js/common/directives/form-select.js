"use strict";define(function(require){var app=require("app");app.directive("formSelect",["$filter",function($filter){return{restrict:"EA",scope:{selected:"=",configdata:"=",nokey:"@",placeholder:"@",disabled:"=",change:"&",keyunique:"@",valueunique:"@",dropclass:"@",widgetWidth:"=",hasEmptySelect:"@",emptySelectName:"@",emptySelectReturn:"@"},replace:!0,templateUrl:"common/directives/form-select.html",link:function(scope,el,attrs,ctrl){if(scope.dropclass=scope.dropclass?scope.dropclass:"dropdown",scope.widgetWidth=scope.widgetWidth?scope.widgetWidth:"wd150",scope.keyunique=scope.keyunique?scope.keyunique:"id",scope.valueunique=scope.valueunique?scope.valueunique:"name",scope.hasEmptySelect){scope.emptySelectName=scope.emptySelectName||"--请选择--",scope.emptySelectReturn=scope.emptySelectReturn||"null";var empty_select_item=null;scope.nokey?empty_select_item=scope.emptySelectName:(empty_select_item={},empty_select_item[scope.keyunique]=scope.emptySelectReturn,empty_select_item[scope.valueunique]=scope.emptySelectName),scope.configdata=[empty_select_item].concat(scope.configdata)}scope.selectValue=function(item){scope.selected=scope.nokey?item:item[scope.keyunique],scope.name=scope.nokey?(""+item).replace(/\s/g,""):(""+item[scope.valueunique]).replace(/\s/g,""),scope.change&&scope.change({value:scope.selected,name:scope.name})},scope.$watch("configdata",function(_new,_old,scope){!scope.selected&&void 0!==scope.configdata&&scope.configdata.length>0})}}}])});