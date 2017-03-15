var modalSwitch = function() {
    $("#loginBoxModal .modal-dialog").addClass("switching").delay(900).queue(function() {
        $("#loginBoxModal .modal-dialog").removeClass("switching").dequeue();
    });
};

var encodePassword = function(password){
    var result="";
    if (password !== "") {
        var pwmd51 = $.md5(password);
        var pwmd52 = $.md5(pwmd51);
        result = pwmd52.substring(0, 3) + pwmd52.substring(4, pwmd52.length);
    }
    return result;
};

var modalDom = function(type) {
    // var isMobile = !!window.navigator.userAgent.match(/AppleWebKit.*Mobile.*/);
    // if (isMobile) {
    //     alert("手机端暂时无法互动，请下载相应的APP！");
    //     return false;
    // }
    // // type [register 、login]
    var addHtml = [];
    addHtml += '<div class="modal inmodal" id="loginBoxModal" tabindex="-1" role="dialog" aria-hidden="true">';
    addHtml += '<div class="modal-dialog">';
    addHtml += '<div class="modal-content animated fadeIn">';
    addHtml += '<div class="modal-body">';
    addHtml += '<div id="login_frame" >';
    addHtml += '<div id="topM"><img class="logo" src="Images/logo-login.png" width="200"></div>';

    // 注册
    if (type == "register") {
        addHtml += '<div class="oper-box sign-up">';
    } else {
        addHtml += '<div class="oper-box sign-up" style="display: none;">';
    }

    addHtml += '<div class="holder">';
    addHtml += '<div class="with-line with-line3">用第三方帐号注册IP圈</div>';
    addHtml += '<div class="buttons">';
    addHtml += '<a class="weibo" id="WBLoginBtn" title="微博帐号登录" href="/user/auth/weibo" rel="nofollow"><i>&#xe73d;</i></a>';
    addHtml += '<a class="qzone" id="QQLoginBtn" title="QQ帐号登录" href="/user/auth/qq" rel="nofollow"><i>&#xe73c;</i></a>';
    addHtml += '<a class="weixin" id="WXLoginBtn" title="微信账号登录" href="/user/auth/wx" rel="nofollow"><i>&#xe740;</i></a>';
    addHtml += '</div>';
    addHtml += '<a class="switch-mobile-signup brown-link">使用手机号注册»</a><div class="lineHr"></div>';
    addHtml += '</div>';
    addHtml += '<div class="switch">已有帐号？<a class="brown-link">登录到IP圈»</a></div>';
    addHtml += '</div>';
    // 登录
    if (type == "login") {
        addHtml += '<div class="oper-box login">';
    } else {
        addHtml += '<div class="oper-box login" style="display:none">';
    }
    addHtml += '<div class="holder">';
    addHtml += '<div class="with-line">使用第三方帐号登录</div>';
    addHtml += '<div class="buttons">';
    addHtml += '<a class="weibo" id="WBLoginBtn" title="微博帐号登录" href="/user/auth/weibo" rel="nofollow"><i>&#xe73d;</i></a>';
    addHtml += '<a class="qzone" id="QQLoginBtn" title="QQ帐号登录" href="/user/auth/qq" rel="nofollow"><i>&#xe73c;</i></a>';
    addHtml += '<a class="weixin" id="WXLoginBtn" title="微信账号登录" href="/user/auth/wx" rel="nofollow"><i>&#xe740;</i></a>';
    addHtml += '</div>';
    addHtml += '<div class="with-line2">使用手机号登录</div>';
    addHtml += '<form>';
    addHtml += '<div class="form-group">';
    addHtml += '<input class="form-control" id="qxUid" type="text" placeholder="手机号码" required="">';
    addHtml += '</div>';
    addHtml += '<div class="form-group">';
    addHtml += '<div class="form-group">';
    addHtml += '<input class="form-control" id="qxPwd" type="password" placeholder="密码" required="">';
    addHtml += '</div>';
    addHtml += '<button class="btn btn-primary full-width" id="loginButton" type="button">登录</button>';
    addHtml += '</form>';
    addHtml += '<a class="reset-password red-link">忘记密码»</a>';
    addHtml += '<div class="switch-back">还没有IP圈账号？<a class="signup red-link">点击注册»</a></div>';
    addHtml += '</div>';
    addHtml += '</div>';
    addHtml += '</div>';

    // 重设密码
    addHtml += '<div style="display: none;" class="oper-box reset">';
    addHtml += '<div class="holder">';
    addHtml += '<div class="with-line with-line5">重设密码</div>';
    addHtml += '<form class="reset-form" class="form-horizontal" id="resetForm" autocomplete="off">';
    addHtml += '<div class="form-group relative">';
    addHtml += '<input class="form-control" id="resetMobile" name="mobile" type="text" placeholder="手机号码" autocomplete="off">';
    addHtml += '<span class="verify-result verify-mobile"></span>';
    addHtml += '</div>';
    addHtml += '<div class="form-group relative">';
    addHtml += '<input class="form-control" id="resetPwd" type="password" name="password" placeholder="密码" autocomplete="off">';
    addHtml += '<span class="verify-result verify-password"></span>';
    addHtml += '</div>';
    addHtml += '<div class="form-group relative">';
    addHtml += '<input class="form-control" id="resetPwdCheck" type="password" name="repassword" placeholder="确认密码" required="" autocomplete="off">';
    addHtml += '<span class="verify-result verify-resetPwdCheck"></span>';
    addHtml += '</div>';
    addHtml += '<div class="form-group relative">';
    addHtml += '<div class="input-group">';
    addHtml += '<input class="verify-code form-control" id="resetVerifyMobileCode" name="code" type="text" placeholder="手机验证码" required="">';
    addHtml += '<span class="input-group-btn">';
    addHtml += '<input class="btn btn-default" id="resetVerifyMobileCodeSend" type="button" value="获取短信验证码">';
    addHtml += '</span>';
    addHtml += '<span class="verify-result verify-mobile-code"></span>';
    addHtml += '</div>';
    addHtml += '</div>';
    addHtml += '<button class="btn btn-primary block full-width m-b" id="resetPasswordButton" type="button">找回密码</button>';
    addHtml += '</form>';
    addHtml += '<a class="back red-link">又想起密码了»</a>';
    addHtml += '</div>';
    addHtml += '</div>';

    // 注册成功
    addHtml += '<div class="oper-box mobile-signup">';
    addHtml += '<div class="signup-success" style="display: none">';
    addHtml += '<div class="with-line">注册成功</div>';
    addHtml += '<div class="text">验证邮件已经发送到<span class="email">email</span>，请<a href="" target="_blank" class="check-mail red-link">点击查收邮件</a>激活账号。<br>没有收到激活邮件？请耐心等待，或者<a class="resend red-link disabled">重新发送<span>30</span></a></div>';
    addHtml += '<a class="login-link red-link">« 返回登录页</a>';
    addHtml += '</div>';
    addHtml += '<div class="signup-form" style="display: none">';
    addHtml += '<div class="holder">';
    addHtml += '<div class="with-line with-line4">使用手机注册</div>';
    addHtml += '<form autocomplete="off" id="registerForm">';
    addHtml += '<div class="form-group relative">';
    addHtml += '<input class="form-control" id="registerMobile" type="text" placeholder="手机号码" required="" autocomplete="off">';
    addHtml += '<span class="verify-result verify-mobile"></span>';
    addHtml += '</div>';
    addHtml += '<div class="form-group relative">';
    addHtml += '<input class="form-control" id="registerPwd" type="password" name="password" placeholder="密码" required="" autocomplete="off">';
    addHtml += '<span class="verify-result verify-password"></span>';
    addHtml += '</div>';
    addHtml += '<div class="form-group relative">';
    addHtml += '<input class="form-control" id="passwordCheck" type="password" name="repassword" placeholder="确认密码" required="" autocomplete="off">';
    addHtml += '<span class="verify-result verify-passwordCheck"></span>';
    addHtml += '</div>';
    //addHtml += '<div class="form-group clearfix">';
    //addHtml += '<input id="verifyImgCode" class="verify-code form-control" type="text" class="form-control" placeholder="验证码" required="" autocomplete="off">';
    //addHtml += '<div class="verify-img">';
    //addHtml += '<img id="resetImgCode" style="-webkit-user-select: none" src="/lianzai/CaptchaCtrl/getImgCode">';
    //addHtml += '</div>';
    //addHtml += '<span class="verify-result verify-img-code"></span>';
    //addHtml += '</div>';
    addHtml += '<div class="form-group relative">';
    addHtml += '<div class="input-group">';
    addHtml += '<input class="verify-code form-control" id="verifyMobileCode" type="text" name="code" placeholder="手机验证码" required="">';
    addHtml += '<span class="input-group-btn">';
    addHtml += '<input class="btn btn-default" id="verifyMobileCodeSend" type="button" value="获取短信验证码">';
    addHtml += '</span>';
    addHtml += '<span class="verify-result verify-mobile-code"></span>';
    addHtml += '</div>';
    addHtml += '</div>';
    addHtml += '<button class="btn btn-primary block full-width m-b" id="registerButton" type="button">注 册</button>';
    addHtml += '</form>';
    addHtml += '<a class="email-signup-back brown-link">« 返回第三方帐号登录</a>';
    addHtml += '</div>';
    addHtml += '</div>';
    addHtml += '</div>';
    addHtml += '<div class="close" data-dismiss="modal" aria-label="Close"><i>&#xe66b;</i></div>';
    addHtml += '</div>';
    addHtml += '</div>';
    addHtml += '</div>';
    addHtml += '</div>';
    addHtml += '</div>';

    $("#loginBoxWrap").append(addHtml);
    $("#loginBoxWrap").find("form input[type='text'],form input[type='password']").val("");
    $("#loginBoxModal").modal({
        show : true
    });
    //setFormValidator($("#resetForm"));
    //setFormValidator($("#registerForm"));
};
// =================================================== 注册
// 验证手机号是否被注册
var isMobileRegistered = function(mobile, type) {
    jQuery.ajax({
        type: "post",
        url: "/user/isMobileRegistered",
        data: {
            mobile: mobile
        },
        success: function(data) {
            if (data.code == 0) {
                // 手机号未被注册
                if (type == "register") {
                    // 如果是注册
                    $("#loginBoxWrap").find(".mobile-signup .verify-mobile").removeClass("wrong").addClass("right").html("<i></i>");
                    $("#loginBoxWrap").find(".mobile-signup #registerMobile").attr("hasUsed", "no").attr("verification", "right");
                } else {
                    // 如果是找回密码
                    $("#loginBoxWrap").find(".reset .verify-mobile").removeClass("right").addClass("wrong").html("<i></i>该手机号还未注册！");
                    $("#loginBoxWrap").find(".reset #resetMobile").attr("hasUsed", "no").attr("verification", "wrong");
                }

            }else{
                // 手机号已被注册
                if (type == "register") {
                    $("#loginBoxWrap").find(".mobile-signup .verify-mobile").removeClass("right").addClass("wrong").html("<i></i>手机号已被注册！");
                    $("#loginBoxWrap").find(".mobile-signup #registerMobile").attr("hasUsed", "yes").attr("verification", "wrong");
                } else {
                    // 如果是找回密码
                    $("#loginBoxWrap").find(".reset .verify-mobile").removeClass("wrong").addClass("right").html("<i></i>");
                    $("#loginBoxWrap").find(".reset #resetMobile").attr("hasUsed", "yes").attr("verification", "right");
                }

            }
        },
        error:  function() {
            $.message.pop("服务器连接错误！", "warning");
        }
    });
};

