$(function () {
    $idAlterar = -1;

    $tabelaRota = $('#rota-tabela').DataTable({
        ajax: 'http://localhost:51242/Cliente/obtertodos',
        serverSide: true,
        columns: [
            { 'data': 'Id' },
            { 'data': 'Nome' },
            {
                render: function (data, type, row) {
                    return '<butto class="btn btn-primary botao-editar" data-id="' + row.id + '">Editar</button>\<button class="btn btn-danger botao-apagar"data-id="' + row.Id + '">Apagar</button>'
                }
            }
        ]
    });

    $('#rota-botao-salvar').on('click', function () {
        $nome = $('rota-campo-nome').val();

        if ($idAlterar == -1) {
            inserir($nome);
        } else {
            alterar($nome);
        }
    });

    function alterar($nome) {
        $.ajax({
            url: 'http://localhost:51242/Cliente/update',
            method: 'post',
            data: {
                id: $idalterar,
                nome: $nome,
            },
            success: function (data) {
                $("#modal-rota").modal("hide");
                $idAlterar = -1;
                $tabelaRota.ajax.reload();
            },
            error: function (err) {
                alert('Não foi´possivel alterar');
            }
        });
    }

    function inserir($nome) {
        $.ajax({
            url: 'http://localhost:51242/Cliente/inserir',
            method: 'post',
            data: {
                nome: $nome
            },
            success: function (data) {
                $("#modal-rota").modal('hide');
                $tabelaRota.ajax.reload();
            },
            error: function (err) {
                alert('Não foi possivel inserir');
            }
        });
    }


});