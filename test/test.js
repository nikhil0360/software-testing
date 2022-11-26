var Calc = require('../js/script.js');
var assert = require('assert');
describe('Calculator', function () {
  describe('factorial', function () {
    it('should return 1 when value is 0', function () {
      assert.equal(Calc.factorial(0), 1);
    });
  });
});


