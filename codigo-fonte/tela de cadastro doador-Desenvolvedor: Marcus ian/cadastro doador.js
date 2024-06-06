function cadastroDoador() {
    var Email = document.getElementById("Email");
    var Senha = document.getElementById("Senha");
    var CPF = document.getElementById("CPF");
    var Nome = document.getElementById("Nome");

    // Verificar se os elementos foram encontrados
    if (!Email || !Senha || !CPF || !Nome) {
        alert("Alguns campos não foram encontrados. Verifique os IDs dos elementos.");
        return;
    }

    var dados = JSON.parse(localStorage.getItem("dadosDoador"));

    if (dados == null) {
        dados = [];
    }

    var auxRegistro = {
        email: Email.value,
        senha: Senha.value,
        cpf: CPF.value,
        nome:Nome.value
    };

    dados.push(auxRegistro);

    localStorage.setItem("dadosDoador", JSON.stringify(dados));
    alert("Cadastro Realizado");

    // Limpar os campos
    Nome.value = "";
    Senha.value = "";
    Email.value = "";
    CPF.value = "";
}