//检查刷新图片验证码
var checkCertImg=function(div,img) {
    var divStyle = div.attr("style")||"";
    if (divStyle.search("display: block;")==-1) {
        if (img.attr("src")) {
            img.removeAttr("src");
            img.removeAttr("data-verified");
        }
    }
    else {
        if (!img.attr("src")) {
            img.attr("src", "/post/veri.jpg?ver=" + Math.random().toString());
        }
    }

};

// 验证图片验证码是否正确
var verifyImgCode = function(imgCode, cb) {
    jQuery.ajax({
        type: "post",
        url: "/post/verifyImgCode",
        data: {
            code: imgCode
        },
        success: cb,
        error: function() {
            $.message.pop("服务器连接错误！", "warning");
        }
    });
};

// 发送手机验证码
var getMobileCode = function(mobile) {
    jQuery.ajax({
        type: "post",
        url: "/user/sendMobileCode",
        data: {
            mobile: mobile
        },
        success : function(data) {
            if (data.code == 0) {
                $.message.pop("验证码已发送，请注意查收！", "success");
            }
        },
        error : function() {
            $.message.pop("服务器连接错误！", "warning");
        }
    });
};

var getMobileCode0 = function () {
    jQuery.ajax({
        type: "post",
        url: "/user/sendMobileCode0",
        data: {},
        success : function(data) {
            if (data.code == 0) {
                $.message.pop("验证码已发送到你绑定手机，请注意查收！", "success");
            }
        },
        error : function() {
            $.message.pop("服务器连接错误！", "warning");
        }
    });
};

