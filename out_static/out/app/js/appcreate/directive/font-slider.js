"use strict";define(function(require){var app=require("app");app.directive("fontSlider",function(){return{scope:{weight:"=",max:"=",min:"=",step:"="},restrict:"AE",templateUrl:"appcreate/directive/font-slider.html",replace:!0,link:function(scope,element,attrs,controller){angular.extend(scope,{init:function(){scope.slider=element.find(".dingdone-slider"),scope.show=!0,scope.weight=scope.weight?scope.weight:0,scope.InitialInstant(),scope.showSliderInfo()},InitialInstant:function(){scope.slider.slider({value:parseInt(scope.weight),slide:function(event,ui){scope.$apply(function(){scope.weight=ui.value,console.log(scope.weight,"scope.weight")})},max:parseInt(scope.max||100),min:parseInt(scope.min||0),step:parseInt(scope.step||1)})},showSliderInfo:function(){scope.sliderContant=element.find(".ui-slider-handle"),scope.$watch("weight",function(newval,oldval){console.log(scope.weight,"scope.weight",newval,"newval"),A.isUndefined(newval)||(1==newval&&(scope.sliderText="小号"),2==newval&&(scope.sliderText="中号"),3==newval&&(scope.sliderText="大号")),A.isUndefined(scope.sliderText)&&(scope.sliderText="小号"),scope.sliderContant[0].innerHTML=scope.sliderText})}}),scope.init()}}})});