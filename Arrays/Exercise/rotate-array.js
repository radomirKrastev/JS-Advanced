function rotate(arr) {
    let result = arr.slice(0, arr.length - 1);
    let totalMoves = arr[arr.length - 1];

    if (totalMoves > arr.length - 1){
        let fullRotations = totalMoves / (arr.length - 1);
        totalMoves -= (fullRotations * arr.length - 1);
    }

    for (let i = 0; i < totalMoves; i++){
        let element = result.pop();
        result.unshift(element);
    }

    return result.join(" ");
}

console.log(rotate(['1', 
'2', 
'3', 
'4', 
'2']
));

console.log(rotate(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']
));