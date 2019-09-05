$(function () {
    $idAlterar = -1;

    $tabelaVeiculo = $('#vendedor-index').DataTable({
        ajax: 'http://localhost:51242/vendedor/obtertodos',
        serverSide: true,
        columns: [
            { 'data': 'Id' },
            { 'data': 'Nome' },
            { 'data': 'Usuario.Login' },
            { 'data': 'Veiculo.Modelo'},
            {
                render: function (data, type, row) {
                    return "<button class='btn btn-primary botao-editar' data-id='" + row.Id + "'>Editar</button>\
                    <button class='btn btn-danger botao-apagar ml-2' data-id='"+ row.Id + "'>Apagar</button>";
                }
            }
        ]
    });

    $('#vendedor-botao-salvar').on('click', function () {
        $usuario = $('#vendedor-campo-usuario').val();
        $mdodelo = $('#vendedor-campo-veiculo').val();
        $nome = $('#vendedor-campo-nome')

        if ($idAlterar == -1) {
            inserir($usuario, $veiculo);
        } else {
            alterar($usuario, $veiculo);
        }
    });

    function alterar($usuario, $veiculo) {
        $.ajax({
            url: 'http://localhost:51242/vendedor/update',
            method: 'post',
            data: {
                id: $isAlterar,
                usuario: $usuario,
                veiculo: $veiculo,

            },
            success: function (data) {
                $('modal-vendedor').modal('hide');
                $idAlterar = -1;
                $tabelaVeiculo.ajax.reload();
            },
            error: function (err) {
                alert('Não foi possivel alterar');
            }
        });
    }

    function inserir($usuario, $veiculo) {
        $.ajax({
            url: 'http://localhost:51242/vendedor/inserir',
            method: 'post',
            data: {
                id: $isInserir,
                usuario: $usuario,
                veiculo: $veiculo,

            },
            success: function (data) {
                $('modal-vendedor').modal('hide');
                $tabelaVeiculo.ajax.reload();
            },
            error: function (err) {
                alert('Não foi possivel inserir');
            }
        });
    }

    $('.table').on('click', '.botao-apagar', function () {
        $idApagar = $(this).data('id');

        $.ajax({
            url: 'http://localhost:51242/vendedor/apagar?id=' + $idApagar,
            method: 'get',
            success: function (data) {
                $tabelaVeiculo.ajax.reload();
            },
            error: function (err) {
                alert('Não foi possivel apagar');
            }
        });
    });

    $('.table').on('click', '.botao-editar', function () {
        $idAlterar = $(this).data('id');

        $.ajax({
            url: 'http://localhost:51242/vendedor/editar?id=' + $idAlterar,
            method: 'get',
            success: function (data) {
                $('#vendedor-campo-usuario').val(data.Usuario);
                $('#vendedor-campo-veiculo').val(data.Veiculo);

            },
            error: function (err) {
                alert('Não foi possivel carregar');
            }
        });
    });
});