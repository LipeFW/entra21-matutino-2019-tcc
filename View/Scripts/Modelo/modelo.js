$(function () {
    $idAlterar = -1;

    $tabelaModelo = $("#modelo-tabela").DataTable({
        ajax: "http://localhost:51242/modelo/obtertodos",
        serverSide: true,
        columns: [
            { "data": "Id" },
            { "data": "Marca.Nome" },
            { "data": "Nome" },
            {
                render: function (data, type, row) {
                    return '<button class="fadeIn animated btn btn-primary botao-editar" data-id="' + row.Id + '"><i class="fas fa-pencil-alt"></i>  Editar</button>\<button class="fadeIn animated btn btn-danger botao-apagar ml-1" data-id="' + row.Id + '"><i class="fas fa-trash-alt"></i>  Apagar</button>'
                }
            }
        ]
    });

    $("#modelo-botao-salvar").on("click", function () {
        $nome = $("#modelo-campo-nome").val();
        $marca = $("#modelo-campo-marca").val();
        if (($nome.trim() == "") || ($marca == null)) {
            bootbox.dialog({
                message: "Preencha corretamente os campos!"

            });
            window.setTimeout(function () {
                bootbox.hideAll();
            }, 1500);
            return null;
        }

        if ($idAlterar == -1) {
            inserir($nome, $marca);
        } else {
            alterar($nome, $marca);
        }

        function alterar($nome, $marca) {
            $.ajax({
                url: "http://localhost:51242/modelo/update",
                method: 'post',
                data: {
                    id: $idAlterar,
                    nome: $nome,
                    idMarca: $marca
                },
                success: function (data) {
                    $("#modal-modelo").modal("hide");
                    $tabelaModelo.ajax.reload();
                    bootbox.dialog({
                        message: "Modelo alterado com sucesso!!"

                    });
                    window.setTimeout(function () {
                        bootbox.hideAll();
                    }, 1500);
                },
                error: function (err) {
                    bootbox.dialog({
                        message: "Não foi possível alterar o modelo!"

                    });
                    window.setTimeout(function () {
                        bootbox.hideAll();
                    }, 1500);
                }
            });
        }

        function inserir($nome, $marca) {
            $.ajax({
                url: "http://localhost:51242/modelo/inserir",
                method: "post",
                data: {
                    nome: $nome,
                    idMarca: $marca
                },
                success: function (data) {
                    $("#modal-modelo").modal('hide');
                    $tabelaModelo.ajax.reload();
                    bootbox.dialog({
                        message: "Modelo cadastrado com sucesso!"

                    });
                    window.setTimeout(function () {
                        bootbox.hideAll();
                    }, 1500);
                },
                error: function (err) {
                    bootbox.dialog({
                        message: "Não foi possível cadastrar o modelo!"

                    });
                    window.setTimeout(function () {
                        bootbox.hideAll();
                    }, 1500);
                }
            });
        }
    });

    $("#modelo-tabela").on("click", ".botao-apagar", function () {
        $idApagar = $(this).data("id");
        bootbox.confirm({
            title: "Aviso",
            message: "Deseja realmente remover o modelo?",
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
                        url: "http://localhost:51242/modelo/Apagar?id=" + $idApagar,
                        method: "get",
                        success: function (data) {
                            $tabelaModelo.ajax.reload();
                            bootbox.dialog({
                                message: "Modelo removido com sucesso!"

                            });
                            window.setTimeout(function () {
                                bootbox.hideAll();
                            }, 1500);

                        },
                        error: function (err) {
                            bootbox.dialog({
                                message: "Não foi possível remover o modelo!"

                            });
                            window.setTimeout(function () {
                                bootbox.hideAll();
                            }, 1500);
                        }
                    });
            }
        });
    });

    $("#modelo-tabela").on("click", ".botao-editar", function () {
        $idAlterar = $(this).data("id");

        $.ajax({
            url: "http://localhost:51242/modelo/obterpeloid?id=" + $idAlterar,
            method: "get",
            success: function (data) {
                $("#modelo-campo-nome").val(data.Nome);
                $("#modelo-campo-marca").val(data.IdMarca);
                $("#modal-modelo").modal("show");
            },
            error: function (err) {
                bootbox.dialog({
                    message: "Não foi possível carregar o modelo!"

                });
                window.setTimeout(function () {
                    bootbox.hideAll();
                }, 1500);
            }
        })
    });

    function limparCampos() {
        $("#modelo-campo-nome").val("");
        $("#modelo-campo-marca").val("");
        $idAlterar = -1;
    }
});