(function (angular) {
	'use strict';

	angular.module('moviecat',[
	'ngRoute',
	'moviecat.public_list'
	])
	
	.config(['$routeProvider',function($routeProvider){
		$routeProvider.otherwise({
			redirectTo:'/in_theaters/1'
		})
	}]);

})(angular);
