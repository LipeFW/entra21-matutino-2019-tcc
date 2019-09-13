$(document).ready(function () {
    $('#mostrarSenha').on('click', function () {
        var campoSenha = $('#senha');
        var campoSenhaType = campoSenha.attr('type');
        if (campoSenhaType == 'password') {
            campoSenha.attr('type', 'text');
            $(this).val('Hide');
        } else {
            campoSenha.attr('type', 'password');
            $(this).val('Show');
        }
    });
});