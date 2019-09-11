$(function () {

    $idAlterar = -1;

    $tabelaProduto = $("#produto-tabela").DataTable({
        ajax: "http://localhost:51242/Produto/obtertodos",
        serverSide: true,
        columns: [
            { "data": "Id" },
            { "data": "Nome" },
            { "data": "Categoria.Nome" },
            { "data": "CodigoBarra" },
            { "data": "QuantidadeProdutos" },
            { "data": "ValorUnitario" },
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
        $codigo = $("#produto-campo-codigo").val();
        $quantidadeProdutos = $("#produto-campo-quantidade").val();
        $valorUnitario = $("#produto-campo-valor").val();

        if ($idAlterar == -1) {
            inserir($nome, $categoria, $codigo, $quantidadeProdutos, $valorUnitario);
        } else {
            alterar($nome, $categoria, $codigo, $quantidadeProdutos, $valorUnitario);
        }

        function alterar($nome, $categoria, $codigoBarra, $quantidadeProdutos, $valorUnitario) {
            $.ajax({
                url: "http://localhost:51242/Produto/update",
                method: 'post',
                data: {
                    id: $idAlterar,
                    nome: $nome,
                    idCategoria: $categoria,
                    codigoBarra: $codigoBarra,
                    quantidadeProdutos: $quantidadeProdutos,
                    valorUnitario: $valorUnitario
                },
                success: function (data) {
                    $("#modal-produto").modal("hide");
                    $idAlterar = -1;
                    $tabelaProduto.ajax.reload();
                },
                error: function (err) {
                    alert("Não foi possivel alterar o Produto");
                }
            })
        }

        function inserir($nome, $categoria, $codigoBarra, $quantidadeProdutos, $valorUnitario) {
            $.ajax({
                url: "http://localhost:51242/Produto/Inserir",
                method: "post",
                data: {
                    nome: $nome,
                    idCategoria: $categoria,
                    codigo: $codigoBarra,
                    quantidadeProdutos: $quantidadeProdutos,
                    valorUnitario: $valorUnitario
                },
                success: function (data) {
                    $("#modal-produto").modal('hide');
                    $tabelaProduto.ajax.reload();
                    alert("Registro Inserido Com Sucesso")
                },
                error: function (err) {
                    alert('Não foi possivel inserir');
                }
            })
        }
    })

    $(".table").on("click", ".botao-apagar", function () {
        $idApagar = $(this).data("id");

        $ajax({
            url: "http://localhost:51242/Produto/apagar?id=" + $idAlterar,
            method: "get",
            success: function (data) {
                $tabelaProduto.ajax.reload();
            },
            error: function (err) {
                alert('Não foi possivel apagar');
            }
        });
    });

    $(".table").on("click", "botao-editar", function () {
        $idAlterar = $(this).data("id");

        $.ajax({
            url: "http://localhost:51242/Produto/obterpeloid?id=" + idAlterar,
            methd: "get",
            success: function (data) {
                $("#produto-campo-nome").val(data.Nome);
                $("#produto-campo-categoria").val(data.Categoria);
                $("#produto-campo-codigo-barra").val(data.CodigoBarra);
                $("#produto-campo-quantidade-produtos").val(data.QuantidadeProdutos);
                $("#produto-campo-valor-unitatio").val(data.ValorUnitario);
                $("#modal-produto").modal("show");
            },
            error: function (err) {
                alert('Não foi possivel carregar');
            }
        })
    });
});