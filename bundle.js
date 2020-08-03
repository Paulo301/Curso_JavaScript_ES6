"use strict";

// const a = 1; //Constante
// //a=3; //Não pode ser realizado
// const usuario = {
//   nome: "Paulo"
// }
// usuario.nome = "Victor"; //Realização de mutação
function teste(x) {
  //Cada conjunto de chaves é um escopo
  var y = 2; //Variável de escopo

  if (x > 5) {
    var _y = 4;
    console.log(x, _y);
  }

  console.log(y);
}

teste(10);
