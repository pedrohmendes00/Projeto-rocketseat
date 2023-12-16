/*function toggleMode() {
    const body = document.body;
    body.classList.toggle("light");
  }*/

/*function toggleMode() {
  const body = document.body;
  if (body.classList.contains("light")) {
    body.classList.remove("light");
  } else {
    body.classList.add("light");
  }
}*/

/*function toggleMode() {
  const body = document.body;
  body.classList.toggle("light");

// pegar a tag img
  const img = document.querySelector("#profile img");
  
//substituir a imagem
  if (body.classList.contains("light")) {
// se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./img/avatar-light.png");
  } else {
// se tiver sem light mode, adicionar a imagem normal
    img.setAttribute("src", "./img/avatar.png");
  }
}*/

function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

// pegar a tag img
  const img = document.querySelector("#profile img");

// substituir a imagem
  if (html.classList.contains("light")) {
// se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./img/avatar-light.png");
  } else {
// set tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./img/avatar.png");
  }
}
