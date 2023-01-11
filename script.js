function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  const alt = document.querySelector("#profile img")
  //substituir a img
  if (html.classList.contains("light")) {
    //se tiver o light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    alt.setAttribute(
      "alt",
      "Foto de Eduardo Santos, ele está com óculos com moral e de camisa azul."
    )
  } else {
    // se tiver sem light mode, remover a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    alt.setAttribute(
      "alt",
      "Foto de Eduardo Santos cara fechada com óculos e camisa branca."
    )
  }
}
