"use strict";define(function(require){var app=require("app"),server=require("common/services/server");app.directive("dingdoneFooter",["config",function(config){return{restrict:"EA",replace:!0,templateUrl:"common/directives/dingdone-footer.html",link:function(scope,element,attrs){scope.version=server.version}}}])});