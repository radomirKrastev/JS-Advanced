let result = (function () {
    let sum = 0;

    return function calc (number) {
        sum += number;

        calc.toString = function () { return sum; };
        return calc;
    };

}());

console.log(result(1)(2).toString());