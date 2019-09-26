$(function () {
    $idAlterar = -1;
    $idInventario = 0;

    $tabelaInventario = $('#inventario-tabela').DataTable({
        ajax: 'http://localhost:51242/veiculo/obtertodos',
        serverSide: true,
        columns: [
            { 'data': 'NumeroCaminhao' },
            {
                render: function (data, type, row) {
                    return '<button class="fadeIn animated btn btn-success botao-abrir" \
                                data-id="' + row.Id + '"><i class="fas fa-arrow-right"></i> Abrir</button>\
                            <button class="fadeIn animated btn btn-primary botao-editar ml-1" \
                                data-id="' + row.Id + '"><i class="fas fa-pencil-alt"></i> Editar</button>'
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
            url: 'http://localhost:51242/inventario/update',
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
                bootbox.alert('Não foi possivel alterar!');
            }
        });
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
                limparCampos();
                $tabelaInventario.ajax.reload();
            },
            error: function (err) {
                bootbox.alert('Não foi possivel inserir!');
            }
        });
    }

    $('#modal-inventario').on('show.bs.modal', function (e) {
        $tabelaProduto = $('#modal-inventario-tabela').DataTable({
            ajax: 'http://localhost:51242/produto/obtertodos',
            serverSide: true,
            columns: [
                { 'data': 'Nome' },
                { 'data': 'Valor' },
                {
                    render: function (data, type, row) {
                        return '<button class="fadeI animated btn btn-primary botao-editar" data-id="' + row.Id + '"><i class="fas fa-pencil-alt"></i> Editar</button>\<button class="fadeIn animated btn btn-danger botao-apagar ml-1" data-id="' + row.Id + '"><i class="fas fa-trash-alt"></i> Apagar</button>'
                    }
                }
            ]
        });

    });

    $('.table').on('click', '.botao-abrir', function () {
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
                        url: "http://localhost:51242/Marca/Apagar?id=" + $idApagar,
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

    $('.table').on('click', '.botao-editar', function () {
        $idAlterar = $(this).data('id');

        $.ajax({
            url: "http://localhost:51242/inventario/obterpeloid?id=" + $idAlterar,
            method: 'get',
            success: function (data) {
                $('#inventario-campo-numerocaminhao').val(data.NumeroCaminhao);
                $('#modal-inventario').modal('show');
            },
            error: function (err) {
                bootbox.alert('Não foi possivel carregar!');
            }
        })
    });

    function limparCampos() {
        $('#inventario-campo-numerocaminhao').val("");
        $idAlterar = -1;
    }
});