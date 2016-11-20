(function(angular){
	
	'use strict'
	
	var module=angular.module('moviecat.in_theaters',['ngRoute']);
	
	module.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/in_theaters',{
			templateUrl:'template/in_theaters/in_theaters.html',
			controller:'InTheatersController'
		})
	}]);
	
	module.controller('InTheatersController',['$scope','$http',function($scope,$http){
		
		$scope.subjects=[];
		$scope.message='';
		
		$http.get('/myDemo/moviecat/datas/in_theaters.json').then(function(res){
			
			if(res.status==200){
				$scope.subjects=res.data.subjects;
			}else{
				$scope.message='获取数据错误,错误信息：'+res.statusText;
			}
			
			
		},function(err){
			$scope.message='获取数据错误,错误信息：'+err.statusText;
		})
		
	}]);

})(angular)

