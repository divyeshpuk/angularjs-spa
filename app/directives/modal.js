'use strict'; 

(function() { 

	var modal = function() { 

		var controller = function($scope) {

			$scope.ajaxLoader = true;
	        $scope.modalOverlay = true;
	        $scope.modal = true;
	        $scope.modalStep_1_2 = false;
	        $scope.modalStep_1 = false;
	        $scope.modalStep_2 = true;
	        $scope.modalStep_3 = true;

	        function setModal() {
	            $scope.modalStep_1_2 = false;
	            $scope.modalStep_1 = false;
	            $scope.modalStep_2 = true;
	            $scope.modalStep_3 = true;
	        }

	        $scope.viewModal = function() { 
	            $scope.modal = false;
	            $scope.$emit('bodyStyle' , true);
	            setModal();
	        };

	        $scope.hideModal = function() {
	            $scope.modal = true;
	            $scope.$emit('bodyStyle' , false);
	            setModal();
	        };

	        $scope.placeOrder = function() {
	            $scope.ajaxLoader = true;
	            $scope.modalOverlay = true;
	            $scope.modalStep_1 = true;
	            $scope.modalStep_1_2 = true;
	            $scope.modalStep_2 = true;
	            $scope.modalStep_3 = false;
	        };

	        $scope.processOrder = function() {
	        	$scope.ajaxLoader = false;
            	$scope.modalOverlay = false;
	        };

	        $scope.reviewOrder = function() {
	            $scope.modalStep_1 = true;
            	$scope.modalStep_2 = false;      
	        };

		};

		modal.$inject = [ '$scope' ];

		return {
			restrict: 'E',
			transclude: true,
			controller: controller,
			templateUrl: 'app/partials/modal.html'
		};

	};

	angular.module('shellModule')
		.directive( 'modal' , modal );

}());	