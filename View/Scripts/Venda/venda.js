$(function () {
    $idAlterar = -1;

    $tabelaVenda = $('#venda-tabela').DataTable({
        ajax: "/Venda/obtertodos",
        serverSide: true,
        columns: [
            { "data": "Id" },
            { "data": "Vendedor" },
            { "data": "Cliente" },
            {
                render: function (data, type, row) {
                    return '<button class="fadeIn animated btn btn-primary botao-editar" data-id="' + row.Id + '"><i class="fas fa-pencil-alt"></i>  Editar</button>\<button class="fadeIn animated btn btn-danger botao-apagar ml-1" data-id="' + row.Id + '"><i class="fas fa-trash-alt"></i>  Apagar</button>'
                }
            }
        ]
    });

    $("#venda-botao-salvar").on("click", function () {
        $vendedor = $("#venda-campo-vendedor").val();
        $cliente = $("#venda-campo-cliente").val();

        if (($vendedor == null) || ($cliente == null)) {
            bootbox.dialog({
                message: "Preencha corretamente os campos!"

            });
            window.setTimeout(function () {
                bootbox.hideAll();
            }, 1500);
            return null;
        }

        if ($idAlterar == -1) {
            inserir($vendedor, $cliente);

        } else {
            alterar($vendedor, $cliente);
        }

        function alterar($vendedor, $cliente) {
            $.ajax({
                url: "/Venda/update",
                method: "post",
                data: {
                    id: $idAlterar,
                    idVendedor: $vendedor,
                    idCliente: $cliente,
                },
                success: function (data) {
                    $("#modal-venda").modal("hide");
                    limparCampos();
                    $idAlterar = -1;
                    $tabelaVenda.ajax.reload();
                    bootbox.dialog({
                        message: "Venda alterada com sucesso!"

                    });
                    window.setTimeout(function () {
                        bootbox.hideAll();
                    }, 1500);
                },
                error: function (err) {
                    bootbox.alert("Não foi possível editar a venda.");
                    limparCampos();
                    $idAlterar = -1;
                }
            });
        }

        function inserir($vendedor, $cliente) {
            $.ajax({
                url: "/Venda/Inserir",
                method: "post",
                data: {
                idVendedor: $vendedor,
                idCliente: $cliente
                },
                success: function (data) {
                    $("#modal-venda").modal('hide');
                    limparCampos();
                    $tabelaVenda.ajax.reload();
                    bootbox.dialog({
                        message: "Venda cadastrada com sucesso!"

                    });
                    window.setTimeout(function () {
                        bootbox.hideAll();
                    }, 1500);
                },
                error: function (err) {
                    bootbox.dialog({
                        message: "Não foi possível cadastrar a venda!"

                    });
                    window.setTimeout(function () {
                        bootbox.hideAll();
                    }, 1500);
                }
            });
        }
    })

    $("#venda-tabela").on("click", ".botao-apagar", function () {
        $idApagar = $(this).data("id");
        bootbox.confirm({
            title: 'Aviso',
            message: "Deseja realmente remover a venda?",
            backdrop: true,
            buttons: {
                confirm: {
                    label: '<i class="fa fa-check"></i> Sim',
                    className: 'rubberBand animated btn-success',
                },
                cancel: {
                    label: '<i class="fa fa-times"></i> Não',
                    className: 'rubberBand animated btn-danger'
                }
            },
            callback: function (result) {
                if (result)
                    $.ajax({
                        url: "/Venda/Apagar?id=" + $idApagar,
                        method: "get",
                        success: function (data) {
                            $tabelaVenda.ajax.reload();
                            bootbox.dialog({
                                message: "Venda removida com sucesso!"

                            });
                            window.setTimeout(function () {
                                bootbox.hideAll();
                            }, 1500);

                        },
                        error: function (err) {
                            bootbox.dialog({
                                message: "Não foi possível remover o venda!"

                            });
                            window.setTimeout(function () {
                                bootbox.hideAll();
                            }, 1500);
                        }
                    });
            }
        });
    });

    $("#venda-tabela").on("click", ".botao-editar", function () {
        $idAlterar = $(this).data("id");

        $.ajax({
            url: "/Venda/obterpeloid?id=" + $idAlterar,
            method: "get",
            success: function (data) {
                $vendedor = $("#venda-campo-vendedor").val(data.IdVendedor);
                $cliente = $("#venda-campo-cliente").val(data.IdCliente);
                $("#modal-venda").modal("show");

            },
            error: function (err) {
                bootbox.dialog({
                    message: "Não foi possível carregar a venda!"

                });
                window.setTimeout(function () {
                    bootbox.hideAll();
                }, 1500);
            }
        });
    });

    function limparCampos() {
        $vendedor = $("#venda-campo-vendedor").val("");
        $cliente = $("#venda-campo-cliente").val("");
        $idAlterar = -1;
    }
});