(function(angular){
	
	'use strict'

	var module=angular.module('moviecat.in_theaters',['ngRoute']);
	
	module.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/in_theaters',{
			templateUrl:'template/in_theaters/in_theaters.html',
			controller:'InTheatersController'
		})
	}]);
	
	module.controller('InTheatersController',['$scope',function($scope){
		
	}]);

})(angular)

