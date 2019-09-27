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
            bootbox.alert('Preencha corretamente o campo!');
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
                bootbox.alert('Não foi possivel editar a marca!');
                limparCampos();
                $idAlterar = -1;

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
                bootbox.alert('Marca cadastrada com sucesso!');
            },
            error: function (err) {
                bootbox.alert('Não foi possivel cadastrar a marca!');
            }
        });
    }

    $("#marca-tabela").on("click", ".botao-apagar", function () {
        $idApagar = $(this).data("id");
        bootbox.confirm({
            message: 'Deseja realmente remover a marca?',
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
                        url: "http://localhost:51242/Marca/Apagar?id=" + $idApagar,
                        method: "get",
                        success: function (data) {
                            $tabelaMarca.ajax.reload();
                            bootbox.alert('Marca removida com sucesso!');

                        },
                        error: function (err) {
                            bootbox.alert('Não foi possível remover a marca!');
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
                alert('Não foi possivel carregar a marca!');
            }
        });
    });

function limparCampos() {
    $('#marca-campo-nome').val("");
    $idAlterar = -1;
}
});