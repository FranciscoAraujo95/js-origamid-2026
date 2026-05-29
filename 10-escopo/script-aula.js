function mostrarCarro() {
  var carro = "Fusca";
  console.log(carro);
}
mostrarCarro(); // Fusca no console
// console.log(carro); // Erro, carro is not defined

if (true) {
  //Variaveis criadas com var vazam o escopo do bloco, isso é errado.
  const mes = "Agosto";
  console.log(mes);
}
// console.log(mes);

const semana = "Sexta";
// semana = "Quinta";

console.log(semana);

const data = {
  ano: 2026,
  mes: "Agosto",
  dia: 15,
  calcular() {
    return `Tenho ${this.ano - this.anoNascimento} anos.`;
  },
};

console.log(data.ano);
data.anoNascimento = 1995;
console.log(data.anoNascimento);
console.log(data.calcular());
