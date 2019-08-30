$(function () {
    $idAlterar = -1;

    $tabelaVenda = $('#vendas-index').DataTable({
        ajax: 'http://localhost:51242/Venda/obtertodos',
        serverSide: true,
        Columns: [
            { 'data': 'Id' },
            { 'data': 'Quantidade' },
            { 'data': 'Vendedor' },
            { 'data': 'Cliente' },
            { 'data': 'Produto' },
            { 'data': 'Total' },
            { 'data': 'desconto' },
            {
                render: function (data, type, row) {
                    return '<button class="btn btn-primary botao-editar" data-id="' + row.Id + '">Editar</button>\<button class="btn btn-danger botao-apagar"data-id="' + row.Id + '">Apagar</button>'
                }
            }
        ]
    });

    $('#venda-botao-salvar').on('click', function () {
        $quantidade = $('#venda-campo-quantidade').val();
        $vendedor = $('#venda-campo-vendedor').val();
        $cliente = $('#venda-campo-cliente').val();
        $produto = $('#venda-campo-produto').val();
        $total = $('#venda-campo-total').val();
        $desconto = $('#venda-campo-desconto').val();
    })
})