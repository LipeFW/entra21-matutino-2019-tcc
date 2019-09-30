$(function () {
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
        var senha = $('#config-campo-senha').val();
        var senhaConfirm = $('#config-campo-senha2').val();

        if ((senha.trim() == "") || (senhaConfirm.trim() == "")) {
            bootbox.alert("O campo senha não pode ser vazio!");
        }
        else if (senha == senhaConfirm) {
            AlterarSenha();

            bootbox.alert("Senha alterada com sucesso!");
        } else {
            bootbox.alert("As senhas não coincidem!");
        }
    });

    function AlterarSenha() {

    }
});