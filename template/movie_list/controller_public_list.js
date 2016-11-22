(function(angular){
	
	'use strict'
	
	var module=angular.module('moviecat.public_list',[
	'ngRoute',
	'moviecat.services.http'
	]);
	
	module.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/:category/:page',{
			templateUrl:'template/movie_list/public_list.html',
			controller:'MovieListController'
		})
	}]);
	
	module.controller('MovieListController',[
		'$scope',
		'$route',
		'$routeParams',
		'HttpService',
		'AppConfig',
		function($scope,$route,$routeParams,HttpService,AppConfig){
		
		var count=AppConfig.pageSize;
		var page=parseInt($routeParams.page);
		var start=(page-1)*count;
		
		$scope.loading=true;
		$scope.subjects=[];
		$scope.message='';
		$scope.title='Loading...';
		$scope.totalCount=0;
		$scope.totalPages=0;
		$scope.currentPage = page;
		
		HttpService.jsonp(AppConfig.listApiAddress+$routeParams.category,
			//$routeParams的数据来源：1.路由匹配出来的；2.？+参数
			{
			start:start,
			count:count,
			q:$routeParams.q
			},
			function(data){
				
				$scope.title=data.title;
				$scope.subjects=data.subjects;
				$scope.totalCount=data.total;
				$scope.totalPages=Math.ceil($scope.totalCount/count);
				$scope.loading=false;
				$scope.$apply();
				//$apply()的作用就是让指定的表达式重新同步
			
		});
		
		$scope.goPage=function(page){
			
			if(page>=1&&page<=$scope.totalPages){
				$route.updateParams({page:page});
			}
			
		}
		
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
})(angular);

