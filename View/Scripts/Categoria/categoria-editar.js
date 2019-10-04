$idAlterar = -1;
    $('#categoria-botao-editar').on('click', function () {
        $nome = $('#categoria-campo-nome-editar').val();

        if ($nome.trim() == "") {
            bootbox.dialog({
                message: "Preencha corretamente os campos!"

            });
            window.setTimeout(function () {
                bootbox.hideAll();
            }, 1500);
            return null;
        }
        if ($idAlterar != -1) {
            alterar($nome.trim())
        }

});

function alterar($nome) {
    $.ajax({
        url: '/Categoria/editar',
        method: 'post',
        data: {
            id: $idAlterar,
            nome: $nome
        },
        success: function (data) {
            $('#modal-categoria-editar').modal('hide');
            //limparCampos();
            bootbox.dialog({
                message: "Categoria alterada com sucesso!"
            });
            $tabelaCategoria.ajax.reload();
            window.setTimeout(function () {
                bootbox.hideAll();
            }, 1500);
        },
        error: function (err) {
            bootbox.dialog({
                message: "Não foi possível alterar a categoria!"

            });
            window.setTimeout(function () {
                bootbox.hideAll();
            }, 1500);
            $idAlterar = -1;
        }
    });
}

