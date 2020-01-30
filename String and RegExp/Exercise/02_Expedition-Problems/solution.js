function solve() {
  let cryptedText = document.querySelector("#text").value;
  let keyWord = document.querySelector("#string").value;
  let result = document.querySelector("#result");

  let createElement = function(elmt, text) {
    let element = document.createElement(elmt);
    element.textContent = text;
    return element;
  };

  let fillResult = function(result, text) {
    result.appendChild(createElement("p", text));
  };

  let getCoordinates = function(text) {
    const pattern = /(north|east)[\s\S]*?([0-9]{2})[^,]*?,[^,]*?([0-9]{6})/gim;
    let north;
    let east;

    while ((valid = pattern.exec(text)) !== null) {
      const northOrEast = valid[1];

      if (northOrEast.toLowerCase() === "north") {
        north = `${valid[2]}.${valid[3]} N`;
      } else if (northOrEast.toLowerCase() === "east") {
        east = `${valid[2]}.${valid[3]} E`;
      }
    }

    return [north, east];
  };

  let getMessage = function(key, text) {
    let pattern = new RegExp(`(?<=${key}).+(?=${key})`, "im");
    return pattern.exec(text)[0];
  };

  let output = [];
  let coordinates = getCoordinates(cryptedText);

  output.push(coordinates[0]);
  output.push(coordinates[1]);
  output.push(`Message: ${getMessage(keyWord, cryptedText)}`);

  output.forEach((x) => fillResult(result, x));
}
