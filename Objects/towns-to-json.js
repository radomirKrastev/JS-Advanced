//@ts-check

function formatDataToJson(arrOfStrings) {

    const parseIfNumber = x => isNaN(x) ? x : Math.round(x * 100) / 100;

    function splitString(str) {
        return str
        .split("|")
        .filter(x => x !== "")
        .map(x => x.trim())
        .map(x => parseIfNumber(x));
    }

    let categories = splitString(arrOfStrings[0]);
    
    let objects = arrOfStrings
    .slice(1)
    .map(splitString)
    .map(x => x.reduce((obj, field, i) => {
        obj[categories[i++]] = field;
        return obj;
    }, {}));

    objects.forEach(element => {
        
    });

    console.log(JSON.stringify(objects));
}

formatDataToJson(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);