function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

const honda = new Carro("Honda", 3000);
const fiat = new Carro("Fiat", 3400);

function Carro2(marca, precoAtribuido) {
  const taxa = 1.2;
  const precoFinal = precoAtribuido * taxa;
  this.marca = marca;
  this.preco = precoFinal;
}

const mazda = new Carro2("Miyata", 5000);
