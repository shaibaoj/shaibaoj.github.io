var vmminxCommonData={methods:{navToPage:function(path){window.location.href=path},navAction:function(item){item.action.path?this.navTo(item.action.path,item.action.params):"load_action"===item.action.actionh5?this.loadAction(item.action):"web"!==item.action.actionh5&&"copy"!==item.action.actionh5||this.openWeb(item.action)},loadAction:function(action){var self=this,options={};options=Object.assign(options,action.params),ajaxPost("/cms/load/view",options,function(res){0==res.info.status&&self.navAction(res.data.item)},function(){})},openWeb:function(action){window.location.href=action.params.webUrl},navTo:function(path,params){var paramsUrl=parseParams(params);window.location.href=path+"?"+paramsUrl},toNav:function(item){this.navAction(item)}}};