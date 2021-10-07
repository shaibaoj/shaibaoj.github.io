
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-dns-prefetch-control" content="on"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta content="telephone=no" name="format-detection"/>
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>
        <title><?php echo urldecode($arr_query['q']); ?>-<?php echo $user_cms['siteName']; ?></title><!--网站标题-->
        <meta name="description" content="<?php echo $user_cms['description']; ?>"/>
        <meta name="keywords" content="<?php echo $user_cms['keywords']; ?>"/>
        <?php include(constant("TAOKE_TEMPLATE_PATH")."/cms/".$taoke_cms['path'].'/util/dns.php');?>
        <?php include(constant("TAOKE_TEMPLATE_PATH")."/cms/".$taoke_cms['path'].'/util/link.php');?>
    <link href="<?php echo $url_prefix_item['search_static_css']; ?>/taoke/template/cms/<?php echo $taoke_cms['path']; ?>/css/wap_search.css?v=201702221401" rel="stylesheet"/>
<link rel="stylesheet" href="<?php echo $url_prefix_item['search_static_css']; ?>/taoke/template/cms/<?php echo $taoke_cms['path']; ?>/css/m/<?php echo $taoke_cms['css']; ?>.css?t=0616002">

    </head>
<body>
    <div class="main-title clearfix">
        <a href="javascript:void(0)" class="main-back"></a>
        <div class="search fl">
           <form action="<?php echo $model_base_url; ?>" method="get">
                <input type="hidden" name="action" value="search">
                <span class="search-kw">共找到 <?php echo $count; ?> 款商品</span>
                <button class="search_submit search-in background"></button>
                <input type="text" autocomplete="off" placeholder="<?php echo urldecode($arr_query['q']) /*iconv("utf-8","gb2312//IGNORE",$arr_query['q'])*/; ?>" value="<?php echo urldecode($arr_query['q']) /*iconv("utf-8","gb2312//IGNORE",$arr_query['q'])*/; ?>" name="q"  class="search_area" />
            </form>
        </div>
    </div>
    <div class="order-nav">
        <ul>
            <li class="cur" data-goods="common">
                <span><a href="#">领券</a></span>
            </li>
            <li class="" data-goods="yun">
                <span><a href="#">云购</a></span>
            </li>
            <li class="" data-goods="jd">
                <span><a href="#">京东</a></span>
            </li>
        </ul>
    </div>

    <div class="goods-list" data-page="2" data-yun="<?php echo $arr_query['yun']; ?>" data-goods="">
        <?php include(constant("TAOKE_TEMPLATE_PATH")."/cms/".$taoke_cms['path'].'/util/goods.php');?>
    </div>
    <div  class="pullup-goods">
        <div class="label">商品加载中...</div>
    </div>
<script language="javascript">
if(window.history.state){
$('.goods-list').html(window.history.state.list);
var page = window.history.state.page;
}else{
var page = 2;
}
var isFinish = false;
var isLoading = false;
var $pullUp = null;
var needLoadMore = false;

var maxScrollY = 0;
var windowHeight = 0;
var kw = '<?php echo urldecode($arr_query['q']) /*iconv("utf-8","gb2312//IGNORE",$arr_query['q'])*/; ?>';
var px = 't';
var query_type = $('.goods-list').attr("data-goods");

