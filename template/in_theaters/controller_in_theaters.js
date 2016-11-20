(function(angular){
	
	'use strict'
	
	var data=[
		{
	      "rating": {
	        "max": 10,
	        "average": 7.9,
	        "stars": "40",
	        "min": 0
	      },
	      "genres": [
	        "动作",
	        "科幻",
	        "奇幻"
	      ],
	      "title": "奇异博士",
	      "casts": [
	        {
	          "alt": "https://movie.douban.com/celebrity/1009405/",
	          "avatars": {
	            "small": "https://img3.doubanio.com/img/celebrity/small/41072.jpg",
	            "large": "https://img3.doubanio.com/img/celebrity/large/41072.jpg",
	            "medium": "https://img3.doubanio.com/img/celebrity/medium/41072.jpg"
	          },
	          "name": "本尼迪克特·康伯巴奇",
	          "id": "1009405"
	        },
	        {
	          "alt": "https://movie.douban.com/celebrity/1025152/",
	          "avatars": {
	            "small": "https://img5.doubanio.com/img/celebrity/small/3546.jpg",
	            "large": "https://img5.doubanio.com/img/celebrity/large/3546.jpg",
	            "medium": "https://img5.doubanio.com/img/celebrity/medium/3546.jpg"
	          },
	          "name": "蒂尔达·斯文顿",
	          "id": "1025152"
	        },
	        {
	          "alt": "https://movie.douban.com/celebrity/1040529/",
	          "avatars": {
	            "small": "https://img3.doubanio.com/img/celebrity/small/57893.jpg",
	            "large": "https://img3.doubanio.com/img/celebrity/large/57893.jpg",
	            "medium": "https://img3.doubanio.com/img/celebrity/medium/57893.jpg"
	          },
	          "name": "麦斯·米科尔森",
	          "id": "1040529"
	        }
	      ],
	      "collect_count": 138837,
	      "original_title": "Doctor Strange",
	      "subtype": "movie",
	      "directors": [
	        {
	          "alt": "https://movie.douban.com/celebrity/1320372/",
	          "avatars": {
	            "small": "https://img1.doubanio.com/img/celebrity/small/49077.jpg",
	            "large": "https://img1.doubanio.com/img/celebrity/large/49077.jpg",
	            "medium": "https://img1.doubanio.com/img/celebrity/medium/49077.jpg"
	          },
	          "name": "斯科特·德瑞克森",
	          "id": "1320372"
	        }
	      ],
	      "year": "2016",
	      "images": {
	        "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2388501883.jpg",
	        "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2388501883.jpg",
	        "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2388501883.jpg"
	      },
	      "alt": "https://movie.douban.com/subject/3025375/",
	      "id": "3025375"
	    },
	    {
	      "rating": {
	        "max": 10,
	        "average": 8.5,
	        "stars": "45",
	        "min": 0
	      },
	      "genres": [
	        "剧情",
	        "战争"
	      ],
	      "title": "比利·林恩的中场战事",
	      "casts": [
	        {
	          "alt": "https://movie.douban.com/celebrity/1348117/",
	          "avatars": {
	            "small": "https://img3.doubanio.com/img/celebrity/small/1424957578.32.jpg",
	            "large": "https://img3.doubanio.com/img/celebrity/large/1424957578.32.jpg",
	            "medium": "https://img3.doubanio.com/img/celebrity/medium/1424957578.32.jpg"
	          },
	          "name": "乔·阿尔文",
	          "id": "1348117"
	        },
	        {
	          "alt": "https://movie.douban.com/celebrity/1047958/",
	          "avatars": {
	            "small": "https://img1.doubanio.com/img/celebrity/small/47467.jpg",
	            "large": "https://img1.doubanio.com/img/celebrity/large/47467.jpg",
	            "medium": "https://img1.doubanio.com/img/celebrity/medium/47467.jpg"
	          },
	          "name": "加内特·赫德兰",
	          "id": "1047958"
	        },
	        {
	          "alt": "https://movie.douban.com/celebrity/1012533/",
	          "avatars": {
	            "small": "https://img3.doubanio.com/img/celebrity/small/11265.jpg",
	            "large": "https://img3.doubanio.com/img/celebrity/large/11265.jpg",
	            "medium": "https://img3.doubanio.com/img/celebrity/medium/11265.jpg"
	          },
	          "name": "克里斯汀·斯图尔特",
	          "id": "1012533"
	        }
	      ],
	      "collect_count": 78870,
	      "original_title": "Billy Lynn's Long Halftime Walk",
	      "subtype": "movie",
	      "directors": [
	        {
	          "alt": "https://movie.douban.com/celebrity/1054421/",
	          "avatars": {
	            "small": "https://img3.doubanio.com/img/celebrity/small/595.jpg",
	            "large": "https://img3.doubanio.com/img/celebrity/large/595.jpg",
	            "medium": "https://img3.doubanio.com/img/celebrity/medium/595.jpg"
	          },
	          "name": "李安",
	          "id": "1054421"
	        }
	      ],
	      "year": "2016",
	      "images": {
	        "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2391542403.jpg",
	        "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2391542403.jpg",
	        "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2391542403.jpg"
	      },
	      "alt": "https://movie.douban.com/subject/25983044/",
	      "id": "25983044"
	    },
		{
	      "rating": {
	        "max": 10,
	        "average": 7,
	        "stars": "35",
	        "min": 0
	      },
	      "genres": [
	        "剧情",
	        "喜剧"
	      ],
	      "title": "我不是潘金莲",
	      "casts": [
	        {
	          "alt": "https://movie.douban.com/celebrity/1050059/",
	          "avatars": {
	            "small": "https://img3.doubanio.com/img/celebrity/small/1691.jpg",
	            "large": "https://img3.doubanio.com/img/celebrity/large/1691.jpg",
	            "medium": "https://img3.doubanio.com/img/celebrity/medium/1691.jpg"
	          },
	          "name": "范冰冰",
	          "id": "1050059"
	        },
	        {
	          "alt": "https://movie.douban.com/celebrity/1274274/",
	          "avatars": {
	            "small": "https://img3.doubanio.com/img/celebrity/small/39703.jpg",
	            "large": "https://img3.doubanio.com/img/celebrity/large/39703.jpg",
	            "medium": "https://img3.doubanio.com/img/celebrity/medium/39703.jpg"
	          },
	          "name": "郭涛",
	          "id": "1274274"
	        },
	        {
	          "alt": "https://movie.douban.com/celebrity/1324043/",
	          "avatars": {
	            "small": "https://img3.doubanio.com/img/celebrity/small/58870.jpg",
	            "large": "https://img3.doubanio.com/img/celebrity/large/58870.jpg",
	            "medium": "https://img3.doubanio.com/img/celebrity/medium/58870.jpg"
	          },
	          "name": "大鹏",
	          "id": "1324043"
	        }
	      ],
	      "collect_count": 27896,
	      "original_title": "我不是潘金莲",
	      "subtype": "movie",
	      "directors": [
	        {
	          "alt": "https://movie.douban.com/celebrity/1274255/",
	          "avatars": {
	            "small": "https://img1.doubanio.com/img/celebrity/small/45667.jpg",
	            "large": "https://img1.doubanio.com/img/celebrity/large/45667.jpg",
	            "medium": "https://img1.doubanio.com/img/celebrity/medium/45667.jpg"
	          },
	          "name": "冯小刚",
	          "id": "1274255"
	        }
	      ],
	      "year": "2016",
	      "images": {
	        "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2378133884.jpg",
	        "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2378133884.jpg",
	        "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2378133884.jpg"
	      },
	      "alt": "https://movie.douban.com/subject/26630781/",
	      "id": "26630781"
	    }
	]
	
	var module=angular.module('moviecat.in_theaters',['ngRoute']);
	
	module.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/in_theaters',{
			templateUrl:'template/in_theaters/in_theaters.html',
			controller:'InTheatersController'
		})
	}]);
	
	module.controller('InTheatersController',['$scope',function($scope){
		$scope.subjects=data;
	}]);

})(angular)

