﻿$(function () {
    $idAlterar = -1;

    $tabelaRota = $('#rota-tabela').DataTable({
        ajax: '/Rota/obtertodos',
        serverSide: true,
        columns: [
            { 'data': 'Id' },
            { 'data': 'Nome' },
            { 'data': 'Vendedor.Nome' },
            {
                render: function (data, type, row) {
                    return '<button class="fadeIn animated btn btn-primary botao-editar" data-id="' + row.Id + '"><i class="fas fa-pencil-alt"></i>  Editar</button>\<button class="fadeIn animated btn btn-danger botao-apagar ml-1" data-id="' + row.Id + '"><i class="fas fa-trash-alt"></i>  Apagar</button>';
                }
            }
        ]
    });

    $('#rota-botao-salvar').on('click', function () {
        $nome = $('#rota-campo-nome').val();
        $idVendedor = $('#rota-campo-vendedor').val();

        if (($nome == "") ||($idVendedor == null)) {
            bootbox.dialog({
                message: "Preencha corretamente os campos!"

            });
            window.setTimeout(function () {
                bootbox.hideAll();
            }, 1500);
            return null;
        }

        if ($idAlterar == -1) {
            inserir($nome, $idVendedor);
        } else {
            alterar($nome, $idVendedor);
        }
    });

    function alterar($nome, $idVendedor) {
        $.ajax({
            url: '/Rota/update',
            method: 'post',
            data: {
                id: $idAlterar,
                nome: $nome,
                idVendedor: $idVendedor
            },
            success: function (data) {
                $("#modal-rota").modal("hide");
                limparCampos();
                $tabelaRota.ajax.reload();
                bootbox.dialog({
                    message: "Rota alterada com sucesso!"

                });
                window.setTimeout(function () {
                    bootbox.hideAll();
                }, 1500);
            },
            error: function (err) {
                bootbox.dialog({
                    message: "Não foi possível aterar a rota!"

                });
                window.setTimeout(function () {
                    bootbox.hideAll();
                }, 1500);
            }
        });
    }

    function inserir($nome, $idVendedor) {
        $.ajax({
            url: '/Rota/inserir',
            method: 'post',
            data: {
                nome: $nome,
                idVendedor: $idVendedor
            },
            success: function (data) {
                $("#modal-rota").modal('hide');
                limparCampos();
                $tabelaRota.ajax.reload();
                bootbox.dialog({
                    message: "Rota cadastrada com sucesso!"

                });
                window.setTimeout(function () {
                    bootbox.hideAll();
                }, 1500);
            },
            error: function (err) {
                bootbox.dialog({
                    message: "Não foi possível cadastrar a rota!"

                });
                window.setTimeout(function () {
                    bootbox.hideAll();
                }, 1500);
            }
        });
    }

    $("#rota-tabela").on("click", ".botao-apagar", function () {
        $idApagar = $(this).data("id");
        bootbox.confirm({
            title: "Aviso?",
            message: "Deseja realmente remover a rota?",
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
                        url: "/Rota/Apagar?id=" + $idApagar,
                        method: "get",
                        success: function (data) {
                            $tabelaRota.ajax.reload();
                            bootbox.dialog({
                                message: "Rota removida com sucesso!"

                            });
                            window.setTimeout(function () {
                                bootbox.hideAll();
                            }, 1500);

                        },
                        error: function (err) {
                            bootbox.dialog({
                                message: "Não foi possível remover a rota!"

                            });
                            window.setTimeout(function () {
                                bootbox.hideAll();
                            }, 1500);
                        }
                    });
            }
        });
    });

    $('.table').on('click', '.botao-editar', function () {
        $idAlterar = $(this).data('id');

        $.ajax({
            url: '/Rota/obterpeloid?id=' + $idAlterar,
            method: 'get',
            success: function (data) {
                $('#rota-campo-nome').val(data.Nome);
                $('#rota-campo-vendedor').val(data.Vendedor);
                $('#modal-rota').modal('show');
            },
            error: function (err) {
                bootbox.dialog({
                    message: "Não foi possível carregar a rota!"

                });
                window.setTimeout(function () {
                    bootbox.hideAll();
                }, 1500);
            }
        });
    });

    function limparCampos() {
        $nome = $('#rota-campo-nome').val("");
        $idVendedor = $('#rota-campo-vendedor').val("");
        $idAlterar = -1;
    }
});