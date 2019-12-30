function getElements(data) {
    return data.slice(0, data.length - 1).filter((_, i) => i % data[data.length - 1] === 0).join("\r\n");
}

console.log(getElements(['5', 
'20', 
'31', 
'4', 
'20', 
'2']
));

console.log(getElements(['dsa',
'asd', 
'test', 
'tset', 
'2']
));

console.log(getElements(['1', 
'2',
'3', 
'4', 
'5', 
'6']
));