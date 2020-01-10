function solve() {
    let expressionOutput = document.querySelector("#expressionOutput");
    let resultOutput = document.querySelector("#resultOutput");

    let operatorsMap = {
        "+": function(a, b) {
            return a + b;
        },
        "-": function(a, b) {
            return a - b;
        },
        "*": function(a, b) {
            return a * b;
        },
        "/": function(a, b) {
            return a / b;
        },
    };

    const calculate = (expression) => {
        expression.trim();
        let elements = expression.split(" ");

        return operatorsMap[elements[1]](+elements[0], +elements[2]);
    };

    const isValid = (expression) => {
        let elements = expression.trim().split(" ");

        console.log(elements.join(", ")+"?");
        console.log(elements.length);

        if (elements.length !== 3){
            return false;
        }

        if (!Object.keys(operatorsMap).includes((elements[1]))){
            return false;
        }

        if (isNaN(elements[0]) && isNaN(elements[2])){
            return false;
        }

        return true;
    };

    const fillExpression = (expression, element) => {
        if (Object.keys(operatorsMap).includes((element))){
           return expression += ` ${element} `;
        }

        return expression += element;
    };

    if (expressionOutput !== null && resultOutput !== null){
        expressionOutput.textContent = "";
        resultOutput.textContent = "";    
    
        const express = (e) => {
            if(e.target.value !== "Clear" && e.target.value !== "=") {
                expressionOutput.textContent = fillExpression(expressionOutput.textContent, e.target.value);
            } else if (e.target.value === "=") {
                resultOutput.textContent = isValid(expressionOutput.textContent) 
                ? calculate(expressionOutput.textContent) 
                : "NaN";
            } else {
                resultOutput.textContent = "";
                expressionOutput.textContent = "";
            }

            console.log(e.target.value);
        };
    
        [...document.getElementsByTagName("button")].forEach(x => x.addEventListener("click", express));
    }
}