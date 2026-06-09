// // const perimetro = new Function("lado", "return lado * 4");

// function somar(n1, n2) {
//   return n1 + n2;
// }

// console.log(somar(3, 3));

// console.log(somar.length); // Mostra a quantidade de argumentos passados nessa função
// console.log(somar.name); // Mostra o nome da função, lol

// function darOi(nome, idade) {
//   console.log(`Oi para você ${nome} ${idade}`);
// }

// darOi.call({}, "Francisco", 30);

// //

// window.marca = "VW";
// window.ano = 2017;

// function descricaoCarro(velocidade) {
//   console.log(this);
//   console.log(this.marca + " " + this.ano + " " + velocidade);
// }

// descricaoCarro.call({ marca: "Honda", ano: 2019 }, 100);

// const carros = ["Ford", "Fiat", "VW"];
// const frutas = ["Banana", "Pêra", "Uva"];

// carros.forEach.call(frutas, (item) => {
//   console.log(item);
// });

//

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function (classe) {
//   console.log(this);
//   this.element.classList.add(classe);
// };

// const li = {
//   element: document.querySelector("li"),
// };

// Dom.prototype.ativo.call(li, "ativar");

// const ul = new Dom("ul");

// ul.ativo("ativar");
// ul.ativo.call(li, "ativar");

// console.log(ul);

//

const frutas = ["Uva", "Maçã", "Banana"];

Array.prototype.pop.call(frutas);
frutas.pop();
// console.log(frutas);

const li = document.querySelectorAll("li");

const filtro = Array.prototype.filter.call(li, (item) => {
  return item.classList.contains("ativo");
});

console.log(filtro);
console.log(li);
