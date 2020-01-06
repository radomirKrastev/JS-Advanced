let solution = (function() {
    let solution = {};
    solution.add = function (a, b) {
        return a.reduce(function(result, x, i){
            result[i] = x + b[i];
            return result;
        }, []);  
    };

    solution.multiply = function (vector, multiplier) {
        return vector.map(x => x * multiplier);
    };

    solution.length = function (vector) {
        return Math.sqrt(vector.reduce(function(result, x){
            result += Math.pow(x, 2);
            return result;
        }, 0));
    };

    solution.dot = function (a, b) {
        return a.reduce(function(result, x, i){
            result += x * b[i];
            return result;
        }, 0);  
    };

    solution.cross = function (a, b) {
        return a.reduce(function(result, x, i){
            result = i === 0 ? x * b[b.length -1 -i] : result - x * b[b.length -1 -i];
            return result;
        }, 0);  
    };

    return solution;
}());

console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([3.5 , -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([1, 0], [0, -1]));
console.log(solution.cross([1, 1], [-1, 1]));