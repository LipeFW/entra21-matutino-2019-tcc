$(function () {
    $idAlterar = -1;

    $tabelaCliente = $('#cliente-tabela').DataTable({
        ajax: 'http://localhost:51242/cliente/obtertodos',
        serverSide: true,
        columns: [
            { 'data': 'Id' },
            { 'data': 'Nome' },
            { 'data': 'Telefone' },
            { 'data': 'CNPJ' },
            { 'data': 'CEP' },
            { 'data': 'Vendedor.Nome' },
            {
                render: function (data, type, row) {
                    return '<button class="fadeIn animated btn btn-primary botao-editar" data-id="' + row.Id + '"><i class="fas fa-pencil-alt"></i>  Editar</button>\<button class="fadeIn animated btn btn-danger botao-apagar ml-1" data-id="' + row.Id + '"><i class="fas fa-trash-alt"></i>  Apagar</button>';
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

        if (($nome.trim() == "") || ($telefone.trim == "") || ($cnpj == "") || ($cep == "")) {
            bootbox.alert("Preencha corretamente os campos!");
            return null;
        }

        if ($idAlterar == -1) {
            inserir($nome, $telefone, $cnpj,  $cep, $vendedor);
        }

        else {
            alterar($nome, $telefone, $cnpj,  $cep, $vendedor);
        }
    });

    function alterar($nome, $telefone, $cnpj,  $cep, $vendedor) {
        $.ajax({
            url: 'http://localhost:51242/cliente/editar',
            method: 'post',
            data: {
                id: $idAlterar,
                nome: $nome,
                telefone: $telefone,
                cnpj: $cnpj,
                cep: $cep,
                idVendedor: $vendedor
            },
            success: function (data) {
                $('#modal-cliente').modal('hide');
                limparCampos();
                $idAlterar = -1;
                $tabelaCliente.ajax.reload();
            },
            error: function (err) {
                bootbox.alert('Não foi possível editar o cliente!');
                limparCampos();
                $idAlterar = -1;
            }
        })
    }

    function inserir($nome, $telefone, $cnpj,  $cep, $vendedor) {
        $.ajax({
            url: 'http://localhost:51242/cliente/inserir',
            method: 'post',
            data: {
                nome: $nome,
                telefone: $telefone,
                cnpj: $cnpj,
                cep: $cep,
                idVendedor: $vendedor
            },
            success: function (data) {
                $('#modal-cliente').modal('hide');
                limparCampos();
                bootbox.alert('Cliente cadastrado com sucesso!');
                $tabelaCliente.ajax.reload();
            },
            error: function (err) {
                bootbox.alert('Não foi possível cadastrar o cliente!');
            }
        });
    }

    $("#cliente-tabela").on("click", ".botao-apagar", function () {
        $idApagar = $(this).data("id");
        bootbox.confirm({
            message: "Deseja realmente remover o cliente?",
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
                        url: "http://localhost:51242/cliente/Apagar?id=" + $idApagar,
                        method: "get",
                        success: function (data) {
                            $tabelaCliente.ajax.reload();
                            bootbox.alert("Cliente removido com sucesso!");

                        },
                        error: function (err) {
                            bootbox.alert('Não foi possível remover o cliente!');
                        }
                    });
            }
        });
    });

    $('.table').on('click', '.botao-editar', function () {
        $idAlterar = $(this).data('id');

        $.ajax({
            url: 'http://localhost:51242/cliente/obterpeloid?id=' + $idAlterar,
            method: 'get',
            success: function (data) {
                $('#cliente-campo-nome').val(data.Nome);
                $('#cliente-campo-telefone').val(data.Telefone);
                $('#cliente-campo-cnpj').val(data.CNPJ);
                $('#cliente-campo-cep').val(data.CEP);
                $('#cliente-campo-vendedor').val(data.Vendedor);
                $('#modal-cliente').modal('show');
            },
            error: function (err) {
                bootbox.alert('Não foi possível carregar o cliente!');
            }
        });
    });

    function limparCampos() {
        $('#cliente-campo-nome').val("");
        $('#cliente-campo-telefone').val("");   
        $('#cliente-campo-cnpj').val("");
        $('#cliente-campo-cep').val("");
        $('#cliente-campo-vendedor').val("");
        $idAlterar = -1;
    }
});