﻿$(function () {
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

        if ($idAlterar == -1) {
            inserir($quantidade, $vendedor, $cliente, $produto, $total, $desconto);
        } else {
            alterar($quantidade, $vendedor, $cliente, $produto, $total, $desconto);
        }
    });

    function alterar($quantidade, $vendedor, $cliente, $produto, $total, $desconto) {
        $.ajax({
            url: 'http://localhost:51242/Venda/update',
            method: 'post',
            data: {
                id: $idAlterar,
                quantidade: $quantidade,
                vendedor: $vendedor,
                cliente: $cliente,
                produto: $produto,
                total: $total,
                desconto: $desconto
            },
            success: function (data) {
                $("#modal-venda").mdal("hide");
                $idAlterar = -1;
                $tabelaVenda.ajax.reload();
            },
            error: function (err) {
                alert("Não foi possivel alterar");
            }
        })
    }

    function inserir($quantidade, $vendedor, $cliente, $total, $desconto) {
        $.ajax({
            url: 'http://localhost:51242/Venda/update',
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

    $('.table').on('click', 'botao-editar', function () {
        $idAlterar = $(this).data('id');

        $.ajax({
            url: 'http://localhost:51242/Venda/obterpeloid?id=' + $idAlterar,
            method: 'get',

            success: function (data) {
                $('venda-campo-qantidade').val(data.Quantidade);
                $('venda-campo-vendedor').val(data.Vendedor);
                $('venda-campo-cliente').val(data.Cliente);
                $('venda-campo-produto').val(data.Produto);
                $('venda-campo-total').val(data.Total);
                $('venda-campo-desconto').val(data.Desconto);
                $('modal-venda').modal('show');
            },
            error: function (err) {
                alert("Mão foi possivel editar");
            }
        })
    });
})