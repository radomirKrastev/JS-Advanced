function jsonToHtmlTable(data) {
    
    let table = "<table>";

    for(let i = 0; i < data.length; i++){
        let obj = JSON.parse(data[i]);
        let keys = Object.getOwnPropertyNames(obj);
        table += "\n" + "	<tr>";

        for (let key of keys){
            table += "\n" + `		<td>${obj[key]}</td>`;
        }

        table += "\n" + "	</tr>";
    }

    table += "\n" + "</table>";
    console.log(table);
}

jsonToHtmlTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']
);