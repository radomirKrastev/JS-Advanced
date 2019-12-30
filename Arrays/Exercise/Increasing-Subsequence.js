function extractSubsequence(arr) {
    return arr.slice(0, arr.length).reduce(function(result, element, i){
        if(++i === 1 || element >= result[result.length - 1]){
            result.push(element);
        }

        return result;
    }, []).join("\r\n");
}

console.log(extractSubsequence([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ));

console.log(extractSubsequence([20, 
    3, 
    2, 
    15,
    6, 
    1]
    ));