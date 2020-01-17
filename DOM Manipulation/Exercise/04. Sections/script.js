function create(words) {
   let handlerShowText = function(paragraph) {
      console.log(paragraph);
      paragraph.style.display = 'block';
   };

   let attachElements = function (text) {
      let div = document.createElement("div");
      let paragraph = document.createElement("p");

      paragraph.innerHTML = text;
      paragraph.style.display = 'none';
      div.appendChild(paragraph);
      div.addEventListener("click", handlerShowText.bind(null, paragraph));
      
      return content.appendChild(div);
   };

   let content = document.querySelector("#content");

   for (let text of words) {
      attachElements(text);
   }
}