// 验证码倒计时
var countdown = 60;
function verifyMobileCodeSetTime(dom) {
    if (countdown == 0) {
        $(dom).removeAttr("disabled");
        $(dom).val("获取验证码");
        countdown = 60;
        return false;
    } else {
        $(dom).attr("disabled", true);
        $(dom).val("重新发送 " + countdown);
        countdown--;
    }
    setTimeout(function() {
        verifyMobileCodeSetTime(dom);
    }, 1000);
}

// 检查手机验证码是否正确
var confirmMobileCode = function() {
    var mobile = $("#registerMobile").val();
    var code = $("#verifyMobileCode").val();
    jQuery.ajax({
        type: "post",
        url: "/user/confirmMobileCode",
        data: {
            mobile: mobile,
            code: code
        },
        success : function(data) {
            if (data.code == 0) {
                // 验证码正确时候的提示
            }
        },
        error : function() {
            $.message.pop("服务器连接错误！", "warning");
        }
    });
};

var codeIsValid = function(invitationCode) {
    jQuery.ajax({
        type: "post",
        url: "/user/checkInvitionCode",
        data: {
            invitationCode : invitationCode
        },
        success : function(data) {
            if (data.code == 0) {
                $("#invCode").css("border-color", "#1ab394").addClass("codeOk");
            }
            else {
                // 邀请码不存在
                $("#invCode").css("border-color", "#FF5E00").removeClass("codeOk");
            }
        },
        error : function() {
            alert("各种错误");
        }
    });
};

