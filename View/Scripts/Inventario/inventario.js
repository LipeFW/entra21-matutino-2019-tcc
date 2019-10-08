$(function () {
    $idAlterar = -1;
    $idInventario = 0;
    $tabelaProduto = null;
    $tabelaInventario = $('#inventario-tabela').DataTable({
        ajax: '/veiculo/obtertodos',
        serverSide: true,
        columns: [
            { 'data': 'NumeroCaminhao' },
            {
                render: function (data, type, row) {
                    return '<button class="fadeIn animated btn btn-success botao-abrir" \
                                data-id="' + row.Id + '"><i class="fas fa-arrow-right"></i> Abrir</button>'
                }
            }
        ]
    });


    //$('#inventario-botao-salvar').on('click', function () {
    //    $numero_caminhao = $('inventario-campo-numerocaminaho').val();

    //    if ($numero_caminhao.trim() == ""){
    //        bootbox.alert("Preencha corretamente o campo!");
    //        return null;
    //    }

    //    if ($idAlterar == -1) {
    //        inserir($numero_caminhao);
    //    } else {
    //        alterar($numero_caminhao);
    //    }
    //});

    function alterar($numero_caminhao) {
        $.ajax({
            url: '/inventario/update',
            method: 'post',
            data: {
                id: $idAlterar,
                numeroCaminhao: $numero_caminhao
            },
            success: function (data) {
                $('#modal-inventario').modal('hide');
                limparCampos();
                $idAlterar = -1;
                $tabelaInventario.ajax.reload();
            },
            error: function (err) {
                bootbox.alert('Não foi possível alterar!');
            }
        });
    }

    //function inserir($numero_caminhao) {
    //    $.ajax({
    //        url: '/inventario/inserir',
    //        method: 'post',
    //        data: {
    //            numeroCaminhao: $numero_caminhao
    //        },
    //        success: function (data) {
    //            $('#modal-inventario').modal('hide');
    //            limparCampos();
    //            $tabelaInventario.ajax.reload();
    //        },
    //        error: function (err) {
    //            bootbox.alert('Não foi possível inserir!');
    //        }
    //    });
    //}

    $('#modal-inventario').on('show.bs.modal', function (e) {
        if ($tabelaProduto == null) {

            $tabelaProduto = $('#modal-inventario-tabela').DataTable({
                ajax: {
                    url: '/produto/ObterTodosPeloIdInventario',
                    data: function (d) {
                        d.idInventario = $idInventario
                    },
                },
                serverSide: true,
                columns: [
                    { 'data': 'Produto.Nome' },
                    { 'data': 'Produto.Valor' },
                    {
                        render: function (data, type, row) {
                            return '<button class="fadeI animated btn btn-primary botao-editar" data-id="' + row.Id + '"><i class="fas fa-pencil-alt"></i> Editar</button>\
                    <button class="fadeIn animated btn btn-danger botao-apagar ml-1" data-id="' + row.Id + '"><i class="fas fa-trash-alt"></i> Apagar</button>'
                        }
                    }
                ]
            });
        } else {
            $tabelaProduto.ajax.reload();
        }

    });

    $('#inventario-tabela').on('click', '.botao-abrir', function () {
        $idInventario = $(this).data("id");
        $('#modal-inventario').modal('show');
    });

    $("#inventario-tabela").on("click", ".botao-apagar", function () {
        $idApagar = $(this).data("id");
        bootbox.confirm({
            message: "Deseja realmente apagar o registro?",
            buttons: {
                confirm: {
                    label: 'Sim',
                    className: 'btn-success'
                },
                cancel: {
                    label: 'Não',
                    className: 'btn-danger'
                }
            },
            callback: function (result) {
                if (result)
                    $.ajax({
                        url: "/Marca/Apagar?id=" + $idApagar,
                        method: "get",
                        success: function (data) {
                            $tabelaMarca.ajax.reload();
                            bootbox.alert("Registro apagado com sucesso!");

                        },
                        error: function (err) {
                            bootbox.alert('Não foi possível apagar!');
                        }
                    });
            }
        });
    });

    $('#inventario-tabela').on('click', '.botao-editar', function () {
        $idAlterar = $(this).data('id');

        $.ajax({
            url: "/inventario/obterpeloid?id=" + $idAlterar,
            method: 'get',
            success: function (data) {
                $('#inventario-campo-numerocaminhao').val(data.NumeroCaminhao);
                $('#modal-inventario').modal('show');
            },
            error: function (err) {
                bootbox.alert('Não foi possível carregar!');
            }
        })
    });

    function limparCampos() {
        $('#inventario-campo-numerocaminhao').val("");
        $idAlterar = -1;
    }
});