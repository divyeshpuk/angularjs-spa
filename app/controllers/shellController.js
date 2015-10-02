'use strict'; 

(function() { 

    var shellController = function($scope, dataSource, $window, $sce, inputOps) {

        var emailVal = localStorage.getItem('email'),  
            products = $scope.products = dataSource.productsData, 
            user = $scope.user = dataSource.userData,
            portfolio = $scope.portfolio = dataSource.portfolioData;

        $scope.trustedPoundSymbol = $sce.trustAsHtml('&pound;');

        function initUser() {
            if (portfolio.length === 0) {
                products[0].amtInvested = 54321;
                products[0].availableFunds = 54321;
                products[0].intEarned = user.interestEarnedToDate = 199.18;
                products[0].dateTimePurchase = new Date();
                portfolio[0] = products[0];
                user.amtInvested = 54321;
            }
            inputOps.setInitDataValues(products);
        }

        initUser();
        
    };

    shellController.$inject = [ '$scope' , 'dataSource' ,  '$window' , '$sce' , 'inputOps' ];

    angular.module('shellModule')
        .controller( 'shellController' , shellController );

}());
