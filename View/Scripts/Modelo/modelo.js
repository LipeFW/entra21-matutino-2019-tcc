$(function () {
    $idAlterar = -1;

    $tabelaModelo = $("#modelo-tabela").DataTable({
        ajax: "http://localhost:51242/modelo/obtertodos",
        serverSide: true,
        columns: [
            { "data": "Id" },
            { "data": "Nome" },
            { "data": "Marca.Nome" },
            {
                render: function (data, type, row) {
                    return '<button class="fadeIn animated btn btn-primary botao-editar" data-id="' + row.Id + '"><i class="fas fa-pencil-alt"></i>  Editar</button>\<button class="fadeIn animated btn btn-danger botao-apagar ml-1" data-id="' + row.Id + '"><i class="fas fa-trash-alt"></i>  Apagar</button>'
                }
            }
        ]
    });

    $("#modelo-botao-salvar").on("click", function () {
        $nome = $("#modelo-campo-nome").val();
        $marca = $("#modelo-campo-marca").val();

        if ($idAlterar == -1) {
            inserir($nome, $marca);
        } else {
            alterar($nome, $marca);
        }

        function alterar($nome, $marca) {
            $.ajax({
                url: "http://localhost:51242/modelo/update",
                method: 'post',
                data: {
                    id: $idAlterar,
                    nome: $nome,
                    idMarca: $marca
                },
                success: function (data) {
                    $("#modal-modelo").modal("hide");
                    limparCampos();
                    $idAlterar = -1;
                    $tabelaModelo.ajax.reload();
                },
                error: function (err) {
                    bootbox.alert("Não foi possivel alterar o modelo");
                }
            });
        }

        function inserir($nome, $marca) {
            $.ajax({
                url: "http://localhost:51242/modelo/inserir",
                method: "post",
                data: {
                    nome: $nome,
                    idMarca: $marca
                },
                success: function (data) {
                    $("#modal-modelo").modal('hide');
                    limparCampos();
                    $tabelaModelo.ajax.reload();
                    bootbox.alert("Registro Inserido Com Sucesso")
                },
                error: function (err) {
                    alert('Não foi possivel inserir');
                }
            });
        }
    });

    $("#modelo-tabela").on("click", ".botao-apagar", function () {
        $idApagar = $(this).data("id");
            $.ajax({
                url: "http://localhost:51242/modelo/apagar?id=" + $idApagar,
                method: "get",
                success: function (data) {
                    $tabelaModelo.ajax.reload();
                    alert('Apagado com Sucesso');
                },
                error: function (err) {
                    alert('Não foi possivel apagar');
                }
            });
        }
    });

    $("#modelo-tabela").on("click", ".botao-editar", function () {
        $idAlterar = $(this).data("id");

        $.ajax({
            url: "http://localhost:51242/modelo/obterpeloid?id=" + $idAlterar,
            method: "get",
            success: function (data) {
                $("#modelo-campo-nome").val(data.Nome);
                $("#modelo-campo-marca").val(data.Marca.Nome);
                $("#modal-modelo").modal("show");
            },
            error: function (err) {
                alert('Não foi possivel carregar');
            }
        })
    });

    function limparCampos() {
        $("#modelo-campo-nome").val("");
        $("#modelo-campo-marca").val("");
        $idAlterar = -1;
    }
});