function solve(operator, x, y){

    let result;
    switch(operator){
        case "+": result = x + y; break;
        case "-": result = x - y; break;
        case "/": result = x / y; break;
        case "%": result = x % y; break;
        case "*": result = x * y; break;
        case "**": result = x ** y; break;
    }

    console.log(result);
}

solve("+", 10, 15)

function solveSecondApproach(operator, ...params){
    let result = params.reduce((a, b) => eval(`${a} ${operator} ${b}`), params.shift())

    console.log(result);
}

solveSecondApproach("-", 1, 2, 3, 4)