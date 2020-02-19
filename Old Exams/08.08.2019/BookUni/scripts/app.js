function solve() {
  const bookElem = document.querySelector("form input[type='text']");
  const yearElem = document.querySelector("form input[type='number']");
  const priceElem = document.querySelectorAll("form input[type='number']")[1];
  const oldBooks = document.querySelectorAll("#outputs .bookShelf")[0];
  const newBooks = document.querySelectorAll("#outputs .bookShelf")[1];
  const totalSumH = document.querySelectorAll("h1")[1];
  const bookPrice = {};
  const oldBookDiscount = 0.85;
  let totalProfit = 0;

  function validateBook(title, year, price) {
    return Number.isInteger(year) && year > 0 && price > 0 && title.length > 0;
  }

  function createElement(tag, text) {
    let element = document.createElement(tag);
    element.textContent = text;
    return element;
  }

  function removeBook(e) {
    let book = e.target.parentElement;
    totalProfit += Number(bookPrice[book.getAttribute("id")].toFixed(2));
    book.parentElement.removeChild(book);
    totalSumH.innerHTML = `Total Store Profit: ${totalProfit} BGN`;
  }

  function moveBook(e) {
    let book = e.target.parentElement;
    book.parentElement.removeChild(book);
    let title = book.getAttribute("id");
    bookPrice[title] *= oldBookDiscount;

    let buttons = book.querySelectorAll("button");
    book.removeChild(buttons[1]);
    buttons[0].textContent = `Buy it only for ${bookPrice[title].toFixed(
      2
    )} BGN`;

    oldBooks.appendChild(book);
  }

  function addBook() {
    let title = bookElem.value;
    let year = Number(yearElem.value);
    let price = Number(priceElem.value);

    if (validateBook(title, year, price)) {
      let book = createElement("div");
      book.classList.add("book");
      book.setAttribute("id", `${title}`);

      if (year < 2000) {
        price *= oldBookDiscount;
        oldBooks.appendChild(book);
      }

      bookPrice[title] = price;
      let p = createElement("p", `${title} [${year}]`);
      let buy = createElement(
        "button",
        `Buy it only for ${price.toFixed(2)} BGN`
      );
      buy.addEventListener("click", removeBook);

      book.appendChild(p);
      book.appendChild(buy);

      if (year >= 2000) {
        let move = createElement("button", `Move to old section`);
        move.addEventListener("click", moveBook);
        book.appendChild(move);
        newBooks.appendChild(book);
      }
    }
  }

  const addBookButton = document.querySelector("body form button");
  addBookButton.type = "button";
  addBookButton.addEventListener("click", addBook);
}
