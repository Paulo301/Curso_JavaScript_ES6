// const a = 1; //Constante
// //a=3; //Não pode ser realizado

// const usuario = {
//   nome: "Paulo"
// }

// usuario.nome = "Victor"; //Realização de mutação

function teste(x) { //Cada conjunto de chaves é um escopo
  let y = 2; //Variável de escopo

  if (x > 5) {
    let y = 4;

    console.log(x, y);
  }
  console.log(y);
}

teste(10);