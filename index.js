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

// const arr = [1,2,3,4,5,6,7,8,9];

// const newArr = arr.map( item => item*2 );//utilizado quando se tem apenas 1 parametro

// console.log("Original ",arr);
// console.log("Map ",newArr);

// const newArr2 = arr.map( (item,index) => item*2 + index );//para mais de 1 parametro usar parenteses

// console.log("Map2 ",newArr2);

// const teste = () => "teste";

// console.log(teste());

// const teste2 = () => ({nome: "Paulo"});

// console.log(teste2());

//Aula 8: Valores padrão

// function soma1(a = 3, b = 8){
//   return a + b;
// }

// console.log(soma1(1));
// console.log(soma1());

// const soma2 = (a = 3, b = 8) => a + b;

// console.log(soma2());

//Aula 9: Desestruturação

// const usuario = {
//   nome: "Paulo",
//   idade: 22,
//   endereco: {
//     cidade: "São Luís",
//     estado: "MA"
//   }
// };

// const { nome, idade, endereco: {cidade}} = usuario;

// console.log(nome);
// console.log(idade);
// console.log(cidade);

// function mostraNome({nome}){
//   return nome;
// }

// console.log(mostraNome(usuario));

//Aula 10: Operadores rest/spread

//REST

const usuario = {
  nome: "Paulo",
  idade: 22,
  endereco: {
    cidade: "São Luís",
    estado: "MA"
  }
};

const { nome, ...resto} = usuario;

console.log(nome);
console.log(resto);

const arr = [1,2,3,4,5,6];

const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

function soma(a, b, ...params){
  return params;
}

console.log(soma(1,2,3,4,5,6,7));

//SPREAD

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuario1 = {
  nome: "Paulo",
  idade: 22,
  endereco: {
    cidade: "São Luís",
    estado: "MA"
  }
};

const usuario2 = {...usuario1, nome: "Paulo Victor"};

console.log(usuario2);