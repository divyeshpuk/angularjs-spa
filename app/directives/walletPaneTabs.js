'use strict'; 

(function() { 

	var walletPaneTabs = function() { 

		var controller = function($scope) { 
			
			var panes = $scope.panes = []; 

			$scope.selectPane = function(pane) {
				angular.forEach(panes, function(pane) {
					pane.selected = false;
				});
				pane.selected = true;
			};

			this.addPane = function(pane) {
				if (panes.length === 0) {
					$scope.selectPane(pane);
				}
				panes.push(pane);
			};
		};

		controller.$inject = [ '$scope' ];

		return {
			restrict: 'E',
			transclude: true,
			scope: {},
			controller: controller,
			templateUrl: 'app/partials/wallet-pane-tabs.html'
		};
	};

	angular.module('walletPanelModule')
		.directive( 'walletPaneTabs' , walletPaneTabs );

}());




	


