'use strict'; 

(function() {

	var walletPanelController = function($scope, dataSource, accordion) {

		var sort0 = true,
			sort1 = true,
			sort2 = true;

		$scope.months = [
			{ 'name' : 'January' },
			{ 'name' : 'December' },
			{ 'name' : 'November' }
		];
		$scope.selectedMonth = $scope.months[0];
		$scope.historyData = dataSource.historyData[ $scope.selectedMonth['name'] ];
		$scope.currentPage = 1;
		$scope.pageSize = 8;
		$scope.searchText = { value: '' };
		$scope.orderProp = 'date'; 
		$scope.statements = dataSource.statements;
		$scope.radio = [
			{ 
				'value' : 'All',
				'search' : '' 
			},
			{ 
				'value' : 'Interest',
				'search' : 'interest' 
			},
			{ 
				'value' : 'Loans',
				'search' : 'loans' 
			},
			{ 	
				'value' : 'Withdrawal',
				'search' : 'withdrawal' 
			},
			{ 	
				'value' : 'Deposit',
				'search' : 'deposit' 
			}
		];  

		$scope.rowSort = function(colIndex) {
			if (colIndex === 0) {
				sort0 = sort0 === true ? false : true;
				$scope.orderProp = sort0 === true ? 'date' : '-date';
			}   
			if (colIndex === 1) {
				sort1 = sort1 === true ? false : true;
				$scope.orderProp = sort1 === true ? 'type' : '-type';
			}
			if (colIndex === 2) {
				sort2 = sort2 === true ? false : true;
				$scope.orderProp = sort2 === true ? 'amount' : '-amount';
			}
		};

		$scope.updateMonth = function(month) {
			$scope.historyData = dataSource.historyData[month];
		};

		$scope.selectRow = function(item, data) { 
			accordion.selectRow(item, data);
		};

	};
	              
	walletPanelController.$inject = [ '$scope' , 'dataSource' ,  'accordion' ];

	angular.module('walletPanelModule')
		.controller( 'walletPanelController' , walletPanelController );

}());