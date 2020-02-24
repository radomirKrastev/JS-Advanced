function solve() {
  const author = document.querySelector("#creator");
  const title = document.querySelector("#title");
  const category = document.querySelector("#category");
  const content = document.querySelector("#content");
  const articles = document.querySelectorAll("section")[1];
  const archive = document.querySelector("ul");

  function createElement(tag, text, classV) {
    let elem = document.createElement(tag);
    if (text) {
      elem.textContent = text;
    }
    if (classV) {
      classV.forEach((x) => elem.classList.add(x));
    }

    return elem;
  }

  function archiveArticle(e) {
    let article = e.target.parentElement.parentElement;
    let title = article.firstChild.textContent;
    articles.removeChild(article);

    archive.appendChild(createElement("li", title));

    Array.from(archive.getElementsByTagName("LI"))
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .forEach((li) => archive.appendChild(li));
  }

  function removeArticle(e) {
    let article = e.target.parentElement.parentElement;
    articles.removeChild(article);
  }

  function createArticle() {
    let article = createElement("article");
    let header = createElement("h1", title.value);
    let categoryParagraph = createElement("p", "Category:");
    categoryParagraph.appendChild(createElement("strong", category.value));
    let authorParagraph = createElement("p", "Creator:");
    authorParagraph.appendChild(createElement("strong", author.value));
    let contentParagraph = createElement("p", content.value);
    article.appendChild(header);
    article.appendChild(categoryParagraph);
    article.appendChild(authorParagraph);
    article.appendChild(contentParagraph);

    let div = createElement("div");
    div.classList.add("buttons");

    let deleteButton = createElement("button", "Delete", ["btn", "delete"]);
    deleteButton.addEventListener("click", removeArticle);
    let archiveButton = createElement("button", "Archive", ["btn", "archive"]);
    archiveButton.addEventListener("click", archiveArticle);

    div.appendChild(deleteButton);
    div.appendChild(archiveButton);
    article.appendChild(div);
    articles.appendChild(article);
  }

  const createButton = document.querySelector(".btn.create");
  createButton.type = "button";
  createButton.addEventListener("click", createArticle);
}
