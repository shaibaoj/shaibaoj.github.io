(function($){
    $.fn.zsSlide = function(opts){
        opts = $.extend({}, $.fn.zsSlide.opts, opts);
        this.each(function(){
            var slidewrap = $(this).find('.slide-wrap');
            var slide = slidewrap.find('li');
            var count = slide.length;
            var that = this;
            var index = 0;
            var time = null;
            $(this).data('opts', opts);
            // next
            $(this).find('.btn-next').on('click', function(){
                if(opts['isAnimate'] == true){
                    return;
                }

                var old = index;
                if(index >= count - 1){
                    index = 0;
                }else{
                    index++;
                }
                change.call(that, index, old);
            });
            // prev
            $(this).find('.btn-prev').on('click', function(){
                if(opts['isAnimate'] == true){
                    return;
                }

                var old = index;
                if(index <= 0){
                    index = count - 1;
                }else{
                    index--;
                }
                change.call(that, index, old);
            });
            $(this).find('.slide-pages a').each(function(cindex){
                $(this).on('click.slidebox', function(){
                    change.call(that, cindex, index);
                    index = cindex;
                });
            });

            // focus clean auto play
            $(this).on('mouseover', function(){
                if(opts.autoPlay){
                    clearInterval(time);
                }
                $(this).find('.ctrl-slide').css({opacity:0.6});
            });
            //  leave
            $(this).on('mouseleave', function(){
                if(opts.autoPlay){
                    startAtuoPlay();
                }
                $(this).find('.ctrl-slide').css({opacity:0.15});
            });
            startAtuoPlay();
            // auto play
            function startAtuoPlay(){
                if(opts.autoPlay){
                    time  = setInterval(function(){
                        var old = index;
                        if(index >= count - 1){
                            index = 0;
                        }else{
                            index++;
                        }
                        change.call(that, index, old);
                    }, 3000);
                }
            }
            // 淇box
            var box = $(this).find('.slide-pages');
            box.css({
                'margin-left':-(box.width() / 2)
            });
            // dir
            switch(opts.dir){
                case "x":
                    opts['width'] = $(this).width();
                    slidewrap.css({
                        'width':count * opts['width']
                    });
                    slide.css({
                        'float':'left',
                        'position':'relative'
                    });
                    slidewrap.wrap('<div class="ck-slide-dir"></div>');
                    slide.show();
                    break;
            }
        });
    };
    function change(show, hide){
        var opts = $(this).data('opts');
        if(opts.dir == 'x'){
            var x = show * opts['width'];
            $(this).find('.slide-wrap').stop().animate({'margin-left':-x}, function(){opts['isAnimate'] = false;});
            opts['isAnimate'] = true
        }else{
            $(this).find('.slide-wrap li').eq(hide).stop().animate({opacity:0,zIndex:1});
            $(this).find('.slide-wrap li').eq(show).show().css({opacity:0}).stop().animate({opacity:1,zIndex:2});
        }

        $(this).find('.slide-pages a').removeClass('current');
        $(this).find('.slide-pages a').eq(show).addClass('current');
    }
    $.fn.zsSlide.opts = {
        autoPlay: false,
        dir: null,
        isAnimate: false
    };
})(jQuery);