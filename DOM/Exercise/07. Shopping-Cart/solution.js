function solve() {
   // let totalPrice = 0;
   // let set = new Set();

    function addProductsToCart(x) {
      console.log(x);
      console.log(x.target);
      //let product = x.target.parentElement.parentElement;
      //let name = product.querySelector("product-title").textContent;
      //let price = Number(product.querySelector("product-line-price").textContent);

   //    console.log(name);
   //    console.log(price);

   //    set.add(name);
   //    totalPrice += price;
   //    console.log(name);
   //    console.log(price);

   //    let messageArea = product.parentElement;
   //    messageArea.textContent = `Added ${name} for ${money} to the cart.\n`;
   //    console.log("-----------------------");
   }

   // console.log(document.querySelectorAll(".add-product")[0]);
   // console.log(document.querySelectorAll(".add-product")[0].closest(".product-line-price"));
   // console.log([...document.querySelectorAll(".add-product")]);

   let buttons = [...document.querySelectorAll(".add-product")].forEach(x => x.addEventListener("click", addProductsToCart(x)));
   //buttons.forEach(x => x.addEventListener("click", addProductsToCart(x)));


}