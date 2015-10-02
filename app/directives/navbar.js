'use strict'; 

(function() { 

	var navbar = function() { 

		var controller = function($scope, $location, $rootScope) {
			
			var tabs = $scope.tabs = [
		 		{ 
		 			'title' : 'Invest now', 
		 			'link' : 'invest'
		 		},
		 		{
		 			'title' : 'Portfolio', 
		 			'link' : 'portfolio'
		 		},
		 		{
		 			'title' : 'Wallet', 
		 			'link' : 'wallet'
		 		}
		 	];

			function initOnRouteChange() { 
				$rootScope.$on('$routeChangeSuccess', selectTab);
			}

			function selectTab() {
				var path = $location.path().slice(1);
				angular.forEach(tabs, function(tab, index) {
					tab.selected = false;
					if(tab.link === path) { 
						tabs[index].selected = true;
					}
				});
			}

			function init() {
				initOnRouteChange();
				selectTab();
			}

			init();
			
		};

		controller.$inject = [ '$scope' , '$location' , '$rootScope' ];

		return {
			restrict: 'E',
			templateUrl: 'app/partials/navbar.html',
			controller: controller
		};
	};

	angular.module('lenderApp')
		.directive( 'navbar' , navbar );

}());	