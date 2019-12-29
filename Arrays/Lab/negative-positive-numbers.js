const actionsMap = {
    true: "unshift",
    false: "push"
};

function solve(arr){
    return arr.reduce((result, x) => {
        result[actionsMap[x < 0]](x);
        return result;
    }, []).join("\r\n");
}

console.log(solve([7, -2, 8, 9]));