'use strict';

(function() {

	var walletWithdrawController = function($scope, inputOps, $timeout) {
	
		var user = $scope.user,
            amount = 0;

        $scope.withdrawAvailableAmount = amount;

        // Initialise

        function init() {
            user.pound = '';
            user.amount = 0;
            inputOps.disableWdrBtn( user );
        }

        init();

        // Actions on user input

        $scope.updateValueWithdraw = function(user) { 
            amount = inputOps.updateAmount(user);
            $scope.withdrawAvailableAmount = amount;
            inputOps.showWdrAmtError(user, 'amtWithdrawn');
        };

        // Withdraw from available amount

        function processAvlAmtWdr() {
            user.pendingAvlAmtWdr = inputOps.addPropVals(user, 'amtWithdrawn');
            inputOps.disableWdrBtn( user );
            $scope.placeOrder();
        }

        $scope.withdraw = function() { 
            inputOps.showWdrAmtError(user, 'amtWithdrawn'); 
            if ( !user.wdrAmtError ) {
                $scope.reviewOrder();
            }          
        };

        $scope.withdrawConfirm = function() { 
            $scope.processOrder();
            $timeout(processAvlAmtWdr, 2000);
        };

        // Modal controls

        $scope.closeModal = function() {
	    	$scope.hideModal();
            $scope.withdrawAvailableAmount = amount = 0;
            user.wdrAmtError = false;
            init();                   
        };

        $scope.modalBackBtn =  function() {
            $scope.viewModal();
        };

        // Listeners

        $scope.$on('openModal' , function() {
            $scope.viewModal();
        });
                
    };
	    
	walletWithdrawController.$inject = [ '$scope' , 'inputOps' , '$timeout' ];
	
	angular.module('shellModule')
		.controller( 'walletWithdrawController' , walletWithdrawController );
	
}());
