const animaisLista = document.querySelector(".animais-lista");
const height = animaisLista.clientHeight;
const animaisTopo = animaisLista.offsetTop;
// console.log(animaisTopo);

const primeiroH2 = document.querySelector("h2");
const h2Left = primeiroH2.offsetLeft;

const rect = primeiroH2.getBoundingClientRect();
// console.log(rect.top);

console.log(
  window.innerWidth,
  window.outerWidth,
  window.innerHeight,
  window.outerHeight,
  window.pageYOffset,
);

console.log(rect.top);
if (rect.top < 0) {
  console.log("passsooooouuu");
}

const small = window.matchMedia("(max-width: 600px)").matches;

if (small) {
  console.log("Usuário mobile");
} else {
  console.log("Usuário desktop");
}

console.log(small);
