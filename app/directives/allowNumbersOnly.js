'use strict';

(function() { 

	var allowNumbersOnly = function() { 

		var link = function(scope, element, attrs) {

			function allowNumsOnly(e) {
		        var keyCode = e.which;
		        var keyCodes = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 0, 8];

		        if ( !(keyCodes.indexOf(keyCode) >= 0) ) {
		        	e.preventDefault();
		        }
		    }

			element.on( 'keypress' , allowNumsOnly );
			
		};

		return {
			restrict: 'A',
			link: link
		};
		
	};

	angular.module('shellModule')
		.directive( 'allowNumbersOnly' , allowNumbersOnly );

}());	