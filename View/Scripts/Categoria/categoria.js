$(function () {
    $idAlterar = -1;

    $tabelaCategoria = $('#categoria-tabela').DataTable({
        ajax: 'http://localhost:51242/Categoria/obtertodos',
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

    $('#categoria-botao-salvar').on('click', function () {
        $nome = $('#categoria-campo-nome').val();

        if ($nome.trim() == "") {
            bootbox.alert("Preencha corretamente o campo!");
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
            url: 'http://localhost:51242/Categoria/editar',
            method: 'post',
            data: {
                id: $idAlterar,
                nome: $nome
            },
            success: function (data) {
                $('#modal-categoria').modal('hide');
                limparCampos();
                $idAlterar = -1;
                $tabelaCategoria.ajax.reload();
            },
            error: function (err) {
                bootbox.alert('Não foi possivel alterar');
            }
        });
    }

    function inserir($nome) {
        $.ajax({
            url: 'http://localhost:51242/Categoria/inserir',
            method: 'post',
            data: {
                nome: $nome
            },
            success: function (data) {
                $('#modal-categoria').modal('hide');
                limparCampos();
                $tabelaCategoria.ajax.reload();
                bootbox.alert("Registro inserido com sucesso")
            },
            error: function (err) {
                bootbox.alert('Não foi possivel inserir');
            }
        });
    }

    $("#categoria-tabela").on("click", ".botao-apagar", function () {
        $idApagar = $(this).data("id");
        bootbox.confirm({
            title: 'Aviso',
            message: "Deseja realmente apagar o registro?",
            className: 'bounceInDown animated',
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
                        url: "http://localhost:51242/Categoria/Apagar?id=" + $idApagar,
                        method: "get",
                        success: function (data) {
                            $tabelaCategoria.ajax.reload();
                            bootbox.alert("Registro apagado com sucesso");

                        },
                        error: function (err) {
                            bootbox.alert('Não foi possível apagar');
                        }
                    });
            }
        });
    });

    $('.table').on('click', '.botao-editar', function () {
        $idAlterar = $(this).data('id')
        $.ajax({
            url: 'http://localhost:51242/Categoria/obterpeloid?id=' + $idAlterar,
            method: 'get',
            success: function (data) {
                $('#categoria-campo-nome').val(data.Nome);
                $('#modal-categoria').modal('show');
            },
            error: function (err) {
                bootbox.alert('Não foi possivel carregar');
            }
        })
    });

    function limparCampos() {
        $('#categoria-campo-nome').val("");
        $idAlterar = -1;
    }
});