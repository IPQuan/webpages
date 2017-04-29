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
function changeIsSave(obj){
    isSave = obj;
    if(isSave){
        $('.save-btns').removeClass('hidden');
    }else{
        if(!$('.save-btns').hasClass('hidden')){
            $('.save-btns').addClass('hidden');
        }
    }
}
$('#save').click(function(){
    finish_to_edit($('#title'));
    finish_to_edit2($('#introduction'));
    finish_to_edit3($('#editor'));
    changeImg2();
    changeIsSave(false);
});
function setEditDefault(){
    $('#title').val($('#title').parent().find("label").html());
    $('#introduction').val(replaceTag($('#introduction').parent().find('.content').html().trim()));
    $('#editor').html($('#editor').parent().siblings('div.content').html());
}
