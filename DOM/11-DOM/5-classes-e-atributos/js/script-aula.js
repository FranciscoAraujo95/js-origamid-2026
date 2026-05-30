const menu = document.querySelector(".menu");

menu.className; // string
menu.classList; // lista de classes
menu.classList.add("ativo");
menu.classList.add("ativo", "mobile"); // duas classes
menu.classList.remove("ativo");
menu.classList.toggle("ativo"); // adiciona/remove a classe
menu.classList.contains("ativo"); // true ou false
menu.classList.replace("ativo", "inativo");

const animais = document.querySelector(".animais");
console.log(animais.attributes);

const img = document.querySelector("img");
const srcImg = img.getAttribute("src");

img.setAttribute("alt", "Raposa");

const possuiAlt = img.hasAttribute("alt");
console.log(possuiAlt);
img.removeAttribute("alt");
console.log(img.attributes);

const carro = {
  portas: 4,
  andar(km) {
    console.log(`Andou ${km} kilometros`);
  },
};

console.log(carro.andar(150));
