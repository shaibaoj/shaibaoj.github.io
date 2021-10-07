"use strict";define(function(require){var app=require("app");app.directive("datetimepicker",function($timeout){return{restrict:"A",require:"?ngModel",scope:{startDatetime:"@",endDatetime:"@",select:"&"},link:function(scope,element,attrs,ngModel){$.datepicker.setDefaults($.datepicker.regional["zh-CN"]),$.timepicker.setDefaults($.timepicker.regional["zh-CN"]);var init=function(){if(ngModel){var obj={onSelect:function(dateTimeTxt,picker){updateModel(dateTimeTxt),scope.select&&scope.$apply(function(){scope.select({date:dateTimeTxt})}),scope.startDatetime&&$("#"+scope.startDatetime).datetimepicker("option","maxDate",element.datetimepicker("getDate")),scope.endDatetime&&$("#"+scope.endDatetime).datetimepicker("option","minDate",element.datetimepicker("getDate"))}};"date"==attrs.datetimepicker?element.datepicker(angular.extend(obj,{dateFormat:"yy-mm-dd"})):"time"==attrs.datetimepicker?element.timepicker(angular.extend(obj,{showSecond:!0,controlType:"select",oneLine:!0,timeFormat:"HH:mm:ss"})):element.datetimepicker(angular.extend(obj,{controlType:"select",oneLine:!0,timeFormat:"HH:mm:ss",dateFormat:"yy-mm-dd",showSecond:!0}));var updateModel=function(dateTimeTxt){scope.$apply(function(){ngModel.$setViewValue(dateTimeTxt)})};ngModel.$render=function(){var befor_render_ngModel=angular.copy(ngModel);"date"==attrs.datetimepicker?element.datepicker("setDate",ngModel.$viewValue||""):"time"==attrs.datetimepicker?element.timepicker("setTime",ngModel.$viewValue||""):element.datetimepicker("setDate",ngModel.$viewValue||""),befor_render_ngModel.$viewValue||ngModel.$setViewValue("")},element.click(function(){$timeout(function(){scope.startDatetime&&$("#"+scope.startDatetime).datetimepicker("option","maxDate",element.datetimepicker("getDate")),scope.endDatetime&&$("#"+scope.endDatetime).datetimepicker("option","minDate",element.datetimepicker("getDate"))},100)})}};init()}}})});
