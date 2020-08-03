//Aula 5: Const & Let

// const a = 1; //Constante
// //a=3; //Não pode ser realizado

// const usuario = {
//   nome: "Paulo"
// }

// usuario.nome = "Victor"; //Realização de mutação

// function teste(x) { //Cada conjunto de chaves é um escopo
//   let y = 2; //Variável de escopo

//   if (x > 5) {
//     let y = 4;

//     console.log(x, y);
//   }
//   console.log(y);
// }

// teste(10);

//Aula 6: Operações em arrays

// const arr = [1,2,3,4,5,6,7,8,9];

// const newArr = arr.map(function(item, index){//Percorre todos os itens da lista e os altera se desejado
//   return item*2 + index;
// });

// console.log("Original ",arr);
// console.log("Map ",newArr);

// const sum = arr.reduce(function(total, next){//Tem como resultado apenas um valor, atribui o return ao total 
//   return total+next;
// });

// console.log("Reduce ",sum);

// const filter = arr.filter(function(item){//Filtra a lista mantendo apenas os casos com resultado true
//   return item%2==0;
// });

// console.log("Filter: ",filter);

// const find = arr.find(function(item){//retorna o item se for encontrado ou undefined se não
//   return item ===10;
// })

// console.log("Find: ",find);

//Aula 7: Arrow functions

const arr = [1,2,3,4,5,6,7,8,9];

const newArr = arr.map( item => item*2 );//utilizado quando se tem apenas 1 parametro

console.log("Original ",arr);
console.log("Map ",newArr);

const newArr2 = arr.map( (item,index) => item*2 + index );//para mais de 1 parametro usar parenteses

console.log("Map2 ",newArr2);

const teste = () => "teste";

console.log(teste());

const teste2 = () => ({nome: "Paulo"});

console.log(teste2());