
(function(angular) {
  angular.module('moviecat.directives.auto_focus', [])
    .directive('autoFocus', ['$location', function($location) {
      // Runs during compile
      //var path = $location.path(); // /coming_soon/1
      return {
        restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        link: function($scope, iElm, iAttrs, controller) {
        	
        	$scope.$location=$location;
        	$scope.$watch('$location.path()',function(now){
        		var aLink = iElm.children().attr('href');
	        	var type = aLink.replace(/#(\/.+?)\/\d+/,'$1'); // /coming_soon
	        	if(now.startsWith(type)){
	        		// 访问的是当前链接
	        		iElm.parent().children().removeClass('active');
	        		iElm.addClass('active');
	        	}
        	})
        	/*
          iElm.on('click', function() {
          	iElm.parent().children().removeClass('active');
            iElm.addClass('active');
          });
          */
        }
      };
    }]);
})(angular);
