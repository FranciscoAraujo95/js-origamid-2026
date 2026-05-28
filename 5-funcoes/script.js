// Crie uma função para verificar se um valor é Truthy
function isTruthy(valor) {
  return !!valor;
}
console.log(isTruthy(1995));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  const perimetro = lado * 4;
  return `O perímetro de um quadrado com lado ${lado} é igual a ${perimetro}.`;
}
console.log(perimetroQuadrado(50));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `Meu nome completo é ${nome} ${sobrenome}.`;
}
console.log(nomeCompleto("Francisco", "Araujo"));

// Crie uma função que verifica se um número é par
function isEven(valor) {
  if (valor % 2 === 0) {
    console.log(`O número ${valor} é par.`);
  } else {
    console.log(`O número ${valor} é impar.`);
  }
}
console.log(isEven(15));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado) {
  return `O dado ${dado} é do tipo ${typeof dado}.`;
}
console.log(tipoDeDado("Amor"));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
function mostrarAoScroll() {
  let nome = "Francisco Araujo";
  console.log(nome);
}

window.addEventListener("click", mostrarAoScroll);

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
