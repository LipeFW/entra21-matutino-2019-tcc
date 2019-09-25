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

        if (($nome.trim() == "") || ($senha == "")) {
            bootbox.alert("Preencha corretamente os campos");
            return null;
        }

        if ($idAlterar == -1) {
            inserir($nome.trim(), $senha);

        } else {
            alterar($nome.trim(), $senha);
        }

        function alterar($nome, $senha) {
            $.ajax({
                url: "http://localhost:51242/Usuario/update",
                method: "post",
                data: {
                    id: $idAlterar,
                    nome: $nome,
                    senha: $senha,
                },
                success: function (data) {
                    $("#modal-usuario").modal("hide");
                    limparCampos();
                    $idAlterar = -1;
                    $tabelaUsuario.ajax.reload();
                },
                error: function (err) {
                    bootbox.alert("Não foi possível alterar");
                }
            });
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
                    limparCampos();
                    $tabelaUsuario.ajax.reload();
                    bootbox.alert("Registro inserido com sucesso");
                },
                error: function (err) {
                    bootbox.alert("Não foi possível inserir")
                }
            });
        }
    })

    $("#usuario-tabela").on("click", ".botao-apagar", function () {
        $idApagar = $(this).data("id");
        bootbox.confirm({
            message: "Deseja realmente apagar o registro?",
            buttons: {
                confirm: {
                    label: 'Sim',
                    className: 'btn-success'
                },
                cancel: {
                    label: 'Não',
                    className: 'btn-danger'
                }
            },
            callback: function (result) {
                if (result)
                $.ajax({
                    url: "http://localhost:51242/Usuario/Apagar?id=" + $idApagar,
                    method: "get",
                    success: function (data) {
                        $tabelaUsuario.ajax.reload();
                        bootbox.alert("Registro apagado com sucesso");

                    },
                    error: function (err) {
                        bootbox.alert('Não foi possível apagar');
                    }
                });
            }
        });
    });

    $(".table").on("click", ".botao-editar", function () {
        $idAlterar = $(this).data("id");

        $.ajax({
            url: "http://localhost:51242/Usuario/obterpeloid?id=" + $idAlterar,
            method: "get",
            success: function (data) {
                $nome = $("#usuario-campo-nome").val(data.Nome);
                $senha = $("#usuario-campo-senha").val(data.Senha);
                $("#modal-usuario").modal("show");

            },
            error: function (err) {
                bootbox.alert("Não Foi Possível Carregar");
            }
        });
    });

    function limparCampos() {
        $nome = $("#usuario-campo-nome").val("");
        $senha = $("#usuario-campo-senha").val("");
        $idAlterar = -1;
    }
});