$(document).ready(function () {
    maxScrollY = $(document).height();
    windowHeight = $(window).height();
    $(window).on('resize', function () {
        windowHeight = $(window).height();
    });
    $(window).scroll(function (e) {
        if (isFinish || isLoading) {
            return;
        }
        var y = $(document).scrollTop();
        maxScrollY = $(document).height();
        windowHeight = $(window).height();
        if (maxScrollY==windowHeight) {
            windowHeight = document.body.clientHeight;
        }
        if (Math.abs(maxScrollY - windowHeight - y) > 100) {
            return;
        }
        var $wrapper = $(this);
        if (!$pullUp) {
            $pullUp = $wrapper.find('.pullup-goods');
        }
        var data = null;
        getData($wrapper, data, 1);
    });

    $(".order-nav li").click(function () {
        $this = $(this);
        $(".order-nav li").removeClass("cur");
        $this.addClass("cur");
        $('.goods-list').empty();
        page = 1;
        $('.goods-list').attr('data-page',page);
        query_type = $this.attr("data-goods");
        isFinish = false;
        getData($("body"), null, 0);
    });

    function getData($wrapper, data, direction) {
        if (isFinish) {
            return;
        }
        isLoading = true;
        if (!$pullUp) {
            $pullUp = $wrapper.find('.pullup-goods');
        }
        var labelTag = $($pullUp).find('.label');
        var tPaht = "//yun.cms.shaibaoj.com/ajax.php";
        var yun = $('.goods-list').attr('data-yun');

        var query_data = {
            app_id:'<?php echo $app_id; ?>',
            documentUrl:'<?php echo $model_base_url; ?>',
            action:'search',
            q:'<?php echo urldecode($arr_query['q']) /*iconv("utf-8","gb2312//IGNORE",$arr_query['q'])*/; ?>',
            yun:yun,
            ajax: '1', ipage: page
        };
        
        if(query_type=='common'){
            query_data = {
                 app_id:'<?php echo $app_id; ?>',
                documentUrl:'<?php echo $model_base_url; ?>',
                action:'search',
                q:'<?php echo urldecode($arr_query['q']) /*iconv("utf-8","gb2312//IGNORE",$arr_query['q'])*/; ?>',
                yun:0,
                ajax: '1', ipage: page
            };
        }
        else if(query_type=='yun'){
            query_data = {
                app_id:'<?php echo $app_id; ?>',
                documentUrl:'<?php echo $model_base_url; ?>',
                action:'search',
                q:'<?php echo urldecode($arr_query['q']) /*iconv("utf-8","gb2312//IGNORE",$arr_query['q'])*/; ?>',
                yun:1,
                ajax: '1', ipage: page
            };
        }
        else if(query_type=='jd'){
            query_data = {
                app_id:'<?php echo $app_id; ?>',
                documentUrl:'<?php echo $model_base_url; ?>',
                action:'search_jd',
                q:'<?php echo urldecode($arr_query['q']) /*iconv("utf-8","gb2312//IGNORE",$arr_query['q'])*/; ?>',
                yun:yun,
                ajax: '1', ipage: page
            };
        }

        $.ajax(tPaht,{
           data: query_data,
            // dataType: 'json',
            // type: 'post',
            type: 'get',
            dataType: 'jsonp',
            error: function (xhr, type, errorThrown) {
                getData($wrapper, data, direction);
            },
            success: function (result, status, xhr) {
                needLoadMore = false;
                if (result.result.map.status == 0) {
                    // if(result.data.pageStatus === false){
                    //     isLoading = false;
                    //     $('.pullup-goods .label').html('没有更多商品啦');
                    //     isFinish = true;
                    // }
                    $('.goods-list').append(result.result.map.content);
//                        myScroll.refresh();
                    $("img.lazy").lazyload();
                    aClick();
                    maxScrollY = $(document).height();
                    isLoading = false;
                    page++;
                    $('.goods-list').attr('data-page',page);
                    $('.search-kw').html("共找到 "+result.result.map.count+" 款商品");
                    //$(labelTag).html('上拉加载更多商品');
                } else {
//                        myScroll.refresh();
                    maxScrollY = $(document).height();
                    isLoading = false;
                    $('.pullup-goods .label').html('没有更多商品啦');
                    isFinish = true;
                }
            }
        });
    }
});
$("img.lazy").lazyload();
</script>
<div class="toTop">&#xe601;</div>
<?php include(constant("TAOKE_TEMPLATE_PATH")."/cms/".$taoke_cms['path'].'/util/menu.php');?>
<?php include(constant("TAOKE_TEMPLATE_PATH")."/cms/".$taoke_cms['path'].'/util/footer.php');?>
<?php include(constant("TAOKE_TEMPLATE_PATH")."/cms/".$taoke_cms['path'].'/util/yun_q.php');?>
</body>
</html>