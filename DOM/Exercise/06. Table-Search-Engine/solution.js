function solve() {
   let button = document.querySelector("td button");

   function isAMatch (row, input) {
      for(let studentData of [...row.querySelectorAll("td")])
      {
         if (studentData.textContent.includes(input)){
            return true;
         }
      }

      return false;
   }

   function clearClassList (classList) {
      while (classList.length > 0) {
         console.log("?");
         classList.remove(classList.item(0));
      }
   }

   if (button !== null) {
      const search = () => {
         let input = document.querySelector("td input");
         let rows = [...document.querySelectorAll("tbody tr")]; 
         rows.map(x => clearClassList(x.classList));
   
         if (input !== null) {
            rows
            .filter(x => isAMatch(x, input.value))
            .map(x => x.classList.add("select"));
         }
   
         input.value = ""; 
      };   
      
      button.addEventListener("click", search);
   }
}