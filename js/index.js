//红包
$(function () {

    $('#lhb').on('tap', function () {
        $(this).css('display', 'none');
        $('#lhb_dn').css('display', 'block');
    })

    $('.hb-btn-close').on('tap', function () {
        $('#lhb_dn').css('display', 'none');
    })

//红包



    //nav滑动
    var oTmb = $('.top-menue-bar');
    var aA=$('.top-menue-bar a');
    var x = 0;

    oTmb.on('touchstart', function (ev) {
        var disX = ev.targetTouches[0].pageX - x;
        //fnMove
        function fnMove(ev) {
            x = ev.targetTouches[0].pageX - disX;
            if(x<-410)x=-410;
            if(x>0)x=0;
            oTmb.css('transform', 'translate3d(' + x + 'px,0,0)')
        }
        //fnEnd
        function fnEnd() {
            oTmb.off('touchmove', fnMove);
            oTmb.off('touchend', fnEnd);
        }
        oTmb.on('touchmove', fnMove);
        oTmb.off('touchend', fnEnd);
        return false;
    })
    //nav滑动

    //关闭下载app
    $('.clo-btn').tap(function(){
        $('.footer-con').remove();
    })
    //关闭下载app

//刷新
    $('#refresh-btn').on('tap', function () {
        $(this).addClass('anima');
        window.location.reload();
        $('.rec-article').css('display', 'block')
    })
    $('.content-container').on('longTap',function(){
        window.location.reload();
        $('.rec-article').css('display', 'block');
        $('.tz-ref').css('transform','translateY(70px) rotate(720deg)');
        $('.content-container').on('transitionEnd',function(){
            $('.rec-article').css('display', 'none');
            $('.tz-ref').css('transform','translateY(34px) rotate(-720deg)');
        })
    })
//刷新


})