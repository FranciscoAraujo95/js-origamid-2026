// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll(".menu a");
console.log(itensMenu);
itensMenu.forEach((item) => {
  item.classList.add("ativo");
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => {
  item.classList.remove("ativo");
});
itensMenu[0].classList.add("ativo");

// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll("img");
imagens.forEach((imagem) => {
  console.log(imagem.hasAttribute("alt"));
});

// Modifique o href do link externo no menu
const linkExterno = document.querySelector("a[href^='https']");
linkExterno.setAttribute("href", "www.google.com");
console.log(linkExterno);
