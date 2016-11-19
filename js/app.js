(function (angular) {
	'use strict';

	angular.module('moviecat',[
	'ngRoute',
	'moviecat.in_theaters',
	'moviecat.coming_soon',
	'moviecat.top250'
	])
	
	.config(['$routeProvider',function($routeProvider){
		$routeProvider.otherwise({
			redirectTo:'/in_theaters'
		})
	}]);

})(angular);
