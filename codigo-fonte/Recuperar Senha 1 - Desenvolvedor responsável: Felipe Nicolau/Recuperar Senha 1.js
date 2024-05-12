document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("confirm-button").addEventListener("click", function () {
        var email = document.getElementById("email-input").value;
        if (email.includes("@")) {
            // Se o e-mail estiver correto, redirecione para outra página
            window.location.href = "Recuperar Senha 2.html";
        } else {
            // Se o e-mail estiver incorreto, exiba uma mensagem de erro ou faça outra coisa
            alert("Por favor, insira um endereço de e-mail válido.");
        }
    });
});
