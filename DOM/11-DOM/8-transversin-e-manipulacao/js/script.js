// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const footer = document.querySelector(".copy");

const cloneMenu = menu.cloneNode(true);

footer.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const dl = document.querySelector("dl");
const primeiraDT = dl.querySelector("dt");
console.log(primeiraDT.innerHTML);

// Selecione o DD referente ao primeiro DT
const primeiroDD = primeiraDT.nextElementSibling;
console.log(primeiroDD.innerHTML);

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector(".animais");
faq.innerHTML = animais.innerHTML;
