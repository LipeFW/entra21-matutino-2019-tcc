$(function () {

    $('#contato-botao-enviar').on('click', function () {
        $nome = $('#contato-campo-nome').val();
        $sobrenome = $('#contato-campo-sobrenome').val();
        $telefone = $('#contato-campo-telefone').val();
        $email = $('#contato-campo-email').val();
        $titulo = $('#contato-campo-titulo').val();
        $mensagem = $('#contato-campo-mensagem').val();

        if (($nome.trim() == "") || ($sobrenome.trim() == "") || ($telefone.trim() == "") || ($email.trim() == "") || ($titulo.trim() == "") || ($mensagem.trim() == "")) {
            bootbox.alert("Preencha corretamente os campos!");
            return null;
        }

        inserir($nome.trim(), $sobrenome.trim(), $telefone, $email.trim(), $titulo.trim(), $sobrenome.trim(), $mensagem.trim());


    });



    function inserir($nome, $sobrenome, $telefone, $email, $titulo, $mensagem) {
        $.ajax({
            url: '/Contato/inserir',
            method: 'post',
            data: {
                nome: $nome,
                sobrenome: $sobrenome,
                telefone: $telefone,
                email: $email,
                titulo: $titulo,
                mensagem: $mensagem
            },
            success: function (data) {
                bootbox.alert("Mensagem enviada com sucesso!")
                limparCampos();
            },
            error: function (err) {
                bootbox.alert('Não foi possível enviar a mensagem.');
            }
        });
    }

    function limparCampos() {
        $('#contato-campo-nome').val("");
        $('#contato-campo-sobrenome').val("");
        $('#contato-campo-telefone').val("");
        $('#contato-campo-email').val("");
        $('#contato-campo-titulo').val("");
        $('#contato-campo-mensagem').val("");
    }

});