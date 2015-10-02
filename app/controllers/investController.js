'use strict';

(function() { 

    var investController = function($scope, inputOps, $rootScope) {

        var products = $scope.products, 
            user = $scope.user,
            portfolio = $scope.portfolio,
            totalValue = 0,
            availableAmount;
            
        $scope.totalValToPay = 0;
        $scope.investedAmount = 0;
        $scope.invAmtError = false;
        user.availableFundsSelected = false;
     	$scope.searchText = { value: '' }; 

        availableAmount = user.availableFunds;
        $scope.userAvailableFunds = availableAmount;

        // Actions on user input

        $scope.updateTotalAmount = function(item, data) { 
            totalValue = inputOps.calculate(item, data);
            $scope.investedAmount = totalValue;
            $scope.invAmtError = false;
            setAvailableFunds();
            setTotalValToPay();  
            $scope.userAvailableFunds = availableAmount;
            $rootScope.$broadcast( 'totalValue' , totalValue );         
        };

        // Set total value to pay

        function setTotalValToPay() {
            if ( user.availableFundsSelected ) {
                $scope.totalValToPay = totalValue - user.availableFunds;
                if ( $scope.totalValToPay < 0 ) {
                    $scope.totalValToPay = 0;
                }
            }
            else {
                $scope.totalValToPay = totalValue;
            }
            $rootScope.$broadcast( 'totalValToPay' , $scope.totalValToPay );
        }

        // Set available funds 

        function setAvailableFunds() { 
            if ( user.availableFundsSelected ) { 
                availableAmount = user.availableFunds - totalValue; 
                if ( availableAmount < 0 ) { 
                    availableAmount = 0;
                }
            }
            else {
                availableAmount = user.availableFunds;
            }
            $rootScope.$broadcast( 'availableAmount' , availableAmount );
        }

        $scope.useAvailableFunds = function() {
            setAvailableFunds();
            setTotalValToPay();
            $scope.userAvailableFunds = availableAmount;
        };

        // Modal loaders 

        function showButtons() {  
            if ( $scope.totalValToPay === 0 ) {
                $rootScope.$broadcast('payByAvlAmt' , false); 
            }
            else {
                $rootScope.$broadcast('payByDBCard' , false); 
            }
        }

        function showModal() {
            showButtons();
            $rootScope.$broadcast( 'openModal' );
        }

        function loadModal() { 
            var ticket = inputOps.markSelectedItems(products);
                $scope.invAmtError = !ticket;
            if ( ticket ) {
                showModal();
            }
        }

        $scope.openModal = function() {
            loadModal(); 
        };

        // Listeners 

        $scope.$on('resetValues' , function() {
            $scope.investedAmount = $scope.totalValToPay = 0;
        });

    };

    investController.$inject = [ '$scope' , 'inputOps' , '$rootScope' ];

    angular.module('shellModule')
        .controller( 'investController' , investController );

}());