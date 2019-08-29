$(function () {
    $idAlterar = -1;

    $tabelaProduto = $('#produtos-index').DataTable({
        ajax: 'http://localhost:51242/Produto/obtertodos',
        serverSide: true,
        columns: [
            { 'data': 'Id' },
            { 'data': 'Categoria' },
            { 'data': 'Codigo Barra' },
            { 'data': 'Quantidade Produtos' },
            { 'data': 'Valor Unitario'},
            {
                render: function (data, type, row) {
                    return '<button class="btn btn-primary mb-3 botao-editar"data-id="' + row.Id +'">Editar</button>/<button class="btn btn-danger mb-3 botao-apagar" data-id="' + row.Id + '"Apagar</button>'
                }
            }
        ]
    });

    $('#produto-botao-salvar').on('#click', function () {
        $categoria = $('#produto-campo-Categoria'),
    })
});