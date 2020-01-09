function solve() {
    let BinaryOprion = document.createElement("option");
    let HexadeicmalOprion = document.createElement("option");

    BinaryOprion.text = "binary";
    HexadeicmalOprion.text = "hexadeicmal";

    let menu = document.querySelector('#selectMenuTo');
    menu.appendChild(BinaryOprion);
    menu.appendChild(HexadeicmalOprion);

    const convert = () => {
        let selected = menu.options[menu.selectedIndex];
        let input = document.querySelector("#input");

        let convertedValue = selected.text === "binary" 
        ?  Number(input.value).toString(2) 
        : Number(input.value).toString(16);
        
        let result = document.querySelector("#result");
        result.value = convertedValue.toString().toUpperCase();
    };
    
    document.getElementsByTagName("button")[0].addEventListener("click", convert);
}