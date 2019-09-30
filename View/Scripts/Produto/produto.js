﻿$(function () {
    $idAlterar = -1;

    $tabelaProduto = $("#produto-tabela").DataTable({
        ajax: "http://localhost:51242/Produto/obtertodos",
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

        if ($idAlterar == -1) {
            inserir($nome, $categoria, $valor);
        } else {
            alterar($nome, $categoria, $valor);
        }

        function alterar($nome, $categoria, $valor) {
            $.ajax({
                url: "http://localhost:51242/Produto/update",
                method: 'post',
                data: {
                    id: $idAlterar,
                    nome: $nome,
                    idCategoria: $categoria,
                    valor: $valor
                },
                success: function (data) {
                    $("#modal-produto").modal("hide");
                    $idAlterar = -1;
                    $tabelaProduto.ajax.reload();

                },
                error: function (err) {
                    bootbox.alert("Não foi possivel editar o produto!");
                    $idAlterar = -1;

                }
            });
        }

        function inserir($nome, $categoria, $valor) {
            $.ajax({
                url: "http://localhost:51242/Produto/Inserir",
                method: "post",
                data: {
                    nome: $nome,
                    idCategoria: $categoria,
                    valorUnitario: $valor
                },
                success: function (data) {
                    $("#modal-produto").modal('hide');
                    $tabelaProduto.ajax.reload();
                    bootbox.alert("Produto cadastrado com sucesso!");
                },
                error: function (err) {
                    bootbox.alert('Não foi possivel cadastrar o produto!');
                }
            });
        }
    })

    $("#produto-tabela").on("click", ".botao-apagar", function () {
        $idApagar = $(this).data("id");
        bootbox.confirm({
            message: "Deseja realmente apagar o registro?",
            buttons: {
                confirm: {
                    label: '<i class="fa fa-check"></i> Sim',
                    className: 'rubberBand animated btn-success',
                },
                cancel: {
                    label: '<i class="fa fa-times"></i> Não',
                    className: 'rubberBand animated btn-outline-danger'
                }
            },
            callback: function (result) {
                if (result)
                    $.ajax({
                        url: "http://localhost:51242/Produto/Apagar?id=" + $idApagar,
                        method: "get",
                        success: function (data) {
                            $tabelaProduto.ajax.reload();
                            bootbox.alert("Produto removido com sucesso");

                        },
                        error: function (err) {
                            bootbox.alert('Não foi possível remover o produto!');
                        }
                    });
            }
        });
    });

    $(".table").on("click", ".botao-editar", function () {
        $idAlterar = $(this).data("id");

        $.ajax({
            url: "http://localhost:51242/Produto/obterpeloid?id=" + $idAlterar,
            method: "get",
            success: function (data) {
                $("#produto-campo-nome").val(data.Nome);
                $("#produto-campo-categoria").val(data.IdCategoria);
                $("#produto-campo-valor").val(data.Valor);
                $("#modal-produto").modal("show");
            },
            error: function (err) {
                bootbox.alert('Não foi possivel carregar o produto!');
            }
        })
    });

    //function limparCampos() {
    //    $("#produto-campo-nome").val("");
    //    $("#produto-campo-categoria").val("");
    //    $("#produto-campo-codigo").val("");
    //    $("#produto-campo-quantidade").val("");
    //    $("#produto-campo-valor").val("");
    //    $idAlterar = -1;
    //}
});