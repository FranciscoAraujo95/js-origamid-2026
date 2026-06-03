// Liste 5 objetos nativos
Object;
Number;
String;
Boolean;
Function;

// Liste 5 objetos do browser
Window;
History;
Document;
HTMLCollection;
NodeList;

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

if (typeof document.webkitVisiblilityState !== "undefined") {
  console.log("Existe");
} else {
  console.log("Não existe");
}
