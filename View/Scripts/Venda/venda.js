$(function () {
    $idAlterar = -1;

    $tabelaVenda = $('#venda-tabela').DataTable({
        ajax: 'http://localhost:51242/Venda/obtertodos',
        serverSide: true,
        columns: [
            { 'data': 'Id' },
            { 'data': 'Quantidade' },
            { 'data': 'Vendedor.Nome' },
            { 'data': 'Cliente.Nome' },
            { 'data': 'Produto.Nome' },
            { 'data': 'Total' },
            { 'data': 'Desconto' },
            {
                render: function (data, type, row) {
                    return '<button class="btn btn-primary botao-editar" data-id="' + row.Id + '"><i class="fas fa-pencil-alt"></i>  Editar</button><button class="btn btn-danger botao-apagar ml-1" data-id="' + row.Id + '"><i class="fas fa-trash-alt"></i>  Apagar</button>'
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

        if ($idAlterar == -1) {
            inserir($quantidade, $vendedor, $cliente, $produto, $total, $desconto);
        } else {
            alterar($quantidade, $vendedor, $cliente, $produto, $total, $desconto);
        }
    });

    function alterar($quantidade, $vendedor, $cliente, $produto, $total, $desconto) {
        $.ajax({
            url: 'http://localhost:51242/Venda/editar',
            method: 'post',
            data: {
                id: $idAlterar,
                quantidade: $quantidade,
                idVendedor: $vendedor,
                idCliente: $cliente,
                idProduto: $produto,
                total: $total,
                desconto: $desconto
            },
            success: function (data) {
                $("#modal-venda").modal("hide");
                $idAlterar = -1;
                $tabelaVenda.ajax.reload();
                alert("Registro alterado com sucesso");

            },
            error: function (err) {
                alert("Não foi possivel alterar");
            }
        })
    }

    function inserir($quantidade, $vendedor, $cliente, $total, $desconto) {
        $.ajax({
            url: 'http://localhost:51242/Venda/inserir',
            method: 'post',
            data: {
                quantidade: $quantidade,
                vendedor: $vendedor,
                cliente: $cliente,
                produto: $produto,
                total: $total,
                desconto: $desconto
            },
            success: function (data) {
                $("#modal-venda").modal("hide");
                $tabelaVenda.ajax.reload();
                alert('Registro inserido com sucesso');
            },
            error: function (err) {
                alert("Não foi possivel inserir");
            }
        });
    }

    $('.table').on('click', '.botao-apagar', function () {
        $idApagar = $(this).data('id');

        $.ajax({
            url: 'http://localhost:51242/Venda/apagar?id=' + $idApagar,
            method: 'get',
            success: function (data) {
                $tabelaVenda.ajax.reload();
            },
            error: function (err) {
                alert("Não foi possivel apagar")
            }
        });
    });

    $('.table').on('click', '.botao-editar', function () {
        $idAlterar = $(this).data('id');

        $.ajax({
            url: 'http://localhost:51242/Venda/obterpeloid?id=' + $idAlterar,
            method: 'get',

            success: function (data) {
                $('#venda-campo-quantidade').val(data.Quantidade);
                $('#venda-campo-vendedor').val(data.Vendedor);
                $('#venda-campo-cliente').val(data.Cliente);
                $('#venda-campo-produto').val(data.Produto);
                $('#venda-campo-total').val(data.Total);
                $('#venda-campo-desconto').val(data.Desconto);

                $('#modal-venda').modal('show');

            },
            error: function (err) {
                alert("Não foi possivel editar");
            }
        })
    });
})