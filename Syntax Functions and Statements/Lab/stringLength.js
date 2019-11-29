function calculate(x,y,z){
    let firstArgumentLength = x.length;
    let secondArgumentLength = y.length;
    let thirdArgumentLength = z.length;

    let sumOfAllArguments = firstArgumentLength+secondArgumentLength+thirdArgumentLength;
    let averageLength = Math.floor(sumOfAllArguments/3);

    console.log(sumOfAllArguments);
    console.log(averageLength);
}

calculate('chocolate', 'ice cream', 'cake')

function calculateSecondApproach(...params){
    let sum = params.reduce((a, b)=>a + b.length, 0);
    let average = Math.floor(sum/params.length);

    return[sum,average];
}

console.log(
    calculateSecondApproach('chocolate', 'ice cream', 'cake').join("\n")
)