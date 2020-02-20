function solution() {
  const newGift = document.querySelector("input[type='text']");
  const giftList = document.querySelectorAll("ul")[0];
  const sentGifts = document.querySelectorAll("ul")[1];
  const discardedGift = document.querySelectorAll("ul")[2];
  const addNewButton = newGift.nextElementSibling;

  function createElement(tag, text, id) {
    let element = document.createElement(tag);
    if (text) {
      element.textContent = text;
    }

    if (id) {
      element.id = id;
    }
    return element;
  }

  function sendGift(e) {
    let gift = e.target.parentElement;
    gift.removeChild(gift.querySelector("#sendButton"));
    gift.removeChild(gift.querySelector("#discardButton"));
    sentGifts.appendChild(gift);
  }

  function discardGift(e) {
    let gift = e.target.parentElement;
    gift.removeChild(gift.querySelector("#sendButton"));
    gift.removeChild(gift.querySelector("#discardButton"));
    discardedGift.appendChild(gift);
  }

  function addGift() {
    let li = createElement("li", newGift.value);
    newGift.value = "";
    li.classList.add("gift");
    let sendButton = createElement("button", "Send", "sendButton");
    sendButton.addEventListener("click", sendGift);
    let discardButton = createElement("button", "Discard", "discardButton");
    discardButton.addEventListener("click", discardGift);

    li.appendChild(sendButton);
    li.appendChild(discardButton);
    giftList.appendChild(li);

    Array.from(giftList.getElementsByTagName("LI"))
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .forEach((li) => giftList.appendChild(li));
  }

  addNewButton.addEventListener("click", addGift);
}
