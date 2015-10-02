'use strict';

(function() { 

    var investCheckoutController = function($scope, inputOps, $timeout) { 

        var user = $scope.user,
            totalValue = 0,
            totalValToPay = 0,
            availableAmount = 0,
            products = $scope.products,
            portfolio = $scope.portfolio;

        $scope.payByDBCard = true;
        $scope.payByAvlAmt = true; 
        $scope.modalAmtError = false;
   
        // Modal controls

        $scope.closeModal = function() {
            $scope.hideModal(); 
            $scope.payByDBCard = true; 
            $scope.payByAvlAmt = true; 
            $scope.modalAmtError = false;              
        };

        $scope.modalBackBtn =  function() {
            $scope.viewModal();
        };

        // Invest using debit card

        $scope.debitCardTransfer = function() {
            var amtError = showAmtError();
            $scope.modalAmtError = amtError;
            if ( !amtError ) {
                $scope.reviewOrder();
            }
        };
        
        $scope.purchaseByDbtCard = function() { 
            $scope.processOrder();
            $timeout(payByDbtCard, 2000);
        };

        function payByDbtCard() {
            purchaseItems();
            $scope.placeOrder(); 
        }

        // Invest common

        function purchaseItems() {
            user.amtInvested = inputOps.purchaseProducts(products, portfolio);
            user.availableFunds = availableAmount;
            user.availableFundsSelected = false;
            $scope.totalValToPay = 0;
            $scope.$emit('resetValues'); 
        }

        // Invest using available funds

        $scope.payByAvlFunds = function() {
            var amtError = showAmtError();
            $scope.modalAmtError = amtError;
            if ( !amtError ) {
                $scope.processOrder();
                $timeout(payByAvlAmt, 2000);
            }
        }

        function payByAvlAmt() {
            purchaseItems();
            $scope.placeOrder();
        }

        // Errors

        function showAvlAmtError() {
            if ( totalValToPay > 0 ) {
                return true; 
            }
            return false;
        }

        function showDbtCardError() {
            if( totalValToPay === 0 && totalValue > 0 ) {
                return true; 
            }
            return false;
        }

        function showAmtError() {
            var error = totalValue === 0 ? true : false;
            if ( error ) { 
                return true;
            }
            return false;
        }

        // Listeners

        $scope.$on('payByAvlAmt' , function(evt, data) { 
            $scope.payByAvlAmt = data;
        });

        $scope.$on('payByDBCard' , function(evt, data) { 
            $scope.payByDBCard = data;
        });

        $scope.$on('totalValue' , function(evt, data) { 
            var avlAmtError, 
                dbtCardError,
                modalOpen = !($scope.modal) ? true : false;

            totalValue = data;
            $scope.modalAmtError = totalValue === 0 ? true : false;

            if ( modalOpen ) { 
                avlAmtError = showAvlAmtError();
                if ( avlAmtError ) { 
                    $scope.payByDBCard = false;
                    $scope.payByAvlAmt = true;  
                }
                dbtCardError = showDbtCardError();
                if ( dbtCardError ) {
                    $scope.payByDBCard = true;
                    $scope.payByAvlAmt = false;    
                }
            }
        });

        $scope.$on('totalValToPay' , function(evt, data) { 
            totalValToPay = data;
        });

        $scope.$on('availableAmount' , function(evt, data) { 
            availableAmount = data;
        });

        $scope.$on('openModal' , function() {
            $scope.viewModal();
        });
        
    };

    investCheckoutController.$inject = [ '$scope' , 'inputOps' , '$timeout' ];

    angular.module('shellModule')
        .controller( 'investCheckoutController' , investCheckoutController );

}());