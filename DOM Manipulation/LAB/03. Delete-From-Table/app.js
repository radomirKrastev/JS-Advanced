function deleteByEmail() {
    const getElement = function(element) {
        return document.querySelector(element);
    };

    const getElements = function(elements) {
        return document.querySelectorAll(elements);
    };    

    let deleteRow = function(input, rows) {
        let currentEmailRow = rows.find(r => r.children[1].innerHTML === input);

        if (currentEmailRow){
            let body = currentEmailRow.parentElement;
            return body.removeChild(currentEmailRow);
        }

        let result = getElement("#result");
        result.innerHTML = "Not found.";
        return result;
    }; 

    let rows = [...getElements("tbody tr")];
    let input = getElement("input").value;
    deleteRow(input, rows);
}