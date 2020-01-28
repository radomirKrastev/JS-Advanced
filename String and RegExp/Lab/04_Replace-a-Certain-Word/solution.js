function solve() {
  let word = document.querySelector("#word").value;
  let text = document.querySelector("#text").value;
  let result = document.querySelector("#result");

  let strings = text.match(/(?<=")[^",]+(?=")/gi);
  let wordToBeReplaced = strings[0].split(" ")[2];

  let replacePattern = new RegExp(wordToBeReplaced, "gi");

  for (let line of strings) {
    let p = document.createElement("p");
    p.textContent = line.replace(replacePattern, word);
    result.appendChild(p);
  }
}
