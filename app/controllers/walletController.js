'use strict';

(function() {

	var walletController = function($scope, accordion, $rootScope) {

		// Accordion

		$scope.selectRow = function(item, data) { 
			accordion.selectRow(item, data);
		};

        // Modal 

		$scope.openModal = function() {
			$rootScope.$broadcast( 'openModal' );
		};

	};
	              
	walletController.$inject = [ '$scope' ,  'accordion' , '$rootScope' ];

	angular.module('shellModule')
		.controller( 'walletController' , walletController );

}());