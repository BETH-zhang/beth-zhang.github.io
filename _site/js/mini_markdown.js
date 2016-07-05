/**********************************************
 * created by beth on 2016年7月5日
 * 定义一个迷你Markdown编辑
 **********************************************/

 var MiniMarkdown = function(){

 	function execCommand(type, value, cfgAttr){
 		var html = null;
 		if(!value) return html;
 		switch(type){
 			case '#':
 				html = $('<h1>').append(value);
 				break;
 			case '####':
 				html = $('<h4>').append(value);
 				break;
 			case '[]()':
 				if(is.isArray(value)){
 					html = $('<a>').append(value[1]).attr('href', value[0]);
 				}
 				break;
 			case '>':
 				html = $('<blockquote>').append(value);
 				break;
 			case 'code':
 				html = $('<code>').append(value);
 				break;
 			case 'highlight':
 				html = $('<div class="highlighter-rouge"><pre class="highlight"><code>'+value+'</code></pre></div>');
 				break;
 			case 'table':
 				if(is.isObject(value)){
	 				var html = $('<table>');
	 				var thead = $('<thead>');
	 				var tbody = $('<tbody>');
	 				var tr = $('<tr>');
	 				$.each(value.title, function(idx, item){
	 					tr.append($('<th>'+item+'</th>'));
	 				});
	 				thead.append(tr);
	 				$.each(value.data, function(idx, item){
	 					tr = $('<tr>');
	 					$.each(item, function(idx, item_c){
	 						var td = $('<td>').append(item_c);
	 						tr.append(td);
	 					});
	 					tbody.append(tr);
	 				});
	 				html.append(thead).append(tbody);
	 			}
 				break;
 			default:
 				html = $('<p>');
 				if(is.isArray(value)){
 					$.each(value, function(idx, item){
 						html.append(item);
 					});
 				}else{
 					html.append(value);
 				}
 				break;
 		}

 		if(is.isObject(cfgAttr)){
 			for(k in cfgAttr){
 				html.attr(k, cfgAttr[k]);
 			}
 		}
 		return html;
 	}

 	return {
 		execCommand: execCommand
 	}
 }