$(function () {
    $idAlterar = -1;

    $tabelaUsuario = $('#usuario-tabela').DataTable({
        ajax: "http://localhost:51242/usuario/obtertodos",
        serverSide: true,
        columns: [
            { "data": "Id" },
            { "data": "NomeCompleto" },
            { "data": "Nome" },
            { "data": "Senha" },
            {
                render: function (data, type, row) {
                    return '<button class="fadeIn animated btn btn-primary botao-editar" data-id="' + row.Id + '"><i class="fas fa-pencil-alt"></i>  Editar</button>\<button class="fadeIn animated btn btn-danger botao-apagar ml-1" data-id="' + row.Id + '"><i class="fas fa-trash-alt"></i>  Apagar</button>'
                }
            }
        ]
    });

    $("#usuario-botao-salvar").on("click", function () {
        $nome = $("#usuario-campo-nome").val();
        $nomeCompleto = $("#usuario-campo-nomecompleto").val();
        $senha = $("#usuario-campo-senha").val();
        $imagem = $("#usuario-campo-imagem").val();

        if (($nome.trim() == "") || ($senha == "") || ($nomeCompleto == "")) {
            bootbox.dialog({
                message: "Preencha corretamente os campos!"
            
        });
            window.setTimeout(function () {
                bootbox.hideAll();
            }, 1500);
            return null;
        }

        if ($idAlterar == -1) {
            inserir($nome.trim(), $senha, $imagem, $nomeCompleto);

        } else {
            alterar($nome.trim(), $senha, $imagem, $nomeCompleto);
        }

        function alterar($nome, $senha, $imagem, $nomeCompleto) {
            $.ajax({
                url: "http://localhost:51242/Usuario/update",
                method: "post",
                data: {
                    id: $idAlterar,
                    nome: $nome,
                    nomeCompleto: $nomeCompleto,
                    senha: $senha,
                    urlImagem: $imagem,
                },
                success: function (data) {
                    $("#modal-usuario").modal("hide");
                    limparCampos();
                    $idAlterar = -1;
                    $tabelaUsuario.ajax.reload();
                    bootbox.dialog({
                        message: "Usuário alterado com sucesso!"

                    });
                    window.setTimeout(function () {
                        bootbox.hideAll();
                    }, 1500);
                },
                error: function (err) {
                    bootbox.alert("Não foi possível editar o usuário.");
                    limparCampos();
                    $idAlterar = -1;
                }
            });
        }

        function inserir($nome, $senha, $imagem, $nomeCompleto) {
            $.ajax({
                url: "http://localhost:51242/Usuario/Inserir",
                method: "post",
                data: {
                    nome: $nome,
                    nomeCompleto: $nomeCompleto,
                    senha: $senha,
                    urlImagem: $imagem
                },
                success: function (data) {
                    $("#modal-usuario").modal('hide');
                    limparCampos();
                    $tabelaUsuario.ajax.reload();
                    bootbox.dialog({
                        message: "Usuário cadastrado com sucesso!"

                    });
                    window.setTimeout(function () {
                        bootbox.hideAll();
                    }, 1500);
                },
                error: function (err) {
                    bootbox.dialog({
                        message: "Não foi possível cadastrar o usuário!"

                    });
                    window.setTimeout(function () {
                        bootbox.hideAll();
                    }, 1500);
                }
            });
        }
    })

    $("#usuario-tabela").on("click", ".botao-apagar", function () {
        $idApagar = $(this).data("id");
        bootbox.confirm({
            title: 'Aviso',
            message: "Deseja realmente remover o usuário?",
            backdrop: true,
            buttons: {
                confirm: {
                    label: '<i class="fa fa-check"></i> Sim',
                    className: 'rubberBand animated btn-success',
                },
                cancel: {
                    label: '<i class="fa fa-times"></i> Não',
                    className: 'rubberBand animated btn-danger'
                }
            },
            callback: function (result) {
                if (result)
                    $.ajax({
                        url: "http://localhost:51242/Usuario/Apagar?id=" + $idApagar,
                        method: "get",
                        success: function (data) {
                            $tabelaUsuario.ajax.reload();
                            bootbox.dialog({
                                message: "Usuário removido com sucesso!"

                            });
                            window.setTimeout(function () {
                                bootbox.hideAll();
                            }, 1500);

                        },
                        error: function (err) {
                            bootbox.dialog({
                                message: "Não foi possível remover o usuário!"

                            });
                            window.setTimeout(function () {
                                bootbox.hideAll();
                            }, 1500);
                        }
                    });
            }
        });
    });

    $("#usuario-tabela").on("click", ".botao-editar", function () {
        $idAlterar = $(this).data("id");

        $.ajax({
            url: "http://localhost:51242/Usuario/obterpeloid?id=" + $idAlterar,
            method: "get",
            success: function (data) {
                $nome = $("#usuario-campo-nome").val(data.Nome);
                $senha = $("#usuario-campo-senha").val(data.Senha);
                $imagem = $("#usuario-campo-imagem").val(data.UrlImagem);
                $nomeCompleto = $("#usuario-campo-nomecompleto").val(data.NomeCompleto);
                $("#modal-usuario").modal("show");

            },
            error: function (err) {
                bootbox.dialog({
                    message: "Não foi possível carregar o usuário!"

                });
                window.setTimeout(function () {
                    bootbox.hideAll();
                }, 1500);
            }
        });
    });

    function limparCampos() {
        $nome = $("#usuario-campo-nome").val("");
        $nomeCompleto = $("#usuario-campo-nomecompleto").val("");
        $senha = $("#usuario-campo-senha").val("");
        $idAlterar = -1;
    }
});