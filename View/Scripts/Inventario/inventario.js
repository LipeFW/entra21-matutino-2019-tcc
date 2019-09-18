$(function () {
    $idAlterar = -1;

    $tabelaInventario = $('#inventario-tabela').DataTable({
        ajax: 'http://localhost:51242/inventario/obtertodos',
        serverSide: true,
        columns: [
            { 'data': 'Id' },
            { 'data': 'NumeroCaminhao' },
            {
                render: function (data, type, row) {
                    return '<button class="btn btn-primary botao-editar" data-id="' + row.Id + '"><i class="fas fa-pencil-alt"></i> Editar</button>\<button class="btn btn-danger botao-apagar ml-1" data-id="' + row.Id + '"><i class="fas fa-trash-alt"></i> Apagar</button>'
                }
            }
        ]
    });

    $('#inventario-botao-salvar').on('click', function (data) {
        $numero_caminhao = $('inventario-campo-numerocaminaho').val();

        if ($idAlterar == -1) {
            inserir($numero_caminhao);
        } else {
            alterar($numero_caminhao);
        }
    });
});