// 使用手机号注册
var registerWithMobile = function(mobile, password, code) {
    jQuery.ajax({
        type: "post",
        url: "/user/register",
        data: {
            mobile: mobile,
            password: password,
            code: code,
            origin: "web"
        },
        success : function(data) {
            if (data.code == 0) {
                $.message.pop("账号注册成功！", "success");
                $("#qxUid").val(mobile);
                $("#qxPwd").val("");
                setTimeout(function() {
                    modalSwitch();
                    setTimeout(function() {
                        $("#loginBoxModal").find(".login").show().siblings(".mobile-signup").hide();
                    }, 400);
                }, 1000);
            } else {
                $.message.pop(data.msg, data.type);
            }
        },
        error : function() {
            alert("各种错误");
        }
    });
};

// 使用手机号重设密码
var resetPassword = function(mobile, password, code) {
    jQuery.ajax({
        type: "post",
        url: "/user/forget",
        data: {
            mobile : mobile,
            password : password,
            code : code
        },
        success : function(data) {
            if (data.code == 0) {
                // window.location.reload();

                $.message.pop("重置密码成功！", "success");
                $("#qxUid").val(mobile);
                $("#qxPwd").val("");
                setTimeout(function() {
                    modalSwitch();
                    setTimeout(function() {
                        $("#loginBoxModal").find(".login").show().siblings(".reset").hide();
                    }, 400);
                    // 清空原来的value
                    $("#resetMobile").val("");
                    $("#resetPwd").val("");
                    $("#resetVerifyMobileCode").val("");
                }, 1000);
            } else {
                $.message.pop(data.msg, data.type);
            }
        },
        error : function() {
            alert("各种错误");
        }
    });
};
// 检测是否有空格
var checkSpace = function(text) {
    if (/[ ]/.test(text)) {
        return false;
    } else {
        return true;
    }
};

