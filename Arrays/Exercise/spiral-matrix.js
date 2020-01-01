function fillSpiralMatrix(rows, cols) {
    let matrix = new Array(rows);
    for (let i = 0; i < rows; i++) {
        let arr = new Array(cols).fill(0);
        matrix[i] = arr;
    }
    
    function fillRight(row, col, value) {
        matrix[row][col + 1] = value + 1;
        return matrix;
    }

    function fillLeft(row, col, value) {
        matrix[row][col - 1] = value + 1;
        return matrix;
    }

    function fillDown(row, col, value) {
        matrix[row + 1][col] = value + 1;
        return matrix;
    }

    function fillUp(row, col, value) {
        matrix[row - 1][col] = value + 1;
        return matrix;
    }

    let row = 0;
    let col = -1;
    let value = 0;

    while (value < rows * cols) {
        while (col + 1 < matrix[row].length && matrix[row][col + 1] === 0) {
            matrix = fillRight(row, col, value++);
            col++;
        } 

        while (row + 1 < rows && matrix[row + 1][col] === 0) {
            matrix = fillDown(row, col, value++);
            row++;
        } 

        while (col - 1 >= 0 && matrix[row][col - 1] === 0) {
            matrix = fillLeft(row, col, value++);
            col--;
        } 
        
        while (row - 1 >= 0 && matrix[row - 1][col] === 0) {
            matrix = fillUp(row, col, value++);
            row--;
        }
    }
         
    return matrix.reduce(function(result, row){
        result += row.join(" ") + "\r\n";
        return result;
    }, "").trim();
}

console.log(fillSpiralMatrix(5, 5));
console.log(fillSpiralMatrix(3, 3));