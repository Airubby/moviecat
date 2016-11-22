(function(angular){
	
	'use strict'

	var module=angular.module('moviecat.coming_soon',['ngRoute']);
	
	module.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/coming_soon',{
			templateUrl:'template/coming_soon/coming_soon.html',
			controller:'ComingSoonController'
		})
	}]);
	
	module.controller('ComingSoonController',['$scope','$http',function($scope,$http){
		
		$scope.subjects=[];
		$scope.message='';
		
		$http.get('/myDemo/moviecat/datas/coming_soon.json').then(function(res){
			
			if(res.status==200){
				$scope.subjects=res.data.subjects;
			}else{
				$scope.message='获取数据错误,错误信息：'+res.statusText;
			}
			
			
		},function(err){
			$scope.message='获取数据错误,错误信息：'+err.statusText;
		})
		
	}]);

})(angular);

