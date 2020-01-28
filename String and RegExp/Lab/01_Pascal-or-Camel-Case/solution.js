function solve() {
  let getElement = function(element) {
    return document.querySelector(element);
  };

  let turnFirstCharToUpper = function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  let types = {
    "Pascal Case": function(str) {
      return str.map((x) => turnFirstCharToUpper(x)).join("");
    },
    "Camel Case": function(str) {
      return `${str[0]}${str
        .slice(1, str.length + 1)
        .map((x) => turnFirstCharToUpper(x))
        .join("")}`;
    }
  };

  let transformText = function(text, namingConvention, result) {
    if (text.value.length > 0 && namingConvention.value.length > 0) {
      let output = "";
      let words = text.value.split(" ").map((x) => x.toLowerCase());

      if (typeof types[namingConvention.value] === "undefined") {
        output = "Error!";
      } else {
        output = types[namingConvention.value](words);
      }

      result.innerHTML = output;
    }
  };

  let text = getElement("#text");
  let namingConvention = getElement("#naming-convention");
  let result = getElement("#result");

  transformText(text, namingConvention, result);
}
