$(document).ready(function () {

    $('#alterarSenha').on('click', function () {

        var senha = $('#perfil-campo-senha').val();
        var senhaConfirm = $('#perfil-campo-senha2').val();

        if ((senha.trim() == "") || (senhaConfirm.trim() == "")) {
            alert("A senha não pode estar vazia");
        }

        else if (senha == senhaConfirm) {


            alert("Senha alterada com sucesso");
        } else {
            alert("As senhas não coincidem");
        }
    });
});