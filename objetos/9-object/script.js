// // const pessoa = new Object({
// //   nome: "Francisco",
// // });

// // // console.log(pessoa);

// // const carro = {
// //   marca: "Marca",
// //   rodas: 4,
// //   init(valor) {
// //     this.marca = valor;
// //     return this;
// //   },
// //   acelerar() {
// //     return `${this.marca} acelerou`;
// //   },
// //   buzinar() {
// //     return `${this.marca} buzinou`;
// //   },
// // };

// // const honda = Object.create(carro).init("Honda");
// // console.log(honda.acelerar());

// // const ferrari = Object.create(carro).init("Ferrari");
// // console.log(ferrari.acelerar());

// //

// const funcaoAutomovel = {
//   acelerar() {
//     return "Acelerou";
//   },
//   buzinar() {
//     return "Buzinou";
//   },
// };

// const moto = {
//   rodas: 2,
//   capacete: true,
// };

// const carro = {
//   rodas: 4,
//   mala: true,
// };

// Object.assign(moto, funcaoAutomovel);
// Object.assign(carro, funcaoAutomovel);

// console.log(moto);
// console.log(carro);

//

const moto = {
  capacete: true,
};

console.log(moto.rodas);

Object.defineProperties(moto, {
  rodas: {
    // value: 2,
    // configurable: false, // Impede deletar e mudança no valor
    // enumerable: false, // torna enumerável
    get() {
      return this._rodas;
    },
    set(valor) {
      this._rodas = valor * 4 + " Total rodas";
    },
  },

  capacete: {
    value: true,
    configurable: true,
    writable: false, // impede mudança de valor
  },
});

// moto.rodas = 3; // Não modificou, pois o configurable está como false
console.log(moto);
