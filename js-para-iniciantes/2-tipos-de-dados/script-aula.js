// Tipode de dados
let nome = "Francisco"; // String
let idade = 30; // Number
let possuiCNH = true; // Boolean
let time; // Undefined
let comida = null; // Null
let simbolo = Symbol(); // Symbol
let novoObjeto = {}; // Object

console.log(typeof simbolo);

let sobrenome = "Araujo";
let nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

let gols = 1000;
let frase = "Romário fez " + gols + " gols";
console.log(typeof frase);

let ano = "2026";
let mes = 8;
console.log(ano + mes);

let frase1 = 'Esse é o "melhor" jogo';
console.log(frase1);

let frase2 = `Romário fez ${gols * 2} gols!!!!`;
console.log(frase2);
