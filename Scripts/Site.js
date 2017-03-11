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
});