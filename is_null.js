var chai = require('chai');
var assert = chai.assert;

suite('Unit Tests', function(){
  
  // Make ALL tests pass
  // !! Don't scramble the Assertions. We rely on their order to check the results !!
  suite('Basic Assertions', function() {
    /** assert.fail() will always fail. Change it into something more useful... **/
  
    /** 1 - Use assert.isNull() or assert.isNotNull() to make the tests pass. **/
    test('#isNull, #isNotNull', function(){
      assert.isNull(null, 'this is an optional error description - e.g. null is null');
      assert.isNotNull( 1, '1 is not null');
    });}
