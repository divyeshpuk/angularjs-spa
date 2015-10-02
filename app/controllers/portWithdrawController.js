'use strict';

(function() { 

    var portWithdrawController = function($scope, inputOps, $timeout) {

        var user = $scope.user,
            portfolio = $scope.portfolio,
            amount = 0;  

        $scope.withdrawModal = false; 
        $scope.wdrProdAmt = 0;
   
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
            $scope.withdrawModal = false;
            $scope.wdrProdAmt = amount = 0;
        }

        // User input

        $scope.updateValueWithdraw = function(item) { 
            amount = inputOps.updateAmount(item);
            $scope.wdrProdAmt = amount;
            inputOps.showWdrAmtError(item , 'amtWithdrawn'); 
        };

        // Withdraw from product

        function processProdWdr() {
            user.pendingProdWdr = inputOps.addDataVals(portfolio, 'amtWithdrawn'); 
            for ( var i = 0; i < portfolio.length; i++ ) {
                inputOps.disableWdrBtn( portfolio[i] );
            } 
            $scope.placeOrder();
        }

        $scope.withdraw = function(item) { 
            inputOps.showWdrAmtError(item , 'amtWithdrawn');
            if ( !item.wdrAmtError ) {
                $scope.reviewOrder();
            }
        };

        $scope.withdrawConfirm = function() { 
            $scope.processOrder();
            $timeout(processProdWdr, 2000);
        };

        // Listeners

        $scope.$on('withdrawModal' , function() {
            $scope.withdrawModal = true;
            $scope.viewModal();
        });

        $scope.$on('closeModal' , hideModal);
   
    };

    portWithdrawController.$inject = [ '$scope' , 'inputOps' , '$timeout' ];

	angular.module('shellModule')
        .controller( 'portWithdrawController' , portWithdrawController );

}());	