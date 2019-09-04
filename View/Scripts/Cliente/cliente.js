$(function () {
    $idAlterar = -1;

    $tabelaCliente = $('#cliente-tabela').DataTable({
        ajax: 'http://localhost:51242/cliente/obtertodos',
        serverSide: true,
        columns: [
            { 'data': 'Id' },
            { 'data': 'Nome' },
            { 'data': 'Telefone' },
            { 'data': 'Cnpj' },
            { 'data': 'Cep' },
            { 'data': 'Vendedor'},
            {
                render: function (data, type, row) {
                    return '<button class="btn btn-primary botao-editar"data-id"' + row.Id + '">Editar</button>\<button class="btn btn-danger botao-apagar"data-id="' + row.Id + '">Apagar</button>'
                }
            }
        ]
    });

    $('#cliente-botao-salvar').on("click", function () {
        $nome = $('#cliente-campo-nome').val();
        $telefone = $('#cliente-campo-telefone').val();
        $cnpj = $('#cliente-campo-cnpj').val();
        $cep = $('#cliente-campo-cep').val();
        $vendedor = $('#cliente-campo-vendedor').val();

        if ($idAlterar == -1) {
            inserir($nome, $telefone, $cnpj, $cep, $vendedor);
        }

        else {
            alterar($nome, $telefone, $cnpj, $cep, $vendedor);
        }
        function alterar($nome, $telefone, $cnpj, $cep, $vendedor) {
            $.ajax({
                url: 'http://localhost:51242/cliente/update',
                method: 'post',
                data: {
                    id: $idAlterar,
                    nome: $nome,
                    telefone: $telefone,
                    cnpj: $cnpj,
                    cep: $cep,
                    vendedor: $vendedor
                },
                success: function (data) {
                    $('#modal-cliente').modal('hide');
                    $idAlterar = -1;
                    $tabelaCliente.ajax.reload();
                },
                error: function (err) {
                    alert('Não foi possivel alterar');
                }
            })
        }

        function inserir($nome, $telefone, $cnpj, $cep, $vendedor) {
            $.ajax({
                url: 'http://localhost:51242/cliente/inserir',
                method: 'post',
                data: {
                    nome: $nome,
                    telefone: $telefone,
                    cnpj: $cnpj,
                    cep: $cep,
                    vendedor: $vendedor
                },
                success: function (data) {
                    $('#modal-cliente').modal('hide');
                    $tabelaCliente.ajax.reload();
                },
                error: function (err) {
                    alert('Não foi possivel cadastrar o cliente');
                }
            });
        }
    });


    $('.table').on('click', '.botao-apagar', function () {
        $idApagar = $(this).data('id');

        $ajax({
            url: 'http://localhost:51242/cliente/apagar?=' + $idApagar,
            method: 'get',
            success: function (data) {
                $tabelaCliente.ajax.reload();
            }
        });
    });

    $('.table').on('click', '.botao-editar', function () {
        $idAlterar = $(this).data('id');

        $.ajax({
            url: 'http://localhost:51242/cliente/obterpeloid?=' + $idAlterar,
            method: 'get',

            success: function (data) {
                $('#cliente-campo-nome').val(data.Nome);
                $('#cliente-campo-telefone').val(data.Telefone);
                $('#cliente-campo-cnpj').val(data.Cnpj);
                $('#cliente-campo-cep').val(data.Cep);
                $('#cliente-campo-vendedor').val(data.Vendedor)
                $('#modal-cliente').modal('show');
            },
            error: function (err) {
                alert('Não foi possivel carregar');
            }
        });
    });

});