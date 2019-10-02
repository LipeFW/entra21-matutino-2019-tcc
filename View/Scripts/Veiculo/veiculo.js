$(function () {
    $idAlterar = -1;

    $tabelaVeiculo = $('#veiculo-tabela').DataTable({
        ajax: 'http://localhost:51242/veiculo/obtertodos',
        serverSide: true,
        columns: [
            { 'data': 'Id' },
            { 'data': 'Marca.Nome' },
            { 'data': 'Modelo.Nome' },
            { 'data': 'AnoFabricacao' },
            { 'data': 'NumeroCaminhao' },
            { 'data': 'Placa' },
            {
                render: function (data, type, row) {
                    return '<button class="fadeIn animated btn btn-primary botao-editar" data-id="' + row.Id + '"><i class="fas fa-pencil-alt"></i>  Editar</button>\<button class="fadeIn animated btn btn-danger botao-apagar ml-1" data-id="' + row.Id + '"><i class="fas fa-trash-alt"></i>  Apagar</button>'

                }
            }
        ]
    });

    $('#veiculo-botao-salvar').on('click', function () {
        $marca = $('#veiculo-campo-marca').val();
        $modelo = $('#veiculo-campo-modelo').val();
        $anoFabricacao = $('#veiculo-campo-anofabricacao').val();
        $numeroCaminhao = $('#veiculo-campo-numerocaminhao').val();
        $placa = $('#veiculo-campo-placa').val();

        if ($idAlterar == -1) {
            inserir($marca, $modelo, $anoFabricacao, $numeroCaminhao, $placa);
        } else {
            alterar($marca, $modelo, $anoFabricacao, $numeroCaminhao, $placa);
        }

        function alterar($marca, $modelo, $anoFabricacao, $numeroCaminhao, $placa) {
            $.ajax({
                url: 'http://localhost:51242/veiculo/update',
                method: 'post',
                data: {
                    id: $idAlterar,
                    idMarca: $marca,
                    idModelo: $modelo,
                    anoFabricacao: $anoFabricacao,
                    numeroCaminhao: $numeroCaminhao,
                    placa: $placa
                },
                success: function (data) {
                    $('#modal-veiculo').modal('hide');
                    limparCampos();
                    $idAlterar = -1;
                    $tabelaVeiculo.ajax.reload();
                },
                error: function (err) {
                    bootbox.alert('Não foi possivel editar o veículo!');
                }
            });
        }

        function inserir($marca, $modelo, $anoFabricacao, $numeroCaminhao, $placa) {
            $.ajax({
                url: 'http://localhost:51242/veiculo/inserir',
                method: 'post',
                data: {
                    idMarca: $marca,
                    idModelo: $modelo,
                    anoFabricacao: $anoFabricacao,
                    numeroCaminhao: $numeroCaminhao,
                    placa: $placa
                },
                success: function (data) {
                    $('#modal-veiculo').modal('hide');
                    limparCampos();
                    $tabelaVeiculo.ajax.reload();
                    bootbox.alert('Veículo cadastrado com sucesso!');
                },
                error: function (err) {
                    bootbox.alert('Não foi possivel cadastrar o veículo!');
                }
            });
        }
    });

    $('#veiculo-tabela').on('click', '.botao-apagar', function () {
        $idApagar = $(this).data('id');

        bootbox.confirm({
            message: "Deseja realmente remover a veículo?",
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
                if (result) {
                    $.ajax({
                        url: 'http://localhost:51242/veiculo/apagar?id=' + $idApagar,
                        method: 'get',
                        success: function (data) {
                            $tabelaVeiculo.ajax.reload();
                            bootbox.alert("Veículo removido com sucesso!");
                        },
                        error: function (err) {
                            bootbox.alert('Não foi possivel remover o veículo!');
                        }
                    });
                }
            }
        })
    });

    $("#veiculo-tabela").on("click", ".botao-editar", function () {
        $idAlterar = $(this).data("id");

        $.ajax({
            url: "http://localhost:51242/Veiculo/obterpeloid?id=" + $idAlterar,
            method: "get",
            success: function (data) {
                $("#veiculo-campo-marca").val(data.Marca.Nome);
                $("#veiculo-campo-modelo").val(data.Modelo.Nome);
                $("#veiculo-campo-anofabricacao").val(data.AnoFabricacao);
                $("#veiculo-campo-numerocaminhao").val(data.NumeroCaminhao);
                $("#veiculo-campo-placa").val(data.Placa);
                $("#modal-veiculo").modal("show");
            },
            error: function (err) {
                bootbox.alert('Não foi possivel carregar a veículo!');
            }
        });
    });

    function limparCampos() {
        $("#veiculo-campo-marca").val("");
        $("#veiculo-campo-modelo").val("");
        $("#veiculo-campo-anofabricacao").val("");
        $("#veiculo-campo-numerocaminhao").val("");
        $("#veiculo-campo-placa").val("");
        $idAlterar = -1;
    }
});