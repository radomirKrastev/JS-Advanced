function solve() {
  let input = document.getElementById("input");
  let allSentences = input.innerHTML.split(".").filter(x => x !== "");

  let output = document.getElementById("output");

  if (output !== null && input !== null) {
    for (let s = 0; s < allSentences.length; s += 3){    
      let paragraph = document.createElement("p");
      paragraph.innerHTML = allSentences.slice(s, s + 3).join(". ") + ".";
      output.appendChild(paragraph);
    }
  }  
}