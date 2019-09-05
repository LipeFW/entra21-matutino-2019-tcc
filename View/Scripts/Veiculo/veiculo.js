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
                    return "<button class='btn btn-primary botao-editar' data-id='" + row.Id + "'>Editar</button>\
                    <button class='btn btn-danger botao-apagar ml-2' data-id='"+ row.Id + "'>Apagar</button>";
                }
            }
        ]
    });

    $('#veiculo-botao-salvar').on('click', function () {
        $marca = $('#veiculo-campo-marca').val();
        $mdodelo = $('#veiculo-campo-modelo').val();
        $ano_fabricacao = $('#veiculo-campo-ano-fabricacao').val();
        $numero_caminhao = $('#veiculo-campo-numero-caminhao').val();
        $placa = $('#veiculo-campo-placa').val();

        if ($idAlterar == -1) {
            inserir($marca, $modelo, $ano_fabricacao, $numero_caminhao, $placa);
        } else {
            alterar($marca, $modelo, $ano_fabricacao, $numero_caminhao, $placa);
        }
    });

    function alterar($marca, $modelo, $ano_fabricacao, $numero_caminhao, $placa) {
        $.ajax({
            url: 'http://localhost:51242/veiculo/update',
            method: 'post',
            data: {
                id: $isAlterar,
                marca: $marca,
                modelo: $modelo,
                ano_fabricacao: $ano_fabricacao,
                numero_caminhao: $numero_caminhao,
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
        });
    }

    function inserir($marca, $modelo, $ano_fabricacao, $numero_caminhao, $placa) {
        $.ajax({
            url: 'http://localhost:51242/veiculo/inserir',
            method: 'post',
            data: {
                marca: $marca,
                modelo: $modelo,
                ano_fabricacao: $ano_fabricacao,
                numero_caminhao: $numero_caminhao,
                placa: $placa
            },
            success: function (data) {
                $('#modal-veiculo').modal('hide');
                $tabelaVeiculo.ajax.reload();
            },
            error(err) {
                alert('Não foi possivel inserir');
            }
        });
    }

    $('.table').on('click', '.botao-apagar', function () {
        $idApagar = $(this).data('id');

        $.ajax({
            url: 'http://localhost:51242/veiculo/apagar?id=' + $idApagar,
            method: 'get',
            success: function (data) {
                $tabelaVeiculo.ajax.reload();
            },
            error: function (err) {
                alert('Não foi possivel apagar');
            }
        });
    });

    $('.table').on('click', '.botao-editar', function () {
        $idAlterar = $(this).data('id');

        $.ajax({
            url: 'http://localhost:51242/veiculo/editar?id=' + $idAlterar,
            method: 'get',
            success: function (data) {
                $('#veiculo-campo-marca').val(data.Marca);
                $('#veiculo-campo-modelo').val(data.Modelo);
                $('#veiculo-campo-ano-fabricacao').val(data.Ano_Fabricacao);
                $('#veiculo-campo-numero-caminhao').val(data.Numero_caminhao);
                $('#veiculo-campo-placa').val(data.Placa);
                $('#modal-veiculo').modal('show');

            },
            error: function (err) {
                alert('Não foi possivel carregar');
            }
        });
    });
});