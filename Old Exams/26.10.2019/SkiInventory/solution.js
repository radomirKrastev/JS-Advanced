function solve() {
  const addProductButton = document.querySelector("#add-new button");
  const filterButton = document.querySelector("#products .filter button");
  const buyButton = document.querySelector("#myProducts button");
  const productToAdd = document.querySelector("#add-new input[placeholder='Name']");
  const quantityToAdd = document.querySelector("#add-new input[placeholder='Quantity']");
  const priceToAdd = document.querySelector("#add-new input[placeholder='Price']");
  const availableProducts = document.querySelector("#products ul");
  const myProducts = document.querySelector("#myProducts ul");
  const totalPrice = document.querySelectorAll("h1")[1];
  let product = {};
  let productsCost = 0;

  function createElement(tag, text) {
    let element = document.createElement(tag);
    if (text) {
      element.textContent = text;
    }

    return element;
  }

  function filter() {
    let filterCriterion = document.querySelector("#filter").value;
    [...availableProducts.children].map((x) => {
      x.style.display = x.id.toLowerCase().includes(filterCriterion.toLowerCase())
        ? "block"
        : "none";
    });
  }

  function buyProducts() {
    totalPrice.textContent = `Total Price: 0.00`;
    productsCost = 0;
    while (myProducts.firstChild) {
      myProducts.removeChild(myProducts.lastChild);
    }
  }

  function addToMyProducts(e) {
    let price = e.target.parentElement.children[0].textContent;
    productsCost += Number(price);
    totalPrice.textContent = `Total Price: ${productsCost.toFixed(2)}`;

    let currentProduct = e.target.parentElement.parentElement;
    let name = currentProduct.id;
    let quantity = --product[name];

    let li = createElement("li", name);
    li.appendChild(createElement("strong", price));
    myProducts.appendChild(li);

    currentProduct.querySelector("strong").textContent = `Available: ${quantity}`;

    if (quantity === 0) {
      availableProducts.removeChild(currentProduct);
    }
  }

  function addToAvailable() {
    let name = productToAdd.value;
    let quantity = Number(quantityToAdd.value);
    let price = Number(priceToAdd.value);

    if (name.length > 0 && quantity > 0 && price >= 0) {
      let li = createElement("li");
      li.setAttribute("id", name);
      product[li.id] = quantity;

      li.appendChild(createElement("span", name));
      li.appendChild(createElement("strong", `Available: ${quantity}`));

      let div = createElement("div");
      div.appendChild(createElement("strong", `${price.toFixed(2)}`));

      let button = createElement("button", "Add to Client's List");
      button.addEventListener("click", addToMyProducts);
      div.appendChild(button);
      li.appendChild(div);
      availableProducts.appendChild(li);
    }
  }

  filterButton.addEventListener("click", filter);
  buyButton.addEventListener("click", buyProducts);
  addProductButton.addEventListener("click", addToAvailable);
  addProductButton.type = "button";
}
