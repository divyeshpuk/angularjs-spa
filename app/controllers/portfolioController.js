'use strict';

(function() { 

	var portfolioController =  function($scope, inputOps, accordion, $rootScope) {

		var portfolio = $scope.portfolio,
            products = $scope.products;

        // Accordion 

        $scope.selectProduct = function(item, data) {
            accordion.selectRow(item, data);
        };

        // Initialise

        function init() {
            angular.forEach(portfolio, function(product) {
                product.selected = false;
                product.wdrAmtError = false;
                product.invAmtError = false;
            });
            inputOps.setInitDataValues(products);
        }

        init(); 

        // Modal controls 

		$scope.openInvModal = function() { 
            $rootScope.$broadcast( 'investModal' , true );
        };

        $scope.openWdrModal = function() {
            $rootScope.$broadcast( 'withdrawModal' , true );
        };

        $scope.closeModal =  function() {
            $rootScope.$broadcast( 'closeModal' );
            clearValues();
        };

        function clearValues() {
            inputOps.clearAmountError(portfolio);
            inputOps.setInitDataValues(products);
        }

        // Listeners 

        $scope.$on('backToPortfolio' , clearValues);   	
	};

	portfolioController.$inject = [ '$scope' , 'inputOps' , 'accordion' , '$rootScope' ];

	angular.module('shellModule')
	    .controller( 'portfolioController' , portfolioController );

}());	