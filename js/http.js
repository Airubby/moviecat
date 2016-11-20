(function(angular){
	'use strict';
	var http=angular.module('moviecat.services.http',[]);
	http.service('HttpService',['$document','$window',function($document,$window){
		this.jsonp=function(url, data, callback) {
			var randomNum=Math.random().toString().replace('.','');
			var callbackName='my_callback'+randomNum;
			$window[callbackName] = callback;  
			var queryString= url.indexOf('?') == -1 ? '?' : '&';
			for(var key in data){
				queryString+=key+'='+data[key]+'&';
			}
			queryString+='callback='+callbackName;
			var scriptElement=$document[0].createElement('script');
			scriptElement.src=url+queryString;
			$document[0].body.appendChild(scriptElement);
	  	};
		
	}]);
})(angular);





