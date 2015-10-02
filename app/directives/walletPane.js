'use strict'; 

(function() { 

	var walletPane = function() { 

		var link = function(scope, element, attrs, tabsCtrl) {
			tabsCtrl.addPane(scope);
		};

		return {
			require: '^walletPaneTabs',
			restrict: 'E',
			transclude: true,
			scope: {
				title: '@'
			},
			link: link,
			templateUrl: 'app/partials/wallet-pane.html'
		};
	};

	angular.module('walletPanelModule')
		.directive( 'walletPane' , walletPane );

}());