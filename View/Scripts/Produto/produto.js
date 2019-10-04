$(function () {
    $idAlterar = -1;

    $tabelaProduto = $("#produto-tabela").DataTable({
        ajax: "/Produto/obtertodos",
        serverSide: true,
        columns: [
            { "data": "Id" },
            { "data": "Nome" },
            { "data": "Categoria.Nome" },
            { "data": "Valor" },
            {
                render: function (data, type, row) {
                    return '<button class="fadeIn animated btn btn-primary botao-editar" data-id="' + row.Id + '"><i class="fas fa-pencil-alt"></i>  Editar</button><button class="fadeIn animated btn btn-danger botao-apagar ml-1" data-id="' + row.Id + '"><i class="fas fa-trash-alt"></i>  Apagar</button>'
                }
            }
        ]
    });

    $("#produto-botao-salvar").on("click", function () {
        $nome = $("#produto-campo-nome").val();
        $categoria = $("#produto-campo-categoria").val();
        $valor = $("#produto-campo-valor").val();

        if (($nome == "") || ($categoria == null) || ($valor == null)) {
            bootbox.dialog({
                message: "Preencha corretamente os campos!"

            });
            window.setTimeout(function () {
                bootbox.hideAll();
            }, 1500);
            return null;
        }

        if ($idAlterar == -1) {
            inserir($nome, $categoria, $valor);
        } else {
            alterar($nome, $categoria, $valor);
        }

        function alterar($nome, $categoria, $valor) {
            $.ajax({
                url: "/Produto/update",
                method: 'post',
                data: {
                    id: $idAlterar,
                    nome: $nome,
                    idCategoria: $categoria,
                    valor: $valor
                },
                success: function (data) {
                    $("#modal-produto").modal("hide");
                    $tabelaProduto.ajax.reload();
                    bootbox.dialog({
                        message: "Produto alterado com sucesso!"

                    });
                    window.setTimeout(function () {
                        bootbox.hideAll();
                    }, 1500);

                },
                error: function (err) {
                    bootbox.dialog({
                        message: "Não foi possível alterar o produto!"

                    });
                    window.setTimeout(function () {
                        bootbox.hideAll();
                    }, 1500);
                    $idAlterar = -1;

                }
            });
        }

        function inserir($nome, $categoria, $valor) {
            $.ajax({
                url: "/Produto/Inserir",
                method: "post",
                data: {
                    nome: $nome,
                    idCategoria: $categoria,
                    valorUnitario: $valor
                },
                success: function (data) {
                    $("#modal-produto").modal('hide');
                    $tabelaProduto.ajax.reload();
                    bootbox.dialog({
                        message: "Produto cadastrado com sucesso!"

                    });
                    window.setTimeout(function () {
                        bootbox.hideAll();
                    }, 1500);
                },
                error: function (err) {
                    bootbox.dialog({
                        message: "Não foi possível cadastrar o usuário!"

                    });
                    window.setTimeout(function () {
                        bootbox.hideAll();
                    }, 1500);
                }
            });
        }
    })

    $("#produto-tabela").on("click", ".botao-apagar", function () {
        $idApagar = $(this).data("id");
        bootbox.confirm({
            title: "Aviso",
            message: "Deseja realmente remover o produto?",
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
                        url: "/Produto/Apagar?id=" + $idApagar,
                        method: "get",
                        success: function (data) {
                            $tabelaProduto.ajax.reload();
                            bootbox.dialog({
                                message: "Produto removido com sucesso!"

                            });
                            window.setTimeout(function () {
                                bootbox.hideAll();
                            }, 1500);

                        },
                        error: function (err) {
                            bootbox.dialog({
                                message: "Não foi possivel remover o produto!"

                            });
                            window.setTimeout(function () {
                                bootbox.hideAll();
                            }, 1500);
                        }
                    });
            }
        });
    });

    $(".table").on("click", ".botao-editar", function () {
        $idAlterar = $(this).data("id");

        $.ajax({
            url: "/Produto/obterpeloid?id=" + $idAlterar,
            method: "get",
            success: function (data) {
                $("#produto-campo-nome").val(data.Nome);
                $("#produto-campo-categoria").val(data.IdCategoria);
                $("#produto-campo-valor").val(data.Valor);
                $("#modal-produto").modal("show");
            },
            error: function (err) {
                bootbox.dialog({
                    message: "Não foi possível carregar o produto!"

                });
                window.setTimeout(function () {
                    bootbox.hideAll();
                }, 1500);
            }
        })
    });

    function limparCampos() {
        $nome = $("#produto-campo-nome").val("");
        $categoria = $("#produto-campo-categoria").val("");
        $valor = $("#produto-campo-valor").val("");
        $idAlterar = -1;
    }
});