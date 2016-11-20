(function(angular){
	
	'use strict'
	
	var module=angular.module('moviecat.in_theaters',[
	'ngRoute',
	'moviecat.services.http'
	]);
	
	module.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/in_theaters',{
			templateUrl:'template/in_theaters/in_theaters.html',
			controller:'InTheatersController'
		})
	}]);
	
	module.controller('InTheatersController',['$scope','HttpService',function($scope,HttpService){
		$scope.loading=true;
		$scope.subjects=[];
		$scope.message='';
		$scope.totalCount=0;
		HttpService.jsonp('http://api.douban.com/v2/movie/in_theaters',{},function(data){
			$scope.subjects=data.subjects;
			$scope.totalCount=data.total;
			$scope.loading=false;
			$scope.$apply();
			//$apply()的作用就是让指定的表达式重新同步
			
		});
		
		
	}]);

	
	/*
	//豆瓣的API这样不行，用上面自定义的HttpService服务及http.js
	module.controller('InTheatersController',['$scope','$http',function($scope,$http){
		
		$scope.subjects=[];
		$scope.message='';
		var doubanApiAddress="https://api.douban.com/v2/movie/in_theaters";
		$http.jsonp(doubanApiAddress+'？callback=JSON_CALLBACK').then(function(res){
			if(res.status==200){
				$scope.subjects=res.data.subjects;
			}else{
				$scope.message='获取数据错误,错误信息：'+res.statusText;
			}
		},function(err){
			$scope.message='获取数据错误,错误信息：'+err.statusText;
		})
		
	}]);
*/
})(angular)

