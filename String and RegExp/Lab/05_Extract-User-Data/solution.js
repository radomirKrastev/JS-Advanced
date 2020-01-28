function solve() {
  let arr = document.querySelector("#arr").value;
  let personsData = arr.match(/(?<=")[^",]+(?=")/gi);
  let dataPattern = /^([A-Z]{1}[a-z]* [A-Z]{1}[a-z]*) (\+359-[0-9]-[0-9]{3}-[0-9]{3}|\+359 [0-9] [0-9]{3} [0-9]{3}) ([a-z0-9]+@[a-z]+.[a-z]{2,3})$/gm;
  let groups = { name: 1, phone: 2, email: 3 };
  let result = document.querySelector("#result");

  let createAndFillElement = function(element, text) {
    let elem = document.createElement(element);
    elem.textContent = text;
    return elem;
  };

  let extractData = function(data) {
    if (data !== null) {
      result.appendChild(
        createAndFillElement("p", `Name: ${data[groups.name]}`)
      );
      result.appendChild(
        createAndFillElement("p", `Phone Number: ${data[groups.phone]}`)
      );
      result.appendChild(
        createAndFillElement("p", `Email: ${data[groups.email]}`)
      );
    } else {
      result.appendChild(createAndFillElement("p", "Invalid data"));
    }

    result.appendChild(createAndFillElement("p", "- - -"));
  };

  for (let person of personsData) {
    let data = dataPattern.exec(person);
    extractData(data);
  }
}
