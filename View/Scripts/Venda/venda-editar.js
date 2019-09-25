$(function () {

    $idAlterar = -1;

    $idVenda = $("#id").val();

    $tabela = $("#venda-tabela").DataTable({
        ajax: "/produto/obtertodospeloidvenda?idVenda=" + $idVenda,
        serverSide: true,
        columns: [
            { data: "Nome" },
            { data: "Quantidade" },
            { data: "Valor" },
            {
                render: function (data, type, row) {
                    return "<button class='btn btn-primary botao-editar' data-id=" + row.Id + ">Editar</button>\
                            <button class='btn btn-danger botao-apagar' data-id=" + row.Id + ">Apagar</button>";
                }
            }
        ]
    });

    $("#venda-tabela").on("click",
        ".botao-apagar", function () {
            $id = $(this).data("id");

            $.ajax({
                url: "/produto/apagar?id=" + $id,
                method: "get",
                success: function () {
                    $tabela.ajax.reload();
                },
                error: function () {
                    alert('Não foi possível apagar');
                }
            });
        });

    $("#modal-produto-salvar").on("click", function () {
        $nome = $("#modal-produto-nome").val();
        $quantidade = $("#modal-produto-quantidade").val();
        $valor = $("#modal-produto-valor").val();

        if ($nome.trim() == "") {
            alert("Preencha os campos corretamete");
            return null;
        }

        if ($idAlterar == -1) {
            inserir($nome, $quantidade, $valor);
        } else {
            alterar($nome, $quantidade, $valor);
        }

    });

    function inserir($nome, $quantidade, $valor) {
        $.ajax({
            url: "/produto/cadastro",
            method: "post",
            data: {
                nome: $nome,
                quantidade: $quantidade,
                valor: $valor,
                idVenda: $idVenda

            },
            success: function (data) {
                limparCampos();
                $tabela.ajax.reload();
                $("#venda-produto-modal").modal("hide");


            },

            error: function (err) {
                alert("Não foi possível cadastrar");

            }
        });
    }

    $("#venda-produtos-index").on("click", ".botao-editar", function () {
        $id = $(this).data("id");

        $.ajax({
            url: "/produto/obterpeloid?id=" + $id,
            method: "get",
            success: function (data) {
                $idAlterar = $id;
                $("#modal-produto-nome").val(data.Nome);
                $("#modal-produto-quantidade").val(data.Quantidade);
                $("#modal-produto-valor").val(data.Valor);
                $("#venda-produto-modal").modal("show");
            },
            error: function (data) {
                alert("Não foi possível buscar o registro");
            }
        })
    });

    function alterar($nome, $quantidade, $valor) {
        $.ajax({
            url: "/produto/alterar",
            method: "post",
            data: {
                nome: $nome,
                quantidade: $quantidade,
                valor: $valor,
                id: $idAlterar,
                idVenda: $idVenda
            },
            success: function (data) {
                $("#venda-produto-modal").modal("hide");
                limparCampos();
                $tabela.ajax.reload();

            },
            error: function (err) {
                alert("Não foi possível alterar");
            }
        });
    }

    function limparCampos() {
        $("#modal-produto-nome").val("");
        $("#modal-produto-quantidade").val("");
        $("#modal-produto-valor").val("");
        $idAlterar = -1;
    }

});