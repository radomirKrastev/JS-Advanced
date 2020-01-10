function solve() {
  let rightAnswers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];
  let points = 0;
  let sections = [...document.getElementsByTagName("section")];

  const validateResult = (quizIndex) => {
    if (quizIndex.target.textContent === rightAnswers.shift()) {
      points++;
    }

    if (sections.length > 1) {
      sections.shift().style.display = "none";
      sections[0].style.display = "block";
    } else {
      sections.shift().style.display = "none";
      document.querySelector(".results-inner").parentNode.style.display = "block";

      document.getElementsByClassName('results-inner')[0].firstElementChild.textContent =
        points === 3 ? 'You are recognized as top JavaScript fan!' 
        : `You have ${points} right answers`;
    }
  }

  [...document.querySelectorAll('[data-quizIndex]')]
    .forEach(x => x.getElementsByTagName("p")[0]
      .addEventListener("click", validateResult));
}