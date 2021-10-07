"use strict";define(function(require){require("../../services/appMakeService"),require("common/modal/modal-header"),require("common/modal/modal-footer"),require("common/directives/form-select"),require("common/directives/superui/dingdone_widget");var app=require("app");app.controller("AppGuideCtrl",["$scope","$timeout","utils","config","upload","guidePopData","appMakeService","$mdDialog",function($scope,$timeout,utils,config,upload,guidePopData,appMakeService,$mdDialog){var vm=$scope.vm={};A.extend(vm,{utils:utils,guide:{},guideEffectList:config.guideEffectList,animationList:config.animationList,shapeList:config.shapeList,guideSignList:config.guideSignList(),cacheBgImg1:[],cacheBgImg2:[],form_scheme_font:[{attribute_key:"font_color",attribute_link:null,attrs:{enabled_alpha:!1},children:[],description:"",id:"w_font_color",title:"默认字体颜色",widget:"color",widget_link:null}],form_scheme_font1:[{attribute_key:"font_color",attribute_link:null,attrs:{enabled_alpha:!1},children:[],description:"",id:"w_font_color",title:"选中字体颜色",widget:"color",widget_link:null}],init:function(){vm.colorpickerOption=angular.extend(config.colorpickerDefault,{}),_.isEmpty(guidePopData.guide)?this.initAdd():this.initEdit(),this.initLoading(),this.initAnimatePosition()},addFFstr:function(str){return"#ff"+str.substr(1)},initEdit:function(){console.log(guidePopData,"app_guide.js"),vm.guide=angular.copy(guidePopData.guide),vm.guide.guide_effect=vm.guide.guide_effect?vm.guide.guide_effect:"effect1",vm.changeGuideSign(vm.guide.guide_sign),vm.guide.fgImg=vm.guide.fgImg?vm.guide.fgImg:[],vm.guide.bgImg=vm.guide.bgImg?vm.guide.bgImg:[],$.inArray(vm.guide.guide_sign,vm.shapeList)!=-1&&(vm.guide.shape=vm.guide.guide_sign,vm.guide.guide_sign="shape"),vm.guide.shape&&(vm.guide.guide_sign="shape"),vm.guide.guide_default_color&&(vm.first_default_color=vm.addFFstr(vm.guide.guide_default_color),vm.guide.guide_default_color=vm.guide.guide_default_color),vm.guide.guide_select_color&&(vm.first_select_color=vm.addFFstr(vm.guide.guide_select_color),vm.guide.guide_select_color=vm.guide.guide_select_color),vm.colorpickerOption1={font_color:vm.first_default_color||"#ff000000"},vm.colorpickerOption2={font_color:vm.first_select_color||"#ffffffff"}},initAdd:function(){vm.guide.guide_effect="effect1",vm.guide.guide_animation=0,vm.guide.guide_sign="null",vm.guide.shape="●",vm.guide.fgImg=[],vm.guide.bgImg=[],vm.colorpickerOption1={font_color:"#ff000000"},vm.colorpickerOption2={setting:"#ffffffff"}},initLoading:function(){D.forEach(["fg","bg"],function(v){vm.guide[v+"ImgLoading"]="init"})},changeGuideSign:function(type){vm.guide.guide_sign=type?type:"null","shape"!==vm.guide.guide_sign&&(vm.guide.shape=null)},changeShape:function(type){vm.guide.shape=type},upload:function(file,flag){"create"===guidePopData.from?this._upload(file,flag):this.__upload(file,flag)},_upload:function(file,flag){var type=1===flag?"fg":"bg",url=config.getAPI("uploadMaterial");vm.guide[type+"ImgLoading"]=null,upload(url,file,160,284,"guideImage").then(function(pic){var obj={info:pic};vm.guide[type+"Img"].push(obj),vm.guide[type+"ImgLoading"]="complete"},function(reason){vm.guide[type+"ImgLoading"]="fail"})},__upload:function(file,flag){var type=1===flag?"fg":"bg";console.log("上传的flag",flag,type),vm.guide[type+"ImgLoading"]=null,appMakeService.storeGuidePic(vm.guid,flag,file).then(function(data){vm.guide[type+"Img"].push(data.result.guide_picture),vm.guide[type+"ImgLoading"]="complete"})["catch"](function(data){vm.guide[type+"ImgLoading"]="fail",data.error_code?utils.error(data.error_message):utils.error("上传失败!")})},changeDefaultColor:function(info){vm.guide.guide_default_color="#"+info.attrs.value.substr(3)},changeSelectColor:function(info){vm.guide.guide_select_color="#"+info.attrs.value.substr(3)},save:function(){var obj=A.copy(vm.guide);"shape"===obj.guide_sign&&(obj.guide_sign=obj.shape),$mdDialog.hide({guide:obj}),console.log(obj,"待提交数据!")},delFgImg:function(index,picid){appMakeService.deleteGuidePic(picid).then(function(data){console.log("picid",picid),vm.guide.fgImg.splice(index,1),utils.success("删除前景图成功!")})["catch"](function(){utils.error("删除前景图失败!")})},delBgImg:function(index,picid){appMakeService.deleteGuidePic(picid).then(function(data){vm.guide.bgImg.splice(index,1),console.log("删除后的数据cacheBgImg1",vm.cacheBgImg1),console.log("删除后的数据cacheBgImg2",vm.cacheBgImg2),utils.success("删除后景图成功!")})["catch"](function(){utils.error("删除后景图失败!")})},sortImg:function(){var data={};appMakeService.sortGuidePic(data).then(function(data){console.log(" 排序成功! ")})["catch"](function(){utils.error("排序出错!")})},initAnimatePosition:function(){vm.fgAnimateStyle={position:"absolute",top:0,left:0,opacity:1}},fgAnimateType:function(type){return 0===type?void vm.initAnimatePosition():(1==type?vm.fgAnimateClass="animated fadeInRight":2==type?vm.fgAnimateClass="animated zoomOutLeft":3==type&&(vm.fgAnimateClass="animated slideOutLeft"),void $timeout(function(){vm.initAnimatePosition(),vm.fgAnimateClass=""},1e3))},dealBgImg:function(type){"effect2"==type?vm.bgTipinfo="备注:当前效果下，默认第一张图为背景图，此处支持拖动图片排序.":"effect3"==type&&(vm.bgTipinfo="备注:前/后景图皆支持拖动排序，显示相应图片")}}),vm.init(),$scope.$watch("vm.guide.guide_animation",function(newval,oldval){newval!=oldval&&vm.fgAnimateType(newval)}),$scope.$watch("vm.guide.guide_effect",function(newval,oldval){console.log("effect",newval),vm.dealBgImg(newval)})}])});