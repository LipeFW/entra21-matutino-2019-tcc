$(function () {
    $idAlterar = -1;

    $tabelaModelo = $("#modelo-tabela").DataTable({
        ajax: "http://localhost:51242/modelo/obtertodos",
        serverSide: true,
        columns: [
            { "data": 'Id' },
            { "data": 'Nome' },
            { "data": 'Marca.Nome' },
            {
                render: function (data, type, row) {
                    return '<button class="fadeIn animated btn btn-primary botao-editar" data-id="' + row.Id + '"><i class="fas fa-pencil-alt"></i>  Editar</button>\<button class="fadeIn animated btn btn-danger botao-apagar ml-1" data-id="' + row.Id + '"><i class="fas fa-trash-alt"></i>  Apagar</button>'
                }
            }
        ]
    });

    $('#modelo-botao-salvar').on('click', function () {
        $nome = $('#modelo-campo-nome').val();
        $marca = $('#modelo-campo-marca').val();
        if (($nome.trim() == "") || ($marca == -1)) {
            bootbox.alert("Preencha corretamente os campos!");
            return null;
        }

        if ($idAlterar == -1) {
            inserir($nome, $marca);
        } else {
            alterar($nome, $marca);
        }

        function alterar($nome, $marca) {
            $.ajax({
                url: 'http://localhost:51242/modelo/update',
                method: 'post',
                data: {
                    id: $idAlterar,
                    nome: $nome,
                    idMarca: $marca
                },
                success: function (data) {
                    $('#modal-modelo').modal('hide');
                    limparCampos();
                    $idAlterar = -1;
                    $tabelaModelo.ajax.reload();
                },
                error: function (err) {
                    bootbox.alert("Não foi possivel editar o modelo!");
                }
            });
        }

        function inserir($nome, $marca) {
            $.ajax({
                url: 'http://localhost:51242/modelo/inserir',
                method: 'post',
                data: {
                    nome: $nome,
                    idMarca: $marca
                },
                success: function (data) {
                    $('#modal-modelo').modal('hide');
                    limparCampos();
                    $tabelaModelo.ajax.reload();
                    bootbox.alert("Modelo cadastrado com sucesso!")
                },
                error: function (err) {
                    bootbox.alert('Não foi possível cadastrar o modelo!');
                }
            });
        }
    });

    $("#modelo-tabela").on("click", ".botao-apagar", function () {
        $idApagar = $(this).data("id");
        bootbox.confirm({
            message: "Deseja realmente remover o modelo?",
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
                        url: "http://localhost:51242/modelo/Apagar?id=" + $idApagar,
                        method: "get",
                        success: function (data) {
                            $tabelaModelo.ajax.reload();
                            bootbox.alert("Modelo removido com sucesso!");

                        },
                        error: function (err) {
                            bootbox.alert('Não foi possível remover o modelo!');
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
                $("#modelo-campo-marca").val(data.Marca.Nome);
                $("#modal-modelo").modal("show");
            },
            error: function (err) {
                bootbox.alert('Não foi possivel carregar o modelo!');
            }
        })
    });

    function limparCampos() {
        $("#modelo-campo-nome").val("");
        $("#modelo-campo-marca").val("");
        $idAlterar = -1;
    }
});