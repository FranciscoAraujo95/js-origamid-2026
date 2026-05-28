var possuiGraduacao = true;

if (possuiGraduacao) {
  console.log("Tenho faculdade!!");
} else {
  console.log("Não tenho facu :(");
}

// Operadores Lógicos
// && compara se uma expressão e a outra é verdadeira

true && true; //true
true && false; //false
false && true; //false
"Gato" && "Cão"; //Cão - Retorna o último valor verdadeiro que achar
5 - 5 && 5 + 5; //0
"Gato" && false; //false
5 >= 5 && 3 < 6; //true

// || Compara se uma expressão ou outra é verdadeira
true || true; // true
true || false; // true
false || true; // true
"Gato" || "Cão"; // 'Gato'
5 - 5 || 5 + 5; // 10
"Gato" || false; // Gato
5 >= 5 || 3 < 6; // true

// Switch

let corFavotira = "Verde";

switch (corFavotira) {
  case "Azul":
    console.log("Olhe para o céu.");
    break;
  case "Verde":
    console.log("Olhe para uma árvore.");
    break;
  default:
    console.log("Feche os olhos.");
    break;
}
