
    var lista =[];

    function inserir() {
        var id = window.prompt("ID: ");
        var nome = window.prompt("Nome: ");
        var tel = window.prompt("Telefone: ");

        var Contato = new Contato(id, nome, tel);
        lista.push(Contato);
    }

    function remover() {
        var id = window.prompt("ID do contato a ser deletado: ");
        for(i,j in lista){
            if(j[0]==id){
                delete lista[i];
            }
        }
    }

    function buscar() {
        var id = window.prompt("ID do contato a ser buscado: ");
    }

    function listar() {
        var escrita;
        for(i in lista){
            escrita += i.id  + i.nome + i.telefone;
        }

        document.getElementById("cont").innerText(escrita);
    }

