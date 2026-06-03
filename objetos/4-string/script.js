const comida = "Pizza";
const agua = new String("Água");

// Acessando diretamente pela posição da letra no index
// console.log(comida.length);
// console.log(comida[0]); // P
// console.log(agua[0]); // A
// console.log(comida[comida.length - 1]); // a

// // Acessando via método charAt()
// console.log(comida.charAt(0)); // P
// console.log(agua.charAt(0)); // A
// console.log(comida.charAt(comida.length - 1)); // a

// Método concat
const frase = "A melhor linguagem é ";
const linguagem = "JavaScript";
const fraseFinal = frase.concat(linguagem, "!!", "dasondashdasd");
console.log(fraseFinal);

//
const fruta = "Banana";
const listaFrutas = "Melancia, Banana, Laranja";

console.log(listaFrutas.includes(fruta));
console.log(fruta.includes(listaFrutas));

console.log(fruta.startsWith("Ba"));
console.log(fruta.endsWith("na"));

//
const transacao1 = "Depósito de cliente";
const transacao2 = "Depósito de fornecedor";
const transacao3 = "Taxa de camisas";

console.log(transacao1.slice(0, 3));
console.log(transacao2.slice(0, 3));
console.log(transacao3.slice(0, 3));

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi

//
const instrumento = "Guitarra";
console.log(instrumento.indexOf("a"));
console.log(instrumento.lastIndexOf("a"));
console.log(instrumento.indexOf("t"));

//
const listaPrecos = ["R$ 99", "R$ 199", "R$ 12000"];
listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, "."));
});
