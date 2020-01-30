function solve() {
  let getElement = function(element) {
    return document.querySelector(element);
  };

  let replaceSymbols = function(word) {
    word = word.replace(/!/g, 1);
    word = word.replace(/%/g, 2);
    word = word.replace(/#/g, 3);
    word = word.replace(/\$/g, 4);
    return word.toLowerCase();
  };

  let inputArr = getElement("#array").value;
  let arr = JSON.parse(inputArr);
  let key = arr.shift();

  let messagePattern = new RegExp(
    `(?<=^| )${key}[\\s]+([!%$#A-Z]{8,})(?= |\.|,|$)`,
    "gim"
  );

  let transformText = function(result) {
    arr.forEach((element) => {
      while ((word = messagePattern.exec(element))) {
        if (word[1].toUpperCase() === word[1]) {
          element = element.replace(word[1], replaceSymbols(word[1]));
        }
      }

      const p = document.createElement("p");
      p.innerHTML = element;
      result.appendChild(p);
    });
  };

  let result = getElement("#result");
  transformText(result);
}
