/**
 * Apilist
 */
var H5ComponentApiList = function(name, cfg){
	var component = H5ComponentBase(name, cfg);

	$.each(cfg.data, function(index, item){

		var p1 = $('<h2 class="h2"><strong>'+item[0]+'</strong></h2>');
		var div = $('<div class="hide">');
		var p2 = $('<p><span class="na">解释:</span>'+item[1]+'</p>');
		var p3 = $('<p><span class="na">值类型:</span>'+item[2]+'</p>');
		var p4 = $('<p><span class="na">默认值:</span>'+item[3]+'</p>');
		var p5 = $('<p><span class="na">说明:</span>'+item[4]+'</p>');
		var p6 = $('<p><span class="na">用法:</span>在项目的fis-conf.js里可以覆盖为</p>');
		var p7 = $('<div class="highlighter-rouge">'+item[5]+'</div>');

		p1.click(function(){
			console.log(div.attr('class'));
			var cn = div.attr('class');
			if(cn === 'hide'){
				div.removeClass('hide').addClass('show');
				div.prev().addClass('h2-show');
			}else{
				div.removeClass('show').addClass('hide');
				div.prev().removeClass('h2-show');
			}
		});
		component.append(p1)
		div.append(p2).append(p3).append(p4)
		if(item[4]){
			div.append(p5);
		}
		div.append(p6).append(p7);
		component.append(div);
	});

	return component;

}

var listProject = [
	[
		"charset",
		"指定项目编译后产出文件的编码",
		"string",
		"utf8",
		"",
		$('#charset').html()
	],[
		"md5Length",
		"文件MD5戳长度",
		"number",
		"7",
		"",
		$('#md5Length').html()
	],[
		"md5Connector",
		"设置md5与文件的连字符",
		"string",
		"_",
		"",
		$('#md5Connector').html()
	],[
		"include",
		"设置项目源码文件include过滤器。只有命中include的文件才被视为源码，其他文件则忽略",
		"Array | string | RegExp",
		"无",
		"",
		$('#include').html()
	],[
		"exclude",
		"设置项目源码文件exclude过滤器。如果同时设置了 project.include 和 project.exclude 则表示在include所命中的文件中排除掉某些文件",
		"Array | string | RegExp",
		"无",
		"",
		$('#exclude').html()
	],[
		"fileType.text",
		"追加文本文件后缀列表",
		"Array | string",
		"无",
		"",
		$('#fileType-text').html()
	],[
		"fileType.image",
		"追加图片类二进制文件后缀列表",
		"Array | string",
		"无",
		"fis系统在编译时会对文本文件和图片类二进制文件做不同的处理，文件分类依据是后缀名。虽然内部已列出一些常见的图片类二进制文件后缀，但难保用户有其他的后缀文件，内部已列入文本文件后缀的列表为： [ 'svg', 'tif', 'tiff', 'wbmp', 'png', 'bmp', 'fax', 'gif', 'ico', 'jfif', 'jpe', 'jpeg', 'jpg', 'woff', 'cur', 'webp', 'swf', 'ttf', 'eot' ]，用户配置会 追加，而非覆盖内部后缀列表",
		$('#fileType-image').html()
	],[
		"watch.exclude",
		"设置项目源码监听时不监听的文件列表",
		"Array | string | RegExp",
		"无",
		"",
		$('#watch-exclude').html()
	],[
		"watch.usePolling",
		"设置项目源码监听的方式， usePolling 为 true 时会使用轮询的方式检查文件是否被修改，比较消耗CPU，但是适用场景更广。设置为 false 后会使用系统API进行文件修改检查，对性能消耗较小，但是可能由于系统版本不同，会存在兼容性问题",
		"boolean",
		"false",
		"",
		$('#watch-usePolling').html()
	]
];

var project = new H5ComponentApiList('apilist', {
    type: 'apilist',
    data: listProject
});

$('#api-list-project').append(project);

