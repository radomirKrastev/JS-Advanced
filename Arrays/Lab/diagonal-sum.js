function sumDiagonals(arr) {

    let diagonals = arr.slice().reduce(function (result, row, i) {
        result[0] += row[i];
        result[1] += row[row.length - 1 - i];
        return result;
    }, [0, 0]).join(" ");

    return diagonals;
}

console.log(sumDiagonals([[20, 40],
    [10, 60]]));

console.log(sumDiagonals([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]));