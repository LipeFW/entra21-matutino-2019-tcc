$(function () {
    $idAlterar = -1;

    $tabelaProduto = $('#produtos-index').DataTable({
        ajax: 'http://localhost:51242/Produto/obtertodos',
        serverSide: true,
        columns: [
            { 'data': 'Id' },

        ]
    })
})