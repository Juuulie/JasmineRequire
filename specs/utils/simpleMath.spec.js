(function () {
    'use strict';

    define([
        'jasmine',
        '../../src/utils/simpleMath'
    ], function (jasmine, SimpleMath) {
        console.log(SimpleMath);


		describe('this is a simple test', function(){

			beforeEach(function(){
				this.simpleMath = new SimpleMath();
			});

			it("Should the factorial of 3 -> 6", function(){
				expect(this.simpleMath.getFactorial(3)).toBe(6);
			});
		})


    });
})();