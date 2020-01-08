function solve() {  
  const template = x => `visited ${x} times`;

  let links = {};

  let collectionOfLinks = document.getElementsByClassName("link-1");

  for (let i = 0; i < collectionOfLinks.length; i++) {
    let visits = Number(collectionOfLinks[i].children[1].textContent.trim().split(" ")[1]);
    links[collectionOfLinks[i].children[0].textContent.trim()] = visits;
    console.log(links);
  }

  document.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);
    if (e.target.nodeName === "A"){
      e.target.nextElementSibling.innerHTML = template(++links[e.target.textContent.trim()]);
    }    
  }); 
}