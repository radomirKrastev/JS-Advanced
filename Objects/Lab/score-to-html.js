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

    let html = "";
    html += "<table>\n" + "  <tr>" + keys 
    .reduce((html, k) => {
        html += `<th>${k}`;
        html += "</th>";
        return html;
    }, html);
    
    html += "</tr>";

    for(let obj of parsedJSON){
        html += "\n";    
        let name = escapeHtml(obj[keys[0]]);
        let score = escapeHtml(obj[keys[1]]);
        html += `   <tr><td>${name}</td><td>${score}</td></tr>`;
    }

    // for (i = 0; i < parsedJSON.length; i++){
    //     html += "\n";    
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
    //     html += valuesLine;
    // }

    html += "\n</table>";

    console.log(html);
}

formatJSONToHTML(['[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]']);
formatJSONToHTML(['[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]']);
