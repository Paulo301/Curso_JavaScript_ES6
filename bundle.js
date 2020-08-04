"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
var usuario = {
  nome: "Paulo",
  idade: 22,
  endereco: {
    cidade: "São Luís",
    estado: "MA"
  }
};

var nome = usuario.nome,
    resto = _objectWithoutProperties(usuario, ["nome"]);

console.log(nome);
console.log(resto);
var arr = [1, 2, 3, 4, 5, 6];
var a = arr[0],
    b = arr[1],
    c = arr.slice(2);
console.log(a);
console.log(b);
console.log(c);

function soma(a, b) {
  for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    params[_key - 2] = arguments[_key];
  }

  return params;
}

console.log(soma(1, 2, 3, 4, 5, 6, 7)); //SPREAD

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2);
console.log(arr3);
var usuario1 = {
  nome: "Paulo",
  idade: 22,
  endereco: {
    cidade: "São Luís",
    estado: "MA"
  }
};

var usuario2 = _objectSpread(_objectSpread({}, usuario1), {}, {
  nome: "Paulo Victor"
});

console.log(usuario2);