var listPlugin = [
	[
		"parser",
		"配置编译器插件，可以根据 文件后缀 将某种语言编译成标准的js、css、html语言",
		"Object",
		"无",
		"fis对文件进行编译时，首先进入的是parser阶段，该阶段的定义是： 将非标准语言编译成标准的html、js、css语言。例如我们可以利用这个阶段的处理把coffee、前端模板文件编译成js，less、sass、compass编译成css。在该阶段配置的插件，实际调用的是 fis-parser-xxx，这是fis parser插件命名规范 所约束的。parser插件通常不会内置，如需要相关插件，可以使用npm安装，具体说明请参考文档 插件调用机制。由于parser的主要职责是统一标准语言，因此它经常会和 roadmap.ext 配置配合使用，用于标记某个后缀的文件在parser阶段之后当做某种标准语言进行处理",
		$('#parser').html()
	],[
		"preprocessor",
		"配置 标准化预处理器插件，可以根据 文件后缀 对文件进行预处理",
		"Object",
		"无",
		"标准化预处理的下一个阶段就是标准化处理阶段，标准化处理阶段主要责任是 扩展三种语言能力，因此preprocessor插件可以在标准化处理之前对内容进行某些修改，比如 fis-preprocessor-image-set 插件，用于实现对retina屏的css的image-set属性支持",
		$('#preprocessor').html()
	],[
		"postprocessor",
		"在fis对js、css和类html文件进行语言能力扩展之后调用的插件配置，可以根据 文件后缀 对文件进行后处理。该阶段的插件可以获取文件对象的完整requires信息",
		"Object",
		"{ js : 'jswrapper' }",
		"标准化处理之后，fis已经完成了对前端领域语言的 三种语言能力 扩展，此时文件对象的相关信息已经获取到了，这个阶段我们可以对文件进行一些相关处理，比如amd包装等。fis内置的 fis-postprocessor- jswrapper 插件就是在这个阶段对js进行包装的",
		$('#postprocessor').html()
	],[
		"lint",
		"单文件编译过程中的代码检查插件",
		"Object",
		"无",
		"fis支持在文件进行编译的过程中进行代码检查，这类插件 不会对文件内容做任何修改。fis模块内置没有安装任何校验插件，用户如果需要，可以自行开发，并发布到npm上",
		$('#lint').html()
	],[
		"test",
		"单文件编译过程中的自动测试插件",
		"Object",
		"无",
		"fis支持在文件进行编译的过程中进行自动化测试，这类插件 不会对文件内容做任何修改。fis模块没有内置任何测试插件，用户如果需要，可以自行开发，并发布到npm上",
		$('#test').html()
	],[
		"optimizer",
		"单文件编译过程中的最后阶段，对文件进行优化",
		"Object",
		"{js : 'uglify-js',css : 'clean-css',png : 'png-compressor'",
		"单文件编译的最后阶段，可以对代码进行优化，通常是压缩、xss修复等工作，fis内置了3个压缩插件： fis-optimizer-uglify-js、fis-optimizer-clean-css、fis-optimizer-png-compressor",
		$('#optimizer').html()
	],[
		"prepackager",
		"打包预处理插件",
		"Array | string",
		"无",
		"在fis打包操作前调用的插件， 不管调用fis release命令时是否使用 --pack 参数，该插件均会被调用",
		$('#prepackager').html()
	],[
		"packager",
		"打包处理插件",
		"Array | string",
		"'map', fis内置了打包插件 fis-packager-map，生成 map.json 文件",
		"调用fis release命令时，添加 --pack 参数，该插件才会被调用",
		$('#packager').html()
	],[
		"spriter",
		"打包后处理csssprite的插件",
		"Array | string",
		"'csssprites'，fis内置了spriter插件 fis-spriter-csssprites，支持自动css打包",
		"调用fis release命令时，添加 --pack 参数，该插件才会被调用",
		$('#spriter').html()
	],[
		"postpackager",
		"打包后处理插件",
		"Array | string",
		"无",
		"在fis打包操作后调用的插件， 不管调用fis release命令时是否使用 --pack 参数，该插件均会被调用",
		$('#postpackager').html()
	]
];

var plugin = new H5ComponentApiList('apilist', {
	type: 'apilist',
	data: listPlugin
});

$('#api-list-plugin').append(plugin);
