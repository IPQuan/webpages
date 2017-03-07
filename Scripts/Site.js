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
    setTimeout(function ()
    {
        $(".cert-upload1").attr("src", $("#fileupload_div1").find("img").attr("src"));
    }, 100);
}

function fileupload2_change()
{
    setTimeout(function ()
    {
        $(".cert-upload2").attr("src", $("#fileupload_div2").find("img").attr("src"));
    }, 100);
}