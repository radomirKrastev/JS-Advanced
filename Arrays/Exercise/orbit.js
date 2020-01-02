function fillMatrix(coordinates) {
    function fillSurroundings(x, col, starCol, starRow, row) {
        if (col !== starCol) {
            x = Math.max(Math.abs(col - starCol) + 1, Math.abs(row - starRow) + 1);
        } else {
            x = Math.abs(row - starRow) + 1;
        }

        return x;
    }

    let rows = coordinates[0];
    let cols = coordinates[1];
    let starRow = coordinates[2];
    let starCol = coordinates[3];

    let matrix = new Array(rows);
    for (let i = 0; i < rows; i++) {
        let arr = new Array(cols).fill(0);
        matrix[i] = arr;
    }

    let value = 1;
    matrix[starRow][starCol] = value;

    function fillOrbit() {
        return matrix.map((row, i) => row.map((x, col) => fillSurroundings(x, col, starCol, starRow, i)));
    }

    matrix = fillOrbit();

    return matrix.reduce(function (result, row) {
        result += row.join(" ") + "\r\n";
        return result;
    }, "").trim();
}

console.log(fillMatrix([4, 4, 0, 0]));
console.log(fillMatrix([3, 3, 2, 2]));
console.log(fillMatrix([5, 5, 2, 2]));