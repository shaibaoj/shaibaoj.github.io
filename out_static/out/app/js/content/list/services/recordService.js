"use strict";define(function(require){var app=require("app");app.service("RecordService",["$q","http","config",function($q,http,config){var ModifyRecord=function(url,data){return http(url,{method:"post",data:data})};return{getRecordDetail:function(contentId,modelId){var url=config.getAPI("contentModelV3.recorddetial").replace("{contentId}",contentId).replace("{modelId}",modelId);return http(url)},createRecord:function(options){var url=config.getAPI("contentModelV3.recordcreate");return ModifyRecord(url,options)},updateRecord:function(options){var url=config.getAPI("contentModelV3.recordupdate");return ModifyRecord(url,options)},deleteRecord:function(options){var url=config.getAPI("contentModelV3.recorddelete");return ModifyRecord(url,options)},getRecordList:function(data){var url=config.getAPI("contentModelV3.recordlist");return ModifyRecord(url,data)}}}])});