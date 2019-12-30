function findNeighbors(data) {
    function isElementEqualToNext(i, arr, row) {
        return i < arr.length - 1 && i >= 0 && arr[row][i] === arr[row][i + 1];
    }

    function isNextRowInBoundry(row, arr) {
        return row < arr.length;
    }

    let neighborsCount = data.reduce(function(result, _, row ){
        for(let i = 0; i < data[row].length; i += 1){
            result += isNextRowInBoundry(row + 1, data) && (data[row][i] === data[row + 1][i] ? 1 : 0);
            result += (isElementEqualToNext(i, data, row) ? 1
            : 0);
        }

        return result;
    }, 0);

    return neighborsCount;
}

// function intersect(a, b) {
//     return a.filter((element, index) => b[index] === element).length;
// }

// function findNeighbors(data) {
//     let result = 0;
//     for (let i = 0; i < data.length - 1; i++){
//         result += intersect(data[i], data[i + 1]);
//     }

//     return result;
// }

console.log(findNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
));

console.log(findNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
));

console.log(findNeighbors([['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2']]
));