// =================================================== Jquery ready
$(function() {
    // 登录
    $("#loginBtn").on("click", function() {
        modalDom("login");
        $('#qxUid').focus();
    });
    // 注册
    $("#registerBtn").on("click", function() {
        modalDom("register");
    });

    // 登录系统
    $("#loginBoxWrap").on("click", "#loginBoxModal #loginButton", function() {
        var uid = $("#qxUid").val().trim();
        var password = $("#qxPwd").val();

        var pw = encodePassword(password);

        $.ajax({
            url: '/user/login',
            type: 'post',
            data: {
                mobile: uid,
                password: pw,
                loginSign: "webSite",
                origin: "web"
            },
            success: function(data) {
                if (data.code == 0) {
                    var ipquanRemember = "uid:" + uid + "," + "pw:" + pw;
                    localStorage.setItem("ipquanRemember", ipquanRemember);
                    window.location.reload();
                } else {
                    $.message.pop(data.msg,data.type);
                }
            },
            error: function() {
                alert("各种错误");
            }
        });
    });
    // 切换不同的视图
    $("#loginBoxWrap").on("click", "#loginBoxModal .reset-password.red-link", function() {
        $("#loginBoxModal").find(".login").hide().siblings(".reset").show();
    });
    $("#loginBoxWrap").on("click", "#loginBoxModal .back.red-link", function() {
        modalSwitch();
        setTimeout(function() {
            $("#loginBoxModal").find(".login").show().siblings(".reset").hide();
        }, 400);
    });
    $("#loginBoxWrap").on("click", "#loginBoxModal .signup.red-link", function() {
        modalSwitch();
        setTimeout(function() {
            $("#loginBoxModal").find(".sign-up").show().siblings(".login").hide();
        }, 400);
    });
    $("#loginBoxWrap").on("click", "#loginBoxModal .switch .brown-link", function() {
        modalSwitch();
        setTimeout(function() {
            $("#loginBoxModal").find(".login").show().siblings(".sign-up").hide();
        }, 400);
    });
    $("#loginBoxWrap").on("click", ".switch-mobile-signup.brown-link", function() {
        $("#loginBoxModal").find(".mobile-signup .signup-form").show().parent(".oper-box").siblings(".sign-up").hide();
        $('#loginBoxWrap #registerMobile').focus();
    });
    $("#loginBoxWrap").on("click", ".email-signup-back.brown-link", function() {
        modalSwitch();
        setTimeout(function() {
            $("#loginBoxModal").find(".sign-up").show().siblings(".mobile-signup").find(".signup-form").hide();
        }, 400);
    });
    // 当窗口隐藏时候
    $('#loginBoxWrap').on('hidden.bs.modal', "#loginBoxModal", function(e) {
        $('#loginBoxWrap').find("#loginBoxModal").remove();
    });
    // 添加评论监控键盘
    $('#loginBoxWrap').on("keydown", "#qxPwd", function(e) {
        var key = e.which;
        if (key == 13) {
            e.preventDefault();
            $(this).parent(".form-group").siblings("button#loginButton").trigger("click");
        }
    });
});

