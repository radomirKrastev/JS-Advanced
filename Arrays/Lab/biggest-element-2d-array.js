function getBiggestElement(arr) {
    return Math.max(...arr.flat(1));
}

console.log(getBiggestElement([[20, 50, 10],
    [8, 33, 145]]));