function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function () {
    return "Abraçou";
  };
  this.andar = function () {
    return "Andou";
  };
}

let obj = {
  nome: "Francisco",
  idade: 30,
};

Pessoa.prototype.andar = function () {
  return `${this.nome} andou!`;
};

Pessoa.prototype.correr = function () {
  return `${this.nome} correu!`;
};

const chico = new Pessoa("Chico", 30);

// console.log(Pessoa.prototype);
// console.log(chico.prototype);

//

const pais = "Brasil";
const cidade = new String("Ceará");

const listaAnimais = ["Cachorro", "Gato", "Cavalo"];

const lista = document.querySelectorAll("li");

const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

// console.log(Object.getOwnPropertyNames(Array));
// console.log(Object.getOwnPropertyNames(Array.prototype));

// console.log(Object.getOwnPropertyNames(chico));

const carro = {
  marca: "Ford",
  preco: 2000,
  andar() {
    return true;
  },
};
