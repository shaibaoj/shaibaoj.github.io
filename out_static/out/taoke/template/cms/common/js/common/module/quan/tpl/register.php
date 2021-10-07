
<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <title>用户注册-<?php echo $user_cms['siteName']; ?></title><!--网站标题-->
        <meta name="description" content="<?php echo $user_cms['description']; ?>"/>
        <meta name="keywords" content="<?php echo $user_cms['keywords']; ?>"/>
<?php include(constant("TAOKE_TEMPLATE_PATH")."/cms/".$taoke_cms['path'].'/util/dns.php');?>
<?php include(constant("TAOKE_TEMPLATE_PATH")."/cms/".$taoke_cms['path'].'/util/link.php');?>
<link rel="stylesheet" type="text/css" href="<?php echo $url_prefix_item['search_static_css']; ?>/taoke/template/cms/<?php echo $taoke_cms['path']; ?>/css/baby_list.css?v=20170209">
</head>
<body>
<?php include(constant("TAOKE_TEMPLATE_PATH")."/cms/".$taoke_cms['path'].'/util/top.php');?>
<?php include(constant("TAOKE_TEMPLATE_PATH")."/cms/".$taoke_cms['path'].'/util/header.php');?>
<?php include(constant("TAOKE_TEMPLATE_PATH")."/cms/".$taoke_cms['path'].'/util/header-banner.php');?>

<div class="tk-list-choice page-all mb20">
	<div class="list-choice-first clearfix">
		
	</div>
</div>
<div class="list-info page-all mb30">
	<div class="login-main">
                
	    <div class="login-content">
	        <div class="title"><span class="hd">新用户注册</span>
	        	<p class="other">已有账号，<a href="<?php echo $model_base_url; ?>?action=login" rel="nofollow">立即登录</a></p>
	        </div>
	        <div class="login-center">
	            <div class="content-landing fl">
                    <ul>
                        <li class="">
                            <label class="normal">用户名：</label>
                            <input type="text" class="normal-input" id="user_name" name="user_name" autocomplete="off" tabindex="1">
                            <div class="error-box " id="user_name_warn" warn="帐号"></div>                            
                        </li>
                        <li class="set-password">
                            <label class="normal">创建密码：</label>
                            <input type="password" class="normal-input" id="password" name="password" autocomplete="off" tabindex="2">
                            <div class="error-box" id="password_warn" warn="6-16个数字、字母或符号，字母区分大小写"></div>
                        </li>
                        <li>
                            <label class="normal">确认密码：</label>
                            <input type="password" class="normal-input" id="confirm_password" name="confirm_password" autocomplete="off" tabindex="3">
                            <div class="error-box" id="confirm_password_warn" warn="请再次输入密码"></div>
                        </li>
                        <li class="">
                            <label class="normal">QQ(选填)：</label>
                            <input type="text" class="normal-input" id="qq" name="qq" autocomplete="off" tabindex="1">
                            <div class="error-box " id="qq_warn" warn="qq号码"><strong class="error "></strong><p class="msg_error"></p></div>                            
                        </li>
                        <li class="">
                            <label class="normal">手机(选填)：</label>
                            <input type="text" class="normal-input" id="mobile" name="mobile" autocomplete="off" tabindex="1">
                            <div class="error-box " id="mobile_warn" warn="请输入11位手机号"><strong class="error "></strong><p class="msg_error"></p></div>                            
                        </li>
                        <li class="">
                            <label class="normal">邮箱(选填)：</label>
                            <input type="text" class="normal-input" id="email" name="email" autocomplete="off" tabindex="1">
                            <div class="error-box " id="email_warn" warn="邮箱地址"><strong class="error "></strong><p class="msg_error"></p></div>                            
                        </li>
                        <li>
                            <label class="normal"></label>
                            <div class="btn">
                                <input type="button" id="btn-register" class="sub smt-o" value="立即注册" autocomplete="off">
                                <span id="loading"></span> </div>
                        </li>

                    </ul>
	                
	            </div>
	            <div class="login-l-img fr mr10" style="width:338px;"> 
	            	<img  src="<?php echo $url_prefix_item['search_static_css']; ?>/taoke/template/cms/<?php echo $taoke_cms['path']; ?>/images/member/login-bj-ad01.png" alt="" />
	                <div class="line"></div>
	                <!-- <div class="third-login">
	                    <div class="union-login">
	                        <p class="union-title"><span>无需注册，快捷登录</span></p>
	                        <div class="third-box">
	                            <a class="qq" href="#"></a>
	                            <a href="#" class="weixin"></a>
	                            <a class="sina" href="#"></a>
	                            <a href="#" class="taobao"></a>
	                        </div>
	                    </div>
	                </div> -->
	            </div>

	        </div>
	    </div>
    </div>

</div>
<?php include(constant("TAOKE_TEMPLATE_PATH")."/cms/".$taoke_cms['path'].'/util/footer.php');?>
</body>
</html>
