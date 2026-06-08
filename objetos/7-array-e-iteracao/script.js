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

const aulas = [10, 25, 30];

const tempoAulas = aulas.reduce((acumulador, item) => {
  console.log(acumulador, item);
  return acumulador + item;
});

console.log(tempoAulas);

//Verificando o maior item do array numeros
const numeros = [4, 8, 12, 25, 60, 37];
const maiorValor = numeros.reduce((anterior, atual) => anterior > atual ? anterior : atual, 0);
  // if (anterior > atual) {
  //   return anterior;
  // } else {
  //   return atual;
  // }
  
console.log(maiorValor);
