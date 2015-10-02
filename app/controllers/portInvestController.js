'use strict';

(function() { 

    var portInvestController = function($scope, inputOps, $timeout) { 

        var user = $scope.user,
            portfolio = $scope.portfolio,
            products = $scope.products,
            amount = 0;

        $scope.investModal = false;   
        $scope.invProdAmt = 0; 

        // Modal controls

        $scope.modalBackBtn =  function() {
            $scope.viewModal();
        };

        $scope.backToPortfolio =  function() {
            hideModal();
            $scope.$emit('backToPortfolio');
        };

        function hideModal() {
            $scope.hideModal();
            $scope.investModal = false;
            $scope.invProdAmt = amount = 0;
        }

        // User input

        $scope.updateValueInvest = function(item) { 
            amount = inputOps.updateAmount(item);
            $scope.invProdAmt = amount;
            inputOps.showInvAmtError(item);
        };

        // Invest

        function payByDbtCard() { 
            purchaseItems();
            $scope.placeOrder(); 
        }

        function purchaseItems() {
            user.amtInvested = inputOps.purchaseProducts(products, portfolio);
            for ( var i = 0; i < portfolio.length; i++ ) {
                inputOps.disableWdrBtn( portfolio[i] );
            }
        }

        $scope.debitCardTransfer = function(item) {
            inputOps.showInvAmtError(item);
            if ( !item.invAmtError ) {
               $scope.reviewOrder();
            }
        };

        $scope.purchaseByDbtCard = function() {
            $scope.processOrder();
            $timeout(payByDbtCard, 2000);
        };

        // Listeners

        $scope.$on('investModal' , function() {
            $scope.investModal = true;
            $scope.viewModal();
        });

        $scope.$on('closeModal' , hideModal);

    };

    portInvestController.$inject = [ '$scope' , 'inputOps' , '$timeout' ];

	angular.module( 'shellModule' )
        .controller( 'portInvestController' , portInvestController );

}());	