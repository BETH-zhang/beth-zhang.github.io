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

		component.append(hr).append(h2).append(p1).append(p2).append(text);
	});

	return component;

}