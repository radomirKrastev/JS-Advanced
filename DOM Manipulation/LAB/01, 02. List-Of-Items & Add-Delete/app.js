function addItem() {
    const getElement = function (item) {
        return document.querySelector(item);
    };

    const createElmnt = function (element) {
        return document.createElement(element);
    };

    let addTextToElement = function (item, text) {
        item.appendChild(document.createTextNode(text));
    };

    let deleteItem = function (e) {
        let item = e.target.parentElement;
        let list = item.parentElement;
        list.removeChild(item);
    };

    let addItemToList = function (items, text) {
        let item = createElmnt("li");
        let a = createElmnt("a");

        addTextToElement(item, text.value + " ");                
        addTextToElement(a, "[Delete]");
        //a.setAttribute("href", "javascript:;");
        a.setAttribute("href", "#");
        a.addEventListener("click", deleteItem);

        item.appendChild(a);
        items.appendChild(item);
    };

    let items = getElement("ul[id='items']");
    let text = getElement("input[type='text']");
    addItemToList(items, text);
}

