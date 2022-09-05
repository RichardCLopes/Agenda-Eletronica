//CLASSE CONTATO------------------------------------
class Contato {
  constructor(id, nome, telefone) {
    this.id = id;
    this.nome = nome;
    this.telefone = telefone;
  }

  getId() {
    return this.id;
  }

  getNome() {
    return this.nome;
  }

  mostraRegistro() {
    return (
      "ID: " +
      this.id +
      "\nNome: " +
      this.nome +
      "\nNumero: " +
      this.telefone +
      "\n--------------------------------\n"
    );
  }
}

//CLASSE AGENDA ----------------------------

var lista = [];

function inserir() {
  var id = window.prompt("ID: ");
  var nome = window.prompt("Nome: ");
  var tel = window.prompt("Telefone: ");
  var registro = new Contato(id, nome, tel);
  lista.push(registro);
}

function remover() {
  var id = window.prompt("ID do contato a ser deletado: ");
  for (let i = 0; i <= lista.length; i++) {
    if (id == lista[i].getId()) {
      lista.splice(i, 1);
    }
  }
  document.getElementById("cont").innerText = "REMOVIDO";
}

function buscar() {
  var id = window.prompt("ID do contato a ser buscado: ");
  for (let i = 0; i <= lista.length; i++) {
    if (id == lista[i].getId()) {
      document.getElementById("cont").innerText = lista[i].mostraRegistro();
    }
  }
}

function listar() {
  lista.sort(function (a, b) {
    if (a.getNome() < b.getNome()) return -1;
    if (a.getNome() > b.getNome()) return 1;
    return 0;
  });

  document.getElementById("cont").innerText = "";
  for (let i = 0; i <= lista.length; i++) {
    var escrita = document.getElementById("cont").innerText;
    document.getElementById("cont").innerText =
      escrita + "\n" + lista[i].mostraRegistro();
  }
}
