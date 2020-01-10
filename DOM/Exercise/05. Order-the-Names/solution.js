function solve() {
    let button = document.querySelector("#exercise button");
    
    if(button !== null) {
        const addName = () => {
            let nameTable = [...document.querySelectorAll("ol li")];
            
            if (nameTable !== null) {
                let name = document.querySelector("#exercise input");
                name.value = name.value.charAt(0).toUpperCase() + name.value.substring(1).toLowerCase();
                let firstLetterASCII = name.value[0].charCodeAt(0);
                let index = firstLetterASCII - 65;
    
                if (index >= 0) {
                    nameTable[index].textContent = nameTable[index].textContent.length === 0 
                    ? nameTable[index].textContent = name.value
                    : nameTable[index].textContent += `, ${name.value}`;
                }
            }
        };

        button.addEventListener("click", addName);
    }
}