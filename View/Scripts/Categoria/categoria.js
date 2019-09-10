$(function () {
    $idAlterar = -1;

    $tabelaCategoria = $('#categoria-tabela').DataTable({
        ajax: 'http://localhost:51242/Categoria/obtertodos',
        serverSide: true,
        columns: [
            { 'data': 'Id' },
            { 'data': 'Nome' },
            {
                render: function (data, type, row) {
                    return '<button class="btn btn-primary botao-editar" data-id="' + row.Id + '">Editar</button>\<button class="btn btn-danger botao-apagar" data-id="' + row.Id + '">Apagar</button>'
                }
            }

        ]
    });

    $('#categoria-botao-salvar').on('click', function () {
        $nome = $('#categoria-campo-nome').val();

        if ($idAlterar == -1) {
            inserir($nome);
        } else {
            alterar($nome);
        }
    });

    function alterar($nome) {
        $.ajax({
            url: 'http://localhost:51242/Categoria/update',
            method: 'post',
            data: {
                id: $idAlterar,
                nome: $nome
            },
            success: function (data) {
                $('#modal-categoria').modal('hide');
                $idAlterar = -1;
                $tabelaCategoria.ajax.reload();
            },
            error: function (err) {
                alert('Não foi possivel alterar');
            }
        });
    }

    function inserir($nome) {
       $.ajax({
            url: 'http://localhost:51242/Categoria/inserir',
            method: 'post',
            data: {
                nome: $nome
            },
            success: function (data) {
                $('#modal-categoria').modal('hide');
                $tabelaCategoria.ajax.reload();
            },
            error: function (err) {
                alert('Não foi possivel inserir');
            }
        });
    }

    $('.table').on('click', '.botao-apagar', function () {
        $idApagar = $(this).data('id');

        $.ajax({
            url: 'http://localhost:51242/Categoria/apagar?id=' + $idApagar,
            method: 'get',
            success: function (data) {
                $tabelaCategoria.ajax.reload();
            },
            error: function (err) {
                alert('Não foi possivel apagar');
            }
        });
    });

    $('.table').on('click', '.botao-editar', function () {
        $idAlterar = $(this).data('id');

        $.ajax({
            url: 'http://localhost:51242/Categoria/obterpeloid?id=' + $idAlterar,
            method: 'get',
            success: function (data) {
                $('#categoria-campo-nome').val(data.Nome);
                $('#modal-categoria').modal('show');
            },
            error: function (err) {
                alert('Não foi possivel carregar');
            }
        });
    });
});