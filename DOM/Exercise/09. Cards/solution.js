function solve() {
   let cards = [...document.querySelectorAll("#player1Div img, #player2Div img")];

   let findGreaterCard = function (card) {
      console.log(card);
      let result = document.querySelector("#result");
      if (card.parentElement.id === "player1Div") {
         result.firstElementChild.textContent = card.name;
      } else {
         result.lastElementChild.textContent = card.name;
      }

      card.src = "images/whiteCard.jpg";

      let topCardValue = result.firstElementChild.textContent;
      let bottomCardValue = result.lastElementChild.textContent;
      let winnerValue = "";

      if (topCardValue !== "" && bottomCardValue !== "") {
         winnerValue = Math.max(Number(topCardValue), Number(bottomCardValue));
         console.log(winnerValue);

         let winnerCard;
         let looserCard;

         if (winnerValue == topCardValue) {
            winnerCard = document.querySelector(`#player1Div img[name="${topCardValue}"]`);
            looserCard = document.querySelector(`#player2Div img[name="${bottomCardValue}"]`);
         } else {
            winnerCard = document.querySelector(`#player2Div img[name="${bottomCardValue}"]`);
            looserCard = document.querySelector(`#player1Div img[name="${topCardValue}"]`);
         }

         winnerCard.style.border = "2px solid green";
         looserCard.style.border = "2px solid red";

         let history = document.querySelector("#history");
         
         history.textContent += `[${topCardValue} vs ${bottomCardValue}] `;

         result.firstElementChild.textContent = "";
         result.lastElementChild.textContent = "";         
      }
   };

   console.log(cards);
   cards.map(x => x.addEventListener("click", findGreaterCard.bind(null, x)));
}