'use strict'; 

(function() { 

	var inputOps = function() { 

		function limitCharacters(obj, prop, cap) {
			obj[prop] = obj[prop] || ''; 
			var str, 
				len = obj[prop].length;
			if ( len > cap ) { 
	            str = obj[prop];
	            str = str.substring(0, len - 1);
	            obj[prop] = str;
	        }
		}

		function getTotal(data, prop) {
			var i, 
				len = data.length,
				sum = 0;
			for ( i = 0; i < len; i++ ) {
				if( !data[i][prop] ) { 
					data[i][prop] = 0; 
				}
				sum += data[i][prop];
			} 
			return sum;
		}

        function markSelectedObj(obj) {
	    	var prop;
            obj.selected = false; 
            for ( prop in obj ) {
                if ( prop === 'amount' && obj[prop] > 0 ) {  
                    obj.selected = true;
                    return true;
                }
            }
            return false;      
	    }

	 	return {

	 		updateAmount : function(item) {
				limitCharacters(item, 'pound', 9);

				var pound = item.pound || '0'; 
		      	pound = pound.replace(/[\s,]+/g, '');

		      	if ( pound.length > 0 ) {
		      		item.dateTimeInput = new Date();
		      	}

				item.amount = parseInt( pound );
				return item.amount;			
			},

	 		calculate : function(item, data) { 
				item.amount = this.updateAmount(item);
				return getTotal(data, 'amount'); 
			},

			markSelectedItems : function(data) {
				var i, 
					prop, 
					len = data.length,
					mark = false,
					val;
		        for ( i = 0; i < len; i++ ) { 
		        	val = markSelectedObj(data[i]);
		        	if (val) { 
		        		mark = true; 
		        	}
		        }
		        if ( mark === true ) {
		        	return true;
		        }
		        return false;
		    },

			purchaseProducts : function(products, portfolio) {
				var i,
					count = 0,
					len = products.length,
					sum = this.addDataVals(products, 'amtInvested');

	            for ( i = 0; i < len; i++ ) {

	                if ( products[i].amount > 0 ) {
	                    products[i].dateTimePurchase = products[i].dateTimeInput;
	                    products[i].dateTimeInput = '';
	                }

	                products[i].pound = '';
	                products[i].amount = 0;

	                if ( products[i].amtInvested > 0 ) {
	                    products[i].availableFunds = products[i].amtInvested;  
	                    portfolio[count] = products[i];
	                    count++;
	                }
	            }
	            return sum; 
			},

			addDataVals : function(data, prop) {
				var total = 0,
					propVal = 0,
	                i,
	                len = data.length;

	            for ( i = 0; i < len; i++ ) {
					propVal = this.addPropVals(data[i], prop);
	                total += propVal;
	            }
	            return total; 
			},

			addPropVals : function(item, prop) {
				var total = 0;

	            if ( !item[prop] ) {
	                item[prop] = 0;
	            } 

                if ( !item.amount ) {
                    item.amount = 0;
                } 

                item[prop] += item.amount;
                total = item[prop];

	            return total; 
			},

			showWdrAmtError : function(item, prop) {
				var avlAmount = item.availableFunds,
					amount = item.amount || 0,
					request = prop ? item[prop] + amount : 0;
				item.wdrAmtError = false;
	            if ( amount > avlAmount || amount === 0 || request > avlAmount ) { 
	                item.wdrAmtError = true;
	            }
			},

			showInvAmtError : function(item) {
				item.invAmtError = false;
	            if ( item.amount === 0 || item.amount === '' ) { 
	                item.invAmtError = true;
	            }
			},

			clearAmountError : function(data) {
				angular.forEach(data, function(item) {
	                item.wdrAmtError = false;
	                item.invAmtError = false;
	            });
			},

			disableWdrBtn : function(item) {
				var avl = item.availableFunds - item.amtWithdrawn;
				if( item.amtWithdrawn === item.availableFunds || item.availableFunds === 0 || (avl > 0 && avl < 1) ) { 
                    item.disableWithdraw = true;
                }
                else {
                	item.disableWithdraw = false;
                }
			},

			setInitDataValues : function(data) {
				var i,
                len = data.length;
	            for( i = 0; i < len; i++ ) { 
	                data[i].pound = '';
	                data[i].amount = 0;
	            }
			}

		};

	};

	angular.module('shellModule')
		.factory( 'inputOps' , inputOps );

}()); 

