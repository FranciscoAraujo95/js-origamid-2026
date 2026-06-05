console.log(Number.isNaN("as"));
console.log(Number.isNaN(4 + 5));

console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));

console.log(parseFloat("32321.12321")); // 32321.12321
console.log(parseFloat("100.27 reais")); // 100.27

console.log(parseInt("100.27")); // 100
console.log(parseInt(23.49)); // 23

//

const preco = 2.99;
console.log(preco.toFixed()); // 3

//

const preco2 = 59.49;
const precoMoeda = preco2.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
});

console.log(preco2);

// MATH

const pi = Math.PI; // 3.14
console.log(pi);

console.log(Math.abs(-5.5)); // Retorna o valor postivo sempre 5.5
console.log(Math.ceil(4.8334)); // Arredonda pra cima 5
console.log(Math.ceil(4.3)); // Arredonda pra cima sempre 5
console.log(Math.floor(4.3)); // Arredonda pra baixo sempre 4
console.log(Math.floor(4.7)); // Arredonda pra baixo sempre 4
console.log(Math.round(4.6)); // Arredonda conforme a matemática padrão 5
console.log(Math.round(4.4)); // Arredonda conforme a matemática padrão 4

//

console.log(Math.max(5, 3, 10, 42, 2)); // Retorna o maior número 42
console.log(Math.min(5, 3, 10, 42, 2)); // Retorna o menor número 2

//

console.log(Math.random()); // Retorna um número aleátorio quebrado entre 0 e 1
console.log(Math.random() * 10); // Retorna um número aleátorio quebrado entre 0 e 10
console.log(Math.random() * 100); // Retorna um número aleátorio quebrado entre 0 e 100
console.log(Math.floor(Math.random() * 100)); // Retorna um número aleátorio quebrado entre 0 e 100 arredondando pra baixo

console.log(Math.floor(Math.random() * (72 - 32 + 1) + 32)); // Número aleatório entre 72 e 32 sempre
console.log(Math.floor(Math.random() * (max - min + 1) + min)); // Número aleatório entre 72 e 32 sempre
