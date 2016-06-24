/**
 * 人物list
 */
var H5ComponentPeopleList = function(name, cfg){
	var component = H5ComponentBase(name, cfg);

	$.each(cfg.data, function(index, item){
		var hr = $('<hr>');
		var h2 = $('<h2><img src="'+item[1]+'" alt="蒋长浩博士">'+item[0]+'</h2>');
		var p1 = $('<p><strong>就职</strong>：'+item[2]+'</p>');
		var p2 = $('<p><strong>社交</strong>：</p>');

		for(k in item[3]){
			var a = $('<a href="'+item[3][k]+'">'+k+'</a>');
			p2.append(a);
		}

		var text = $('<blockquote><p>'+item[4]+'</p></blockquote>');
		var p3 = $('<p>'+item[5]+'</p>');

		component.append(hr).append(h2);
		if(item[2]){
			component.append(p1);
		}
		if(item[3]){
			component.append(p2);
		}
		if(item[4]){
			component.append(text);
		}
		if(item[5]){
			component.append(p3);
		}
	});

	return component;

}