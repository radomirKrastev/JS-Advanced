function checkNumbers(x) {

    let equalNumbers = true;
    let numbers = x.toString().split("");

    for (i = 0; i < numbers.length - 1; i++) {

        if (numbers[i] !== numbers[i + 1]) {
            equalNumbers = false;
            break;
        }
    }

    sum = numbers.reduce((a, b) => Number(a) + Number(b), numbers.shift());
    console.log(equalNumbers);
    console.log(sum);
}



checkNumbers(2222222);