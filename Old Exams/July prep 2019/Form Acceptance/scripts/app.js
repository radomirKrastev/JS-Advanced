function acceptance() {
  function getElement(elem) {
    return document.querySelector(elem);
  }

  function createElement(elem) {
    return document.createElement(elem);
  }

  function checkStringsAreCorrect(company, product) {
    return (
      typeof company === "string" &&
      typeof product === "string" &&
      company.length > 0 &&
      product.length > 0
    );
  }

  function checkNumbersAreCorrect(quantity, scrape) {
    let argumentsAreNumbers =
      typeof quantity === "number" && typeof scrape === "number";
    let numbersAreValid = quantity > 0 && scrape >= 0 && quantity > scrape;
    return argumentsAreNumbers && numbersAreValid;
  }

  function resetValues(data) {
    console.log(data);
    data.forEach((x) => (x.value = ""));
  }

  function removeProduct(e) {
    let div = e.target.parentElement;
    div.parentElement.removeChild(div);
  }

  function addProduct() {
    let company = getElement("input[name='shippingCompany']");
    let product = getElement("input[name='productName']");
    let quantity = getElement("input[name='productQuantity']");
    let scrape = getElement("input[name='productScrape']");

    if (
      checkStringsAreCorrect(company.value, product.value) &&
      checkNumbersAreCorrect(Number(quantity.value), Number(scrape.value))
    ) {
      let warehouse = getElement("#warehouse");
      let div = createElement("div");
      let p = createElement("p");
      let button = createElement("button");
      button.type = "button";
      button.innerHTML = "Out of stock";
      button.addEventListener("click", removeProduct);

      p.innerHTML = `[${company.value}] ${product.value} - ${quantity.value -
        scrape.value} pieces`;

      div.appendChild(p);
      div.appendChild(button);
      warehouse.appendChild(div);
    }

    let arr = [company, product, quantity, scrape];
    resetValues(arr);
  }

  let button = getElement("#acceptance");
  button.addEventListener("click", addProduct);
}
