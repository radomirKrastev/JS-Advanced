function solve() {
  const input = document.querySelector("#input").value;
  const result = document.querySelector("#resultOutput");
  let binaryToDecimal = function(input) {
    let sum = input;

    while (sum.length > 1) {
      sum = sum
        .split("")
        .reduce(function(result, i) {
          result += Number(i);
          return result;
        }, 0)
        .toString();
    }

    let trimmedCode = input.substring(sum, input.length - sum);

    console.log(trimmedCode);
    console.log(trimmedCode.split(/([0-1]{8})/));
    console.log(trimmedCode.split(/([\d]{8})/));
    return trimmedCode
      .split(/([\d]{8})/)
      .map((x) => parseInt(x, 2))
      .map((x) => String.fromCharCode(x))
      .filter((x) => x.match(/[A-Za-z\s]/g))
      .join("");
  };

  result.innerHTML += binaryToDecimal(input);
}
