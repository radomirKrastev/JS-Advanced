function addItem() {
    let fields = [...document.querySelectorAll("#newItemText, #newItemValue")];
    let option = document.createElement("option");
    let menu = document.querySelector("#menu");

    option.textContent = fields[0].value;
    option.value = fields[1].value;
    menu.appendChild(option);

    fields[0].value = "";
    fields[1].value = "";
}