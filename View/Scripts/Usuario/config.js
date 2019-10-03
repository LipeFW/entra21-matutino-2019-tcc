$(function () {
    $idUsuario = $('#idAlterar').val();

    $("#colorBlue").on("click", function () {
        $("#sidebar").addClass("bg-primary");
        $("#sidebar").removeClass("bg-danger");
        $("#sidebar").removeClass("bg-warning");
        $("#sidebar").removeClass("bg-dark");
        $("#sidebartop").addClass("bg-primary");
        $("#sidebartop").removeClass("bg-danger");
        $("#sidebartop").removeClass("bg-warning");
        $("#sidebartop").removeClass("bg-dark");
    });
    $("#colorOrange").on("click", function () {
        $("#sidebar").addClass("bg-warning");
        $("#sidebar").removeClass("bg-primary");
        $("#sidebar").removeClass("bg-danger");
        $("#sidebar").removeClass("bg-dark");
        $("#sidebartop").addClass("bg-warning");
        $("#sidebartop").removeClass("bg-primary");
        $("#sidebartop").removeClass("bg-dark");
        $("#sidebartop").removeClass("bg-danger");
    });
    $("#colorRed").on("click", function () {
        $("#sidebar").addClass("bg-danger");
        $("#sidebar").removeClass("bg-primary");
        $("#sidebar").removeClass("bg-dark");
        $("#sidebar").removeClass("bg-warning");
        $("#sidebartop").addClass("bg-danger");
        $("#sidebartop").removeClass("bg-primary");
        $("#sidebartop").removeClass("bg-dark");
        $("#sidebartop").removeClass("bg-warning");
    });
    $("#colorDark").on("click", function () {
        $("#sidebar").addClass("bg-dark");
        $("#sidebar").removeClass("bg-primary");
        $("#sidebar").removeClass("bg-warning");
        $("#sidebar").removeClass("bg-danger");
        $("#sidebartop").addClass("bg-dark");
        $("#sidebartop").removeClass("bg-danger");
        $("#sidebartop").removeClass("bg-primary");
        $("#sidebartop").removeClass("bg-warning");
    });
    $('#alterarSenha').on('click', function () {
        $senha = $('#config-campo-senha').val();
        $senhaConfirm = $('#config-campo-senha2').val();

        if (($senha.trim() == "") || ($senhaConfirm.trim() == "")) {
            bootbox.alert("O campo senha não pode ser vazio!");
            return null;
        }
        else if ($senha == $senhaConfirm) {
            AlterarSenha();
        } else {
            bootbox.alert("As senhas não coincidem!");
            return null;
        }
    });

    function AlterarSenha($senha) {
        $.ajax({
            url: "http://localhost:51242/Usuario/updatepass",
            method: "post",
            data: {
                id: $idUsuario,
                senha: $senha,
            },
            success: function (data) {
                bootbox.alert("Senha alterada com sucesso!");
            },
            error: function (err) {
                bootbox.alert("Não foi possível alterar a senha!");
            }
        });
    }
});