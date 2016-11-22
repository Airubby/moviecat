(function(angular){
	'use strict';
	var http=angular.module('moviecat.services.http',[]);
	http.service('HttpService',['$document','$window',function($document,$window){
		this.jsonp=function(url, data, callback) {
			var queryString= url.indexOf('?') == -1 ? '?' : '&';
			for(var key in data){
				queryString+=key+'='+data[key]+'&';
			}
			var randomNum=Math.random().toString().replace('.','');
			var callbackName='my_callback'+randomNum;
			queryString+='callback='+callbackName;
			var scriptElement=$document[0].createElement('script');
			scriptElement.src=url+queryString;
			$window[callbackName] = function(data){
				callback(data);
				$document[0].body.removeChild(scriptElement);
			};  
			$document[0].body.appendChild(scriptElement);
			
		  };
		
	}]);
})(angular);





