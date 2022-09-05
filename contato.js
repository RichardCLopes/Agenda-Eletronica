function Contato(id, nome, telefone) {
  this.id = id;
  this.nome = nome;
  this.telefone = telefone;
  this.print = function () {
    console.log(
      "ID: " + this.id + "Nome: " + this.nome + "Telefone: " + telefone
    );
  };
}
