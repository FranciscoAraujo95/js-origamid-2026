// const carros = new Array("Ford", "Fiat", "Honda");
// carros[2] = "Ferrari";
// carros[3] = "Kia";
// carros[20] = "Parati";

// console.log(carros);
// console.log(carros.length);

// const li = document.querySelectorAll(".lista-1 li");

// const arrayLi = Array.from(li);

// const obj = {
//   0: "Francisco",
//   1: "Araujo",
//   2: "teste",
//   length: 3,
// };

// const objArray = Array.from(obj);
// console.log(objArray);
// console.log(li);
// console.log(arrayLi);

// //

// console.log(Array.isArray(arrayLi));

// //

// console.log(Array.of(10));
// console.log(Array.of(1, 2, 3, 4));
// console.log(new Array(5));
// console.log(Array(5));
// console.log(Array(1, 2, 3, 4));

// // Lenght

// const frutas = ["Banana", "Pêra", ["Uva Roxa", "Uva Verde"]];
// console.log(frutas[0].length);
// console.log(frutas[2][1]); // "Uva verde"

// // Métodos Modificadores
// const instrumentos = ["Guitarra", "Baixo", "Violão"];
// const idades = [31, 21, 33, 43, 1, 12, 8];

// instrumentos.sort(); // Organiza em ordem alfabética
// idades.sort(); // Não organiza de forma crescente

// console.log(instrumentos);
// console.log(idades);

//
const carros = ["Ford", "Fiat", "Kia"];

carros.unshift("Ferrari", "Masserati");
const novaArray = carros.push("Mazda", "Toyota"); //Retorna o total de itens da Array, não uma nova array em si
// console.log(novaArray);
// console.log(carros);

//

// console.log(carros.pop()); // Remove o ultimo item e o retorna
// console.log(carros);
// console.log(carros.shift()); // Remove o primeiro item e o retorna
// console.log(carros);

// console.log(carros.reverse()); //Retorna a array ao contrário

//

// console.log(carros);
// console.log(carros.splice(2, 1, "Fusca"));
// console.log(carros);

// console.log(["Item1", "Item2", "Item3", "Item4", "Item5"].copyWithin(2, 0, 2));
// console.log(["Item1", "Item2", "Item3", "Item4"].fill("Banana", 0, 2));

// Métodos de acesso (Não modificam a array)

const transporte1 = ["Barco", "Avião"];
const transporte2 = ["Carro", "Moto"];
const transportes = transporte1.concat(transporte2);

// console.log(transportes);

const maisTransportes = [].concat(transporte1).concat(transporte2, "Van");
// console.log(maisTransportes);

// const linguagens = ["html", "css", "js", "php", "python"];
// console.log(linguagens.includes("css"));
// console.log(linguagens.includes("ruby"));
// console.log(linguagens.indexOf("js"));

// console.log(linguagens.join());
// console.log(linguagens.join(" "));
// console.log(linguagens.join(" -_- "));

let htmlString = "<h2>Titulo</h2>";
htmlString = htmlString.split("h2");
htmlString = htmlString.join("h1");
// console.log(htmlString);

const linguagens = ["html", "css", "js", "php", "python"];

// console.log(linguagens.slice(2)); // Retorna à partir do segundo: "js", "php", "python"
// console.log(linguagens.slice(1, 4)); // Retorna "css", "js", "php"

//

const arrayLinguagens = linguagens.slice();

console.log(linguagens.pop());
console.log(linguagens);
console.log(arrayLinguagens);
