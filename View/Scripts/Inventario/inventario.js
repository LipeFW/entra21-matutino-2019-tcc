$(function () {
    $idAlterar = -1;

    $tabelaInventario = $('#inventario-tabela').DataTable({
        ajax: 'http://localhost:51242/inventario/obtertodos',
        serverSide: true,
        columns: [
            { 'data': 'Id' },
            { 'data': 'NumeroCaminhao' },
            {
                render: function (data, type, row) {
                    return '<button class="btn btn-primary botao-editar" data-id="' + row.Id + '"><i class="fas fa-pencil-alt"></i>  Editar</button>\<button class="btn btn-danger botao-apagar ml-1" data-id="' + row.Id + '"><i class="fas fa-trash-alt"></i>  Apagar</button>'

                }
            }
        ]
    });


    $('#veiculo-botao-salvar').on('click', function () {
        $numero_caminhao = $('#inventario-campo-numerocaminhao').val();

        if ($idAlterar == -1) {
            inserir($numero_caminhao);
        } else {
            alterar($numero_caminhao);
        }


        function alterar($numero_caminhao); {
            $.ajax({
                url: 'http://localhost:51242/inventario/update',
                method: 'post',
                data: {
                    id: $idAlterar,
                    numeroCaminhao: $numero_caminhao

                },
                success: function (data) {
                    $('modal-inventario').modal('hide');
                    $idAlterar = -1;
                    $tabelaInventario.ajax.reload();
                },
                error: function (err) {
                    alert('Não foi possivel alterar');
                }
            })
        }


        function inserir($numero_caminhao) {
            $.ajax({
                url: 'http://localhost:51242/inventario/inserir',
                method: 'post',
                data: {
                    numeroCaminhao: $numero_caminhao
                },
                success: function (data) {
                    $('#modal-inventario').modal('hide');
                    $tabelaInventario.ajax.reload();
                    alert('Registro inserido com Sucesso');
                },
                error(err) {
                    alert('Não foi possivel inserir');
                }
            })
        }
    })
    $('.table').on('click', '.botao-apagar', function () {
        $idApagar = $(this).data('id');

        $.ajax({
            url: 'http://localhost:51242/inventario/apagar?id=' + $idApagar,
            method: 'get',
            success: function (data) {
                $tabelaInventario.ajax.reload();
                alert("Registro Apagado Com Sucesso")
            },
            error: function (err) {
                alert('Não foi possivel apagar');
            }
        });
    });

    $('.table').on('click', '.botao-editar', function () {
        $idAlterar = $(this).data('id');

        $.ajax({
            url: "http://localhost:51242/Inventario/obterpeloid?id=" + $idAlterar,
            method: 'get',
            success: function (data) {
                $('#inventario-campo-numerocaminhao').val(data.NumeroCaminhao);

                $('#modal-inventario').modal('show');

            },
            error: function (err) {
                alert('Não foi possivel carregar');
            }
        })
    });
});