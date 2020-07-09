var assert = require('assert');
var someArray = [1,2,3,4,5], 
	len = someArray.length, 
	i = 0; 
 
var count = 0; 
 
for ( ; i < len; i++ ) (function(i) { 
	setTimeout(function() { 
		assert( count++ === i, 'Checking the value of: ' + i ); 
	}, i * 300); 
})(i);