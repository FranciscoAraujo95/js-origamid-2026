// const carros = ["Ford", "Fiat", "Honda"];

// carros.forEach((item, index, array) => {
//   console.log(item.toUpperCase(), index, array);
// });

// console.log(carros);

// const li = document.querySelectorAll("li");
// li.forEach((item) => {
//   item.classList.add("ativo");
// });

// const carros = ["Ford", "Fiat", "Honda"];
// // Map serve para você retornar os valores que você tinha antes, só que modificados
// const novaArray = carros.map((item, index, array) => {
//   return item.toUpperCase();
// });

// console.log(novaArray); // Maiúsculas
// console.log(carros);

// const numeros = [2, 4, 5, 6, 78];
// const numerosX2 = numeros.map((n) => n * 2);

// console.log(numerosX2);

// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const tempoAulas = aulas.map((aula) => aula.min);
// const nomeAulas = aulas.map((aula) => aula.nome);

// Formas alternativas
// function nomeAulas(aula) {
//   return aula.nome;
// }

// const arrayNomeAulas = aulas.map(function (aula) {
//   return aula.nome;
// });

// console.log(nomeAulas);
// console.log(tempoAulas);

// const aulas = [10, 25, 30];

// const tempoAulas = aulas.reduce((acumulador, item) => {
//   console.log(acumulador, item);
//   return acumulador + item;
// });

// console.log(tempoAulas);

// //Verificando o maior item do array numeros
// const numeros = [4, 8, 12, 25, 60, 37];
// const maiorValor = numeros.reduce(
//   (anterior, atual) => (anterior > atual ? anterior : atual),
//   0,
// );
// // if (anterior > atual) {
// //   return anterior;
// // } else {
// //   return atual;
// // }

// console.log(maiorValor);

//

// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const listaAulas = aulas.reduce((acumulador, aula, index) => {
//   acumulador[index] = aula.nome;
//   return acumulador;
// }, {});

// console.log(listaAulas);

const frutas = ["Banana", "Abacaxi", "Pera", "Uva"];

//Verifica se algum dos itens do array é igual ao item passado, nesse caso "Uva"
const temUva = frutas.some((item) => {
  return item === "Uva";
});

//Verifica se algum dos itens do array vai dar false
const every = frutas.every((item) => {
  console.log(item);
  return item;
});

console.log(every);

const numeros = [6, 43, 22, 88, 101, 29];

const maiorQue3 = numeros.every((numero) => {
  return numero > 3;
});
console.log(maiorQue3);

//Procura um valor maior que 45 e retorna esse valor
const maiorQueX = numeros.find((x) => x > 45);
console.log(maiorQueX);

//Procura um valor passado e retorna o index dele
const buscaPera = frutas.findIndex((fruta) => fruta === "Pera");
console.log(`Index Pera: ${buscaPera}`);

const frutas1 = ["Banana", undefined, null, "", "Abacaxi", 0, "Pera", "Uva"];

//Retirna uma array com os valores que durante a iteração, retornaram um valor truthy
const arrayFrutas = frutas1.filter((item) => item);

console.log(arrayFrutas);

const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const maiorQue15 = aulas.filter((aula) => aula.min >= 15);
console.log(maiorQue15);
