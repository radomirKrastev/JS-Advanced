function printMatrix(matrix) {
    function changeValues(row, diagonalIndex, value) {
        for(let i = 0; i < row.length; i++){
            if (i !== diagonalIndex && i !== row.length - 1 - diagonalIndex){
                row[i] = value;
            }
        }

        return row;
    }

    matrix = matrix.map((x) => x.split(" ").map((y) => Number(y)));

    let firstDiagonal = matrix.reduce(function(result, row, i){
        result += row[i];
        return result;
    }, 0);

    let secondDiagonal = matrix.reduce(function(result, row, i){
        result += row[row.length - 1 - i];
        return result;
    }, 0);

    if (firstDiagonal === secondDiagonal){
        matrix = matrix.map((row, i) => changeValues(row, i, firstDiagonal));
    }

    return matrix.reduce(function(result, row){
        result += row.join(" ") + "\r\n";
        return result;
    }, "").trim();
}

console.log(printMatrix(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
));

console.log(printMatrix(['1 1 1',
'1 1 1',
'1 1 0']
));