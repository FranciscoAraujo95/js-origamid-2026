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

// const frutas = ["Uva", "Maçã", "Banana"];

// Array.prototype.pop.call(frutas); //Mesma coisa
// frutas.pop(); //Mesma coisa
// // console.log(frutas);

// const li = document.querySelectorAll("li");

// const filtro = Array.prototype.filter.bind(li, (item) => {
//   return item.classList.contains("ativo");
// });

// console.log(filtro());
// console.log(li);

//

// const numeros = [33, 3123, 3214, 1233, 2134, 4566, 67];

// //Apply recebe uma array como argumento
// const numeroMaior = Math.max.apply(null, numeros);
// console.log(numeroMaior);

//

// const $ = document.querySelectorAll.bind(document);

//

// const carro = {
//   marca: "Ford",
//   ano: 2018,
//   acelerar: function (aceleracao, tempo) {
//     return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
//   },
// };

// const honda = {
//   marca: "Honda",
// };

// const acelerarHonda = carro.acelerar.bind(honda);
// console.log(acelerarHonda(300, 25));

// console.log(carro.acelerar(100, 20));

//

function imc(altura, peso) {
  return peso / altura ** 2;
}
console.log(imc(1.7, 70).toFixed(2));

const imc180 = imc.bind(null, 1.8);
console.log(imc180(85).toFixed(2));
