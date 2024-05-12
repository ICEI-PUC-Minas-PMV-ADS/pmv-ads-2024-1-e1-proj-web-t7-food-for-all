document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("confirm-button").addEventListener("click", function() {
        var password1 = document.getElementById("password1").value;
        var password2 = document.getElementById("password2").value;

        if (password1.length >= 8 && password1 === password2) {
            // Se as senhas são iguais e têm pelo menos 8 caracteres, redireciona para outra página
            window.location.href = "Home.html";
        } else {
            // Senhas não correspondem ou têm menos de 8 caracteres, exibe mensagem de erro
            alert("As senhas não correspondem ou têm menos de 8 caracteres.");
        }
    });
});
