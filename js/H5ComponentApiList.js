/**
 * Apilist
 */
var H5ComponentApiList = function(name, cfg){
	var component = H5ComponentBase(name, cfg);

	$.each(cfg.data, function(index, item){

		var p1 = $('<h3 class="h3"><strong>'+item[0]+'</strong></h3>');
		var div = $('<div class="hide">');
		var p2 = $('<p><span class="na">解释:</span>'+item[1]+'</p>');
		var p3 = $('<p><span class="na">值类型:</span>'+item[2]+'</p>');
		var p4 = $('<p><span class="na">默认值:</span>'+item[3]+'</p>');
		var p5_1 = $('<p><span class="na">说明:</span>'+item[4]+'</p>');
		var p5_2 = $('<p><span class="na">选项:</span><br/></p>');
		var p5_2_ul = $('<ul>');
		var p6 = $('<p><span class="na">用法:</span>在项目的fis-conf.js里可以覆盖为</p>');
		var p7 = $('<div class="highlighter-rouge">'+item[5]+'</div>');
		var p8 = $('<p><span class="na">项目:</span>'+item[6]+'</p>');

		p1.click(function(){
			console.log(div.attr('class'));
			var cn = div.attr('class');
			if(cn === 'hide'){
				div.removeClass('hide').addClass('show');
				div.prev().addClass('h3-show');
			}else{
				div.removeClass('show').addClass('hide');
				div.prev().removeClass('h3-show');
			}
		});
		component.append(p1)
		if(item[6]){
			div.append(p8);
		}
		div.append(p2).append(p3).append(p4)
		if(item[4]){
			if(typeof item[4] === 'string'){
				div.append(p5_1);
			}else if(typeof item[4] === 'object'){
				for(k in item[4]){
					if(k !== 'tips'){
						var li = $('<li><strong>'+k+'：</strong>'+item[4][k]+'</li>');
					}else{
						var li = $('<li>');
						for(kk in item[4][k]){
							var p = $('<p>'+kk+'</p>');
							li.append(p);
							var ul = $('<ul>');
							$.each(item[4][k][kk], function(index, item){
								var li_c = $('<li>'+item+'</li>');
								ul.append(li_c);
							});
							li.append(ul);
						}
					}
					p5_2_ul.append(li);
				}
				div.append(p5_2).append(p5_2_ul);
			}
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

var listPluginRun = [
	[
		"配置项 settings",
		"插件的运行配置节点",
		"Object",
		"无",
		"插件要工作，偶尔也需要配置数据，比如fis内置的fis-optimizer-uglify-js、fis-optimizer-clean-css，它们的配置都是fis直接传递的，具体细节可以查看相应源码。配置节点具有很强的规律性，请参考下面的例子，小编就不一一枚举了",
		$('#settings').html()
	]
];

var pluginRun = new H5ComponentApiList('apilist', {
	type: 'apilist',
	data: listPluginRun
});

$('#api-list-plugin-run').append(pluginRun);

var listInPlugin = [
	[
		"postprocessor.jswrapper",
		"用于自动包装js代码的插件",
		"Object",
		"无",
		{
			type: "包装方式。可选值目前只有",
			amd: "amd包装结构请参考 这里，非amd包装结构参考 这里",
			template: "使用模板来定义包装结构，对template属性的设置优先级高于type属性",
			wrapAll: "是否包装所有js文件。默认是false，只对标记为 isMod 的文件进行包装"
		},
		$('#postprocessor-jswrapper').html(),
		"https://github.com/fis-dev/fis-postprocessor-jswrapper"
	],[
		"optimizer.uglify-js",
		"uglify-js压缩器配置。fis-optimizer-uglify-js 插件内置了 uglify-js 包，并调用了它的 minify 接口，把配置选项直接传递过去。因此，fis的配置完全等价于uglify-js的minify函数所需的配置",
		"Object",
		"无",
		{
			mangle: "混淆控制，参看uglify-js文档 mangle 部分",
			output: "输出控制，参看uglify-js文档 codegen 部分",
			compress: "优化参数，参看uglify-js文档 compress 部分"
		},
		$('#postprocessor-jswrapper').html(),
		"https://github.com/fis-dev/fis-optimizer-uglify-js"
	],[
		"optimizer.clean-css",
		"clean-css压缩器配置。fis-optimizer-clean-css 插件调用 clean-css 的压缩接口进行压缩，fis负责把 settings.optimizer.clean-css 配置节点的数据传递给压缩器，因此，这里的配置完全等价于clean-css的运行配",
		"Object",
		"无",
		{
			1: "参看clean-css的 文档",
		},
		$('#optimizer-clean-css').html(),
		"https://github.com/fis-dev/fis-optimizer-clean-css"
	],[
		"optimizer.png-compressor",
		"png图片压缩器运行配置。fis团队将 pngquant 和 pngcrush 两个优秀的png图片压缩工具移植为nodejs的原生扩展（node-pngcrush与node-pngquant-native），相比同类型工具采用进程调用的方式更高性能，压缩速度更快",
		"Object",
		"无",
		{
			type: "选择压缩器类型，默认是 'pngcrush'，可选值为 'pngquant'，pngquant会将所有 png24 的图片压缩为 png8，压缩率极高，但alpha通道信息会有损失",
		},
		$('#optimizer-png-compressor').html(),
		"https://github.com/fis-dev/fis-optimizer-png-compressor"
	],[
		"spriter.csssprites",
		"csssprite处理运行配置，以css文件为单位，对其引用的png、gif、jpg、jpeg等图片进行csssprite合并处理。@zhangyuanwei 同学将常用图片处理库的c++版本移植为nodejs的原生扩展，得到npm包 node-images，fis团队在此基础上进行包装，开发出了这款十分易用的csssprite插件",
		"Object",
		"无",
		{
			margin: "默认值：3，图之间的边距，单位像素",
			layout: "默认值：linear,布局算法，默认是 'linear'，图片垂直布局，水平方向无需 遮盖处理 。可选项还有 matrix，图片矩阵布局，面积最小化，但需要提供额外的dom控制水平方向图片的遮盖处理",
			width_limit: "默认值：10240",
			height_limit: '默认值：10240',
			tips: {
				"使用csssprite需要满足以下条件": [
					"使用release命令时，添加 -p 或者 --pack 参数。由于csssprite处理需要消耗一定的计算资源，并且开发过程中并不需要时刻做图片合并，因此fis将其定义为打包处理流程，启动csssprite处理需要指定--pack参数。",
					"只有 打包的css文件 '或者 roadmap.path 中 useSprite 属性标记为 true 的文件才会进行csssprite处理，因此请合理安排要进行csssprite处理的文件，尽量对合并后的文件做处理。",
					"在css中引用图片时，只要加上 ?__sprite 这个query标记就可以使用csssprite了。详情请参考fis-spriter-csssprites插件的 使用文档。"
				]
			}
		},
		$('#spriter-csssprites').html(),
		"https://github.com/fis-dev/fis-spriter-csssprites"
	]
];

var inPlugin = new H5ComponentApiList('apilist', {
	type: 'apilist',
	data: listInPlugin
});

$('#api-list-in-plugin').append(inPlugin);

var listRoadMap = [
	[	
		"roadmap.path",
		"定制项目文件属性，包括但不限于 产出路径，访问url，资源id，默认依赖，文件类型",
		"Array",
		"无",
		{
			'说明': "roadmap.path配置是fis编译系中非常核心的机制，使用它可以控制文件编译后发布的路径或访问的url、操纵文件属性、为fis产出的资源表添加扩展信息，它的 实现原理 也很简单：当fis创建一个内部的 file对象 时，会利用roadmap.path来匹配文件路径，如果命中，则将当前规则下的属性及其值赋给file对象，从而影响file对象的相关信息(发布路径、访问url、资源表属性等)。roadmap.path是fis系统中资源定位的核心能力，具有非常重要的意义。由于fis自动化工具接管了js、css和类html语言的 资源定位能力，因此，用户在开发时只需使用相对路径对资源进行引用，fis编译时会根据roadmap.path的配置调整引用内容，并将代码产出到配置指定的位置，一切都配合的非常完美！",
			'支持的配置项': "",
			'reg': "用于匹配文件路径的正则(RegExp)或通配(String)。文件路径是相对项目根目录的路径，以 / 开头。",
			"release": "设置文件的产出路径。默认是文件相对项目根目录的路径，以 / 开头。该值可以设置为 false ，表示为不产出（unreleasable）文件。",
			"url": "指定文件的资源定位路径，以 / 开头。默认是 release 的值，url可以与发布路径 release 不一致。",
			"query": "指定文件的资源定位路径之后的query，比如'?t=123124132'。",
			"id": "指定文件的资源id。默认是 namespace + subpath 的值。",
			"charset": "指定文本文件的输出编码。默认是 utf8，可以制定为 gbk 或 gb2312等。",
			"isHtmlLike": "指定对文件进行html相关的 语言能力扩展",
			"isJsLike": "指定对文件进行js相关的 语言能力扩展",
			"isCssLike": "指定对文件进行css相关的 语言能力扩展",
			"useCompile": "指定文件是否经过fis的编译处理，如果为false，则该文件不会做任何编译处理。",
			"useHash": "指定文件产出后是否添加md5戳。默认只有js、css、图片文件会添加。",
			"useDomain": "指定文件引用处是否添加域名。",
			"useCache": "指定文件编译过程中是否创建缓存，默认值是 true。",
			"useMap": "指定fis在打包阶段是否将文件加入到map.json中索引。默认只有isJsLike、isCssLike、isMod的文件会加入表中",
			"useParser": "指定文件是否经过parser插件处理。默认为true，值为 false 时才会关闭。",
			"usePreprocessor": "指定文件是否经过preprocessor插件处理。默认为true，值为 false 时才会关闭。",
			"useStandard": "指定文件是否经过内置的三种语言标准化流程处理。默认为true，值为 false 时才会关闭。",
			"usePostprocessor": "指定文件是否经过postprocessor插件处理。默认为true，值为 false 时才会关闭。",
			"useLint": "指定文件是否经过lint插件处理。默认为true，值为 false 时才会关闭。",
			"useTest": "指定文件是否经过test插件处理。默认为true，值为 false 时才会关闭。",
			"useOptimizer": "指定文件是否经过optimizer插件处理",
			"useSprite": "指定文件是否进行csssprite处理。默认是 false，即不对单个文件进行csssprite操作的，而只对合并后的文件进行。fis release中使用 --pack 参数即可触发csssprite操作。",
			"isMod": "标记文件为组件化文件。被标记成组件化的文件会入map.json表。并且会对js文件进行组件化包装。",
			"extras": "在map.json中的附加数据，用于扩展map.json表的功能。",
			"requires": "默认依赖的资源id表，类型为Array。"
		},
		$('#roadmap-path').html(),
		"https://github.com/fis-dev/fis-spriter-csssprites"
	],[	
		"roadmap.ext",
		"指定后缀名与标准化语言的映射关系",
		"Object",
		"无",
		"fis允许在前端开发中使用less、coffee、utc等非标准语言，并能利用插件将它们编译成标准的js、css语言。这个过程是由modules.parser配置的插件处理的。编译之后，less会变成css文件，那么，后续对于css的处理应该同样可以适用于less的生成文件，因此，这个时候需要通过配置告诉fis，less文件会编译为css文件，并在后续的处理过程中当做css文件对待。",
		$('#roadmap-ext').html(),
	],[	
		"roadmap.domain",
		"设置静态资源的域名前缀",
		"Object | string",
		"无",
		"fis扩展了html、js、css的三种语言能力，并支持对资源的定位，定位包括 开发路径与发布路径的映射关系 以及 静态资源服务器域名设置。roadmap.domain节点就是用于控制该能力的配置。注意：domain的值如果不是特殊需要，请 不要以'/'结尾。",
		$('#roadmap-domain').html(),
	],[	
		"roadmap.domain.image",
		"设置图片资源的域名前缀",
		"Array | string",
		"无",
		"由于使用配置roadmap.domain.ext方式来配置图片资源太麻烦，fis提供了image字段，对于符合 project.fileType.image 规则的文件，设置相应domain配置。",
		$('#roadmap-domain-image').html(),
	]
];

var roadmap = new H5ComponentApiList('apilist', {
	type: 'apilist',
	data: listRoadMap
});

$('#api-list-roadmap').append(roadmap);

var listDeploy = [
	[	
		"配置项 deploy",
		"设置项目的发布方式",
		"Object",
		"无",
		"当使用 fis release 命令时，参数 --dest <name> 可以指定项目发布配置。deploy配置是一个key-value的object对象，--dest参数的值如果与配置的key相同，则执行该配置的部署设置。fis支持使用post请求向http服务器发送文件，服务器端可以使用php、java等后端逻辑进行接收，fis-command-release插件中提供了一个这样的 php版示例，用户可以直接部署此文件于接收端服务器上。",
		$('#deploy').html(),
	]
];

var deploy = new H5ComponentApiList('apilist', {
	type: 'apilist',
	data: listDeploy
});

$('#api-list-deploy').append(deploy);

var listPack = [
	[	
		"配置项 pack",
		"配置要打包合并的文件",
		"Object",
		"无",
		"fis内置的 打包策略 与传统的打包概念不同，fis的打包实际上是在建立一个资源表，并将其描述并产出为一份map.json文件，用户应该围绕着这份描述文件来设计前后端运行框架，从而实现运行时判断打包输出策略的架构。",
		$('#pack').html(),
	]
];

var pack = new H5ComponentApiList('apilist', {
	type: 'apilist',
	data: listPack
});

$('#api-list-pack').append(pack);