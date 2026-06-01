// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImagem = document.querySelector("img");
const rectImagem = primeiraImagem.getBoundingClientRect();
console.log(rectImagem.top);

// Retorne a soma da largura de todas as imagens
function somarImagens() {
  const allImages = document.querySelectorAll("img");
  let soma = 0;
  allImages.forEach((img) => {
    soma += img.offsetWidth;
  });
  console.log(`A largura de todas as larguras é igual a ${soma}.`);
}

window.onload = function () {
  somarImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll(".menu a");
links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  // console.log(link, linkWidth);
  const linkHeight = link.offsetHeight;
  // console.log(link, linkHeight);
  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(`${link.innerHTML}, Possui acessibilidade`);
  } else {
    console.log(`${link.innerHTML}, Não possui boa acessibilidade`);
  }
});

// const mobile = window.matchMedia("(max-width: 800px)").matches;
// if (mobile) {
//   const links = document.querySelectorAll(".menu a");
//   links.forEach((link) => {
//     link.style.padding = "15px 10px";
//   });
// }

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const larguraTela = window.innerWidth;
const menuMobile = window.matchMedia("(max-width: 720px)").matches;
if (menuMobile) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
  console.log(menu.classList);
}

console.log(larguraTela);
