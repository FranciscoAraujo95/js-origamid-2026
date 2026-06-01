const animaisLista = document.querySelector(".animais-lista");

// h1.innerHTML = "<p>Novo Título</p>";

// console.log(h1.innerHTML);
// console.log(h1.outerHTML);
// console.log(animaisLista.innerHTML);

// Transversing

const animais = document.querySelector(".animais");
const contato = document.querySelector(".contato");
const titulo = contato.querySelector(".titulo");
const mapa = document.querySelector(".mapa");

// animais.appendChild(titulo); //Move lista para o final da section animais
// contato.insertBefore(animais, mapa);
// contato.removeChild(titulo);
// contato.replaceChild(animaisLista, titulo);

const novoH1 = document.createElement("h1");
novoH1.innerText = "Novo título";
novoH1.classList.add("titulo");

mapa.appendChild(novoH1);

const h1 = document.querySelector("h1");
const faq = document.querySelector(".faq");

const h2Clone = h1.cloneNode(true);

h2Clone.classList.add("azul");
faq.appendChild(h2Clone);
