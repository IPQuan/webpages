/**
 * Created by qulisha on 17/3/6.
 */
var bannerSwiper = new Swiper('#bannerSwiper', {
    pagination: '.swiper-pagination1',
    paginationClickable: true
});
function newSwiper(project,paga){//每次加载新的项目,如果有轮播,则进行萝卜初始化
    var swiper = new Swiper('#'+project+' .swiper-container', {
        pagination: '.swiper-pagination.'+paga,
        paginationClickable: true
    });
}
function resizeBanner(){//banner自适应
    var width = $(window).width();
    var minHeight = 450;
    if(width>=1920){//满屏
        minHeight = parseInt(450 * width / 1920);
    }else if(width>1200){//1170
        minHeight = 450;
    }else{
        minHeight = parseInt(450 * width / 1200);
    }
    $('#bannerSwiper .swiper-slide').css('min-height',minHeight);
}
function loadMore(){//加载更多.如果不是ICO,缺乏轮播数据以及ICO数据,则不显示
    var length = $('.projectWrapper').children('div').length + 1;
    var newId = 'project'+length;
    var obj = {
        image:'Images/project.png',
        title:'项目'+length,
        oImage:'Images/owner.png',
        editor:'晓物物',
        concern:'unconcerned',
        concernPeople:'520',
        content:'比起「字体设计师」、「工业设计师」等可以追述一些年头的 title 来说，「图标设计师」出现的年限其实还是非常短暂的，即使是 GUI 时代的鼻祖 Susan Kare 这样的人物其实也就离我们二三十年的光景而已，但他们当中依然已经有了一些可以树碑立传的人物出现了。Anyway.fm 是两个闷骚男抒发对设计热情的地方、Anyway.fm 是两个老男人吐槽世界的地方、Anyway.fm 也是一对好基友想把自己的见解分享给更多人的地方。<br/> 好基友俩刚带着各自的老婆一起去游了一次日本，对于沿途日本所见的各种视觉设计进行了一番点评，从路牌到吉祥物，日本的设计处处透露出他的迷人。好基友俩刚从日本旅游回来，对于沿途日本所见所闻进行了一番点评，从路牌到吉祥物，日本的设计处处透露出他的迷人',
        start:'2017/03/07',
        remain:'10天',
        people:'100人',
        target:'100BTC',
        raised:'350BTC',
        completeDegree: Math.floor(Math.random()*100 + 1),
        link:'#',
        icoTime:'2017/03/07',
        ico:[{
            num:1,
            image:"Images/ico-header.png",
            name:'Ethan Paker',
            money:'42.432'
            },{
                num:2,
                image:"Images/ico-header.png",
                name:'Ethan Warren',
                money:'19.3334345'
            }],
        swipeImg:['Images/swiper1.png','Images/swiper1.png']
    };
    var rkContent = '';
    var swipeContent = '';
    if(length%3==0){//测试两种形态
        obj.ico.forEach(function(T){
            rkContent+='<div class="row"> <div class="col-xs-4">'+ T.num+'</div> <div class="col-xs-4"> <img src='+ T.image+' /> '+ T.name+' </div> <div class="col-xs-4">'+ T.money+'</div> </div>';
        });
        obj.swipeImg.forEach(function(img){
            swipeContent+='<div class="swiper-slide"><img src='+img+' /> </div>';
        });
    }
    var icoRanking = '',icoCarousel = '';
    var aboutIco = '<section class="about-ico"> <div class="container"> <div class="row ico-banner"> <div> <img src='+obj.image+' /> </div> </div> <div class="row"> <div class="col-xs-12"> <div class="text-center font-28 color4A p-title">'+obj.title+'</div> </div> </div> <div class="row color4A overflowAuto"> <div class="p-owner col-xs-12 visible-xs visible-sm"> <img src="Images/owner.png" /> <div class="marginTop13">项目发起人：<span class="userN">'+obj.editor+'</span></div> <div>关注人数：<span class="like"><i class='+obj.concern+'>&#xe760;</i>'+obj.concernPeople+'</span></div> </div> <div class="p-introduction text-left col-xs-12">'+obj.content+'</div> <div class="p-owner col-xs-12 hidden-xs hidden-sm"> <img src="Images/owner.png" /> <div class="marginTop13">项目发起人：<span class="userN">晓物物</span></div> <div>关注人数：<span class="like"><i class='+obj.concern+'>&#xe760;</i>'+obj.concernPeople+'</span></div> </div> <div class="col-xs-12"> <a class="chatDetail" href='+obj.link+'>项目详情页<i>&#xe604;</i></a> </div> </div></div> </section>';
    var icoProgress ='<section class="ico-progress color4A"> <div class="container"><div class="row noPadding"> <div class="lineHr">&nbsp;</div> </div> <div class="row overflowAuto"> <div class="col-xs-12 col-sm-6 col-md-4 firstOne"> <div>目标金额：<div class="floatRight">'+obj.target+'</div></div> <div>开始时间：<div class="floatRight">'+obj.start+'</div></div> </div> <div class="col-xs-12 col-sm-6 col-md-4 secondOne"> <div>参与人数：<div class="floatRight">'+obj.people+'</div></div> <div>剩余时间：<div class="floatRight">'+obj.remain+'</div></div> </div> <div class="col-xs-12 col-sm-6 col-md-4 lastOne"> <div>已筹金额：<div class="floatRight">'+obj.raised+'</div></div> </div> <div class="col-xs-12 barWrapper"> <div class="barContentWrapper"> <div class="barContent"></div> <div class="bar" style="width:'+obj.completeDegree+';"> </div> </div> </div> </div> </div> </section>';
    if(rkContent!='') {
        icoRanking = '<section class="ico-ranking"> <div class="container text-center"> <div class="row noPadding"> <div class="lineHr">&nbsp;</div> </div> <div class="row"> <div class="col-xs-12 r-title">ICO排行榜</div> <div class="col-xs-4 font-35"> <i>&#xe645;</i> </div> <div class="col-xs-4 font-32"> <i class="icon-user">&#xe629;</i> </div> <div class="col-xs-4 font-37"> <i>&#xe6d7;</i> </div> </div> <div class="row rk-title"> <div class="col-xs-4">当前排名</div> <div class="col-xs-4">参与用户</div> <div class="col-xs-4">参与金额</div> </div> <div class="rk-line-content">' + rkContent + '</div> <div class="rk-update"> <div class="row"> 平均每10分钟更新一次,上次更新时间：<span>' + obj.icoTime + '</span> </div> </div> </div> </section>';
    }
    if(swipeContent!=''){
        icoCarousel = '<section class="ico-carousel"> <div class="container"> <div class="row"> <div class="swiper-container" id="icoSwiper"> <div class="swiper-wrapper">'+swipeContent+'</div> <div class="swiper-pagination swiper-pagination0'+length+'"></div> </div> </div> </div> </section>';
    }
    $('.projectWrapper').append('<div id='+newId+'>' + aboutIco + icoProgress + icoRanking + icoCarousel + '</div>');
    resizeSmation(newId,obj.completeDegree);
    if(swipeContent!='') {
        newSwiper(newId, 'swiper-pagination0' + length);
    }
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
    smation('project1',parseInt($('#project1 .bar')[0].style.width));
    resizeBanner();
};
