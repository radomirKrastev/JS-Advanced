function solve() {
   let totalPrice = {"price": Number(0)};
   let set = new Set();
   let addButtons = [...document.querySelectorAll(".add-product")];
   let checkout = document.querySelector(".checkout");     

   let addProductsToCart = function (e, totalPrice, set) {
      let product = e.parentElement.parentElement;
      let name = product.querySelector(".product-title").textContent;
      let price = Number(product.querySelector(".product-line-price").textContent);

      set.add(name);
      totalPrice.price += price;

      let messageArea = product.parentElement.querySelector("textarea");
      messageArea.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
   };

   let calculateTotalPrice = function (e, totalPrice, set, addButtons) {
      let messageArea = e.parentElement.querySelector("textarea");
      messageArea.textContent += `You bought ${[...set].join(", ")} for ${totalPrice.price.toFixed(2)}.`;

      e.disabled = true;
      addButtons.map(x => x.disabled = true);
   };
   
   checkout.addEventListener("click", calculateTotalPrice.bind(null, checkout, totalPrice, set, addButtons));
   addButtons.forEach(x => x.addEventListener("click", addProductsToCart.bind(null, x, totalPrice, set)));    
 }