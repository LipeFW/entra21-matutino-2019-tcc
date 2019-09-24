﻿$(function () {
    $idAlterar = -1;

    $tabelaRota = $('#rota-tabela').DataTable({
        ajax: 'http://localhost:51242/Rota/obtertodos',
        serverSide: true,
        columns: [
            { 'data': 'Id' },
            { 'data': 'Nome' },
            { 'data': 'Vendedor.Nome' },
            {
                render: function (data, type, row) {
                    return '<button class="btn btn-primary botao-editar" data-id="' + row.Id + '"><i class="fas fa-pencil-alt"></i>  Editar</button>\<button class="btn btn-danger botao-apagar ml-1" data-id="' + row.Id + '"><i class="fas fa-trash-alt"></i>  Apagar</button>'
                }
            }
        ]
    });

    $('#rota-botao-salvar').on('click', function () {
        $nome = $('#rota-campo-nome').val();
        $idVendedor = $('#rota-campo-vendedor').val();

        if ($idAlterar == -1) {
            inserir($nome, $idVendedor);
        } else {
            alterar($nome, $idVendedor);
        }
    });

    function alterar($nome, $idVendedor) {
        $.ajax({
            url: 'http://localhost:51242/Rota/update',
            method: 'post',
            data: {
                id: $idAlterar,
                nome: $nome,
                idVendedor: $idVendedor
            },
            success: function (data) {
                $("#modal-rota").modal("hide");
                $idAlterar = -1;
                $tabelaRota.ajax.reload();
            },
            error: function (err) {
                alert('Não foi possivel alterar');
            }
        });
    }

    function inserir($nome, $idVendedor) {
        $.ajax({
            url: 'http://localhost:51242/Rota/inserir',
            method: 'post',
            data: {
                nome: $nome,
                idVendedor: $idVendedor
            },
            success: function (data) {
                $("#modal-rota").modal('hide');
                alert('Registro inserido com Sucesso');
                $tabelaRota.ajax.reload();
            },
            error: function (err) {
                alert('Não foi possivel inserir');
            }
        });
    }

    $('.table').on('click', '.botao-apagar', function () {
        $idApagar = $(this).data('id');
        var confirmacao = confirm("Deseja realmente apagar o registro?");
        if (confirmacao == true) {
            $.ajax({
                url: 'http://localhost:51242/Rota/apagar?id=' + $idApagar,
                method: 'get',
                success: function (data) {
                    $tabelaRota.ajax.reload();
                },
                error: function (err) {
                    alert('Não foi possivel apagar');
                }
            });
        }
    });

    $('.table').on('click', '.botao-editar', function () {
        $idAlterar = $(this).data('id');

        $.ajax({
            url: 'http://localhost:51242/Rota/obterpeloid?id=' + $idAlterar,
            method: 'get',
            success: function (data) {
                $('#rota-campo-nome').val(data.Nome);
                $('#rota-campo-vendedor').val(data.Vendedor);

                $('#modal-rota').modal('show');
            },
            error: function (err) {
                alert('Não foi possivel carregar')
            }
        })
    })
});