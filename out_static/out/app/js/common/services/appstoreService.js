"use strict";define(function(require){var app=require("app");require("common/services/server");app.factory("appStoreService",["$q","http","config","utils","$timeout",function($q,http,config,utils,$timeout){var services={};return angular.extend(services,{getStoreInfo:{buyAppStoreInfo:{},init:function(){this.buyAppStoreInfo={},this.buyAppStoreInfo={}},allXhr:function(){var defer=$q.defer(),_this=this,q1=$q.defer(),q2=$q.defer(),q3=$q.defer(),q4=$q.defer(),q5=$q.defer(),q6=$q.defer(),q7=$q.defer(),q8=$q.defer();this.getMarketInfo(q1),this.__getMarketInfo(q2),this.getAppStoreInfoIos(q3),this.__getAppStoreInfoIos(q4),this._getAppStoreInfoIos(q5),this.__getAppStoreInfoIos_(q6),this.getAppStoreInfoAnd(q7),this.__getAppStoreInfoAnd(q8);var allAjax=[q1.promise,q2.promise,q3.promise,q4.promise,q5.promise,q6.promise,q7.promise,q8.promise];return $q.all(allAjax).then(function(){defer.resolve(_this.buyAppStoreInfo),console.log(_this.buyAppStoreInfo,"_this.buyAppStoreInfo")}),defer.promise},getMarketInfo:function(q){var url=config.getAPI("getstoreinfo.appstoreremain").replace("{client_key}",2),_this=this;http(url).then(function(data){data&&0==data.error_code&&(_this.buyAppStoreInfo.buy_ios=data.result.remain_times),q.resolve()})},__getMarketInfo:function(q){var _url=config.getAPI("getstoreinfo.appstoreremain").replace("{client_key}",1),_this=this;http(_url).then(function(data){data&&0==data.error_code&&(_this.buyAppStoreInfo.buy_android=data.result.remain_times),q.resolve()})},getAppStoreInfoIos:function(q){var url=config.getAPI("getstoreinfo.appstoreinfo").replace("{client_key}",2).replace("{is_self}",0),_this=this;http(url).then(function(resp){resp&&0==resp.error_code&&(_this.buyAppStoreInfo.iosStatus=resp.result.status),q.resolve()})},__getAppStoreInfoIos:function(q){var _url=config.getAPI("getstoreinfo.appstorerecord").replace("{client_key}",2).replace("{is_self}",0),_this=this;http(_url).then(function(resp){resp&&0==resp.error_code&&(_this.buyAppStoreInfo.iosRecord=resp.result),q.resolve()})},_getAppStoreInfoIos:function(q){var url=config.getAPI("getstoreinfo.appstoreinfo").replace("{client_key}",2).replace("{is_self}",1),_this=this;http(url).then(function(resp){resp&&0==resp.error_code&&(_this.buyAppStoreInfo.selfIosStatus=resp.result.status),q.resolve()})},__getAppStoreInfoIos_:function(q){var _url=config.getAPI("getstoreinfo.appstorerecord").replace("{client_key}",2).replace("{is_self}",1),_this=this;http(_url).then(function(resp){resp&&0==resp.error_code&&(_this.buyAppStoreInfo.selfIosRecord=resp.result),q.resolve()})},getAppStoreInfoAnd:function(q){var url=config.getAPI("getstoreinfo.appstoreinfo").replace("{client_key}",1).replace("{is_self}",0),_this=this;http(url).then(function(resp){resp&&0==resp.error_code&&(_this.buyAppStoreInfo.AndStatus=resp.result.status),q.resolve()})},__getAppStoreInfoAnd:function(q){var _url=config.getAPI("getstoreinfo.appstorerecord").replace("{client_key}",1).replace("{is_self}",0),_this=this;http(_url).then(function(resp){resp&&0==resp.error_code&&(_this.buyAppStoreInfo.andRecord=resp.result),q.resolve()})}}}),services}])});