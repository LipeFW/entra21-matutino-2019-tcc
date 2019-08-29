$(function () {
    $idAlterar = -1;

    $tabelaVeiculo = $('#veiculos-index').DataTable({
        ajax: 'http://localhost:51242/veiculo/obtertodos',
        serverSide: true,
        columns: [
            { 'data': 'Id' },
            { 'data': 'Marca' },
            { 'data': 'Modelo' },
            { 'data': 'Ano Fabricacao' },
            { 'data': 'Numero Caminhao' },
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
        inserir($marca, $mdodelo, $ano_fabricacao, $numero_caminhao, $placa);
        } else {
            alterar($marca, $mdodelo, $ano_fabricacao, $numero_caminhao, $placa);
        }
    });     
});