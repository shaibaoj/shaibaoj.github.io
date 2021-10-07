"use strict";define(function(require){var app=require("app"),server=require("./server");app.factory("modelService",["$state","$rootScope","$q","http","config","navconfig","$timeout",function($state,$rootScope,$q,http,config,navconfig,$timeout){var _modelFieldsScope=["default","filter","binding"],_modelFieldsCache={filter:{},binding:{},"default":{}},_getFieldHook=function(modelId,scope){return _modelFieldsCache[scope][modelId]||(_modelFieldsCache[scope][modelId]={}),_modelFieldsCache[scope][modelId]},_ajaxModelFields=function(modelId,scope){var defer=$q.defer(),hook=_getFieldHook(modelId,scope),url=config.getAPI("contentModelV3.fieldsForCondition").replace("{modelId}",modelId);return scope&&"default"!=scope&&(url+="?scope="+scope),hook.xhr||(hook.xhr=http(url)),hook.xhr.then(function(json){hook.result=json.result,defer.resolve(hook.result)}),defer.promise},services={init:function(){return this.fetchModelList("normal",!0)},getModelDetail:function(modelId){var defer=$q.defer(),url=config.getAPI("contentModelV3.modeldetail").replace("{id}",modelId);return http(url).then(function(json){json.error_code?utils.error(json.error_message):defer.resolve(json.result)}),defer.promise},getDataTypeList:function(){var deferred=$q.defer(),_this=this,url=config.getAPI("contentModelV3.fielddatatype");return this.dataTypeList?deferred.resolve({list:_this.dataTypeList,dictionary:_this.dataTypeListDic}):(this.timeoutId&&$timeout.cancel(this.timeoutId),this.timeoutId=$timeout(function(){http(url).then(function(json){_this.dataTypeList=json.result,_this.dataTypeListDic=_this.doDataTypeListDic(),deferred.resolve({list:_this.dataTypeList,dictionary:_this.dataTypeListDic})})},10)),deferred.promise},doDataTypeListDic:function(){var dic={};return this.dataTypeList.forEach(function(dataType){dic[dataType.key]=dataType.name}),dic},getWidgetTypeList:function(){var deferred=$q.defer(),_this=this,url=config.getAPI("contentModelV3.fieldwidgettype");return this.widgetTypeLis?deferred.resolve(this.widgetTypeLis):http(url).then(function(json){_this.widgetTypeLis=json.result,deferred.resolve(_this.widgetTypeLis)}),deferred.promise},getFieldTypeData:function(){var deferred=$q.defer(),_this=this,url=config.getAPI("contentModelV3.fieldtype");return this.fieldType?deferred.resolve(this.fieldType):http(url).then(function(result){_this.fieldType=result.result,deferred.resolve(_this.fieldType)}),deferred.promise},fetchModelList:function(){var flag=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"normal",forbidden_cache=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"false",_this=this,url=config.getAPI("contentModelV3.diymodellist"),defer=$q.defer();return this[flag+"modellist"]&&!forbidden_cache?(_this.divisionEshopModel(_this[flag+"modellist"]),defer.resolve(this[flag+"modellist"])):http(url,{method:"get",params:{scope:flag}}).then(function(json){_this[flag+"modellist"]=json.result,_this.divisionEshopModel(_this[flag+"modellist"]),defer.resolve(json.result)}),defer.promise},divisionEshopModel:function(data){var obj={shopmodel:[],normalmodel:[]};angular.forEach(data,function(item,index){item.is_ecommerce?obj.shopmodel.push(item):obj.normalmodel.push(item)}),$rootScope.contentMenuList=angular.copy(obj)},refreshModelList:function(){this.fetchModelList("normal",!0)},modelfields:{},fetchModelFields:function(params){var modelId=params.modelId,defer=$q.defer();return modelId?!function(){var scope=params.scope||"default",hook=_getFieldHook(modelId,scope);params.cache===!1?(hook.xhr=null,hook.result=null,_ajaxModelFields(modelId,scope).then(function(){defer.resolve(hook.result)})):hook.result?defer.resolve(hook.result):_ajaxModelFields(modelId,scope).then(function(){defer.resolve(hook.result)})}():defer.resolve({}),defer.promise},refreshModelField:function(model,action){var modelId=model.id;if(this.modelfields[modelId]=model.fields,"delete"===action)delete this.modelfields[modelId];else{var _iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_iterator=_modelFieldsScope[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){var scope=_step.value;this.fetchModelFields({modelId:modelId,scope:scope,cache:!1})}}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{!_iteratorNormalCompletion&&_iterator["return"]&&_iterator["return"]()}finally{if(_didIteratorError)throw _iteratorError}}this.fetchQuoteModelFields({modelId:modelId,cache:!1})}},quoteModelFieldsCache:{},_getQuoteModelFieldsHook:function(modelId){return this.quoteModelFieldsCache[modelId]||(this.quoteModelFieldsCache[modelId]={}),this.quoteModelFieldsCache[modelId]},fetchQuoteModelFields:function(params){var _this2=this,modelId=params.modelId,deferred=$q.defer();return modelId?!function(){var url=config.getAPI("contentModelV3.fieldQuote").replace("{modelId}",modelId),hook=_this2._getQuoteModelFieldsHook(modelId);params.cache===!1&&(hook.httpCache=null,hook.result=null),hook.httpCache||(hook.httpCache=http(url,{method:"get",params:{scope:params.scope||"binding"}})),hook.httpCache.then(function(json){hook.result=json.result,deferred.resolve(hook.result)})}():deferred.resolve({}),deferred.promise},resetModelList:function(){this.normalmodellist=null},setnavConfig:function(modellist,callback){server.version&&"medium"==server.version&&this.initMediumNav(modellist,callback)},initContentNav:function(modellist,callback){},initMediumNav:function(modellist,callback){navconfig.navmenus.medium.modules=[],angular.forEach(modellist,function(model,key){if($.inArray(model.slug,_.pluck(config.mediumType,"key"))!=-1){var currenttype=_.filter(config.mediumType,function(type){return type.key==model.slug})[0];navconfig.navmenus.medium.modules.push({name:currenttype.displayname,unique:model.id,href:config.mediumItems[model.slug]+"/"+model.id,orderid:currenttype.sort}),navconfig.breadcrumb.medium[model.id]={breadcrumb:[{name:currenttype.displayname,active:!0}],unique:model.id}}}),navconfig.navmenus.medium.modules=_.sortBy(navconfig.navmenus.medium.modules,"orderid"),angular.isFunction(callback)&&callback()},getNodeName:function(node_id){var url=config.getAPI("contentModelV3.nodename").replace("{node_id}",node_id),defer=$q.defer();return this[node_id+"defer"]=defer,this.timeouttNodeId&&$timeout.cancel(this.timeouttNodeId),this.timeouttNodeId=$timeout(function(){http(url).then(function(json){+json.error_code?defer.resolve():defer.resolve(json.result.name)})["catch"](function(e){defer.resolve()})},100),this[node_id+"defer"].promise},setContentformConfig:function(modelId,breadcrumbGroup,breadcrumbKey){modelId&&angular.forEach(navconfig.navmenus[breadcrumbGroup].modules,function(menu,key){if(modelId==menu.unique)return navconfig.breadcrumb[breadcrumbGroup][breadcrumbKey].breadcrumb[0]={name:menu.name,unique:menu.unique,href:menu.href},!1})}};return services}])});