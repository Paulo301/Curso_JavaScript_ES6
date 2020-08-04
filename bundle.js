"use strict";

//1° exercicio
// class Usuario{
//   constructor(email, senha){
//     this.email = email;
//     this.senha = senha;
//     this.admin = false;
//   }
//   isAdmin() {
//     return this.admin;
//   }
// }
// class Admin extends Usuario{
//   constructor(){
//     super();
//     this.admin = true;
//   }
// }
// const User1 = new Usuario('email@teste.com', 'senha123');
// const Adm1 = new Admin('email@teste.com', 'senha123');
// console.log(User1.isAdmin()) // false
// console.log(Adm1.isAdmin()) // true
//2° exercicio
// const usuarios = [
//   { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
//   { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
//   { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
//  ];
// const idades = usuarios.map(item => item.idade);
// console.log(idades);
// const usuarios1 = usuarios.filter(item => item.idade>18 && item.empresa === "Rocketseat");
// console.log(usuarios1);
// const usuarios2 = usuarios.find(item => item.empresa === "Google");
// console.log(usuarios2);
// const usuarios3 = (usuarios.map(function (item){
//   item.idade*=2;
//   return item;
// })).filter(item => item.idade <= 50);
// console.log(usuarios3);
//3° exercicio
// 3.1
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.map(item => item+10));
// 3.2
// Dica: Utilize uma constante pra function
// const usuario = { nome: 'Diego', idade: 23 };
// const mostraIdade = usuario => usuario.idade;
// console.log(mostraIdade(usuario));
// 3.3
// Dica: Utilize uma constante pra function
// const nome = "Diego";
// const idade = 23;
// const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });
// console.log(mostraUsuario(nome, idade));
// console.log(mostraUsuario(nome));
// 3.4
// const promise = () => new Promise((resolve, reject) => resolve());
// console.log(promise);
//4° exercicio
//4.1
// const empresa = {
//   nome: 'Rocketseat',
//   endereco: {
//   cidade: 'Rio do Sul',
//   estado: 'SC',
//   }
// };
// const { nome, endereco: {cidade,estado}} = empresa;
// console.log(nome); // Rocketseat
// console.log(cidade); // Rio do Sul
// console.log(estado); // SC
//4.2
// function mostraInfo({nome,idade}) {
//   return `${nome} tem ${idade} anos.`;
//  }
//  console.log(mostraInfo({ nome: 'Diego', idade: 23 }));
//5° exercicio
//5.1 Rest
// const arr = [1, 2, 3, 4, 5, 6]
// const [x, ...y] = arr;
// console.log(x); // 1
// console.log(y); // [2, 3, 4, 5, 6]
// // function soma...
// function soma(...params){
//   return params.reduce((todos, next) => todos+next);
// }
// console.log(soma(1, 2, 3, 4, 5, 6)); // 21
// console.log(soma(1, 2)); // 3
// //5.2 Spread
// const usuario = {
//   nome: 'Diego',
//   idade: 23,
//   endereco: {
//   cidade: 'Rio do Sul',
//   uf: 'SC',
//   pais: 'Brasil',
//   }
// };
// const usuario2 = {...usuario, nome:"Gabriel"};
// const usuario3 = {...usuario, cidade:"Lontras"};
// console.log(usuario2);
// console.log(usuario3);
//6° exercicio
// const usuario = 'Diego';
// const idade = 23;
// console.log(`O usuário ${usuario} possui ${idade} anos`);
//7° exercicio
var nome = 'Diego';
var idade = 23;
var usuario = {
  nome: nome,
  idade: idade,
  cidade: 'Rio do Sul'
};
console.log(usuario);
