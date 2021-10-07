var defaultImg = "https://img.youdanhui.cn/cms_img/2019-10-24/5db1683b690ce.png",
vmToolEx = new Vue({
    el: "#vmToolEx",
    data: {
        defaultVideoImg: [],
        oPicArr: [],
        VideoArr: [],
        oVideoArrImg: [],
        selectPicArr: [],
        selecCommentArr: [],
        goodsId: "",
        tbUrl: "",
        commodity: {
            name: "无(请先获取信息)",
            Sales: "0"
        },
        isShow: !1,
        ImgSize: "_400x400.jpg",
        shopUrl: Request("shopUrl") ? Request("shopUrl") : "",
        oAjaxVideo: {
            tbvideourl: [],
            dyvideourl: [],
            tbvideoPage: 1,
            tbvideoBool: !1,
            tbSum: 2,
            tbdyVideoArr: [],
            tbdyBool: !0
        }
    },
    mounted: function() {
        this.shopUrl && (this.tbUrl = decodeURIComponent(decodeURIComponent(this.shopUrl)))
    },
    methods: {
        seeImg: function(b) {
            for (var a = [], c = 0; c < this.oPicArr.length; c++) a[c] = {
                src: this.oPicArr[c]
            };
            layer.photos({
                title: "键盘左右键切换图片",
                photos: {
                    start: b,
                    data: a
                },
                shade: .6,
                shift: 5,
                area: "500px"
            })
        },
        seeVideo: function(b) {
            b ? layer.open({
                type: 1,
                title: "商品介绍短片",
                shadeClose: !0,
                area: ["545px", "435px"],
                content: '<video class="TVideo" webkit-playsinline="true" playsinline="true" controls autoplay><source src=' + b + ' type="video/mp4"><source src=' + b + ' type="video/ogg"><source src=' + b + ' type="video/webm"></video>'
            }) : layer.alert("没有视频", {
                icon: 2
            })
        },
        checkBtn: function(b, a, c, d) {
            this[d][a] != b ? (this[d][a] = b, $(c.currentTarget).addClass("TActive")) : (this[d][a] = "", $(c.currentTarget).removeClass("TActive"));
            this.ArrImg = [];
            this.ArrImg = this.selectPicArr.concat(this.selecCommentArr);
            this.$forceUpdate()
        },
        downImgMake: function() {
            var b = this;
            0 == b.selectPicArr.length && 0 == b.selecCommentArr.length ? layer.msg("请先选择要保存的图片", {
                time: 1500,
                shade: .1,
                shadeClose: !0
            }) : (b.selectPicArr.forEach(function(a, c) {
                b.downloadIamge(a, Math.round(1E3 * Math.random()))
            }), b.selecCommentArr.forEach(function(a, c) {
                b.downloadIamge(a, Math.round(1E3 * Math.random()))
            }), b.clearifFun())
        },
        downloadIamge: function(b, a) {
            var c = new Image;
            c.setAttribute("crossOrigin", "anonymous");
            c.onload = function() {
                var b = document.createElement("canvas");
                b.width = c.width;
                b.height = c.height;
                b.getContext("2d").drawImage(c, 0, 0, c.width, c.height);
                b = b.toDataURL("image/png");
                var e = document.createElement("a"),
                    f = new MouseEvent("click");
                e.download = a || "图片";
                e.href = b;
                e.dispatchEvent(f)
            };
            c.src = b
        },
        obtainBtn: function() {
            var b = this,
                a = /[\?&]id=(\d+)/;
            null != this.tbUrl.match(a) ? (a = this.tbUrl.match(a)[1], null != a ? (b.goodsId = a, layer.load(2, {
                shade: .1
            }), ajaxPost("/api/user/tools/tools/toolspic", {
                id: b.goodsId,
            }, function(a) {
                layer.closeAll();
                if(0 == a.info.status){
                    if(0 < a.data.goods.picList.length){
                        b.oPicArr = [];
                        b.$nextTick(function() {
                            b.commodity = {
                                name: a.data.goods.title,
                                Sales: a.data.goods.volume
                            };
                            b.oPicArr = a.data.goods.picList;
                            b.isShow = !0;
                            b.ajaxGetVideo();
                            b.ajaxtbVideo(0);
                            b.ajaxDyVideo(0);
                            b.VideoArr = [];
                            b.oVideoArrImg = [];
                            b.selecCommentArr = [];
                            b.oAjaxVideo.tbvideourl = [];
                            b.oAjaxVideo.dyvideourl = [];
                            b.oAjaxVideo.tbvideoPage = 1
                        });
                    }else{
                        console.log('adfasdfads')
                        layer.msg("无商品主图！")
                    }
                }
                else if(100 == a.info.status){
                    b.isShow = !1; 
                    loginJump(b.tbUrl);
                }
                else{
                    b.isShow = !1;
                    layer.alert(a.info.status_err, {
                        icon: 2
                    });
                }
                // 0 == a.info.status ? 0 < a.data.goods.picList.length ? (b.oPicArr = [], b.$nextTick(function() {
                //     b.commodity = {
                //         name: a.data.goods.title,
                //         Sales: a.data.goods.volume
                //     };
                //     b.oPicArr = a.data.goods.picList;
                //     b.isShow = !0;
                //     b.ajaxGetVideo();
                //     b.ajaxtbVideo(0);
                //     b.ajaxDyVideo(0);
                //     b.VideoArr = [];
                //     b.oVideoArrImg = [];
                //     b.selecCommentArr = [];
                //     b.oAjaxVideo.tbvideourl = [];
                //     b.oAjaxVideo.dyvideourl = [];
                //     b.oAjaxVideo.tbvideoPage = 1
                // })) : layer.msg("无商品主图！") : 100 == a.info.status ? (b.isShow = !1, loginJump(b.tbUrl)) : (b.isShow = !1, layer.alert(a.info.status_err, {
                //     icon: 2
                // }))
            }, function() {
                layer.closeAll();
                layer.alert("网络错误", {
                    icon: 5
                })
            })) : layer.msg("请输入有效的商品链接", {
                time: 1500,
                shade: .1,
                shadeClose: !0
            })) : layer.msg("无效的商品链接！", {
                time: 1500,
                shade: .1,
                shadeClose: !0
            })
        },
        ajaxGetVideo: function() {
            var b = this;
            ajaxGetJsonp("https://h5api.m.taobao.com/h5/mtop.taobao.detail.getdetail/6.0/?jsv=2.4.8&appKey=12574478&t=1554712612690&sign=59ff83eeadc620f65b072a198f4cf178&api=mtop.taobao.detail.getdetail&v=6.0&dataType=jsonp&ttid=2017%40taobao_h5_6.6.0&AntiCreep=true&type=jsonp&data=%7B%22itemNumId%22%3A%22" + b.goodsId + "%22%7D", {}, function(a) {
                var c = [],
                    d = "";
                d = [];
                var e = 0;
                if (a.data.apiStack) {
                    for (var f = a.data.apiStack, g = f.length; g--;) if (d = JSON.parse(f[g].value), d = d.item.videos) for (e = d.length; e--;) c.unshift(d[e]);
                    else return;
                    b.$nextTick(function() {
                        c.forEach(function(a, c) {
                            b.VideoArr.push(a.url);
                            b.oVideoArrImg.push(a.videoThumbnailURL)
                        })
                    })
                } else layer.alert("点击立即跳转到淘宝去拉动滑动条或登录才能获取到实拍视频哦", {
                    icon: 2,
                    btn: "立即跳转"
                }, function(b) {
                    pageAll(a.data.url);
                    layer.close(b)
                })
            }, function() {})
        },
        clearifFun: function() {
            this.selecCommentArr = [];
            $(".ispicComClass em").removeClass("TActive");
            this.selectPicArr = [];
            $(".ispicClass em").removeClass("TActive");
            this.ArrImg = [];
            this.ArrImg = this.selectPicArr.concat(this.selecCommentArr)
        },
        mousedownFun: function(b) {
            b.preventDefault()
        },
        getRealpic: function() {
            this.$refs.vmpic.ajaxIrealpic(!0)
        },
        ajaxtbVideo: function(b) {
            var a = this;
            layer.load(2, {
                shade: .1
            });
            ajaxPost("/api/user/tools/tools/get_evaluate_videourl", {
                itemid: a.goodsId,
                page: a.oAjaxVideo.tbvideoPage
            }, function(c) {
                layer.closeAll("loading");
                "200" == c.code ? 0 == b ? (a.oAjaxVideo.tbvideourl = c.tbvideourl_data, a.$nextTick(function() {
                    setTimeout(function() {
                        a.toolSwiper0()
                    }, 100)
                })) : 0 != c.tbvideourl_data.length ? (1 == b && (a.videoPopup(".js-tbvideo"), a.oAjaxVideo.tbvideoBool = !1, a.oAjaxVideo.bdyVideoArr = [], a.oAjaxVideo.tbvideoPage = 2, a.oAjaxVideo.tbSum = 2), a.oAjaxVideo.tbSum < a.oAjaxVideo.tbvideoPage && (a.oAjaxVideo.tbSum = a.oAjaxVideo.tbvideoPage), a.oAjaxVideo.tbvideoBool = !1, a.oAjaxVideo.tbdyVideoArr = c.tbvideourl_data) : (layer.msg("已经没有更多数据了"), --a.oAjaxVideo.tbvideoPage, a.oAjaxVideo.tbvideoBool = !0) : "-1" == c.code && loginJump(a.tbUrl)
            })
        },
        ajaxDyVideo: function(b) {
            var a = this;
            layer.load(2, {
                shade: .1
            });
            ajaxPost("/api/user/tools/tools/get_dy_videourl", {
                itemid: a.goodsId,
                page: a.oAjaxVideo.tbvideoPage
            }, function(c) {
                layer.closeAll("loading");
                "200" == c.code ? 0 == b ? (a.oAjaxVideo.dyvideourl = c.dyvideourl_data, a.$nextTick(function() {
                    setTimeout(function() {
                        a.toolSwiper1()
                    }, 300)
                })) : 0 != c.dyvideourl_data.length ? (1 == b && (a.videoPopup(".js-tbvideo"), a.oAjaxVideo.tbvideoBool = !1, a.oAjaxVideo.bdyVideoArr = [], a.oAjaxVideo.tbvideoPage = 2, a.oAjaxVideo.tbSum = 2), a.oAjaxVideo.tbSum < a.oAjaxVideo.tbvideoPage && (a.oAjaxVideo.tbSum = a.oAjaxVideo.tbvideoPage), a.oAjaxVideo.tbvideoBool = !1, a.oAjaxVideo.tbdyVideoArr = c.dyvideourl_data) : (layer.msg("已经没有更多数据了"), --a.oAjaxVideo.tbvideoPage, a.oAjaxVideo.tbvideoBool = !0) : "-1" == c.code && loginJump(a.tbUrl)
            })
        },
        toolSwiper0: function() {
            new Swiper(".toolSwiper0", {
                pagination: ".swiper-pagination0",
                paginationClickable: !0,
                prevButton: ".swiper-prev0",
                nextButton: ".swiper-next0"
            })
        },
        toolSwiper1: function() {
            new Swiper(".toolSwiper1", {
                pagination: ".swiper-pagination1",
                paginationClickable: !0,
                prevButton: ".swiper-prev1",
                nextButton: ".swiper-next1"
            })
        },
        tbVideoBtn: function() {
            this.oAjaxVideo.tbdyBool = !0;
            this.oAjaxVideo.tbvideoPage = 2;
            this.ajaxtbVideo(1)
        },
        tbVideoBtns: function() {
            this.oAjaxVideo.tbdyBool = !1;
            this.oAjaxVideo.tbvideoPage = 2;
            this.ajaxDyVideo(1)
        },
        videopageBtn: function(b) {
            this.oAjaxVideo.tbvideoPage = b;
            this.oAjaxVideo.tbdyBool ? this.ajaxtbVideo() : this.ajaxDyVideo()
        },
        videoPopup: function(b) {
            layer.open({
                type: 1,
                shift: 0,
                title: "获取视频",
                closeBtn: 2,
                shade: .4,
                area: ["850px", "700px"],
                content: $(b)
            })
        }
    },
    filters: {
        filtersImgSize: function(b) {
            if (b) return b + "_400x400.jpg"
        }
    }
});