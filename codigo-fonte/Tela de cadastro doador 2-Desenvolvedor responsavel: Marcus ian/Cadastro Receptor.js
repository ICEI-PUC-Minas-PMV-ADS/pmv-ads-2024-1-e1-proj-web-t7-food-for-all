function cadastroReceptor() {
    var Nome = document.getElementById("Nome");
    var DataNascimento = document.getElementById("DataNascimento");
    var Dependentes = document.getElementById("Dependentes");
    var CPF = document.getElementById("CPF");
    var Situação = document.getElementById("Situação");
    var Endereço = document.getElementById("Endereço");

    // Verificar se os elementos foram encontrados
    if (!Nome || !DataNascimento || !Dependentes || !CPF || !Situação || !Endereço) {
        alert("Alguns campos não foram encontrados. Verifique os IDs dos elementos.");
        return;
    }

    var dados = JSON.parse(localStorage.getItem("dadosReceptor"));

    if (dados == null) {
        dados = [];
    }

    var auxRegistro = {
        nome:Nome.value,
        datanascimento: DataNascimento.value,
        dependentes: Dependentes.value,
        cpf: CPF.value,
        Situação: Situação.value,
        endereço: Endereço.value,
    };

    dados.push(auxRegistro);

    localStorage.setItem("dadosNome", JSON.stringify(dados));
    alert("Cadastro Realizado");

    // Limpar os campos
    Nome.value = "";
    DataNascimento.value = "";
    Dependentes.value = "";
    CPF.value = "";
    Situação.value = "";
    Endereço.value = "";
}
