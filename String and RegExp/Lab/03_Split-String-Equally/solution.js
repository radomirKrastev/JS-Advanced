function solve() {
  let text = document.querySelector("#text").value;
  let number = parseInt(document.querySelector("#number").value);
  let result = document.querySelector("#result");
  let pattern = new RegExp(`.{1,${number}}`, "g");

  let output = text.match(pattern);

  while (output[output.length - 1].length < number) {
    output[output.length - 1] += text.slice(
      0,
      number - output[output.length - 1].length
    );
  }

  result.innerHTML = output.join(" ");
}
