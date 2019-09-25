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
                    return '<button class="btn btn-primary botao-editar" data-id="' + row.Id + '"><i class="fas fa-pencil-alt"></i>  Editar</button>\<button class="btn btn-danger botao-apagar ml-1" data-id="' + row.Id + '"><i class="fas fa-trash-alt"></i>  Apagar</button>';
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
                    alert('Não foi possivel alterar');
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
                    alert('Registro inserido com Sucesso');
                },
                error: function (err) {
                    alert('Não foi possivel inserir');
                }
            });
        }
    });

    $("#veiculo-tabela").on("click", ".botao-apagar", function () {
        $idApagar = $(this).data("id");
        bootbox.confirm({
            message: "Deseja realmente apagar o registro?",
            buttons: {
                confirm: {
                    label: 'Sim',
                    className: 'btn-success'
                },
                cancel: {
                    label: 'Não',
                    className: 'btn-danger'
                }
            },
            callback: function (result) {
                if (result)
                    $.ajax({
                        url: "http://localhost:51242/Veiculo/Apagar?id=" + $idApagar,
                        method: "get",
                        success: function (data) {
                            $tabelaVeiculo.ajax.reload();
                            bootbox.alert("Registro apagado com sucesso");

                        },
                        error: function (err) {
                            bootbox.alert('Não foi possível apagar');
                        }
                    });
            }
        });
    });

    $(".table").on("click", ".botao-editar", function () {
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
                alert('Não foi possivel carregar');
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