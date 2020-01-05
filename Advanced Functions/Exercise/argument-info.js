function getInfo() {
    let types = {};
    for (let arg of arguments) {
        if (!types.hasOwnProperty(typeof(arg))){
            types[typeof(arg)] = 0;
        }

        types[typeof(arg)] += 1;
        console.log(`${typeof(arg)}: ${arg}` + "\r\n");
    }

    Object.keys(types)
    .sort((a, b) => types[b] - types[a])
    .forEach(x => console.log(`${x} = ${types[x]}`));
}

console.log(getInfo('cat', 42, function () { console.log('Hello world!');}));