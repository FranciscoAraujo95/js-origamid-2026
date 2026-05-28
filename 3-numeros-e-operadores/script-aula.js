var soma = "100" + 50;
var subtracao = "100" - 50;
var multiplicacao = "100" * 2;
var divisao = "Comprei 10" / 2;
var modulo = 123214214123 % 3;

var peso = 80 + "kg";
console.log(peso);

var dividir = peso / 2;
console.log(isNaN(dividir));

// A ordem importa
var soma1 = 10 + 10 + 20 + (30 * 4) / 2 + 10;
console.log(soma1);

// Operadores unários
var incremento = 1;
console.log(incremento);
incremento++;
console.log(incremento);
incremento--;
console.log(incremento);

var frase = "Isso é um teste";
+frase; //Nan
-frase; //Nan
console.log(+frase); //Nan
