$(function () {
    $idAlterar = -1;

    $tabelaCliente = $('#cliente-tabela').DataTable({
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
    });

    function alterar($nome, $telefone, $cnpj, $cep) {
        $.ajax({
            url: 'http://localhost:51242/Cliente/update',

        })
    }
})