function formatJSONToHTMLTable(jsonArray) {

    function escapeHtml(unsafe) {
        let safe = unsafe
            .toString()
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");

        return safe;
    }

    let parsedJSON = JSON.parse(jsonArray);
    let keys = Object.getOwnPropertyNames(parsedJSON[0]);

    let table = "";
    table += "<table>\n" + "  <tr>" + keys 
    .reduce((table, k) => {
        table += `<th>${k}`;
        table += "</th>";
        return table;
    }, table);
    
    table += "</tr>";

    for(let obj of parsedJSON){
        table += "\n";    
        let name = escapeHtml(obj[keys[0]]);
        let score = escapeHtml(obj[keys[1]]);
        table += `   <tr><td>${name}</td><td>${score}</td></tr>`;
    }

    // for (i = 0; i < parsedJSON.length; i++){
    //     table += "\n";    
    //     let valuesLine = "";   
    //     valuesLine = "   <tr>" + Object
    //     .getOwnPropertyNames(parsedJSON[i])
    //     .map(x => parsedJSON[i][x])         
    //     .reduce((valuesLine, v) => {
    //         v = escapeHtml(v);
    //         valuesLine += `<td>${v}`;
    //         valuesLine += "</td>";
    //         return valuesLine;
    //     }, valuesLine);

    //     valuesLine += "</tr>";
    //     table += valuesLine;
    // }

    table += "\n</table>";

    console.log(table);
}

formatJSONToHTMLTable(['[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]']);
formatJSONToHTMLTable(['[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]']);
