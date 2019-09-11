$(function () {

    $idAlterar = -1;

    $tabelaUsuario = $('#usuario-tabela').DataTable({
        ajax: "http://localhost:51242/usuario/obtertodos",
        serverSide: true,
        columns: [
            { "data": "Id" },
            { "data": "Nome" },
            { "data": "Senha" },
            {
                render: function (data, type, row) {
                    return '<button class="btn btn-primary botao-editar" data-id="' + row.Id + '"><i class="fas fa-pencil-alt"></i>  Editar</button>\<button class="btn btn-danger botao-apagar ml-1" data-id="' + row.Id + '"><i class="fas fa-trash-alt"></i>  Apagar</button>'
                }
            }
        ]
    });

    $("#usuario-botao-salvar").on("click", function () {
        $nome = $("#usuario-campo-nome").val();
        $senha = $("#usuario-campo-senha").val();

        if (($nome.trim() == "") || ($senha.trim() == "")) {
            alert("Preencha corretamente os campos");
            return null;
        }

        if ($idAlterar == -1) {
            inserir($nome.trim(), $senha.trim());

        } else {
            alterar($nome.trim(), $senha.trim());
        }

        function alterar($nome, $senha) {
            $.ajax({
                url: "http://localhost:51242/Usuario/update",
                method: "post",
                data: {
                    id: $idAlterar,
                    nome: $nome,
                    senha: $senha
                },
                success: function (data) {
                    $("#modal-usuario").modal("hide");
                    $idAlterar = -1;
                    $tabelaUsuario.ajax.reload();
                },
                error: function (err) {
                    alert("Não foi possível alterar");
                }
            })
        }

        function inserir($nome, $senha) {
            $.ajax({
                url: "http://localhost:51242/Usuario/Inserir",
                method: "post",
                data: {
                    nome: $nome,
                    senha: $senha
                },
                success: function (data) {
                    $("#modal-usuario").modal('hide');
                    $tabelaUsuario.ajax.reload();
                    alert("Registro Inserido Com Sucesso");
                },
                error: function (err) {
                    alert("Não Foi Possível Inserir")
                }
            })
        }
    })

    $(".table").on("click", ".botao-apagar", function () {
        $idApagar = $(this).data("id");
        $.ajax({
            url: "http://localhost:51242/Usuario/Apagar?id=" + $idApagar,
            method: "get",
            success: function (data) {
                $tabelaUsuario.ajax.reload();
                alert("Registro Apagado Com Sucesso")

            },
            error: function (err) {
                alert('Não Foi Possível Apagar');
            }
        });
    });

    $(".table").on("click", ".botao-editar", function () {
        $idAlterar = $(this).data("id");

        $.ajax({
            url: "http://localhost:51242/Usuario/obterpeloid?id=" + $idAlterar,
            method: "get",
            success: function (data) {
                $("#usuario-campo-nome").val(data.Nome);
                $("#usuario-campo-senha").val(data.Senha);
                alert('Carregando Informações');
                $("#modal-usuario").modal("show");

            },

            error: function (err) {
                alert("Não Foi Possível Carregar")

            }
        })
    });
});