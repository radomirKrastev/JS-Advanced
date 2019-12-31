function getResult(matrix) {

    function getColSums() {
        let colsTotal = new Array(matrix[0].length).fill(0);
        let flattenedMatrix = matrix.flat(1);

        colsTotal.map((_, i) => flattenedMatrix[i]);

        for (let c = 0; c < matrix.length; c += 1) {
            let index = c;

            while (index < flattenedMatrix.length) {
                colsTotal[c] += flattenedMatrix[index];
                index += matrix[0].length;
            }
        }

        return colsTotal;
    }

    const allEqual = (arr) => arr.every((v) => v === arr[0]);

    return allEqual(getColSums()) &&
    allEqual(matrix.map((x) => x.reduce((a, b) => a + b, 0)));
}

console.log(getResult([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
));

console.log(getResult([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   ));

console.log(getResult([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   ));