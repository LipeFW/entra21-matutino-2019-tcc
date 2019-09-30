$(function () {
    $idAlterar = -1;

    $tabelaVendedor = $('#vendedor-tabela').DataTable({
        ajax: 'http://localhost:51242/Vendedor/obtertodos',
        serverSide: true,
        columns: [
            { 'data': 'Id' },
            { 'data': 'Nome' },
            { 'data': 'Usuario.Nome' },
            { 'data': 'Veiculo.MarcaEModelo' },
            {
                render: function (data, type, row) {
                    return '<button class="fadeIn animated btn btn-primary botao-editar" data-id="' + row.Id + '"><i class="fas fa-pencil-alt"></i>  Editar</button><button class="fadeIn animated btn btn-danger botao-apagar ml-1" data-id="' + row.Id + '"><i class="fas fa-trash-alt"></i>  Apagar</button>';
                }
            }
        ]
    });

    $('#vendedor-botao-salvar').on("click", function () {
        $nome = $('#vendedor-campo-nome').val();
        $usuario = $('#vendedor-campo-usuario').val();
        $veiculo = $('#vendedor-campo-veiculo').val();

        if (($nome.trim() == "")) {
            alert("Preencha corretamente os campos!");
            return null;
        }
        if ($idAlterar == -1) {
            inserir($nome, $usuario, $veiculo);
        }
        else {
            alterar($nome, $usuario, $veiculo);
        }
    });

    function alterar($nome, $usuario, $veiculo) {
        $.ajax({
            url: 'http://localhost:51242/Vendedor/update',
            method: 'post',
            data: {
                id: $idAlterar,
                nome: $nome,
                idUsuario: $usuario,
                idVeiculo: $veiculo
            },
            success: function (data) {
                $('#modal-vendedor').modal('hide');
                limparCampos();
                $idAlterar = -1;
                $tabelaVendedor.ajax.reload();
                alert("Vendedor editado com sucesso!");
            },
            error: function (err) {
                alert("Não foi possivel editar o vendedor!");
                limparCampos();
                $idAlterar = -1;
            }
        });
    }

    function inserir($nome, $usuario, $veiculo) {
        $.ajax({
            url: 'http://localhost:51242/Vendedor/inserir',
            method: 'post',
            data: {
                nome: $nome,
                idUsuario: $usuario,
                idVeiculo: $veiculo
            },
            success: function (data) {
                $('#modal-vendedor').modal('hide');
                limparCampos();
                $tabelaVendedor.ajax.reload();
                alert("Vendedor cadastrado com sucesso!");
            },
            error: function (err) {
                alert("Não foi possivel cadastrar o vendedor!");
            }
        });
    }

    $("#vendedor-tabela").on("click", ".botao-apagar", function () {
        $idApagar = $(this).data("id");
        bootbox.confirm({
            message: "Deseja realmente remover o vendedor?",
            buttons: {
                confirm: {
                    label: '<i class="fa fa-check"></i> Sim',
                    className: 'rubberBand animated btn-success',
                },
                cancel: {
                    label: '<i class="fa fa-times"></i> Não',
                    className: 'rubberBand animated btn-outline-danger'
                }
            },
            callback: function (result) {
                if (result)
                    $.ajax({
                        url: "http://localhost:51242/Vendedor/Apagar?id=" + $idApagar,
                        method: "get",
                        success: function (data) {
                            $tabelaVendedor.ajax.reload();
                            bootbox.alert("Vendedor removido com sucesso!");

                        },
                        error: function (err) {
                            bootbox.alert('Não foi possível remover o vendedor!');
                        }
                    });
            }
        });
    });

    $('#vendedor-tabela').on('click', '.botao-editar', function () {
        $idAlterar = $(this).data('id');

        $.ajax({
            url: 'http://localhost:51242/Vendedor/obterpeloid?id=' + $idAlterar,
            method: 'get',
            success: function (data) {
                $('#vendedor-campo-nome').val(data.Nome);
                $('#vendedor-campo-usuario').val(data.Usuario.Nome);
                $('#vendedor-campo-veiculo').val(data.Veiculo.Nome);
                $('#modal-vendedor').modal('show');
            },
            error: function (err) {
                alert("Não foi possivel carregar o vendedor!");
            }
        });
    });

    function limparCampos() {
        $('#vendedor-campo-nome').val("");
        $('#vendedor-campo-usuario').val("");
        $('#vendedor-campo-veiculo').val("");
        $idAlterar = -1;
    }
});