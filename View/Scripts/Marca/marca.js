$(function () {
    $idAlterar = -1;

    $tabelaMarca = $('#marca-tabela').DataTable({
        ajax: 'http://localhost:51242/Marca/obtertodos',
        serverSide: true,
        columns: [
            { 'data': 'Id' },
            { 'data': 'Nome' },
            {
                render: function (data, type, row) {
                    return '<button class="btn btn-primary botao-editar" data-id="' + row.Id + '"><i class="fas fa-pencil-alt"></i>  Editar</button>\<button class="btn btn-danger botao-apagar ml-1" data-id="' + row.Id + '"><i class="fas fa-trash-alt"></i>  Apagar</button>'
                }
            }
        ]
    });

    $('#marca-botao-salvar').on('click', function () {
        $nome = $('#marca-campo-nome').val();

        if ($idAlterar == -1) {
            inserir($nome);
        } else {
            alterar($nome);
        }
    });

    function alterar($nome) {
        $.ajax({
            url: 'http://localhost:51242/Marca/editar',
            method: 'post',
            data: {
                id: $idAlterar,
                nome: $nome
            },
            success: function (data) {
                $('#modal-marca').modal('hide');
                $idAlterar = -1;
                $tabelaMarca.ajax.reload();
            },
            error: function (err) {
                alert('Não foi possivel alterar');
            }
        });
    }

    function inserir($nome) {
        $.ajax({
            url: 'http://localhost:51242/Marca/inserir',
            method: 'post',
            data: {
                nome: $nome
            },
            success: function (data) {
                $('#modal-marca').modal('hide');
                $tabelaMarca.ajax.reload();
                alert('Registro inserido com Sucesso');

            },
            error: function (err) {
                alert('Não foi possivel inserir');
            }
        });
    }

    $('.table').on('click', '.botao-apagar', function () {
        $idApagar = $(this).data('id');
        var confirmacao = confirm("Deseja realmente apagar o registro?");
        if (confirmacao == true) {
        $.ajax({
            url: 'http://localhost:51242/Marca/apagar?id=' + $idApagar,
            method: 'get',
            success: function (data) {
                $tabelaMarca.ajax.reload();
            },
            error: function (err) {
                alert('Não foi possivel apagar');
            }
        });
        }
    });

    $('.table').on('click', '.botao-editar', function () {
        $idAlterar = $(this).data('id');

        $.ajax({
            url: 'http://localhost:51242/Marca/obterpeloid?id=' + $idAlterar,
            method: 'get',
            success: function (data) {
                $('#marca-campo-nome').val(data.Nome);

                $('#modal-marca').modal('show');
            },
            error: function (err) {
                alert('Não foi possivel carregar');
            }
        });
    });
});