function cadastroProduto() {
    var Produto = document.getElementById("Produto");
    var Quantidade = document.getElementById("Quantidade");
    var DatadeValidade = document.getElementById("DatadeValidade");
    var Local = document.getElementById("Local");

    // Verificar se os elementos foram encontrados
    if (!Produto || !Quantidade || !DatadeValidade || !Local) {
        alert("Alguns campos não foram encontrados. Verifique os IDs dos elementos.");
        return;
    }

    var dados = JSON.parse(localStorage.getItem("dadosProduto"));

    if (dados == null) {
        dados = [];
    }

    var auxRegistro = {
        produto: Produto.value,
        quantidade: Quantidade.value,
        datadevalidade: DatadeValidade.value,
        local: Local.value
    };

    dados.push(auxRegistro);

    localStorage.setItem("dadosProduto", JSON.stringify(dados));
    alert("Doação Realizada");

    // Limpar os campos
    Produto.value = "";
    Quantidade.value = "";
    DatadeValidade.value = "";
    Local.value = "";
}

function adicionarDoação(){

var Produto = document.getElementById("Produto");
    var Quantidade = document.getElementById("Quantidade");
    var DatadeValidade = document.getElementById("DatadeValidade");
    var Local = document.getElementById("Local");

    // Verificar se os elementos foram encontrados
    if (!Produto || !Quantidade || !DatadeValidade || !Local) {
        alert("Alguns campos não foram encontrados. Verifique os IDs dos elementos.");
        return;
    }

    var dados = JSON.parse(localStorage.getItem("dadosProduto"));

    if (dados == null) {
        dados = [];
    }

    var auxRegistro = {
        produto: Produto.value,
        quantidade: Quantidade.value,
        datadevalidade: DatadeValidade.value,
        local: Local.value
    };

    dados.push(auxRegistro);

    localStorage.setItem("dadosProduto", JSON.stringify(dados));
    alert("Doação Armazenada!");

    // Limpar os campos
    Produto.value = "";
    Quantidade.value = "";
    DatadeValidade.value = "";
    Local.value = "";
}
