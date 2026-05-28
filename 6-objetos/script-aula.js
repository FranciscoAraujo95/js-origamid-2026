var pessoa = {
  nome: "Francisco",
  idade: 30,
  profissao: "Dev",
  possuiCNH: true,
  calcularIMC(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
  },
};
console.log(pessoa.nome);
console.log(pessoa.calcularIMC(112, 1.7));

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return lado * this.lados;
  },
};

console.log(`Lados do quadrado: ${quadrado.lados}`);
console.log(`Área do quadrado: ${quadrado.area(quadrado.lados)}`);
console.log(`Perímetro do quadrado: ${quadrado.perimetro(quadrado.lados)}`);

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84e",
  metadeHeight() {
    return this.height / 2;
  },
};

menu.backgroundColor = "#000";
menu.color = "blue";
var bg = menu.backgroundColor;
console.log(menu.metadeHeight());
