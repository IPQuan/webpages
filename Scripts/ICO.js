/**
 * Created by qulisha on 17/3/6.
 */
function newSwiper(project,paga){//每次加载新的项目,如果有轮播,则进行萝卜初始化
    var swiper = new Swiper(project+' .swiper-container', {
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
    $(project+' .barContent').removeClass('hide');
    $(project+" .bar")[0].style.width = barWidth+'%';
    var maxWidth = $('.barContentWrapper').width()+'px';
    if(barWidth<100){
        maxWidth = barWidth * $('.barContentWrapper').width() / 100+'px';
    }
    $(project+" .bar")[0].style.maxWidth = maxWidth;
    $(project+" .bar")[0].innerHTML = '';
    $(project+" .barContent")[0].innerHTML = barWidth+'%';
    if(parseInt($(project+" .barContent")[0].clientWidth)+4<=parseInt($(project+" .bar")[0].style.maxWidth)){
        $(project+" .bar")[0].innerHTML = barWidth+'%';
    }
    $(project+" .barContent")[0].innerHTML = '完成度：'+barWidth+'%';
    if(parseInt($(project+" .barContent")[0].clientWidth)+4<=parseInt($(project+" .bar")[0].style.maxWidth)){
        $(project+" .bar")[0].innerHTML = '完成度：'+barWidth+'%';
    }
    $(project+ '.barContent').addClass('hide');
}

window.onresize=function(){//屏幕大小发生变化时
    resizeBanner();
    var length = $('.projectWrapper').children('div').length + 1;
    for(var i=1;i<=length;i++){
        if($('#project'+i+' .bar')[0]){
            resizeSmation('#project'+i,parseInt($('#project'+i+' .bar')[0].style.width));
        }
    }
};
window.onload = function(){//页面加载完成时
    if($('#project1')){
        newSwiper('#project1','swiper-pagination2');
    }
    if($('#project1 .bar')){
        smation('#project1',parseInt($('#project1 .bar')[0].style.width));
    }
    resizeBanner();
};


//设置关注人数
function setFans(obj,isFans, fansCount) {
    $(obj).attr("data-isFans",isFans);
    $(obj).attr("data-fansCount", fansCount);

    $(obj).find("span").html('<i class="' + (isFans?'concerned':'unconcerned') + '" >' + ' </i> ' + fansCount.toString());
}

//关注／取消
function postFans(obj,isLogin) {
    if (isLogin) {
        if ($(obj).attr("data-disabled"))
            return;

        $(obj).attr("data-disabled", true);
        var projectId = $(obj).parents("section.about-ico").parent().attr("data-projectId");
        var isFans = $(obj).attr("data-isFans")=="true";
        var fansCount = parseInt($(obj).attr("data-fansCount"));
        $.ajax({
            url: '/ico/fans', type: 'post',
            data: {projectId: projectId, isFans: !isFans},
            success: function (data, status) {
                $(obj).removeAttr("data-disabled");
                $.message.pop(data.msg, data.type);
                if (data.code == 0) {
                    isFans = !isFans;
                    if (isFans)
                        ++fansCount;
                    else
                        --fansCount;
                    setFans(obj,isFans, fansCount);
                }
            },
            error: function () {
                $(obj).removeAttr("data-disabled");
                $.message.pop("网络错误！", "warning");
            }
        })
    }
    else
        $.message.pop("您当前未登录，请登录后关注本项目！", "info");
}

//加载ICO信息
function loadIco(projectId, filedSection) {
    $.ajax({
        url: '/ico/projectIco', type: 'post',
        data: {projectId: projectId},
        success: function (data, status) {
            if (data.code == 0) {
                var selector = $(filedSection+ " .floatRight ");
                $(selector[0]).html((data.projectIco.targetAmount||0).toString()+"BTC");    //目标金额
                $(selector[1]).html("2014/11/05");                                          //开始时间
                $(selector[2]).html((data.projectIco.holdersNum||0).toString()+"人");      //参与人数
                $(selector[3]).html("10 天");                                               //剩余时间
                $(filedSection+ " .mLeft span").html((data.projectIco.currentAmount||0).toString());   //已筹金额

                var progress = (data.projectIco.targetAmount?((data.projectIco.currentAmount||0)/data.projectIco.targetAmount):0)*100;
                $(filedSection+ " .bar").attr("style","width:" + progress.toString()+"%")
                resizeSmation(filedSection, progress);
            }
        }
    });
}

//加载ICO股东信息
function loadHolders(projectId,fieldSection) {
    $.ajax({
        url: '/ico/loadHolders', type: 'post',
        data: {projectId: projectId},
        success: function (data, status) {
            if (data.code == 0) {
                data.holders.sort(function (a,b) {
                    return b.amount - a.amount;
                });
                var html =
                    '<div class="container text-center">' +
                    '<div class="row noPadding">' +
                    '<div class="lineHr">&nbsp;</div>' +
                    '</div>' +
                    '<div class="row">' +
                    '<div class="col-xs-12 r-title">ICO排行榜</div>' +
                    '<div class="col-xs-4 font-35"> <i>&#xe645;</i>' +
                    '</div>' +
                    '<div class="col-xs-4 font-32">' +
                    '<i class="icon-user">&#xe629;</i>' +
                    '</div>' +
                    '<div class="col-xs-4 font-37">' +
                    '<i>&#xe6d7;</i>' +
                    '</div> </div>' +
                    '<div class="row rk-title">' +
                    '<div class="col-xs-4">当前排名</div>' +
                    '<div class="col-xs-4">参与用户</div>' +
                    '<div class="col-xs-4">参与金额</div> ' +
                    '</div>' +
                    '<div class="rk-line-content">';
                for(var i=0;i<data.holders.length;++i) {
                    var holder=data.holders[i];
                    html+=
                        '<div class="row">'+
                        '<div class="col-xs-4">'+(i+1)+'</div>'+
                        '<div class="col-xs-4">'+'<img class="avatar" src = "'+(holder.avatar||"/images/avatar.png")+'"/> '+holder.nickname+'</div>'+
                        '<div class="col-xs-4">'+holder.amount + '</div>' +
                        '</div>';
                }
                var now = new Date();
                html+=
                    '<div class="rk-update">' +
                    '<div class="row"> 平均每10分钟更新一次,上次更新时间：' +
                    '<span>' + now.getFullYear()+'/' + (now.getMonth()+1) + '/' + now.getDate() + '</span>' +
                    '</div> </div> </div>';
                var selector = $(fieldSection);
                $(selector[selector.length-1]).html(html);
            }
        }
    })
}

//加载白皮书信息
function loadWhitepaper(projectId){
    $.ajax({
        url: '/ico/projectWhitepaper', type: 'post',
        data: {projectId: projectId},
        success: function (data, status) {
            if (data.code == 0) {
                $("#editorWhitepaper").html(data.projectWhitepaper.whitepaper || "");
            }
        }
    });
}