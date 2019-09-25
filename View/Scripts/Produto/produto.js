$(function () {
    $idAlterar = -1;

    $tabelaProduto = $("#produto-tabela").DataTable({
        ajax: "http://localhost:51242/Produto/obtertodos",
        serverSide: true,
        columns: [
            { "data": "Id" },
            { "data": "Nome" },
            { "data": "Categoria.Nome" },
            { "data": "Valor" },
            {
                render: function (data, type, row) {
                    return '<button class="btn btn-primary botao-editar" data-id="' + row.Id + '"><i class="fas fa-pencil-alt"></i>  Editar</button><button class="btn btn-danger botao-apagar ml-1" data-id="' + row.Id + '"><i class="fas fa-trash-alt"></i>  Apagar</button>'
                }
            }
        ]
    });

    $("#produto-botao-salvar").on("click", function () {
        $nome = $("#produto-campo-nome").val();
        $categoria = $("#produto-campo-categoria").val();
        $valor = $("#produto-campo-valor").val();

        if ($idAlterar == -1) {
            inserir($nome, $categoria, $valor);
        } else {
            alterar($nome, $categoria, $valor);
        }

        function alterar($nome, $categoria, $valor) {
            $.ajax({
                url: "http://localhost:51242/Produto/update",
                method: 'post',
                data: {
                    id: $idAlterar,
                    nome: $nome,
                    quantidade: $quantidade,
                    valor: $valor
                },
                success: function (data) {
                    $("#modal-produto").modal("hide");
                    limparCampos();
                    $idAlterar = -1;
                    $tabelaProduto.ajax.reload();
                },
                error: function (err) {
                    alert("Não foi possivel alterar o Produto");
                }
            });
        }

        function inserir($nome, $categoria,  $quantidade, $valor) {
            $.ajax({
                url: "http://localhost:51242/Produto/Inserir",
                method: "post",
                data: {
                    nome: $nome,
                    quantidadeProdutos: $quantidade,
                    valorUnitario: $valor
                },
                success: function (data) {
                    $("#modal-produto").modal('hide');
                    //limparCampos();
                    $tabelaProduto.ajax.reload();
                    alert("Registro Inserido Com Sucesso")
                },
                error: function (err) {
                    alert('Não foi possivel inserir');
                }
            });
        }
    })

    $(".table").on("click", ".botao-apagar", function () {
        $idApagar = $(this).data("id");
        var confirmacao = confirm("Deseja realmente apagar o registro?");
        if (confirmacao == true) {
            $.ajax({
                url: "http://localhost:51242/Produto/apagar?id=" + $idApagar,
                method: "get",
                success: function (data) {
                    $tabelaProduto.ajax.reload();
                    alert('Apagado com Sucesso');
                },
                error: function (err) {
                    alert('Não foi possivel apagar');
                }
            });
        }
    });

    $(".table").on("click", ".botao-editar", function () {
        $idAlterar = $(this).data("id");

        $.ajax({
            url: "http://localhost:51242/Produto/obterpeloid?id=" + $idAlterar,
            method: "get",
            success: function (data) {
                $("#produto-campo-nome").val(data.Nome);
                $("#produto-campo-quantidade").val(data.Quantidade);
                $("#produto-campo-valor").val(data.Valor);
                $("#modal-produto").modal("show");
            },
            error: function (err) {
                alert('Não foi possivel carregar');
            }
        })
    });

    //function limparCampos() {
    //    $("#produto-campo-nome").val("");
    //    $("#produto-campo-categoria").val("");
    //    $("#produto-campo-codigo").val("");
    //    $("#produto-campo-quantidade").val("");
    //    $("#produto-campo-valor").val("");
    //    $idAlterar = -1;
    //}
});