function getSmallestTwoNumbers(arr) {
    return arr.slice().sort((a, b) =>  a - b).slice(0, 2).join(" ");
}

console.log(getSmallestTwoNumbers([30, 15, 50, 5]));