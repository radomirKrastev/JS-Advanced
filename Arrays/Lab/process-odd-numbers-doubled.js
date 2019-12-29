function processNumbers(arr) {
    return arr.filter((_, i) => i % 2 !== 0).map(x => x * 2).reverse().join(" ");
}

console.log(processNumbers([10, 15, 20, 25]));