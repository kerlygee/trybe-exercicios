let cabeçalho = document.querySelector("#header-container");
cabeçalho.style.backgroundColor = "lightgreen";
let section = document.querySelectorAll("section");
section[0].style.backgroundColor = "pink";
section[1].style.backgroundColor = "orange";
function alteraCor(elemento, cor){
  let title = document.querySelectorAll(elemento);
  for ( let i = 0; i < title.length; i +=1){
    title[i].style.backgroundColor = "purple";
  }
  }
  alteraCor(".emergency-tasks h3","")


