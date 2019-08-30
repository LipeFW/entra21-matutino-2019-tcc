$(function () {
    $idAlterar = -1;

    $tabelaCliente = $('#clientes-tabela').DataTable({
        ajax: 'http://localhost:51242/Cliente/obtertodos',
        serverSide: true,
        columns: [
            { 'data': 'Id' },
            { 'data': 'Nome' },
            { 'data': 'Telefone' },
            { 'data': 'Cnpj' },
            { 'data': 'Cep' },
            {
                render: function (data, type, row) {
                    return '<button class="btn btn-primary botao-editar"data-id"' + row.Id + '">Editar</button>\<button> class="btn btn-danger botao-apagar"data-id="' + row.Id + '">Apagar</button>'
                }
            }
        ]
    });

    $('#cliente-botao-salvar').on("click", function () {
        $nome = $('#cliente-campo-nome').val();
        $telefone = $('#cliente-campo-telefone').val();
        $cnpj = $('#cliente-campo-cnpj').val();
        $cep = $('#cliente-campo-cep').val();

        if ($idAlterar == -1) {
            inserir($nome, $telefone, $cnpj, $cep);
        }

        else {
            alterar($nome, $telefone, $cnpj, $cep);
        }
        function alterar($nome, $telefone, $cnpj, $cep) {
            $.ajax({
                url: 'http://localhost:51242/Cliente/update',
                method: 'post',
                data: {
                    id: $idAlterar,
                    nome: $nome,
                    telefone: $telefone,
                    cnpj: $cnpj,
                    cep: $cep
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

        function inserir($nome, $telefone, $cnpj, $cep) {
            $.ajax({
                url: 'http://localhost:51242/Cliente/inserir',
                method = 'post',
                data: {
                    nome: $nome,
                    telefone: $telefone,
                    cnpj: $cnpj,
                    cep: $cep
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
            url: 'http://localhost:51242/Categoria/apagar?=' + $idApagar,
            method: 'get',
            success: function (data) {
                $tabelaCliente.ajax.reload();
            }
        });
    });

    $('.table').on('click', '.botao-editar', function () {
        $idAlterar = $(this).data('id');

        $.ajax({
            url: 'http://localhost:51242/Categoria/obterpeloid?=' + $idAlterar,
            method: 'get',

            success: function (data) {
                $('#cliente-campo-nome').val(data.Nome);
                $('#cliente-campo-telefone').val(data.Telefone);
                $('#cliente-campo-cnpj').val(data.Cnpj);
                $('#cliente-campo-cep').val(data.Cep);
                $('#modal-cliente').modal('show');
            },
            error: function (err) {
                alert('Não foi possivel carregar');
            }
        });
    });

});