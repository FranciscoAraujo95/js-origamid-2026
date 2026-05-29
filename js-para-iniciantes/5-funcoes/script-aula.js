function areaQuadrado(lado) {
  return lado * lado;
}
console.log(areaQuadrado(4));

function pi() {
  return 3.14;
}
console.log(pi());

function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}
console.log(imc(112, 1.7));

function corFavotira(cor) {
  if (cor === "Azul") {
    console.log("Você gosta do céu.");
  } else if (cor === "Verde") {
    console.log("Você gosta de árvores.");
  } else {
    console.log("Você não gosta de nada.");
  }
}
corFavotira("Verde");

window.addEventListener("click", function () {
  console.log("Cliquei");
});

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Digite um número válido.";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade("amor"));

function faltaVisitar(paisesVisitados) {
  const totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisitados} países!!`;
}

console.log(faltaVisitar(5));

var profissao = "Desenvolvedor";

function dados() {
  var nome = "Francisco";
  var idade = 29;
  function outrosDados() {
    var endereco = "Ceará";
    var idade = 30;
    return `${nome}, ${idade}, ${endereco}, ${profissao}.`;
  }
  return outrosDados();
}

console.log(dados());
