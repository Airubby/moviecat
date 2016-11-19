(function(angular){
	
	'use strict'

	var module=angular.module('moviecat.coming_soon',['ngRoute']);
	
	module.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/coming_soon',{
			templateUrl:'template/coming_soon/coming_soon.html',
			controller:'ComingSoonController'
		})
	}]);
	
	module.controller('ComingSoonController',['$scope',function($scope){
		
	}]);

})(angular)

