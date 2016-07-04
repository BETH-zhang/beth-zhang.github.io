/**
 * api
 */
var H5ComponentJsonObject = function(name, cfg){
	var component = H5ComponentBase(name, cfg);

	if(typeof cfg.data === 'object'){
		for(k in cfg.data){
			var key = $('<p class="key">'+k+'</p>');
			var value = $('<p class="value"><a href="'+cfg.data[k]+'" target="_bank">'+cfg.data[k]+'</a></p>');
			component.append(key).append(value);
		}
	}

	return component;
}