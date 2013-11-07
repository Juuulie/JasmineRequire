// global define 
(function () {
    'use strict';

    define([], function () {

        var SimpleMath = function () {

        };

        SimpleMath.prototype.getFactorial = function (number) {
            if (number > 0) {
                return number * this.getFactorial(number - 1);
            } else if (number == 0) {
                return 1;
            } else {
                throw new Error("there is no factorial for a negative numbers");
            }
        };

        SimpleMath.prototype.signum = function (number) {
            if (number > 0) {
                return 1;
            } else if (number == 0) {
                return 0;
            } else {
                return -1
            }
        };

        SimpleMath.prototype.average = function (number1, number2) {
            var sum = number1 + number2;
            return Math.floor(sum / 2);
        };

        return SimpleMath;

    });

})();