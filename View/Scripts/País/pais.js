$(function () {
    $idAlterar = -1;

    $tabelaPais = $('#pais-tabela').DataTable({
        ajax: 'http://localhost:51242/pais/obtertodos',
        serverSide: true,
        columns: [
            { 'data': 'Id' },
            { 'data': 'Nome' },
            {
                render: function (data, type, row) {
                    return '<button class="fadeIn animated btn btn-primary botao-editar" data-id="' + row.Id + '"><i class="fas fa-pencil-alt"></i>  Editar</button>\<button class="fadeIn animated btn btn-danger botao-apagar ml-1" data-id="' + row.Id + '"><i class="fas fa-trash-alt"></i>  Apagar</button>'

                }
            }
        ]
    });

    $('#pais-botao-salvar').on('click', function () {
        $nome = $('#pais-campo-nome').val();

        if ($nome.trim() == "") {
            bootbox.dialog({
                message: "Preencha corretamente os campos!"

            });
            window.setTimeout(function () {
                bootbox.hideAll();
            }, 1500);
            return null;
        }

        if ($idAlterar == -1) {
            inserir($nome.trim());

        } else {
            alterar($nome.trim());
        }
    });

    function alterar($nome) {
        $.ajax({
            url: 'http://localhost:51242/pais/editar',
            method: 'post',
            data: {
                id: $idAlterar,
                nome: $nome
            },
            success: function (data) {
                $('#modal-pais').modal('hide');
                limparCampos();
                bootbox.dialog({
                    message: "País alterado com sucesso!"

                });
                window.setTimeout(function () {
                    bootbox.hideAll();
                }, 1500);
                $tabelaPais.ajax.reload();
            },
            error: function (err) {
                bootbox.dialog({
                    message: "Não foi possível alterar o país!"

                });
                window.setTimeout(function () {
                    bootbox.hideAll();
                }, 1500);
                $idAlterar = -1;
            }
        });
    }

    function inserir($nome) {
        $.ajax({
            url: 'http://localhost:51242/pais/inserir',
            method: 'post',
            data: {
                nome: $nome
            },
            success: function (data) {
                $('#modal-pais').modal('hide');
                limparCampos();
                $tabelaPais.ajax.reload();
                bootbox.dialog({
                    message: "País cadastrado com sucesso!"

                });
                window.setTimeout(function () {
                    bootbox.hideAll();
                }, 1500);
            },
            error: function (err) {
                bootbox.dialog({
                    message: "Não foi possível cadastrar o país!"

                });
                window.setTimeout(function () {
                    bootbox.hideAll();
                }, 1500);
            }
        });
    }

    $("#pais-tabela").on("click", ".botao-apagar", function () {
        $idApagar = $(this).data("id");
        bootbox.confirm({
            title: 'Aviso',
            message: "Deseja realmente remover o país?",
            className: 'bounceInDown animated',
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
                        url: "http://localhost:51242/pais/Apagar?id=" + $idApagar,
                        method: "get",
                        success: function (data) {
                            $tabelaPais.ajax.reload();
                            bootbox.dialog({
                                message: "País removido com sucesso!"

                            });
                            window.setTimeout(function () {
                                bootbox.hideAll();
                            }, 1500);

                        },
                        error: function (err) {
                            bootbox.dialog({
                                message: "Não foi possível remover o país!"

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
        $idAlterar = $(this).data('id')
        $.ajax({
            url: 'http://localhost:51242/pais/obterpeloid?id=' + $idAlterar,
            method: 'get',
            success: function (data) {
                $('#pais-campo-nome').val(data.Nome);
                $('#modal-pais').modal('show');
            },
            error: function (err) {
                bootbox.dialog({
                    message: "Não foi possível carregar o país!"

                });
                window.setTimeout(function () {
                    bootbox.hideAll();
                }, 1500);
            }
        })
    });

    function limparCampos() {
        $('#pais-campo-nome').val("");
        $idAlterar = -1;
    }
});