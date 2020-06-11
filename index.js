// class TodoList {
//   constructor() {
//     this.todos = [];
//   }

//   addTodo() {
//     this.todos.push("Novo todo");
//     console.log(this.todos);
//   }
// }

// class Matematica {
//Metodos estaticos não observam o resto da classe, são
//normalmente utilizados para receber dados, trata-los e devolver algo
//   static soma(a, b) {                               
//     return a + b;
//   }
// }

// console.log(Matematica.soma(1, 2));

class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

//Utilizando o conceito de herança
class TodoList extends List {
  constructor() {
    super();

    this.usuario = "Paulo";
  }

  mostraUsuario() {
    console.log(this.usuario);
  }
}

const minhaList = new TodoList();

document.getElementById("novotodo").onclick = function() {
  minhaList.add("Novo todo");
}

minhaList.mostraUsuario();