function formatJSONToHTML(jsonArray) {

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

    for (i = 0; i < parsedJSON.length; i++){
        table += "\n";    
        let valuesLine = "";   
        valuesLine = "   <tr>" + keys
        .map(x => parsedJSON[i][x])         
        .reduce((valuesLine, v) => {
            v = escapeHtml(v);
            valuesLine += `<td>${v}`;
            valuesLine += "</td>";
            return valuesLine;
        }, valuesLine);

        valuesLine += "</tr>";
        table += valuesLine;
    }

    table += "\n</table>";

    console.log(table);
}

//formatJSONToHTML(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);
formatJSONToHTML(['[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]']);