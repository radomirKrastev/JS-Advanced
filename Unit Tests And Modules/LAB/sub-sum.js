subSum = function(arr, s, e) {
  let start = s >= 0 ? s : 0;
  let end = e < 0 ? arr.length : e + 1;

  let isArray = arr instanceof Array;

  if (isArray === false || !arr.every((x) => !isNaN(x))) {
    return NaN;
  }

  let subArr = arr.slice(start, end);
  return subArr.reduce(function(result, x) {
    result += x;
    return result;
  }, 0);
};

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subSum([10, "twenty", 30, 40], 0, 2));
console.log(subSum("text", 0, 2));
