$(function () {
    $idAlterar = -1;

    $tabelaVeiculo = $('#veiculo-tabela').DataTable({
        ajax: 'http://localhost:51242/veiculo/obtertodos',
        serverSide: true,
        columns: [
            { 'data': 'Id' },
            { 'data': 'Marca' },
            { 'data': 'Modelo' },
            { 'data': 'AnoFabricacao' },
            { 'data': 'NumeroCaminhao' },
            { 'data': 'Placa' },
            {
                render: function (data, type, row) {
                    return '<button class="btn btn-primary botao-editar" data-id="' + row.Id + '"><i class="fas fa-pencil-alt"></i>  Editar</button>\<button class="btn btn-danger botao-apagar ml-1" data-id="' + row.Id + '"><i class="fas fa-trash-alt"></i>  Apagar</button>'

                }
            }
        ]
    });


    $('#veiculo-botao-salvar').on('click', function () {
        $marca = $('#veiculo-campo-marca').val();
        $modelo = $('#veiculo-campo-modelo').val();
        $ano_fabricacao = $('#veiculo-campo-anofabricacao').val();
        $numero_caminhao = $('#veiculo-campo-numerocaminhao').val();
        $placa = $('#veiculo-campo-placa').val();

        if ($idAlterar == -1) {
            inserir($marca, $modelo, $ano_fabricacao, $numero_caminhao, $placa);
        } else {
            alterar($marca, $modelo, $ano_fabricacao, $numero_caminhao, $placa);
        }

        //Arrumar
        function alterar($marca, $modelo, $ano_fabricacao, $numero_caminhao, $placa) {
        $.ajax({
            url: 'http://localhost:51242/veiculo/update',
            method: 'post',
            data: {
                id: $idAlterar,
                marca: $marca,
                modelo: $modelo,
                anoFabricacao: $ano_fabricacao,
                numeroCaminhao: $numero_caminhao,
                placa: $placa
            },
            success: function (data) {
                $('modal-veiculo').modal('hide');
                $idAlterar = -1;
                $tabelaVeiculo.ajax.reload();
            },
            error: function (err) {
                alert('Não foi possivel alterar');
                }
            })
        }


        function inserir($marca, $modelo, $ano_fabricacao, $numero_caminhao, $placa) {
        $.ajax({
            url: 'http://localhost:51242/veiculo/inserir',
            method: 'post',
            data: {
                marca: $marca,
                modelo: $modelo,
                anoFabricacao: $ano_fabricacao,
                numeroCaminhao: $numero_caminhao,
                placa: $placa
            },
            success: function (data) {
                $('#modal-veiculo').modal('hide');
                $tabelaVeiculo.ajax.reload();
                alert('Registro inserido com Sucesso');
            },
            error(err) {
                alert('Não foi possivel inserir');
                }
            })
        }
    })

    $('.table').on('click', '.botao-apagar', function () {
        $idApagar = $(this).data('id');

        $.ajax({
            url: 'http://localhost:51242/veiculo/apagar?id=' + $idApagar,
            method: 'get',
            success: function (data) {
                $tabelaVeiculo.ajax.reload();
                alert("Registro Apagado Com Sucesso")
            },
            error: function (err) {
                alert('Não foi possivel apagar');
            }
        });
    });

    $('.table').on('click', '.botao-editar', function () {
        $idAlterar = $(this).data('id');

        $.ajax({
            url: "http://localhost:51242/Veiculo/obterpeloid?id=" + $idAlterar,
            method: 'get',
            success: function (data) {
                $('#veiculo-campo-marca').val(data.Marca);
                $('#veiculo-campo-modelo').val(data.Modelo);
                $('#veiculo-campo-anofabricacao').val(data.AnoFabricacao);
                $('#veiculo-campo-numerocaminhao').val(data.NumeroCaminhao);
                $('#veiculo-campo-placa').val(data.Placa);

                $('#modal-veiculo').modal('show');

            },
            error: function (err) {
                alert('Não foi possivel carregar');
            }
        })
    });
});