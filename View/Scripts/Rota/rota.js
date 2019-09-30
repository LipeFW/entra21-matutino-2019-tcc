$(function () {
    $idAlterar = -1;

    $tabelaRota = $('#rota-tabela').DataTable({
        ajax: 'http://localhost:51242/Rota/obtertodos',
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

        if ($idAlterar == -1) {
            inserir($nome, $idVendedor);
        } else {
            alterar($nome, $idVendedor);
        }
    });

    function alterar($nome, $idVendedor) {
        $.ajax({
            url: 'http://localhost:51242/Rota/update',
            method: 'post',
            data: {
                id: $idAlterar,
                nome: $nome,
                idVendedor: $idVendedor
            },
            success: function (data) {
                $("#modal-rota").modal("hide");
                limparCampos();
                $idAlterar = -1;
                $tabelaRota.ajax.reload();
            },
            error: function (err) {
                bootbox.alert('Não foi possivel editar a rota!');
            }
        });
    }

    function inserir($nome, $idVendedor) {
        $.ajax({
            url: 'http://localhost:51242/Rota/inserir',
            method: 'post',
            data: {
                nome: $nome,
                idVendedor: $idVendedor
            },
            success: function (data) {
                $("#modal-rota").modal('hide');
                limparCampos();
                bootbox.alert('Rota cadastrada com sucesso!');
                $tabelaRota.ajax.reload();
            },
            error: function (err) {
                bootbox.alert('Não foi possivel cadastrar a rota!');
            }
        });
    }

    $("#rota-tabela").on("click", ".botao-apagar", function () {
        $idApagar = $(this).data("id");
        bootbox.confirm({
            message: "Deseja realmente remover a rota?",
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
                        url: "http://localhost:51242/Rota/Apagar?id=" + $idApagar,
                        method: "get",
                        success: function (data) {
                            $tabelaRota.ajax.reload();
                            bootbox.alert("Rota removida com sucesso!");

                        },
                        error: function (err) {
                            bootbox.alert('Não foi possíel remover a rota!');
                        }
                    });
            }
        });
    });

    $('.table').on('click', '.botao-editar', function () {
        $idAlterar = $(this).data('id');

        $.ajax({
            url: 'http://localhost:51242/Rota/obterpeloid?id=' + $idAlterar,
            method: 'get',
            success: function (data) {
                $('#rota-campo-nome').val(data.Nome);
                $('#rota-campo-vendedor').val(data.Vendedor);
                $('#modal-rota').modal('show');
            },
            error: function (err) {
                bootbox.alert('Não foi possivel carregar a rota!')
            }
        });
    });

    function limparCampos() {
        $('#rota-campo-nome').val("");
        $('#rota-campo-vendedor').val("");
        $idAlterar = -1;
    }
});