define([
		"./util/base"
		,"./util/member"
		,"text!../tpl/goods.tpl"
		,"css!../css/v2/global.css"
		,"css!../css/v2/base.css"
		,"css!../css/publish.css"
		,"css!../css/v2/miaoquan.css"
		,"css!../css/member.css"
	], function(base,member,goods_html) {
	return {
		isloading:true,
		client:function(){
			var _this = this;
			
			base.search();
			base.goTop();
			member.init();
//			_this.show();
		},
		show:function(){
			var eTop = $(".zhi_tit").offset().top - 120 - 35;
			var sideTop = 0;
			if ($(".zhi_type_grid").length == 0 && $(".main_side").length) {
			    sideTop = $(".main_side").offset().top + $(".main_side").height();
			}
			var tmp = true;
			// 首页左侧筛选导航
			$(window).scroll(function () {
			    var winTop = $(window).scrollTop();
			    if (winTop >= eTop) {
			        $(".side_nav").addClass("fixed_nav");
			    } else {
			        $(".side_nav").removeClass("fixed_nav");
			    }

			    if (winTop > 1500) {
			        $(".side_nav .nav_list").slideUp(1);
			    } else {
			        $(".side_nav .current .nav_list").slideDown(1);
			    }

			   /* if (winTop >= 150) {
			        $(".top_nav").css({ "top": "0" });
			    } else {
			        $(".top_nav").css({ "top": "-50px" });
			    }*/

			    var hot_height = $(".tj_hot").height();

			    if($(".zhi_type_grid").length==0){
			        if (winTop > sideTop) {

			            $(".tj_hot").addClass("pfixed");
			            if (tmp) {
			                $(".tj_hot").css("top", -(hot_height)+"px");
			                tmp = false;
			            }
			            $(".tj_hot").animate({ top: '15px' });

			        } else {

			            $(".tj_hot").removeClass("pfixed");
			            if (!tmp) {
			                $(".tj_hot").css("top", "0px");
			                $(".tj_hot").animate({ top: '0px' }).stop(true, true);
			                tmp = true;
			            }

			        }
			    }
			    
			    var t = $(window).scrollTop();
			    var h = $("body").height();
			    var i = $(window).height();

			    if (t > h - i * 1.4) {
			        getMoreData(cms_all_config.yun_cms_url, 'content-item', 1);
			    }

			});

			$(".side_nav .current").hover(function () {
			    $(this).find(".nav_list").slideDown();
			});

			$(".side_nav .mall_list").hover(function () {
			    $(".side_nav .mall_box").show();
			}, function () {
			    $(".side_nav .mall_box").hide();
			});

			var isloading = true;
			//加载更多数据
			//dataurl： 请求数据对应的地址
			//databox : 反回数据后装载到对应的容器
			//autoload : 是否自动加载 1为是，0为否
			function getMoreData(dataurl, databox, autoload) {
			 if (autoload == "undefined") {
			     autoload = 0;
			 };
			 var showBtn = $(".show-more-btn");
			 var pnum = Number(showBtn.attr("data-pagenum"));
			 var pindex = Number(showBtn.attr("data-pageindex")) + 1;
			 var time = showBtn.attr("data-time");
			 var f = showBtn.attr("data-f");
			 var t = showBtn.attr("data-t");
			 var s = showBtn.attr("data-s");
			 var jiu = showBtn.attr("data-jiu");
			 var cname = showBtn.attr("data-cname");
			 
			 var cname = '',mall_name = '';
			if(cms_all_data.context.arr_query.cname){
				cname = decodeURIComponent(cms_all_data.context.arr_query.cname);
			}
			if(cms_all_data.context.arr_query.mall_name){
				mall_name = decodeURIComponent(cms_all_data.context.arr_query.mall_name);
			}
			 
			// if (time == "") {
//			        $(".jx-foot").show();
//			         return false;
			// }
			 
			 if (!isloading) {
			     return false;
			 }
			 isloading = false;
			 $(".load-more").show();
			 
			var query_url = cms_all_config.yun_cms_url;
			var query_data = {
				app_id:cms_all_config.app_id,
				url_sign:cms_all_config.url_sign,
				time:cms_all_config.time,
			 	ajax:1,
			 	ipage:pindex,
			 	action:'deal',
			 	documentUrl:cms_all_config.base_url,
			 	cname:cname,
			 	mall_name:mall_name,
			 };
			databox = 'ulmain';
			 
			 $.ajax({
			     url: query_url,
			     data: query_data,
			     type: 'get',
			     dataType: 'jsonp',
			     success: function (result) {
//			         $boxes = $(data.result.map.content);

			         $(".load-more").hide();

			         if (autoload) {
//			             if (pindex > pnum) {
//			                 $(".list-loading").hide();
//			             }
			         }

			         if (!result.result.map.list||result.result.map.list.length==0) {
			             $(".list-loading").hide();
			             isloading = false;
//			             $(".jx-foot").show();
			             return false;
			         }
			         
			         var render_data = $.extend({}, cms_all_data,result.result.map,{'goods_action':'deal'});
					if(cms_all_data.context.arr_query.cname){
						render_data = $.extend({}, render_data,{'context':{arr_query:{cname:cname}}});;
					}
					if(cms_all_data.context.arr_query.mall_name){
						render_data = $.extend({}, render_data,{'context':{arr_query:{mall_name:mall_name}}});;
					}
					var render = _template.compile(goods_html);
		            	var html = render(render_data);
			            	
			         showBtn.attr("data-pageindex", pindex);
			         $('#' + databox).append(html);
			         base.lazyLoading($('#' + databox + " img.lazyload"));
			         isloading = true;
			     }
			 });
			}
			//图片懒加载
			getMoreData(cms_all_config.yun_cms_url, 'content-item', 1);

			// 图片懒加载
			base.lazyLoading($("img.lazyload"));

			//无缝轮播 模式为31231
			var page = 1,
			    num = 1,
			    $banner = $('#banner_list2'),
			    $slide = $("#banner_list2").find('li').eq(0),
			    slideWidth = $slide.width(),
			    $arrowBox = $('.tm_banner_arrow');
			//填充2个li
			$banner.prepend($("#banner_list2").find('li').last().clone());
			$banner.append($slide.clone());
			$banner.css({left:-340});
			var len = $banner.find('li').length,
			    $currentPageBox = $('#current_page'),
			    $bannerBox = $('.top_banner'),
			    pageCount = Math.ceil(len / num) - 2;
			$('#count_page').html(len-2);
			//向后 按钮
			$arrowBox.find('.arrow_next').click(function () { 
			    turnRight();
			});

			//向右函数
			function turnRight(){
			    if (!$banner.is(":animated")) {   
			        if (page == pageCount) {
			            $banner.css({left:0});
			            $banner.animate({ left: -slideWidth }, "slow"); 
			            page = 1;
			        } else {
			            $banner.animate({ left: '-=' + slideWidth }, "slow");
			            page++;
			        }
			        $currentPageBox.html(page);
			    }
			}
			//往左 按钮
			$arrowBox.find('.arrow_prev').click(function () {
			    if (!$banner.is(":animated")) { 
			        if (page == 1) {
			            $banner.css({left:-slideWidth * (pageCount + 1)});
			            $banner.animate({ left:-slideWidth * pageCount }, "slow");
			            page = pageCount;
			        } else {
			            $banner.animate({ left: '+=' + slideWidth }, "slow");
			            page--;
			        }
			        $currentPageBox.html(page);
			    }
			});
			if(len > 3){
			    var inite = setInterval(turnRight,3000);
			    $bannerBox.hover(function(){
			        $arrowBox.show();
			        clearInterval(inite);
			    },function(){
			        $arrowBox.hide();
			        inite = setInterval(turnRight,3000);
			    });
			}

		}
	};
});