function solve(data) {
    let output = data.reduce(function(result, command, element){
        if (command === "add"){
            result.push(++element);
        } else {
            result.pop();
        }

        return result;
    }, []).join("\r\n");

    return (output === "" ? "Empty"
    : output);
}

console.log(solve(['add', 
'add', 
'add', 
'add']
));

console.log(solve(['add', 
'add', 
'remove', 
'add', 
'add']
));

console.log(solve(['remove', 
'remove', 
'remove']
));