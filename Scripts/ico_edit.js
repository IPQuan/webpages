/**
 * Created by qulisha on 17/4/28.
 */
var isSave = false;
function changeImg(){
    $('.project-img-div').removeClass('hidden');
    changeIsSave(true);
}
function changeImg2(){
    $('.project-img-div').addClass('hidden');
}
function ready_to_edit(obj)
{
    $(obj).parent().removeClass("placeholder").addClass("edit");
    $(obj).parent().find(".form-control").val($(obj).html()).focus();
    $('.row-top2').removeClass('hidden');
    var maxLength = $(obj).parent().find(".form-control").attr("maxlength");
    $("#text_count1").text(maxLength - $(obj).html().length);
    changeIsSave(true);
}
function ready_to_edit2(obj){
    $(obj).parent().removeClass("placeholder").addClass("edit");
    $(obj).parent().find(".form-control").val(replaceTag($(obj).html().trim())).focus();
    $('.row-top3').removeClass('hidden');
    var maxLength = $(obj).parent().find(".form-control").attr("maxlength");
    $("#text_count2").text(maxLength - $(obj).parent().find(".form-control").val().length);
    changeIsSave(true);
}
function ready_to_edit3(obj){
    $(obj).addClass('hidden');
    $(obj).siblings('div.wysiwyg').removeClass('hidden');
    $(obj).siblings('div.wysiwyg').find(".form-control").html($(obj).html()).focus();
    changeIsSave(true);
}
function ready_to_edit4(obj)
{
    $(obj).parent().removeClass("placeholder").removeClass("finished").addClass("edit");
    $(obj).parent().find(".form-control").focus();
}
function ready_to_edit5(obj)
{
    $(obj).parent().removeClass("placeholder").removeClass("finished").addClass("edit");
    $(obj).parent().find(".form-control").focus();
}
function ready_to_edit6(obj){
    $(obj).addClass('hidden');
    $(obj).siblings('div.wysiwyg').removeClass('hidden');
    $(obj).siblings('div.wysiwyg').find(".form-control").html($(obj).html()).focus();
    $(obj).siblings('.save-btns').removeClass('hidden');
    //changeIsSave(true);
}
function ready_to_edit7(obj){
    if(!$(obj).hasClass('disabled')){
        $('.cd-timeline-content').find('.form-group.wysiwyg').addClass('hidden');
        $('.cd-timeline-content').find('.save-btns').addClass('hidden');
        $('.cd-timeline-content').find('.cd-content').addClass('hidden');

        $(obj).parent().siblings('div.cd-value').find('div.wysiwyg').removeClass('hidden');
        $(obj).parent().siblings('div.cd-value').find('div.wysiwyg').find(".form-control").html($(obj).parent().siblings('div.cd-value').find('div.cd-content').html()).focus();
        $(obj).parent().siblings('div.cd-value').find('.save-btns').removeClass('hidden');
        $(obj).parent().siblings('div.cd-value').find('div.cd-content').addClass('hidden');
    }
}
function replaceTag(str){
    var reg=new RegExp("<br>","g");
    return str.replace(reg,"\n");
}
function replaceTag2(str){
    var reg=new RegExp("\n","g");
    return str.replace(reg,"<br>");
}
function finish_to_edit(obj)
{
    var _default = $(obj).val();
    if($(obj).val()==''){
        _default = '项目标题';
    }
    $(obj).parent().addClass("placeholder").removeClass("edit");
    $(obj).parent().find("label").html(_default);
    $('.row-top2').addClass('hidden');
}
function finish_to_edit2(obj){
    var _default = $(obj).val();
    if($(obj).val()==''){
        _default = '项目简介';
    }
    $(obj).parent().addClass("placeholder").removeClass("edit");
    $(obj).parent().find(".content").html(replaceTag2($(obj).val()));
    $('.row-top3').addClass('hidden');
}
function finish_to_edit3(obj){
    $(obj).parent().addClass('hidden');
    $(obj).parent().siblings('div.content').removeClass('hidden').html($(obj).html());
}
function finish_to_edit4(obj)
{
    var _default = "**";
    if ($(obj).val().length <= 0)
    {
        $(obj).parent().removeClass("finished").removeClass("edit").addClass("placeholder");
        $(obj).parent().find("label").text(_default);
        return;
    }
    $(obj).parent().removeClass("placeholder").removeClass("edit").addClass("finished");
    $(obj).parent().find("label").text($(obj).val());
}
function finish_to_edit5(obj)
{
    var _default = "******";
    if ($(obj).val().length <= 0)
    {
        $(obj).parent().removeClass("finished").removeClass("edit").addClass("placeholder");
        $(obj).parent().find("label").text(_default);
        return;
    }
    $(obj).parent().removeClass("placeholder").removeClass("edit").addClass("finished");
    $(obj).parent().find("label").text($(obj).val());
}
function changeIsSave(obj){
    isSave = obj;
    if(isSave){
        $('.save-btns2').removeClass('hidden');
    }else{
        if(!$('.save-btns2').hasClass('hidden')){
            $('.save-btns2').addClass('hidden');
        }
    }
}
function setEditDefault(){
    $('#title').val($('#title').parent().find("label").html());
    $('#introduction').val(replaceTag($('#introduction').parent().find('.content').html().trim()));
    $('#editor').html($('#editor').parent().siblings('div.content').html());
}

var reg = /^100$|^(\d|[1-9]\d)(\.\d+)*$/; //大于等于0,小于等于100,整数小数都可以
$('.pla-content i').click(function(){
    changeIsSave(true);
});
$('#begin-time').click(function(){
    changeIsSave(true);
});
$('#end-time').click(function(){
    changeIsSave(true);
});
function delete_user(obj){
    $(obj).parent().parent().parent().remove();
}
function add_user(){
    $('#add_user').click();
}
$('#save2').click(function(){
    finish_to_edit3($('#editor3'));
    $('.save-btns1').addClass('hidden');
});
$('.cd-timeline-content>div:first-child span:first-child').click(function(){
    if($(this).parent().parent().find('.form-group.wysiwyg').hasClass('hidden')){
        $('.cd-timeline-content').find('.form-group.wysiwyg').addClass('hidden');
        $('.cd-timeline-content').find('.save-btns').addClass('hidden');
        $('.cd-timeline-content').find('.cd-content').addClass('hidden');

        $(this).parent().parent().find('.form-group.wysiwyg').addClass('hidden');
        $(this).parent().parent().find('.save-btns').addClass('hidden');
        $(this).parent().parent().find('.cd-content').removeClass('hidden');
    }
});
function save(obj){
   $(obj).parent().parent().find('.form-group.wysiwyg').addClass('hidden');
   $(obj).parent().parent().find('.save-btns').addClass('hidden');
   $(obj).parent().parent().find('.cd-content').addClass('hidden');
}