// =================================================== 注册的Jquery ready
$(function() {
    // 判断手机号是否有效
    $("#loginBoxWrap").on("blur", "#registerMobile", function() {
        var tel = $("#registerMobile").val().trim();
        var telReg = !!tel.match(/^(0|86|17951)?(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/);
        if (tel.length == 0) {
            return false;
        }
        if (tel.length != 11) {
            $(".verify-mobile").removeClass("right").addClass("wrong").html("<i></i>手机号输入错误");
        }
        if ($(this).attr("hasUsed") != "yes") {
            $(this).removeClass("wrong").addClass("right").attr("verification", "right");
            $(".verify-mobile").removeClass("wrong").addClass("right").html("<i></i>");
            return false;
        }
        if (telReg) {
            $(this).removeClass("wrong").addClass("right").attr("verification", "right");
            isMobileRegistered(tel, 'register');
        } else {
            $(this).removeClass("right").addClass("wrong").attr("verification", "wrong");
            $(".verify-mobile").removeClass("right").addClass("wrong").html("<i></i>手机号输入错误");
        }
    });
    // 检测手机号是否被注册
    $("#loginBoxWrap").on("keyup", "#loginBoxModal #registerMobile", function() {
        var mobile = $(this).val().trim();
        if (mobile.length != 11) {
            $(this).removeAttr("verification");
            $(".verify-mobile").removeClass("right wrong").empty();
        }
        if (mobile.length == 11) {
            isMobileRegistered(mobile, 'register');
        } else if (mobile.length > 11) {
            $(".verify-mobile").removeClass("right").addClass("wrong").html("<i></i>手机号位数不能超过11位！");
        }
    });
    // 检测密码是否超过18位
    $("#loginBoxWrap").on("keyup", "#loginBoxModal #registerPwd", function() {
        var pwd = $(this).val().trim();
        if (pwd.length > 18) {
            $(".verify-password").removeClass("right").addClass("wrong").html("<i></i>密码最多18位！");
        } else {
            $(".verify-password").removeClass("right wrong").empty();
        }
    });

    // 检测图片验证码是否通过
    $("#loginBoxWrap").on("blur", "#loginBoxModal #verifyImgCode", function() {
        var imgCode = $(this).val().trim();
        if (imgCode.length == 0) {
            return false;
        }
        if (imgCode.length == 5) {
            verifyImgCode(imgCode,function(data){
                if(data.code==0) {
                    // 输入正确
                    $(".verify-img-code").removeClass("wrong").addClass("right").html("<i></i>");
                    $("#verifyImgCode").removeClass("wrong").addClass("right").attr("verification", "right");
                }
                else {
                    // 输入错误
                    $(".verify-img-code").removeClass("right").addClass("wrong").html("<i></i>"+data.msg);
                    $("#verifyImgCode").attr("verification", "wrong");
                }
            });
        } else {
            $(".verify-img-code").removeClass("right").addClass("wrong").html("<i></i>请输入正确的验证码！");
            $(this).removeClass("right").addClass("wrong").attr("verification", "wrong");
        }
    });

    $("#loginBoxWrap").on("blur", "#registerPwd", function() {
        // 判断密码
        var pwd = $(this).val();
        if (!checkSpace(pwd)) {
            $(".verify-password").removeClass("right").addClass("wrong").html("<i></i>密码不能有空格！");
        }
        if (pwd == "") {
            $(this).attr("verification", "empty");
            return false;
        }
        if (pwd.length > 18) {
            $(this).removeClass("right").addClass("wrong").attr("verification", "wrong");
            $(".verify-password").removeClass("right").addClass("wrong").html("<i></i>密码最多18位！");
            return false;
        }
        if (pwd.length < 6) {
            $(this).removeClass("right").addClass("wrong").attr("verification", "wrong");
            $(".verify-password").removeClass("right").addClass("wrong").html("<i></i>密码最少6位！");
            return false;
        }
        if (pwd.length >= 6 && pwd.length <= 18) {
            $(this).removeClass("wrong").addClass("right").attr("verification", "right");
            $(".verify-password").removeClass("wrong").addClass("right").html("<i></i>");
        }
    });
    // 检测密码是否匹配
    $("#loginBoxWrap").on("keyup", "#passwordCheck", function() {
        var pwd = $("#registerPwd").val().trim();
        var chk = $(this).val().trim();
        if (pwd !== chk) {
            $(this).removeClass("right").addClass("wrong").attr("verification", "wrong");
            $(".verify-passwordCheck").removeClass("right").addClass("wrong").html("<i></i>密码不匹配！");
        } else {
            $(this).removeClass("wrong").addClass("right").attr("verification", "right");
            $(".verify-passwordCheck").removeClass("wrong").addClass("right").html("<i></i>");
        }
    });
    // 获取验证码
    $("#loginBoxWrap").on("click", "#verifyMobileCodeSend", function() {
        var parentsForm = $(this).parents("form");
        var mobileText = parentsForm.find("#registerMobile").val().trim();
        var attrMobile = parentsForm.find("#registerMobile").attr("verification");
        console.log(attrMobile);
        if (attrMobile != "right") {
            $(".verify-mobile").removeClass("right").addClass("wrong").html("<i></i>您还没有填写手机号！");
            return false;
        }
        // //图片验证码
        //var attrImgCode = parentsForm.find("#verifyImgCode").attr("verification");
        // if (attrImgCode != "right") {
        //     $(".verify-img-code").removeClass("right").addClass("wrong").html("<i></i>请填入正确的验证码！");
        //     return false;
        //}
        if (attrMobile == "right") {
            // 如果手机号填写正确
            // 充值时间
            verifyMobileCodeSetTime("#verifyMobileCodeSend");
            getMobileCode(mobileText);
        } else {
            // 如果填写错误
            $(".verify-mobile").removeClass("right").addClass("wrong").html("<i></i>请填写正确的手机号！");
        }
    });

    // 注册
    $("#loginBoxWrap").on("click", "#registerButton", function() {
        var parentsForm = $(this).parents("form");
        // 验证手机号
        if (parentsForm.find("#registerMobile").attr("verification") != "right") {
            $(".verify-mobile").removeClass("right").addClass("wrong").html("<i></i>请填写正确的手机号！");
            return;
        }
        // 验证密码
        if (parentsForm.find("#registerPwd").attr("verification") != "right") {
            $(".verify-password").removeClass("right").addClass("wrong").html("<i></i>请填写正确密码！");
            return;
        }
        // 密码校验
        if (parentsForm.find("#passwordCheck").attr("verification") != "right") {
            $(".verify-passwordCheck").removeClass("right").addClass("wrong").html("<i></i>密码不匹配！");
            return;
        }
        // 验证密码
        var mobile = parentsForm.find('#registerMobile').val();
        var pwd = parentsForm.find("#registerPwd").val();
        var code = parentsForm.find("#verifyMobileCode").val();

        // 经过加密后的密码
        var pw = encodePassword(pwd);
        // 执行ajax mobile, password, code
        registerWithMobile(mobile, pw, code);
    });

    // //刷新图片验证码
    // $("#loginBoxWrap").on("click", "#loginBoxModal #resetImgCode", function() {
    //     $(this).attr("src", "/lianzai/CaptchaCtrl/getImgCode?=" + Math.random());
    //     $("#verifyImgCode").val("").removeClass("right wrong").removeAttr("verification");
    //     $(".verify-img-code").removeClass("right wrong").empty();
    // });

    // 监控键盘
    var $inp = $('.form-group input');
    $inp.bind('keydown', function(e) {
        var key = e.which;
        if (key == 13) {
            e.preventDefault();
            $("#loginButton").trigger("click");
        }
    });
});

// =================================================== 忘记密码Jquery ready
$(function() {
    // 判断手机号是否有效
    $("#loginBoxWrap").on("blur", "#resetMobile", function () {
        var tel = $(this).val().trim();
        var telReg = !!tel.match(/^(0|86|17951)?(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/);
        if (tel.length == 0) {
            return false;
        }
        if (tel.length != 11) {
            $(".verify-mobile").removeClass("right").addClass("wrong").html("<i></i>手机号输入错误");
            $(this).removeClass("right").addClass("wrong").attr("verification", "wrong");
        }
        if ($(this).attr("hasUsed") != "yes") {
            $(this).siblings(".verify-mobile").removeClass("wrong").addClass("right").html("<i></i>");
            $(this).removeClass("wrong").addClass("right").attr("verification", "right");
            return false;
        }
        if (telReg) {
            $(this).removeClass("wrong").addClass("right").attr("verification", "right");
            isMobileRegistered(tel, 'reset');
        } else {
            $(this).removeClass("right").addClass("wrong").attr("verification", "wrong");
            $(".verify-mobile").removeClass("right").addClass("wrong").html("<i></i>手机号输入错误");
        }
    });
    // 检测手机号是否被注册
    $("#loginBoxWrap").on("keyup", "#resetMobile", function () {
        var mobile = $(this).val().trim();
        if (mobile.length != 11) {
            $(this).removeAttr("verification");
            $(".verify-mobile").removeClass("right wrong").empty();
        }
        if (mobile.length == 11) {
            isMobileRegistered(mobile, "reset");
        } else if (mobile.length > 11) {
            $(".verify-mobile").removeClass("right").addClass("wrong").html("<i></i>手机号位数不能超过11位！");
        }
    });
    // 检测密码是否超过16位
    $("#loginBoxWrap").on("keyup", "#resetPwd", function () {
        var pwd = $(this).val().trim();
        if (pwd.length > 16) {
            $(".verify-password").removeClass("right").addClass("wrong").html("<i></i>密码最多16位！");
        } else {
            $(".verify-password").removeClass("right wrong").empty();
        }
    });
    $("#loginBoxWrap").on("blur", "#resetPwd", function () {
        // 判断密码
        var pwd = $(this).val();
        if (!checkSpace(pwd)) {
            $(".verify-password").removeClass("right").addClass("wrong").html("<i></i>密码不能有空格！");
        }
        if (pwd == "") {
            $(this).attr("verification", "empty");
            return false;
        }
        if (pwd.length > 16) {
            $(this).removeClass("right").addClass("wrong").attr("verification", "wrong");
            $(".verify-password").removeClass("right").addClass("wrong").html("<i></i>密码最多16位！");
            return false;
        }
        else if (pwd.length < 6) {
            $(this).removeClass("right").addClass("wrong").attr("verification", "wrong");
            $(".verify-password").removeClass("right").addClass("wrong").html("<i></i>密码最少6位！");
            return false;
        }
        else {
            $(this).removeClass("wrong").addClass("right").attr("verification", "right");
            $(".verify-password").removeClass("wrong").addClass("right").html("<i></i>");
        }
    });

    // 检测密码是否匹配
    $("#loginBoxWrap").on("keyup", "#resetPwdCheck", function() {
        var pwd = $("#resetPwd").val().trim();
        var chk = $(this).val().trim();
        if (pwd !== chk) {
            $(this).removeClass("right").addClass("wrong").attr("verification", "wrong");
            $(".verify-resetPwdCheck").removeClass("right").addClass("wrong").html("<i></i>密码不匹配！");
        } else {
            $(this).removeClass("wrong").addClass("right").attr("verification", "right");
            $(".verify-resetPwdCheck").removeClass("wrong").addClass("right").html("<i></i>");
        }
    });

    // 获取验证码
    $("#loginBoxWrap").on("click", "#resetVerifyMobileCodeSend", function () {
        var parentsForm = $(this).parents("form");
        var mobileText = parentsForm.find("#resetMobile").val().trim();
        var attrMobile = parentsForm.find("#resetMobile").attr("verification");
        if (attrMobile != "right") {
            $(".verify-mobile").removeClass("right").addClass("wrong").html("<i></i>您输入的手机号不正确！");
            return false;
        }
        if (attrMobile == "right") {
            // 如果手机号填写正确
            // 充值时间
            verifyMobileCodeSetTime(resetVerifyMobileCodeSend);
            getMobileCode(mobileText);
        } else {
            // 如果填写错误
            $(".verify-mobile").removeClass("right").addClass("wrong").html("<i></i>请填写正确的手机号！");
        }
    });

    // 找回密码
    $("#loginBoxWrap").on("click", "#resetPasswordButton", function () {
        // 验证手机号
        var parentsForm = $(this).parents("form");
        var resetMobileText = parentsForm.find("#resetMobile").val().trim();
        var attrResetMobile = parentsForm.find("#resetMobile").attr("verification");
        var attrResetPwd = parentsForm.find("#resetPwd").attr("verification");

        console.log(attrResetMobile);
        if (attrResetMobile != "right") {
            $(".verify-mobile").removeClass("right").addClass("wrong").html("<i></i>请填写正确的手机号！");
            return;
        }
        // 验证密码
        if (attrResetPwd != "right") {
            $(".verify-password").removeClass("right").addClass("wrong").html("<i></i>请填写正确密码！");
            return;
        }
        // 密码校验
        if (parentsForm.find("#resetPwdCheck").attr("verification") != "right") {
            $(".verify-resetPwdCheck").removeClass("right").addClass("wrong").html("<i></i>密码不匹配！");
            return;
        }
        var mobile = $('#resetMobile').val();
        var pwd = $("#resetPwd").val();
        var code = $("#resetVerifyMobileCode").val();
        if (code == "") {
            $.message.pop("手机验证码不能为空！", "warning");
            return false;
        }
        // 经过加密后的密码
        var pw = encodePassword(pwd);
        // 执行ajax mobile, password, code
        resetPassword(mobile, pw, code);
    });
});

