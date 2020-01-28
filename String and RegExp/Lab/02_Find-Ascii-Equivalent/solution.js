function solve() {
  let text = document.querySelector("#text");
  let result = document.querySelector("#result");

  let appendToResult = function(text) {
    let p = document.createElement("p");
    p.textContent = text;
    result.appendChild(p);
  };

  let getChar = function(x) {
    return String.fromCharCode(Number(x));
  };

  let getCode = function(symbol) {
    return symbol.charCodeAt(0);
  };

  let getOutputObj = function() {
    let parts = text.value.split(" ");
    return (obj = {
      word: parts
        .filter((x) => !isNaN(x))
        .map((x) => getChar(x))
        .join(""),

      asciiCodes: parts
        .filter((x) => isNaN(x))
        .map((str) =>
          str
            .split("")
            .map((x) => getCode(x))
            .join(" ")
        )
    });
  };

  let output = getOutputObj();

  for (let line of output.asciiCodes) {
    appendToResult(`${line}\n`);
  }

  appendToResult(`${output.word}`);
}
