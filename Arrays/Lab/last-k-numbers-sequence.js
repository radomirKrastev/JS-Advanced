function solve(length, elements) {
    let resultArray = new Array(length);
    resultArray[0] = 1;

    for (let i = 1; i < length; i++){
        let startPoint = (i - elements) < 0 ? 0 : (i - elements);

        resultArray[i] = resultArray
        .slice(startPoint, i)
        .reduce((result, x) => {
            result += x;
            return result;
        });
    }

    return resultArray.join(" ");
}

console.log(solve(8, 2));