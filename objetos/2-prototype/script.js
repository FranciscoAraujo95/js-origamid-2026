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

console.log(Pessoa.prototype);
console.log(chico.prototype);
