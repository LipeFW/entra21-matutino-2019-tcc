$(function () {
    $idAlterar = -1;

    $tabelaRota = $('#rota-tabela').DataTable({
        ajax: 'http://localhost:51242/Rota/obtertodos',
        serverSide: true,
        columns: [
            { 'data': 'Id' },
            { 'data': 'Nome' },
            { 'data': 'IdVendedor.Nome' },
            {
                render: function (data, type, row) {
                    return '<button class="btn btn-primary botao-editar" data-id="' + row.id + '">Editar</button>\<button class="btn btn-danger botao-apagar"data-id="' + row.Id + '">Apagar</button>'
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

    $('.table').on('click', '.botao-apagar', function () {
        $idApagar = $(this).data('id');

        $.ajax({
            url: 'http://localhost:51242/Cliente/apagar?id=' + $idApagar,
            method: 'get',
            success: function (data) {
                $tabelaRota.ajax.reload();
            },
            error: function (err) {
                alert('Não foi possivel apagar');
            }
        });
    });

    $('.table').on('click', '.botao-editar', function () {
        $idAlterar = $(this).data('id');

        $.ajax({
            url: 'http://localhost:51242/Cliente/obterpeloid?id=' + $idAlterar,
            method: 'get',

            success: function (data) {
                $('#rota-campo-nome').val(data.Nome);
                $('#modal-rota').modal('show');
            },
            error: function (err) {
                alert('Não foi possivel carregar')
            }
        })
    })
});