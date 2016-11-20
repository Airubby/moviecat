(function (angular) {
	'use strict';

	angular.module('moviecat',[
	'ngRoute',
	'moviecat.public_list',
	'moviecat.directives.auto_focus'
	])
	
	.config(['$routeProvider',function($routeProvider){
		$routeProvider.otherwise({
			redirectTo:'/in_theaters/1'
		})
	}]);
	
	
	/*
	.controller('NavController',['$scope','$location',function($scope,$location){
		
		$scope.$location=$location;
		$scope.$watch('$location.path()',function(now){
			
			if(now.startsWith('/in_theaters')){
				$scope.type='in_theaters';
			}else if(now.startsWith('/coming_soon')){
				$scope.type='coming_soon';
			}else if(now.startsWith('/top250')){
				$scope.type='top250';
			}
			
		});
		
	}]);
	*/

})(angular);
