function sortArray(...params) {
    if(params[1] === 'asc'){
        return params[0].sort((a, b) => a - b);
    }

    return params[0].sort((a, b) => b - a);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));