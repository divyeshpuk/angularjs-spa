'use strict';

(function() { 

	var formatAmount = function() { 

		var link = function(scope, element, attrs) { 

			function formatAmount(input) {
	            var thousandSplit = thousandSplit === undefined ? ',' : thousandSplit, 
	            	input = input === undefined ? '' : input,
	                chars = input.replace(/[^\d]/g, ''), 
	                splittedChars = chars.split(''),
	                i; 

	            for ( i = splittedChars.length - 1; i > -1; i-- ) {
	                if ( i > 0 && i % 3 === 0) {
	                    splittedChars.splice(splittedChars.length - i, 0, thousandSplit);
	                }
	            }
				chars = splittedChars.join('');
				 
				return chars; 
	        }

			element.on( 'input' , function() {
	            var str = document.getElementById(attrs.id).value,
	            	val = formatAmount(str);
            	document.getElementById(attrs.id).value = scope.formatAmount.pound = val;
			});
			
		};

		return {
			restrict: 'A',
			link: link,
			scope: {
				formatAmount : '='
			}
		};

	};

	angular.module('shellModule')
		.directive( 'formatAmount' , formatAmount );

}());