function sort(arr) {
    return arr.sort(function (a, b) {
        return (a.length - b.length) || (a.localeCompare(b));
    }).join("\r\n");
}

console.log(sort(['alpha', 
'beta', 
'gamma']
));

console.log(sort(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
));

console.log(sort(['test', 
'Deny', 
'omen', 
'Default']
));