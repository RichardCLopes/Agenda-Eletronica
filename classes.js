var ageletronica = new Agenda([]);
function inserir() {
  ageletronica.inserir();
}
function remover() {
  ageletronica.remover();
}
function buscar() {
  ageletronica.buscar();
}
function listar() {
  ageletronica.listar();
}

//CLASSE CONTATO------------------------------------
function Contato(id, nome, telefone) {
  this.id = id;
  this.nome = nome;
  this.telefone = telefone;

  this.getid = function () {
    return this.id;
  };

  this.getnome = function () {
    return this.nome;
  };

  this.mostraregistro = function () {
    return (
      "ID: " +
      this.id +
      "\nNome: " +
      this.nome +
      "\nNumero: " +
      this.telefone +
      "\n--------------------------------\n"
    );
  };
}

//CLASSE AGENDA ----------------------------
function Agenda(lista) {
  var _lista = lista; //variavel privada

  this.inserir = function () {
    var id = window.prompt("ID: ");
    var nome = window.prompt("Nome: ");
    var tel = window.prompt("Telefone: ");
    var registro = new Contato(id, nome, tel);
    lista.push(registro);
  };

  this.remover = function () {
    var id = window.prompt("ID do contato a ser deletado: ");
    for (let i = 0; i <= lista.length; i++) {
      if (id == lista[i].getid()) {
        lista.splice(i, 1);
        document.getElementById("cont").innerText = "REMOVIDO";
      }
    }
  };

  this.buscar = function () {
    var id = window.prompt("ID do contato a ser buscado: ");
    for (let i = 0; i <= lista.length; i++) {
      if (id == lista[i].getid()) {
        document.getElementById("cont").innerText = lista[i].mostraregistro();
      }
    }
  };

  this.listar = function () {
    lista.sort(function (a, b) {
      if (a.getnome() < b.getnome()) return -1;
      if (a.getnome() > b.getnome()) return 1;
      return 0;
    });

    document.getElementById("cont").innerText = "";
    for (let i = 0; i <= lista.length; i++) {
      var escrita = document.getElementById("cont").innerText;
      document.getElementById("cont").innerText =
        escrita + "\n" + lista[i].mostraregistro();
    }
  };
}
