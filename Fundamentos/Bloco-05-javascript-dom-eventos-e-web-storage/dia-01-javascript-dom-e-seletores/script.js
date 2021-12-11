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
  function alteraCor2(elemento, cor){
    let title2 = document.querySelectorAll(elemento);
    for (let i=0; i< title2.length; i +=1){
      title2[i].style.backgroundColor = "black";
    }
  }
  alteraCor2(".no-emergency-tasks h3");
  let footer = document.getElementById("footer-container");
  footer.style.backgroundColor = "darkgreen"


