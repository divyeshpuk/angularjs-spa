'use strict';

(function() { 

	var dataSource = function() {

	 	return {
	 		userData : {
				'availableFunds' : 654.79,
				'amtInvested' : 0,
				'pendingProdWdr' : 0,
				'pendingAvlAmtWdr' : 0,
				'accruedAmount' : 0,
				'interestEarnedToDate' : 0
	 		},
		 	productsData : [
				{ 
					'prodType' : 'Fixed rate',
					'prodIcon' : 'fixed',
			 		'prodTerm' : '18 months',
			 		'prodDesc' : 'Lorem ipsum dolor sitmet, consec tetur adipi scing elit dolore aliqua.',
			 		'intRate' : '4.4%',
			 		'amtInvested' : 0,
			 		'availableFunds' : 0,
			 		'intEarned' : 0				 				
			 	},
			 	{ 
					'prodType' : 'Fixed rate',
					'prodIcon' : 'fixed',
			 		'prodTerm' : '24 months',
			 		'prodDesc' : 'Lorem ipsum dolor sitmet, consec tetur adipi scing elit dolore aliqua.',
			 		'intRate' : '2.8%',
			 		'amtInvested' : 0,
			 		'availableFunds' : 0,
			 		'intEarned' : 0	
			 	},
			 	{ 
					'prodType' : 'Fixed rate',
					'prodIcon' : 'fixed',
			 		'prodTerm' : '36 months',
			 		'prodDesc' : 'Lorem ipsum dolor sitmet, consec tetur adipi scing elit dolore aliqua.',
			 		'intRate' : '2.0%',
			 		'amtInvested' : 0,
			 		'availableFunds' : 0,
			 		'intEarned' : 0

			 	},
			 	{ 
					'prodType' : 'Tracker rate',
					'prodIcon' : 'tracker',
			 		'prodTerm' : '',
			 		'prodDesc' : 'Lorem ipsum dolor sitmet, consec tetur adipi scing elit dolore aliqua.',
			 		'intRate' : '3.5%',
			 		'amtInvested' : 0,
			 		'availableFunds' : 0,
			 		'intEarned' : 0
			 	}
		 	],

		 	portfolioData : [],

			historyData : {
				January : [
					{ 
						'key' : 'withdrawal',
						'date' : '01/01/2015',
						'type' : 'Withdrawal to Bank',
						'ref' : 'AAbb0044-000',
						'amount' : 1000.00,
				 	},
				 	{ 	
						'key' : 'deposit',
						'date' : '04/01/2015',
						'type' : 'Deposit',
						'ref' : 'AAbb0044-000',
						'amount' : 2300.00
				 	},
				 	{ 
						'key' : 'withdrawal',
						'date' : '28/01/2015',
						'type' : 'Withdrawal to Bank',
						'ref' : 'AAbb0044-000',
						'amount' : 340.00,
				 	},
				 	{ 
						'key' : 'deposit',
						'date' : '29/01/2015',
						'type' : 'Deposit',
						'ref' : 'AAbb0044-000',
						'amount' : 400.00
				 	},
				 	{ 
						'key' : 'withdrawal',
						'date' : '30/01/2015',
						'type' : 'Withdrawal to Bank',
						'ref' : 'AAbb0044-000',
						'amount' : 5700.00
				 	},
				 	{ 
						'key' : 'loans',
						'date' : '02/01/2015',
						'type' : 'New loan investment - tracker - 3.5%',
						'ref' : 'AAbb0044-000',
						'amount' : 6500.00
				 	},
				 	{ 
						'key' : 'interest',
						'date' : '03/01/2015',
						'type' : 'Interest received',
						'ref' : 'AAbb0044-000',
						'amount' : 56.00
				 	},
				 	{ 
						'key' : 'withdrawal',
						'date' : '05/01/2015',
						'type' : 'Withdrawal to Bank',
						'ref' : 'AAbb0044-000',
						'amount' : 5400.00
				 	},
				 	{ 
						'key' : 'deposit',
						'date' : '08/01/2015',
						'type' : 'Deposit',
						'ref' : 'AAbb0044-000',
						'amount' : 400.00
				 	},
				 	{ 
						'key' : 'loans',
						'date' : '06/01/2015',
						'type' : 'New loan investment - tracker - 3.5%',
						'ref' : 'AAbb0044-000',
						'amount' : 10000.00
				 	},
				 	{ 
						'key' : 'loans',
						'date' : '10/01/2015',
						'type' : 'New loan investment - fixed - 3.5%',
						'ref' : 'AAbb0044-000',
						'amount' : 6500.00
				 	},
				 	{ 
						'key' : 'interest',
						'date' : '11/01/2015',
						'type' : 'Interest received',
						'ref' : 'AAbb0044-000',
						'amount' : 46.00
				 	},
				 	{ 
						'key' : 'withdrawal',
						'date' : '12/01/2015',
						'type' : 'Withdrawal to Bank',
						'ref' : 'AAbb0044-000',
						'amount' : 5400.00
				 	},
				 	{ 
						'key' : 'interest',
						'date' : '07/01/2015',
						'type' : 'Interest received',
						'ref' : 'AAbb0044-000',
						'amount' : 22.00
				 	},
				 	{ 
						'key' : 'withdrawal',
						'date' : '08/01/2015',
						'type' : 'Withdrawal to Bank',
						'ref' : 'AAbb0044-000',
						'amount' : 1650.00
				 	},
				 	{ 
						'key' : 'deposit',
						'date' : '09/01/2015',
						'type' : 'Deposit - AASDF43543',
						'amount' : 276.00
				 	},
				 	{ 
						'key' : 'withdrawal',
						'date' : '16/01/2015',
						'type' : 'Withdrawal to Bank',
						'ref' : 'AAbb0044-000',
						'amount' : 9500.00
				 	},
				 	{ 
						'key' : 'deposit',
						'date' : '17/01/2015',
						'type' : 'Deposit',
						'ref' : 'AAbb0044-000',
						'amount' : 34560.00
				 	},
				 	{ 
						'key' : 'loans',
						'date' : '18/01/2015',
						'type' : 'New loan investment - fixed 4.5%',
						'ref' : 'AAbb0044-000',
						'amount' : 9870.00
				 	},
				 	{ 
						'key' : 'interest',
						'date' : '19/01/2015',
						'type' : 'Interest received',
						'ref' : 'AAbb0044-000',
						'amount' : 143.00
				 	},
				 	{ 
						'key' : 'withdrawal',
						'date' : '20/01/2015',
						'type' : 'Withdrawal to Bank',
						'ref' : 'AAbb0044-000',
						'amount' : 5400.00
				 	},
				 	{ 
						'key' : 'deposit',
						'date' : '21/01/2015',
						'type' : 'Deposit',
						'ref' : 'AAbb0044-000',
						'amount' : 130.00
				 	},
				 	{ 
						'key' : 'loans',
						'date' : '22/01/2015',
						'type' : 'New loan investment - fixed 4.5%',
						'ref' : 'AAbb0044-000',
						'amount' : 32400.00
				 	},
				 	{ 
						'key' : 'interest',
						'date' : '23/01/2015',
						'type' : 'Interest received',
						'ref' : 'AAbb0044-000',
						'amount' : 72.00
				 	},
				 	{ 
						'key' : 'withdrawal',
						'date' : '24/01/2015',
						'type' : 'Withdrawal to Bank',
						'ref' : 'AAbb0044-000',
						'amount' : 65700.00
				 	},
				 	{ 
						'key' : 'deposit',
						'date' : '13/01/2015',
						'type' : 'Deposit',
						'ref' : 'AAbb0044-000',
						'amount' : 7650.00
				 	},
				 	{ 
						'key' : 'loans',
						'date' : '14/01/2015',
						'type' : 'New loan investment - tracker 3.5%',
						'ref' : 'AAbb0044-000',
						'amount' : 53400.00
				 	},
				 	{ 
						'key' : 'interest',
						'date' : '15/01/2015',
						'type' : 'Interest received',
						'ref' : 'AAbb0044-000',
						'amount' : 643.00
				 	},
				 	{ 
						'key' : 'deposit',
						'date' : '25/01/2015',
						'type' : 'Deposit',
						'ref' : 'AAbb0044-000',
						'amount' : 2300.00
				 	},
				 	{ 
						'key' : 'loans',
						'date' : '26/01/2015',
						'type' : 'New loan investment - tracker 3.5%',
						'ref' : 'AAbb0044-000',
						'amount' : 6500.00
				 	},
				 	{ 
						'key' : 'interest',
						'date' : '27/01/2015',
						'type' : 'Interest received',
						'ref' : 'AAbb0044-000',
						'amount' : 654.00
				 	},
				 	{ 
						'key' : 'deposit',
						'date' : '31/01/2015',
						'type' : 'Deposit',
						'ref' : 'AAbb0044-000',
						'amount' : 120.00
				 	}
				],
				December : [
					{ 
						'key' : 'withdrawal',
						'date' : '01/12/2014',
						'type' : 'Withdrawal to Bank',
						'ref' : 'AAbb0044-000',
						'amount' : 1000.00
				 	},
				 	{ 
						'key' : 'deposit',
						'date' : '04/12/2014',
						'type' : 'Deposit',
						'ref' : 'AAbb0044-000',
						'amount' : 2300.00
				 	},
				 	{ 
						'key' : 'loans',
						'date' : '02/12/2014',
						'type' : 'New loan investment - tracker 3.5%',
						'ref' : 'AAbb0044-000',
						'amount' : 6500.00
				 	},
				 	{ 
						'key' : 'interest',
						'date' : '03/12/2014',
						'type' : 'Interest received',
						'ref' : 'AAbb0044-000',
						'amount' : 56.00
				 	},
				 	{ 
						'key' : 'withdrawal',
						'date' : '05/12/2014',
						'type' : 'Withdrawal to Bank',
						'ref' : 'AAbb0044-000',
						'amount' : 5400.00
				 	},
				 	{ 
						'key' : 'deposit',
						'date' : '08/12/2014',
						'type' : 'Deposit',
						'ref' : 'AAbb0044-000',
						'amount' : 400.00
				 	},
				 	{ 
						'key' : 'loans',
						'date' : '06/12/2014',
						'type' : 'New loan investment - tracker 3.5%',
						'ref' : 'AAbb0044-000',
						'amount' : 10000.00
				 	},
				 	{ 
						'key' : 'interest',
						'date' : '07/12/2014',
						'type' : 'Interest received',
						'ref' : 'AAbb0044-000',
						'amount' : 22.00
				 	},
				 	{ 
						'key' : 'withdrawal',
						'date' : '08/12/2014',
						'type' : 'Withdrawal to Bank',
						'ref' : 'AAbb0044-000',
						'amount' : 1650.00
				 	},
				 	{ 
						'key' : 'deposit',
						'date' : '09/12/2014',
						'type' : 'Deposit',
						'ref' : 'AAbb0044-000',
						'amount' : 276.00
				 	},
				 	{ 
						'key' : 'loans',
						'date' : '10/12/2014',
						'type' : 'New loan investment - fixed 3.5%',
						'ref' : 'AAbb0044-000',
						'amount' : 6500.00
				 	},
				 	{ 
						'key' : 'interest',
						'date' : '11/12/2014',
						'type' : 'Interest received',
						'ref' : 'AAbb0044-000',
						'amount' : 46.00
				 	},
				 	{ 
						'key' : 'withdrawal',
						'date' : '12/12/2014',
						'type' : 'Withdrawal to Bank',
						'ref' : 'AAbb0044-000',
						'amount' : 5400.00
				 	},
				 	{ 
						'key' : 'deposit',
						'date' : '13/12/2014',
						'type' : 'Deposit',
						'ref' : 'AAbb0044-000',
						'amount' : 7650.00
				 	},
				 	{ 
						'key' : 'loans',
						'date' : '14/12/2014',
						'type' : 'New loan investment - tracker 3.5%',
						'ref' : 'AAbb0044-000',
						'amount' : 53400.00
				 	},
				 	{ 
						'key' : 'interest',
						'date' : '15/12/2014',
						'type' : 'Interest received',
						'ref' : 'AAbb0044-000',
						'amount' : 643.00
				 	},
				 	{ 
						'key' : 'withdrawal',
						'date' : '16/12/2014',
						'type' : 'Withdrawal to Bank',
						'ref' : 'AAbb0044-000',
						'amount' : 9500.00
				 	},
				 	{ 
						'key' : 'deposit',
						'date' : '17/12/2014',
						'type' : 'Deposit',
						'ref' : 'AAbb0044-000',
						'amount' : 34560.00
				 	},
				 	{ 
						'key' : 'loans',
						'date' : '18/12/2014',
						'type' : 'New loan investment - fixed 4.5%',
						'ref' : 'AAbb0044-000',
						'amount' : 9870.00
				 	},
				 	{ 
						'key' : 'interest',
						'date' : '19/12/2014',
						'type' : 'Interest received',
						'ref' : 'AAbb0044-000',
						'amount' : 143.00
				 	},
				 	{ 
						'key' : 'withdrawal',
						'date' : '20/12/2014',
						'type' : 'Withdrawal to Bank',
						'ref' : 'AAbb0044-000',
						'amount' : 5400.00
				 	},
				 	{ 
						'key' : 'deposit',
						'date' : '21/12/2014',
						'type' : 'Deposit',
						'ref' : 'AAbb0044-000',
						'amount' : 130.00
				 	},
				 	{ 
						'key' : 'loans',
						'date' : '22/12/2014',
						'type' : 'New loan investment - fixed 4.5%',
						'ref' : 'AAbb0044-000',
						'amount' : 32400.00
				 	},
				 	{ 
						'key' : 'interest',
						'date' : '23/12/2014',
						'type' : 'Interest received',
						'ref' : 'AAbb0044-000',
						'amount' : 72.00
				 	},
				 	{ 
						'key' : 'withdrawal',
						'date' : '24/12/2014',
						'type' : 'Withdrawal to Bank',
						'ref' : 'AAbb0044-000',
						'amount' : 65700.00
				 	},
				 	{ 
						'key' : 'deposit',
						'date' : '25/12/2014',
						'type' : 'Deposit',
						'ref' : 'AAbb0044-000',
						'amount' : 2300.00
				 	},
				 	{ 
						'key' : 'loans',
						'date' : '26/12/2014',
						'type' : 'New loan investment - tracker 3.5%',
						'ref' : 'AAbb0044-000',
						'amount' : 6500.00
				 	},
				 	{ 
						'key' : 'interest',
						'date' : '27/12/2014',
						'type' : 'Interest received',
						'ref' : 'AAbb0044-000',
						'amount' : 654.00
				 	},
				 	{ 
						'key' : 'withdrawal',
						'date' : '28/12/2014',
						'type' : 'Withdrawal to Bank',
						'ref' : 'AAbb0044-000',
						'amount' : 340.00
				 	},
				 	{ 
						'key' : 'deposit',
						'date' : '29/12/2014',
						'type' : 'Deposit',
						'ref' : 'AAbb0044-000',
						'amount' : 400.00
				 	},
				 	{ 
						'key' : 'withdrawal',
						'date' : '30/12/2014',
						'type' : 'Withdrawal to Bank',
						'ref' : 'AAbb0044-000',
						'amount' : 5700.00
				 	},
				 	{ 
						'key' : 'deposit',
						'date' : '31/12/2014',
						'type' : 'Deposit',
						'ref' : 'AAbb0044-000',
						'amount' : 120.00
				 	}
				],
				November : [
					{ 
						'key' : 'withdrawal',
						'date' : '01/11/2014',
						'type' : 'Withdrawal to Bank',
						'ref' : 'AAbb0044-000',
						'amount' : 1000.00
				 	},
				 	{ 
						'key' : 'deposit',
						'date' : '04/11/2014',
						'type' : 'Deposit',
						'ref' : 'AAbb0044-000',
						'amount' : 2300.00
				 	},
				 	{ 
						'key' : 'loans',
						'date' : '02/11/2014',
						'type' : 'New loan investment - tracker 3.5%',
						'ref' : 'AAbb0044-000',
						'amount' : 6500.00
				 	},
				 	{ 
						'key' : 'deposit',
						'date' : '13/11/2014',
						'type' : 'Deposit',
						'ref' : 'AAbb0044-000',
						'amount' : 7650.00
				 	},
				 	{ 
						'key' : 'loans',
						'date' : '14/11/2014',
						'type' : 'New loan investment - tracker 3.5%',
						'ref' : 'AAbb0044-000',
						'amount' : 53400.00
				 	},
				 	{ 
						'key' : 'interest',
						'date' : '15/11/2014',
						'type' : 'Interest received',
						'ref' : 'AAbb0044-000',
						'amount' : 643.00
				 	},
				 	{ 
						'key' : 'interest',
						'date' : '03/11/2014',
						'type' : 'Interest received',
						'ref' : 'AAbb0044-000',
						'amount' : 56.00
				 	},
				 	{ 
						'key' : 'withdrawal',
						'date' : '05/11/2014',
						'type' : 'Withdrawal to Bank',
						'ref' : 'AAbb0044-000',
						'amount' : 5400.00
				 	},
				 	{ 
						'key' : 'deposit',
						'date' : '08/11/2014',
						'type' : 'Deposit',
						'ref' : 'AAbb0044-000',
						'amount' : 400.00
				 	},
				 	{ 
						'key' : 'loans',
						'date' : '06/11/2014',
						'type' : 'New loan investment - tracker 3.5%',
						'ref' : 'AAbb0044-000',
						'amount' : 10000.00
				 	},
				 	{ 
						'key' : 'interest',
						'date' : '07/11/2014',
						'type' : 'Interest received',
						'ref' : 'AAbb0044-000',
						'amount' : 22.00
				 	},
				 	{ 
						'key' : 'withdrawal',
						'date' : '08/11/2014',
						'type' : 'Withdrawal to Bank',
						'ref' : 'AAbb0044-000',
						'amount' : 1650.00
				 	},
				 	{ 
						'key' : 'withdrawal',
						'date' : '16/11/2014',
						'type' : 'Withdrawal to Bank',
						'ref' : 'AAbb0044-000',
						'amount' : 9500.00
				 	},
				 	{ 
						'key' : 'deposit',
						'date' : '17/11/2014',
						'type' : 'Deposit',
						'ref' : 'AAbb0044-000',
						'amount' : 34560.00
				 	},
				 	{ 
						'key' : 'loans',
						'date' : '18/11/2014',
						'type' : 'New loan investment - fixed 4.5%',
						'ref' : 'AAbb0044-000',
						'amount' : 9870.00
				 	},
				 	{ 
						'key' : 'deposit',
						'date' : '09/11/2014',
						'type' : 'Deposit',
						'ref' : 'AAbb0044-000',
						'amount' : 276.00
				 	},
				 	{ 
						'key' : 'loans',
						'date' : '10/11/2014',
						'type' : 'New loan investment - fixed 3.5%',
						'ref' : 'AAbb0044-000',
						'amount' : 6500.00
				 	},
				 	{ 
						'key' : 'interest',
						'date' : '11/11/2014',
						'type' : 'Interest received',
						'ref' : 'AAbb0044-000',
						'amount' : 46.00
				 	},
				 	{ 
						'key' : 'withdrawal',
						'date' : '12/11/2014',
						'type' : 'Withdrawal to Bank',
						'ref' : 'AAbb0044-000',
						'amount' : 5400.00
				 	},
				 	{ 
						'key' : 'interest',
						'date' : '19/11/2014',
						'type' : 'Interest received',
						'ref' : 'AAbb0044-000',
						'amount' : 143.00
				 	},
				 	{ 
						'key' : 'withdrawal',
						'date' : '20/11/2014',
						'type' : 'Withdrawal to Bank',
						'ref' : 'AAbb0044-000',
						'amount' : 5400.00
				 	},
				 	{ 
						'key' : 'deposit',
						'date' : '21/11/2014',
						'type' : 'Deposit',
						'ref' : 'AAbb0044-000',
						'amount' : 130.00
				 	},
				 	{ 
						'key' : 'loans',
						'date' : '22/11/2014',
						'type' : 'New loan investment - fixed 4.5%',
						'ref' : 'AAbb0044-000',
						'amount' : 32400.00
				 	},
				 	{ 
						'key' : 'interest',
						'date' : '23/11/2014',
						'type' : 'Interest received',
						'ref' : 'AAbb0044-000',
						'amount' : 72.00
				 	},
				 	{ 
						'key' : 'withdrawal',
						'date' : '24/11/2014',
						'type' : 'Withdrawal to Bank',
						'ref' : 'AAbb0044-000',
						'amount' : 65700.00
				 	},
				 	{ 
						'key' : 'deposit',
						'date' : '25/11/2014',
						'type' : 'Deposit',
						'ref' : 'AAbb0044-000',
						'amount' : 2300.00
				 	},
				 	{ 
						'key' : 'loans',
						'date' : '26/11/2014',
						'type' : 'New loan investment - tracker 3.5%',
						'ref' : 'AAbb0044-000',
						'amount' : 6500.00
				 	},
				 	{ 
						'key' : 'interest',
						'date' : '27/11/2014',
						'type' : 'Interest received',
						'ref' : 'AAbb0044-000',
						'amount' : 654.00
				 	},
				 	{ 
						'key' : 'withdrawal',
						'date' : '28/11/2014',
						'type' : 'Withdrawal to Bank',
						'ref' : 'AAbb0044-000',
						'amount' : 340.00
				 	},
				 	{ 
						'key' : 'deposit',
						'date' : '29/11/2014',
						'type' : 'Deposit',
						'ref' : 'AAbb0044-000',
						'amount' : 400.00
				 	},
				 	{ 
						'key' : 'withdrawal',
						'date' : '30/11/2014',
						'type' : 'Withdrawal to Bank',
						'ref' : 'AAbb0044-000',
						'amount' : 5700.00
				 	}
				]
			},
			statements: [
				{ 
					'month' : 'January 2015',
					'interest' : 34.87,
					'totalInt' : 98.99,
					'cashAcc' : 234.43,
					'loanPort' : 2354.45
				},
				{ 
					'month' : 'December 2014',
					'interest' : 34.87,
					'totalInt' : 98.99,
					'cashAcc' : 234.43,
					'loanPort' : 2354.64
				},
				{ 
					'month' : 'November 2014',
					'interest' : 34.87,
					'totalInt' : 98.99,
					'cashAcc' : 234.43,
					'loanPort' : 2354.50
				},
				{ 
					'month' : 'October 2014',
					'interest' : 34.87,
					'totalInt' : 98.99,
					'cashAcc' : 234.43,
					'loanPort' : 2354.50
				},
				{ 
					'month' : 'September 2014',
					'interest' : 34.87,
					'totalInt' : 98.99,
					'cashAcc' : 234.43,
					'loanPort' : 2354.50
				}
			]
	 	};

	};

	angular.module('lenderApp')
		.factory( 'dataSource' , dataSource );

}()); 

