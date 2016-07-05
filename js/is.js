/**********************************************
 * created by beth on 2016年7月5日
 * 简易版的isJs
 **********************************************/


var is = (function(){

	return {
		isArray: function(object){
    		return object && typeof object==='object' &&
            		Array == object.constructor;
		},
		isObject: function(object){
			return object && typeof object === 'object' && 
					Object == object.constructor;
		}
	}

})(window.is || {});