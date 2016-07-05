/**
 * kityMinderCommand
 */
var H5ComponentkityMinderCommand = function(name, cfg){
	var component = H5ComponentBase(name, cfg);
	var mk = new MiniMarkdown('my_mk');

	if(typeof cfg.data === 'object'){
		var menu = $('<div>');
		var dataArg = [];
		var content = $('<div>');

		for(k in cfg.data){
			var key = k;
			var obj = cfg.data[key];

			var dataItem = [];
			var mk_k_a = mk.execCommand('[]()', ['#'+key, key], {id: key+'-menu'});
			dataItem.push(mk_k_a);
			dataItem.push(obj.intro);
			dataArg.push(dataItem);

			var mk_h1 = key ? mk.execCommand('#', key, {id: key}) : '';
			var mk_toreturn = mk.execCommand('[]()', ['#'+key+'-menu', '⬅ 返回目录']);
			var mk_intro = obj.intro ? mk.execCommand('>', obj.intro) : '';
			var mk_kc = obj.keyCode ? mk.execCommand('code', obj.keyCode) : '';
			var mk_keycode = obj.keyCode ? mk.execCommand('', ['快捷键：', mk_kc]) : '';
			var mk_command = obj.command ? mk.execCommand('highlight', obj.command) : '';
			var params = obj.params;
			var mk_h4_1 = params ? mk.execCommand('####', '参数说明') : '';
			var paramsArg = [];
			$.each(params, function(idx, item){
				var arg = [];
				for(k in item){
					arg.push(item[k]);
				}
				paramsArg.push(arg);
			});
			var mk_tb_1 = params ? mk.execCommand('table', {
				title: ['param', 'type', 'intro'], 
				data: paramsArg
			}) : '';
			var mk_h4_2 = obj.state ? mk.execCommand('####', '说明状态') : '';
			var stateArg = [];
			if(obj.state && obj.state.value){
				for(k in obj.state.value){
					var arg = [];
					arg.push(k);
					arg.push(obj.state.value[k]);
					stateArg.push(arg);
				}
			}
			var mk_tb_2 = obj.state ? mk.execCommand('table', {
				title: ['state', '说明'], 
				data: stateArg
			}) : '';
			var mk_h4_3 = obj.returnValue ? mk.execCommand('####', '返回值') : '';
			var mk_returnValue = obj.returnValue ? mk.execCommand('highlight', obj.returnValue) : '';
			var mk_tips = obj.tips ? mk.execCommand('', obj.tips) : '';

			content
				.append(mk_h1)
				.append(mk_toreturn)
				.append(mk_intro)
				.append(mk_keycode)
				.append(mk_command)
				.append(mk_h4_1)
				.append(mk_tb_1)
				.append(mk_h4_2)
				.append(mk_tb_2)
				.append(mk_h4_3)
				.append(mk_returnValue)
				.append(mk_tips);
		}

		var mk_tb = mk.execCommand('table', {
			title: ['命令', '说明'],
			data: dataArg
		});
		menu.append(mk_tb);
		component.append(menu).append(content);
	}

	return component;
}