function findLargerst(...params) {
    
    params.sort(function (a, b) {
        return a - b;
    });

    let largestNumber = params[params.length - 1];

    console.log(`The largest number is ${largestNumber}.`)
}

findLargerst(5, -3, 16)