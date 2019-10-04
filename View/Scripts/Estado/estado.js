$(function () {
    $idAlterar = -1;

    $tabelaEstado = $('#estado-tabela').DataTable({
        ajax: 'http://localhost:51242/estado/obtertodos',
        serverSide: true,
        columns: [
            { 'data': 'Id' },
            { 'data': 'Pais.Nome' },
            { 'data': 'Nome' },
            {
                render: function (data, type, row) {
                    return '<button class="fadeIn animated btn btn-primary botao-editar" data-id="' + row.Id + '"><i class="fas fa-pencil-alt"></i>  Editar</button>\<button class="fadeIn animated btn btn-danger botao-apagar ml-1" data-id="' + row.Id + '"><i class="fas fa-trash-alt"></i>  Apagar</button>'

                }
            }
        ]
    });

    $('#estado-botao-salvar').on('click', function () {
        $pais = $('#estado-campo-pais').val();
        $nome = $('#estado-campo-nome').val();

        if (($pais == null) || ($nome.trim() == "")) {
            bootbox.dialog({
                message: "Preencha corretamente os campos!"

            });
            window.setTimeout(function () {
                bootbox.hideAll();
            }, 1500);
            return null;
        }

        if ($idAlterar == -1) {
            inserir($pais, $nome.trim());

        } else {
            alterar($pais, $nome.trim());
        }
    });

    function alterar($nome) {
        $.ajax({
            url: 'http://localhost:51242/estado/editar',
            method: 'post',
            data: {
                id: $idAlterar,
                idPais: $pais,
                nome: $nome
            },
            success: function (data) {
                $('#modal-estado').modal('hide');
                limparCampos();
                bootbox.dialog({
                    message: "Estado alterado com sucesso!"

                });
                window.setTimeout(function () {
                    bootbox.hideAll();
                }, 1500);
                $tabelaEstado.ajax.reload();
            },
            error: function (err) {
                bootbox.dialog({
                    message: "Não foi possível alterar o estado!"

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
            url: 'http://localhost:51242/estado/inserir',
            method: 'post',
            data: {
                idPais: $pais,
                nome: $nome
            },
            success: function (data) {
                $('#modal-estado').modal('hide');
                limparCampos();
                $tabelaEstado.ajax.reload();
                bootbox.dialog({
                    message: "Estado cadastrado com sucesso!"

                });
                window.setTimeout(function () {
                    bootbox.hideAll();
                }, 1500);
            },
            error: function (err) {
                bootbox.dialog({
                    message: "Não foi possível cadastrar o estado!"

                });
                window.setTimeout(function () {
                    bootbox.hideAll();
                }, 1500);
            }
        });
    }

    $("#estado-tabela").on("click", ".botao-apagar", function () {
        $idApagar = $(this).data("id");
        bootbox.confirm({
            title: 'Aviso',
            message: "Deseja realmente remover o estado?",
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
                        url: "http://localhost:51242/estado/Apagar?id=" + $idApagar,
                        method: "get",
                        success: function (data) {
                            $tabelaEstado.ajax.reload();
                            bootbox.dialog({
                                message: "Estado removido com sucesso!"

                            });
                            window.setTimeout(function () {
                                bootbox.hideAll();
                            }, 1500);

                        },
                        error: function (err) {
                            bootbox.dialog({
                                message: "Não foi possível remover o estado!"

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
            url: 'http://localhost:51242/estado/obterpeloid?id=' + $idAlterar,
            method: 'get',
            success: function (data) {
                $('#estado-campo-pais').val(data.Pais.Nome);
                $('#estado-campo-nome').val(data.Nome);
                $('#modal-estado').modal('show');
            },
            error: function (err) {
                bootbox.dialog({
                    message: "Não foi possível carregar o estado!"

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