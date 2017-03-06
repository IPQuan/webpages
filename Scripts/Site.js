function ready_to_edit(obj)
{
    $(obj).parent().removeClass("placeholder").removeClass("finished").addClass("edit");
    $(obj).parent().find(".form-control").focus();
}

function finish_to_edit(obj)
{
    var _default = "*********";
    if ($(obj).val().length <= 0)
    {
        $(obj).parent().removeClass("finished").removeClass("edit").addClass("placeholder");
        $(obj).parent().find("label").text(_default);
        return;
    }
    $(obj).parent().removeClass("placeholder").removeClass("edit").addClass("finished");
    $(obj).parent().find("label").text($(obj).val());
}
$(function ()
{
    $('[data-toggle="tooltip"]').tooltip()
})
$("#fileupload1").fileinput({
    language: 'zh',
    showUpload: false, //是否显示上传按钮
    allowedFileExtensions: ['jpg', 'png', 'gif'],//接收的文件后缀
});
$("#fileupload2").fileinput({
    language: 'zh',
    showUpload: false, //是否显示上传按钮
    allowedFileExtensions: ['jpg', 'png', 'gif'],//接收的文件后缀
});

function fileupload1_change()
{
    $("#fileupload1").show();
    $(".cert-upload1").hide();
    $(".cert-upload1").hide();
}

function fileupload2_change()
{
    $("#fileupload1").show();
    $(".cert-upload2").hide();
    $(".cert-upload2").hide();
}