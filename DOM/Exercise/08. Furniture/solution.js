function solve() {
  let generateButton = document.querySelectorAll("#exercise button")[0];
  let buyButton = document.querySelectorAll("#exercise button")[1];

  let calculatePrice = function () {
    let checkBoxes = [...document.querySelectorAll("input")].filter(x => x.checked);

    let markedItemsInfo = checkBoxes.reduce(function (result, x) {
      let rows = [...x.parentElement.parentElement.querySelectorAll("td")];
      console.log(rows);
      console.log(rows[1]);
      result[0].push(rows[1].querySelector("p").textContent);
      result[1] += Number(rows[2].querySelector("p").textContent);
      result[2] += Number(rows[3].querySelector("p").textContent);
      return result;
    }, [[], 0, 0]);

    let output = document.querySelectorAll("#exercise textarea")[1];
    output.textContent = `Bought furniture: ${markedItemsInfo[0].join(", ")}`;
    output.textContent += `\r\nTotal price: ${markedItemsInfo[1].toFixed(2)}`;
    output.textContent +=`\r\nAverage decoration factor: ${markedItemsInfo[2] / markedItemsInfo[0].length}`;
  };

  let addFurniture = function () {
    let addCell = function (x, row) {
      let cell = row.insertCell(-1);
      cell.appendChild(x);
    };

    let input = document.querySelectorAll("#exercise textarea")[0];

    if (input !== null) {
      let objects = JSON.parse(input.value);
      let table = document.querySelector(".table tbody");

      for (let object of objects) {
        let newRow = table.insertRow(-1);
        let image = document.createElement("img");
        let name = document.createElement("p");
        let price = document.createElement("p");
        let decFactor = document.createElement("p");
        let checkbox = document.createElement("input");

        image.src = object.img;
        name.textContent = object.name;
        price.textContent = object.price;
        decFactor.textContent = object.decFactor;
        checkbox.type = "checkbox";

        let tableElements = [image, name, price, decFactor, checkbox];

        tableElements.map(x => addCell(x, newRow));
      }
    }
  };

  generateButton.addEventListener("click", addFurniture);
  buyButton.addEventListener("click", calculatePrice);
}