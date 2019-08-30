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
        $categoria = $('#produto-campo-Categoria').val();
        $codigoBarra = $('#produto-campo-codigo-barra').val();
        $quantidadeProdutos = $('#produto-campo-quantidade-produtos').val();
        $valorUnitario = $('#produto-campo-valor-unitario').val();

        if ($idAlterar == -1) {
            inserir($categoria, $cofigoBarra, $quantidadeProdutos, $valorUnitario);
        } else {
            alterar($categoria, $codigoBarra, $quantidadeProdutos, $valorUnitario);
        }

        function alterar($categoria, $codigoBarra, $quantidadeProdutos, $valorUnitario) {
            $.ajax({
                url: 'http://localhost:51242/Produto/update',
                method: "post",
                data: {
                    id: $idAlterar,
                    categoria: $categoria,
                    codigoBarra: $codigoBarra,
                    quantidadeProdutos: $quantidadeProdutos,
                    valorUnitario: $valorUnitario
                },
                success: function (data) {
                    $('#modal-produto').modal('hide');
                    $idAlterar = -1;
                    $tabelaProduto.ajax.reload();
                },
                error: function (err) {
                    alert('Não foi possivel alterar o Produto');
                }
            })
        }

        function inserir($categoria, $codigoBarra, $quantidadeProdutos, $valorUnitario) {
            $.ajax({
                url: 'http://localhost:51242/Produto/inserir',
                method: "post",
                data: {
                    categoria: $categoria,
                    codigoBarra: $codigoBarra,
                    quantidadeProdutos: $quantidadeProdutos,
                    valorUnitario: $valorUnitario
                },
                success: function (data) {
                    $('modal-produto').modal('hide');
                    $tabelaProduto.ajax.reload();
                },
                error: function (err) {
                    alert("Não foi possivel Inserir o Produto");
                }
            });
        }
    });

    $('.table').on('click', '.botao-apagar', function () {
        $idApagar = $(this).data('id');

        $ajax({
            url: 'http://localhost:51242/Produto/apagar?=' + $idAlterar,
            method: 'get',
            success: function (data) {
                $tabelaProduto.ajax.reload();
            },
            error: function (err) {
                alert("Não foi possivel apagar");
            }
        });
    });

    $('.table').on('click', 'botao-editar', function () {
        $idAlterar = $(this).data('id');

        $.ajax({
            url: 'http://localhost:51242/Produto/obterpeloid?=' + idAlterar,
            methd: 'get',
            success: function (data) {
                $('#produto-campo-categoria').val(data.Categoria);
                $('#produto-campo-codigo-barra').val(data.CodigoBarra);
                $('#produto-campo-quantidade-produtos').val(data.QuantidadeProdutos);
                $('#produto-campo-valor-unitatio').val(data.ValorUnitario);
                $('#modal-produto').modal('show');
            },
            error: function (err) {
                alert("Não foi possivel carregar");
            }
        });
    });
});