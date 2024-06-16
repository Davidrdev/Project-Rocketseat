function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a tag img
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // Se tiver light mode, add a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de David Ribeiro sorrindo, usando camisa verde escura, colar e com fundo branco e roxo"
      //Se tiver sem internet mostrar está mensagem na foto de perfil
    )
  } else {
    // Se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
