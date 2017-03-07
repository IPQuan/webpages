/**
 * Created by qulisha on 17/3/6.
 */
var swiper = new Swiper('#bannerSwiper', {
    pagination: '.swiper-pagination.swiper-pagination1',
    paginationClickable: true
});
var swiper2 = new Swiper('#icoSwiper', {
    pagination: '.swiper-pagination.swiper-pagination2',
    paginationClickable: true
});
function $Id(d){
    return document.getElementById(d);
}
function resizeSmation(barWidth){
    $('#barContent').removeClass('hide');
    if(barWidth>=100){
        $Id("bar").style.maxWidth = $('.bar').width()+'px';
    }else{
        $Id("bar").style.maxWidth = barWidth * $('.bar').width() / 100+'px';
    }
    $Id("barContent").innerHTML = '';
    if(parseInt($Id("barContent").clientWidth)+4<=parseInt($Id("bar").style.maxWidth)){
        $Id("bar").innerHTML = '';
    }
    $Id("barContent").innerHTML = barWidth+'%';
    if(parseInt($Id("barContent").clientWidth)+4<=parseInt($Id("bar").style.maxWidth)){
        $Id("bar").innerHTML = barWidth+'%';
    }
    $Id("barContent").innerHTML = '完成度：'+barWidth+'%';
    if(parseInt($Id("barContent").clientWidth)+4<=parseInt($Id("bar").style.maxWidth)){
        $Id("bar").innerHTML = '完成度：'+barWidth+'%';
    }
    $('#barContent').addClass('hide');
}
function resizeBanner(){
    var width = $(window).width();
    if(width>=1920){//满屏
        $('#bannerSwiper .swiper-slide').css('min-height',parseInt(450 * width / 1920));
    }else if(width>1200){//1170
        $('#bannerSwiper .swiper-slide').css('min-height',450);
    }else if(width>992){//970
        $('#bannerSwiper .swiper-slide').css('min-height',parseInt(450 * width / 1200));
    }else if(width>768){//750
        $('#bannerSwiper .swiper-slide').css('min-height',parseInt(450 * width / 1200));
    }else{
        $('#bannerSwiper .swiper-slide').css('min-height',parseInt(450 * width / 1200));
    }
}
function smation(width){
    if(width==0){
        return;
    }
    $Id("bar").style.width = parseInt($Id("bar").style.width)+1+'%';
    var barWidth = parseInt($Id("bar").style.width); //从0开始叠加.
    resizeSmation(barWidth);
    if($Id("bar").style.width == width+'%'){
        window.clearInterval(bar);
        $('#barContent').addClass('hide');
    }
}
var bar = setInterval(function(){
    smation(88);
}, 10);
window.onresize=function(){
    resizeSmation(parseInt($Id("bar").style.width));
    resizeBanner();
};
window.onload = function(){
    bar;
    resizeBanner();
};
