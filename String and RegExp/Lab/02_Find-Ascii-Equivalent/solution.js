function solve() {
  let text = document.querySelector("#text");
  let result = document.querySelector("#result");

  let getChar = function(x) {
    return String.fromCharCode(Number(x));
  };

  let getCode = function(symbol) {
    return symbol.charCodeAt(0);
  };

  let parts = text.value.split(" ");

  let word = parts
    .filter((x) => !isNaN(x))
    .map((x) => getChar(x))
    .join("");

  let asciiCodes = parts
    .filter((x) => isNaN(x))
    .map((str) =>
      str
        .split("")
        .map((x) => getCode(x))
        .join(" ")
    )
    .join("\n");
}
