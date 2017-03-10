/**
 * Created by qulisha on 17/3/6.
 */
function newSwiper(project,paga){//每次加载新的项目,如果有轮播,则进行萝卜初始化
    var swiper = new Swiper('#'+project+' .swiper-container', {
        pagination: '.swiper-pagination.'+paga,
        paginationClickable: true
    });
}
function resizeBanner(){//banner自适应
    var width = $(window).width();
    var minHeight = 450,mH = 450;
    if(width>=1920){//满屏
        minHeight = parseInt(450 * width / 1920);
    }else if(width>1200){//1170
        minHeight = 450;
    }else{
        minHeight = parseInt(450 * width / 1200);
        mH = parseInt(450 * width / 1200);
    }
    $('#bannerSwiper .swiper-slide').css('min-height',minHeight);
    $('.topImg').css('min-height',minHeight);
    $('.about-ico .ico-banner').css('min-height',mH);
}
function smation(project,width){
    if(width==0){
        return;
    }
    resizeSmation(project,width);
}
function resizeSmation(project,barWidth){//控制完成度百分比的长度.
    $("#"+project+' .barContent').removeClass('hide');
    $("#"+project+" .bar")[0].style.width = barWidth+'%';
    var maxWidth = $('.barContentWrapper').width()+'px';
    if(barWidth<100){
        maxWidth = barWidth * $('.barContentWrapper').width() / 100+'px';
    }
    $("#"+project+" .bar")[0].style.maxWidth = maxWidth;
    $("#"+project+" .bar")[0].innerHTML = '';
    $("#"+project+" .barContent")[0].innerHTML = barWidth+'%';
    if(parseInt($("#"+project+" .barContent")[0].clientWidth)+4<=parseInt($("#"+project+" .bar")[0].style.maxWidth)){
        $("#"+project+" .bar")[0].innerHTML = barWidth+'%';
    }
    $("#"+project+" .barContent")[0].innerHTML = '完成度：'+barWidth+'%';
    if(parseInt($("#"+project+" .barContent")[0].clientWidth)+4<=parseInt($("#"+project+" .bar")[0].style.maxWidth)){
        $("#"+project+" .bar")[0].innerHTML = '完成度：'+barWidth+'%';
    }
    $("#"+project+ '.barContent').addClass('hide');
}

window.onresize=function(){//屏幕大小发生变化时
    resizeBanner();
    var length = $('.projectWrapper').children('div').length + 1;
    for(var i=1;i<=length;i++){
        if($('#project'+i+' .bar')[0]){
            resizeSmation('project'+i,parseInt($('#project'+i+' .bar')[0].style.width));
        }
    }
};
window.onload = function(){//页面加载完成时
    if($('#project1')){
        newSwiper('project1','swiper-pagination2');
    }
    if($('#project1 .bar')){
        smation('project1',parseInt($('#project1 .bar')[0].style.width));
    }
    resizeBanner();
    $('.ico-detail .ico-title .col-l-2').click(function(){
        $('.ico-detail .ico-title .col-l-2').removeClass('active');
        $('.ico-content > div').addClass('hide');
        $(this).addClass('active');
        var value = $(this).attr('value');
        $('.'+value).removeClass('hide');
    });
};
