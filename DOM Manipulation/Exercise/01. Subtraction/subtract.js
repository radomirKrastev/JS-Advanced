function subtract() {
    let getElement = function(element) {
        return document.querySelector(element);
    };

    let firstNumber = getElement("#firstNumber");
    let secondNumber = getElement("#secondNumber");
    let result = getElement("#result");

    result.innerHTML = Number(firstNumber.value) - Number(secondNumber.value);
}