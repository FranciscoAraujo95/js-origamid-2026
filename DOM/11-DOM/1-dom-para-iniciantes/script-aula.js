console.log(window);
const href = window.location.href;

if (href === "http://127.0.0.1:5500/DOM/11-DOM/") {
  console.log("Página certa");
}

const h1 = document.querySelector("h1");
console.log(h1);

h1.addEventListener("click", function () {
  console.log("clicou em ", h1.innerText);
});
