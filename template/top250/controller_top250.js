(function(angular){
	
	'use strict'

	var module=angular.module('moviecat.top250',['ngRoute']);
	
	module.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/top250',{
			templateUrl:'template/top250/top250.html',
			controller:'Top250Controller'
		})
	}]);
	
	module.controller('Top250Controller',['$scope',function($scope){
		
	}]);

})(angular)

