(function(angular){
	
	'use strict'

	var module=angular.module('moviecat.top250',['ngRoute']);
	
	module.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/top250',{
			templateUrl:'template/top250/top250.html',
			controller:'Top250Controller'
		})
	}]);
	
	module.controller('Top250Controller',['$scope','$http',function($scope,$http){
		
		$scope.subjects=[];
		$scope.message='';
		
		$http.get('/myDemo/moviecat/datas/top250.json').then(function(res){
			
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

