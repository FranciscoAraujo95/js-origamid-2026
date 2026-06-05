const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
//Remova o primeiro valor de comidas e coloque em uma variável
const primeiraComida = comidas.shift(); // Pizza
console.log(primeiraComida);

//Remova o ultimo valor de comidas e coloque em uma variável
const ultimaComida = comidas.pop();
console.log(ultimaComida); // Macarrão

//Adicione "Arroz" no final da array
comidas.push("Arroz");
console.log(comidas);

//Adicione "Peixe" e "Batata" ao inicio da array
comidas.unshift("Peixe", "Batata");
console.log(comidas);

//

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
//Arrume os estudantes em ordem alfabética
estudantes.sort();
console.log(estudantes); // "Brenda", "Joana", "Julia", "Kleber", "Marcio"

//Inverta a ordem dos estudantes
estudantes.reverse();
console.log(estudantes); //"Marcio", "Kleber", "Julia", "Joana", "Brenda"

//Verifique se Joana faz parte dos estudantes

if (estudantes.includes("Joana")) {
  console.log("Sim! Joana é uma de nossas alunas!");
}

//Verifique se Juliana faz parte dos estudantes
if (estudantes.includes("Juliana")) {
  console.log("Sim! Juliana é uma de nossas alunas!");
} else {
  console.log("Não temos essa pessoa matriculada.");
}

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contatos</div>
            </section>`;

html = html.split("section").join("ul").split("div").join("li");
console.log(html);

const carros = ["Ford", "Fiat", "VW", "Honda"];
const carrosClone = carros.slice(); // Clone
carros.pop();
console.log(carros);
console.log(carrosClone);
