// Retorne o url da página atual utilizando o objeto window
const url = window.location.href;
console.log(url);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const primeiroAtivo = document.querySelector(".ativo");
console.log(primeiroAtivo);

// Retorne a linguagem do navegador
const idioma = window.navigator.language;
console.log(
  `O idioma do navegador é ${idioma}, o que significa português brasileiro.`,
);

// Retorne a largura da janela
const larguraTela = window.innerWidth;
console.log(`A largura atual da tela é de ${larguraTela} pixels.`);
