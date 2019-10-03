$(function () {
    $idAlterar = -1;

    $tabelaMarca = $('#marca-tabela').DataTable({
        ajax: 'http://localhost:51242/Marca/obtertodos',
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

    $('#marca-botao-salvar').on('click', function () {
        $nome = $('#marca-campo-nome').val();

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
            inserir($nome);
        } else {
            alterar($nome);
        }
    });

    function alterar($nome) {
        $.ajax({
            url: 'http://localhost:51242/Marca/editar',
            method: 'post',
            data: {
                id: $idAlterar,
                nome: $nome
            },
            success: function (data) {
                $('#modal-marca').modal('hide');
                limparCampos();
                $idAlterar = -1;
                $tabelaMarca.ajax.reload();
            },
            error: function (err) {
                bootbox.dialog({
                    message: "Não foi possível alterar a marca!"

                });
                window.setTimeout(function () {
                    bootbox.hideAll();
                }, 1500);
                limparCampos();

            }
        });
    }

    function inserir($nome) {
        $.ajax({
            url: 'http://localhost:51242/Marca/inserir',
            method: 'post',
            data: {
                nome: $nome
            },
            success: function (data) {
                $('#modal-marca').modal('hide');
                limparCampos();
                $tabelaMarca.ajax.reload();
                bootbox.dialog({
                    message: "Marca cadastrada com sucesso!"

                });
                window.setTimeout(function () {
                    bootbox.hideAll();
                }, 1500);
            },
            error: function (err) {
                bootbox.dialog({
                    message: "Não foi possível cadastrar a marca!"

                });
                window.setTimeout(function () {
                    bootbox.hideAll();
                }, 1500);
            }
        });
    }

    $("#marca-tabela").on("click", ".botao-apagar", function () {
        $idApagar = $(this).data("id");
        bootbox.confirm({
            title: 'Aviso',
            message: 'Deseja realmente remover a marca?',
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
                        url: "http://localhost:51242/Marca/Apagar?id=" + $idApagar,
                        method: "get",
                        success: function (data) {
                            $tabelaMarca.ajax.reload();
                            bootbox.dialog({
                                message: "Marca removida com sucesso!"

                            });
                            window.setTimeout(function () {
                                bootbox.hideAll();
                            }, 1500);

                        },
                        error: function (err) {
                            bootbox.dialog({
                                message: "Não foi possível remover a marca!"

                            });
                            window.setTimeout(function () {
                                bootbox.hideAll();
                            }, 1500);
                        }
                    });
            }
        });
    });

$('#marca-tabela').on('click', '.botao-editar', function () {
    $idAlterar = $(this).data('id');

    $.ajax({
        url: 'http://localhost:51242/Marca/obterpeloid?id=' + $idAlterar,
        method: 'get',
        success: function (data) {
            $('#marca-campo-nome').val(data.Nome);

                $('#modal-marca').modal('show');
            },
            error: function (err) {
                bootbox.dialog({
                    message: "Não foi possível carregar a marca!"

                });
                window.setTimeout(function () {
                    bootbox.hideAll();
                }, 1500);;
            }
        });
    });

function limparCampos() {
    $('#marca-campo-nome').val("");
    $idAlterar = -1;
}
});