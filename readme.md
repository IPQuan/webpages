文件存放规则

一、文件名命名规则：

	1、文件名如非特殊原因，不准使用中文，建议使用全小写英文字母，如果是多单词拼接，则后续单词首字母大写，比如formValidator.js
	2、顶级页面直接按页面名字来命名，比如首页可以直接命名为index.html
	3、次级页面建议使用下划线‘_’来分隔名字，比如用户中心，可以命名为user_center.html

二、目录存放规则：

	1、Content: 用来存放网站页面自定义的样式库
		a、Site.css 放置一些全网站通用的样式
		b、style.css 放置一些全网站通用的样式，主要集中在登录对话框模块
		c、如果有函数只是适用某些页面的页面，建议直接放入本页面中，或者另起一个与页面模块对应的js文件，比如ico.css
	2、Fonts：用来存放网站所用到的一些字体，原则上尽量使用系统自带字体
	3、Images：用来存放网站所用到的静态图片资源
	4、Scripts：用来存放网站页面自定义的脚本库
		a、Site.js 放置一些全网站通用的函数
		b、formValidator.js 用于定义表单有效性检查的一些规则
		c、loginbox.js 用于定义登录对话框的一些实现
		d、如果有样式只是适用某些页面的页面，建议直接放入本页面中，或者另起一个与页面文件对应的css文件，比如ico.css
	5、Libs：用来存放一些标准库函数，建议使用bower工具来管理，在.bowerrc文件中配置如下：
		{
		  "directory":"libs"
		}
	6、Libs／external：用来存放一些无法使用bower安装的第三方库，比如 jqBootstrapValidation，jquery.md5.js
