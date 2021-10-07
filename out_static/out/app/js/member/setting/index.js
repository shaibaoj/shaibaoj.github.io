"use strict";define(function(require){var app=require("app"),Clipboard=require("clipboard");require("member/modal/templatePreview"),app.controller("MemberSettingCtrl",["$rootScope","$scope","$state","$stateParams","utils","http","config","navconfig","localStorages",function($rootScope,$scope,$state,$stateParams,utils,http,config,navconfig,localStorages){var vm=$scope.vm={},clipboard=new Clipboard(".clipbtn");angular.extend(vm,{utils:utils,init:function(){vm.guid=$stateParams.guid,vm.loading=!0,vm.itemNavbar="relationship",vm.check=!0,vm.relation_ship(),vm.copyLink()},changeNavbar:function(item){if(vm.itemNavbar==item)return!1;switch(vm.itemNavbar=item,vm.itemNavbar){case"relationship":vm.relation_ship();case"members-invited":vm.member_invited();case"member-info":vm.member_info();case"register":vm.register_login();default:vm.relation_ship()}},relation_ship:function(){var url=config.getAdminAPI("relation_ship_config").replace("{guid}",vm.guid);http(url).then(function(data){data&&0==data.error_code&&(vm.disposeRelation_ship(data),vm.loading="complete")})},disposeRelation_ship:function(data){vm.relationship=data.result,vm.buildMode=vm.relationship.member_relationship_build_mode,vm.relation=vm.relationship.blacklist_enable,vm.message=vm.relationship.message_enable,vm.feed=vm.relationship.feed_enable},navChange:function(item){vm.buildMode=item},changerekationship:function(){"false"==vm.relation?"true"==vm.relation:("false"==vm.relation,vm.message="false",vm.feed="false")},saveRelationship:function(){var param={member_relationship_build_mode:vm.buildMode,blacklist_enable:vm.relation,message_enable:vm.message,feed_enable:vm.feed},url=config.getAdminAPI("relation_ship").replace("{guid}",vm.guid);http(url,{method:"post",data:param}).then(function(data){data&&0==data.error_code&&utils.success("修改成功!")})},member_invited:function(){var url=config.getAdminAPI("memberinvited_config").replace("{guid}",vm.guid);http(url).then(function(data){data&&0==data.error_code&&vm.disposeMember_invited(data)})},disposeMember_invited:function(data){vm.membersInvited=data.result,vm.openInvited=vm.membersInvited.member_invite,vm.sharepage=vm.membersInvited.social_app_media,vm.phoneOrEmail=vm.membersInvited.member_to_member},changemember_invited:function(){vm.sharepage=vm.openInvited},editorMuban:function(){utils.mdDialog({controller:"templatePreview",templateUrl:"member/modal/templatePreview.html",multiple:!1,clickOutsideToClose:!1})},saveMemberInvited:function(){var param={member_invite:!!vm.openInvited,social_app_media:!!vm.sharepage,member_to_member:!!vm.phoneOrEmail},url=config.getAdminAPI("memberinvited").replace("{guid}",vm.guid);http(url,{method:"post",data:param}).then(function(data){data&&0==data.error_code&&utils.success("修改成功!")})},getLocalParam:function(data){var picurl=localStorages.get("paramUrl"),txturl=localStorages.get("paramTxt"),param={background:picurl,brief:txturl};if(void 0!=param.background&&void 0!=param.brief){var url=config.getAdminAPI("invite_page");http(url,{method:"post",data:param}).then(function(data){data&&0==data.error_code&&vm.saveMemberInvited()})}else vm.saveMemberInvited()},member_info:function(){var url=config.getAdminAPI("open_config").replace("{guid}",vm.guid);http(url).then(function(data){data&&0==data.error_code&&vm.disposeMember_info(data)})},disposeMember_info:function(data){vm.memberInfo=data.result,vm.ddthirdToDd=vm.memberInfo.receive_profile,vm.DdtoThird=vm.memberInfo.push_profile,vm.DdtoThird_url=vm.memberInfo.push_url,vm.ddMemberLogin=vm.memberInfo.login_proxy,vm.ddMemberLogin_url=vm.memberInfo.login_proxy_url,vm.ddChangePwd=vm.memberInfo.password_modify_proxy,vm.ddChangePwd_url=vm.memberInfo.password_modify_proxy_url,vm.thirdParty_to_dingDone_url=vm.memberInfo.sync_url,vm.is_member_register_open=vm.memberInfo.register_proxy,vm.member_register_url=vm.memberInfo.register_proxy_url},checkinputbox:function(){utils.error("请输入接口地址!"),vm.check=!1},saveMemberInfo:function(){var param={receive_profile:vm.ddthirdToDd,push_profile:vm.DdtoThird,push_url:vm.DdtoThird_url,login_proxy:vm.ddMemberLogin,login_proxy_url:vm.ddMemberLogin_url,password_modify_proxy:vm.ddChangePwd,password_modify_proxy_url:vm.ddChangePwd_url,register_proxy:vm.is_member_register_open,register_proxy_url:vm.member_register_url};1==vm.DdtoThird?""==vm.DdtoThird_url&&vm.checkinputbox():(delete param.push_url,vm.check=!0,1==vm.ddMemberLogin?""==vm.ddMemberLogin_url&&vm.checkinputbox():(delete param.login_proxy_url,vm.check=!0,1==vm.ddChangePwd?""==vm.ddChangePwd_url&&vm.checkinputbox():(delete param.password_modify_proxy_url,vm.check=!0))),vm.check===!0?vm.is_member_register_open===!0?vm.member_register_url||vm.checkinputbox():delete param.register_proxy_url:vm.check=!1;var url=config.getAdminAPI("open").replace("{guid}",vm.guid);0!=vm.check&&http(url,{method:"post",data:param}).then(function(data){0==data.error_code&&utils.success("修改成功!")})},register_login:function(){var url=config.getAdminAPI("register_login_config").replace("{guid}",vm.guid);http(url).then(function(data){data&&0==data.error_code&&vm.disposeRegister_login(data)})},disposeRegister_login:function(data){vm.registerLogin=data.result,vm.ddOpenLogin=vm.registerLogin.registry_enable,vm.ddmobile_register=vm.registerLogin.mobile_register,vm.ddemail_register=vm.registerLogin.email_register,vm.regist_status_cache={mobile:vm.registerLogin.mobile_register,email:vm.registerLogin.email_register}},changeddOpenLogin:function(){vm.ddOpenLogin?(vm.ddmobile_register=vm.regist_status_cache.mobile,vm.ddemail_register=vm.regist_status_cache.email):(vm.ddmobile_register=vm.ddOpenLogin,vm.ddemail_register=vm.ddOpenLogin)},change_mobile_regist:function(){vm.regist_status_cache.mobile=vm.ddmobile_register,console.log(vm.regist_status_cache)},change_email_regist:function(){vm.regist_status_cache.email=vm.ddemail_register},saveRegisterLogin:function(){var param={registry_enable:vm.ddOpenLogin,mobile_register:vm.ddmobile_register,email_register:vm.ddemail_register,third_part_login:vm.ddthird_part_login},url=config.getAdminAPI("register_login").replace("{guid}",vm.guid);http(url,{method:"post",data:param}).then(function(data){data&&0==data.error_code&&utils.success("修改成功!")})},copyLink:function(){clipboard.on("success",function(e){console.log("复制成功",e),e.clearSelection(),utils.success("复制成功")}),clipboard.on("error",function(e){if(0==vm.ddthirdToDd)return!1})},changeStateToIndex:function(){$state.go("mainLayout.index")}}),$scope.$on("checkApp",function(event,first_appinfo){$rootScope.appname=first_appinfo.name,vm.init()})}])});