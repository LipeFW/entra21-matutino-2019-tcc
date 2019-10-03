$(function () {
    $idAlterar = -1;

    $tabelaVenda = $('#vendas-tabela').DataTable({
        ajax: 'http://localhost:51242/Venda/obtertodos',
        serverSide: true,
        columns: [
            { 'data': 'Id' },
            { 'data': 'Cliente.Nome' },
            { 'data': 'Vendedor.Nome' },
            { 'data': 'Total' },
            {
                render: function (data, type, row) {
                    return '<button class="btn btn-primary botao-editar" data-id="' + row.Id + '"><i class="fas fa-pencil-alt"></i>  Editar</button><button class="btn btn-danger botao-apagar ml-1" data-id="' + row.Id + '"><i class="fas fa-trash-alt"></i>  Apagar</button>'
                }
            }
        ]
    });

    $('#venda-botao-salvar').on('click', function () {
        $vendedor = $('#venda-campo-vendedor').val();
        $cliente = $('#venda-campo-cliente').val();
        $total = $('#venda-campo-total').val();
        $desconto = $('#venda-campo-desconto').val();

        if ($idAlterar == -1) {
            inserir($vendedor, $cliente, $total, $desconto);
        } else {
            alterar($vendedor, $cliente, $total, $desconto);
        }
    });

    function alterar($vendedor, $cliente, $total, $desconto) {
        $.ajax({
            url: 'http://localhost:51242/Venda/update',
            method: 'post',
            data: {
                id: $idAlterar,
                idVendedor: $vendedor,
                idCliente: $cliente,
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

    function inserir($vendedor, $cliente, $total, $desconto) {
        $.ajax({
            url: 'http://localhost:51242/Venda/inserir',
            method: 'post',
            data: {
                idVendedor: $vendedor,
                idCliente: $cliente,
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

    $("#venda-tabela").on("click", ".botao-apagar", function () {
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
                        url: "http://localhost:51242/Venda/Apagar?id=" + $idApagar,
                        method: "get",
                        success: function (data) {
                            $tabelaVenda.ajax.reload();
                            bootbox.alert("Registro apagado com sucesso");

                        },
                        error: function (err) {
                            bootbox.alert('Não foi possível apagar');
                        }
                    });
            }
        });
    });

    $('.table').on('click', '.botao-editar', function () {
        $idAlterar = $(this).data('id');

        $.ajax({
            url: 'http://localhost:51242/Venda/obterpeloid?id=' + $idAlterar,
            method: 'get',

            success: function (data) {
                $('#venda-campo-vendedor').val(data.Vendedor);
                $('#venda-campo-cliente').val(data.Cliente);
                $('#venda-campo-total').val(data.Total);
                $('#venda-campo-desconto').val(data.Desconto);

                $('#modal-venda').modal('show');

            },
            error: function (err) {
                alert("Não foi possivel editar");
            }
        })
    });
});