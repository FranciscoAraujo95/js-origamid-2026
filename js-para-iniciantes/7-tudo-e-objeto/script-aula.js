var nome = "Francisco";

nome.length; // 9 Retorna o número de caracteres
nome.charAt(1); // r Retornar o caractere na posição 1 (base 0)
nome.replace("Fran", "Gil"); //Substitui o primeiro parâmetro pelo segundo
nome.toLowerCase(); // Deixa tudo em letras minúsculas
nome.toUpperCase(); // Deixa tudo em letras maiúsculas

//

var altura = 1.7;
altura.toFixed(); // 2

var btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  console.log("Clicou!");
});
