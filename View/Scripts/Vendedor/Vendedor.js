$(function () {
    $idAlterar = -1;

    $tabelaVendedor = $('#vendedor-tabela').DataTable({
        ajax: 'http://localhost:51242/vendedor/obtertodos',
        serverSide: true,
        columns: [
            { 'data': 'Id' },
            { 'data': 'Nome' },
            { 'data': 'Usuario.Nome' },
            { 'data': 'Veiculo.Modelo' },
            {
                render: function (data, type, row) {
                    return "<button class='btn btn-primary botao-editar' data-id='" + row.Id + "'>Editar</button>\
                    <button class='btn btn-danger botao-apagar ml-2' data-id='"+ row.Id + "'>Apagar</button>";
                }
            }
        ]
    });

    $('vendedor-botao-salvar').on("click", function () {
        $nome = $('#vendedor-campo-nome').val();
        $usuario = $('#vendedor-campo-usuario').val();
        $veiculo = $('#vendedor-campo-veiculo').val();

        if (($nome.trim() == "") || ($usuario == -1) || ($veiculo == -1)) {
            alert("Preencha corretamente todos os campos")
            return null;
        }

        if ($idAlterar == -1) {
            inserir($nome, $usuario, $veiculo);
        }
        else {
            alterar($ome, $usuario, $veiculo);
        }

    });

    function alterar($nome, $usuario, $veiculo) {
        $.ajax({
            url: 'http://localhost:51242/vendedor/update',
            method: 'post',
            data: {
                id: $idAlterar,
                nome: $nome,
                usuario: $usuario,
                veiculo: $veiculo
            },
            success: function (data) {
                $('#modal-vendedor').modal('hide');
                $idAlterar = -1;
                $tabelaVendedor.ajax.reload();
            },
            error: function (err) {
                alert("Não foi possivel alterar");
            }
        })
    }

    function inserir($nome, $usuario, $veiculo) {
        $.ajax({
            url: 'http://localhost:51242/vendedor/inserir',
            method: 'post',
            data: {
                nome: $nome,
                usuario: $usuario,
                veiculo: $veiculo
            },
            success: function (data) {
                $('#modal-vendedor').modal('hide');
                $tabelaVendedor.ajax.reload();
            },
            error: function (err) {
                alert("Não foi possivel inserir");
            }
        })
    }

    $('.table').on('click', '.botao-apagar', function () {
        $idApagar = $(this).data('id');

        $.ajax({
            url: 'http://localhost:51242/vendedor/apagar?id=' + $idApagar,
            method: 'get',
            success: function (data) {
                $tabelaVendedor.ajax.reload();
            },
            error: function (err) {
                alert("Não foi possivel apagar");
            }
        });
    });

    $('.table').on('click', '.botao-editar', function () {
        $idAlterar = $(this).data('id');

        $.ajax({
            url: 'http://localhost:51242/vendedor/obterpeloid?id=' + $idAlterar,
            method: 'get',

            success: function (data) {
                $('#vendedor-campo-nome').val(data.Nome);
                $('#vendedor-campo-usuario').val(data.Usuario);
                $('#vendedor-campo-veiculo').val(data.Veiculo);
            }
        });
    });
});