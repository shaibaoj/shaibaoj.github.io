var time_tab = function(e) {
    if (!$(".release-time-main ul").hasClass("tab_scroll")) {
        $(".release-time-main ul").addClass("tab_scroll");
        var a, s = parseInt($(".release-time-main ul").css("left")),
            i = $(".release-time-main ul").width(),
            l = $(".release-time-main ul li").eq(0).width();
        if (!(s < 2 * l && e > 0 || s > 3 * l - i && e < 0)) return $(".release-time-main ul").removeClass("tab_scroll"), !1;
        var t = $(".release-time-main ul li.cur").index();
        "即将开始" == $(".release-time-main ul li").eq(t - e).find("p").text() ? ($(".ddq_text_buy").addClass("hide"), $(".ddq_text_next").removeClass("hide")) : ($(".ddq_text_next").addClass("hide"), $(".ddq_text_buy").removeClass("hide")), $(".release-time-main ul li").removeClass("cur"), $(".release-time-main ul li").eq(t - e).addClass("cur"),  a = s + e * l + "px", $(".release-time-main ul").css("left", a), setTimeout(function() {
            $(".release-time-main ul").removeClass("tab_scroll")
        }, 200), $("body,html").animate({
            scrollTop: $(".sf_wrap .main").offset().top - 75
        }, 200)
    }
};
$(".paly-btn").on("click", function() {
time_tab($(this).data("r"))
}), $(".section_item").on("click", function() {
if (!$(this).parents("li").hasClass("cur")) {
    var e = $(this).parents("li").index(),
        a = $(".release-time-main ul li.cur").index();
    time_tab(a - e)
}
}), $(window).scroll(function() {
var e = $(window).scrollTop(),
    a = $(".main").offset().top - $(".release-time").height() - parseInt($(".release-time").css("margin-bottom"));
e >= a ? $(".sf_wrap").addClass("fixed") : $(".sf_wrap").removeClass("fixed")
});