'use strict';

(function() { 

	var accordion = function() { 

		var currIndex = null;

	    function selectObj(obj) {
	    	var prop;
            for ( prop in obj ) {
                if ( prop === 'selected' && obj[prop] ) { 
                    return true;
                }
            }
            return false;      
	    }

	 	return {

	 		selectRow : function(item, data) { 
	 			var i, 
	 				prop, 
					len = data.length,
					val,
		 			propVal = false,
		 			itemIndex;

				for ( i = 0; i < len; i++ ) { 
					val = selectObj( data[i] );
		        	if (val) { 
		        		currIndex = i; 
				        propVal = true; 
		        	}
				}

				itemIndex = data.indexOf(item);
				currIndex = !propVal ? itemIndex : currIndex;

		 		if ( currIndex === itemIndex ) {
					data[itemIndex].selected = data[itemIndex].selected ? false : true;
				}
				else {
					data[currIndex].selected = false; 
					data[itemIndex].selected = true; 
				}	

				currIndex = itemIndex;		
			}

		};

	};

	angular.module('lenderApp')
		.factory( 'accordion' , accordion );

}()); 

