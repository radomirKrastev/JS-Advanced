function growingWord() {
  let colorsMap = ["blue", "green", "red"];

  let growingWord = document
  .getElementById("exercise")
  .getElementsByTagName("p")[0];

  if (growingWord !== null) {    
    let fontSize = parseFloat(growingWord.style.fontSize.slice(0, -2) * 2);
    growingWord.style.fontSize = (fontSize === 0 ? 2 : fontSize) + "px";
    console.log(growingWord.style.fontSize);

    let color = growingWord.style.color;
    let nextColor = colorsMap.indexOf(color) + 1;

    growingWord.style.color = nextColor > (colorsMap.length - 1) ? colorsMap[0] : colorsMap[nextColor];
  }
}