$(function () {

    $idAlterar = -1;

    $tabelaUsuario = $('#usuario-tabela').DataTable({
        ajax: "http://localhost:51242/usuario/obtertodos",
        serverSide: true,
        columns: [
            { "data": "Id" },
            { "data": "Nome" },
            { "data": "Usuário"},
            { "data": "Senha" },
            { "data": "Telefone" },
            { "data": "CPF" },
            { "data": "RG" },
            { "data": "CNH" },
            { "data": "CEP" },
            { "data": "Pais.Nome" },
            { "data": "Estado.Nome" },
            { "data": "Cidade.Nome" },
            { "data": "Logradouro" },
            {
                render: function (data, type, row) {
                    return '<button class="btn btn-primary botao-editar" data-id="' + row.Id + '"><i class="fas fa-pencil-alt"></i>  Editar</button>\<button class="btn btn-danger botao-apagar ml-1" data-id="' + row.Id + '"><i class="fas fa-trash-alt"></i>  Apagar</button>'
                }
            }
        ]
    });

    $("#usuario-botao-salvar").on("click", function () {
        $nome = $("#usuario-campo-nome").val();
        $usuario = $("#usuario-campo-usuario").val();
        $senha = $("#usuario-campo-senha").val();
        $telefone = $("#usuario-campo-telefone").val();
        $cpf = $("#usuario-campo-cpf").val();
        $rg = $("#usuario-campo-rg").val();
        $cnh = $("#usuario-campo-cnh").val();
        $cep = $("usuario-campo-cep").val();
        $pais = $("usuario-campo-pais").val();
        $estado = $("usuario-campo-estado").val();
        $cidade = $("usuario-campo-cidade").val();
        $logradouro = $("usuario-campo-logradouro").val();

        if (($nome.trim() == "") || ($senha == "") || ($telefone == "") || ($cpf == "") || ($rg == "") || ($cnh = "") || ($cep == "")  || ($pais == -1) || ($estado == -1) || ($cidade == -1) || ($logradouro.trim() == "")) {
            alert("Preencha corretamente os campos");
            return null;
        }

        if ($idAlterar == -1) {
            inserir($nome.trim(), $usuario, $senha, $telefone, $cpf, $rg, $cnh, $cep, $pais, $estado, $cidade, $logradouro.trim());

        } else {
            alterar($nome.trim(), $usuario, $senha, $telefone, $cpf, $rg, $cnh, $cep, $pais, $estado, $cidade, $logradouro.trim());
        }

        function alterar($nome, $usuario, $senha, $telefone, $cpf, $rg, $cnh, $cep, $pais, $estado, $cidade, $logradouro) {
            $.ajax({
                url: "http://localhost:51242/Usuario/update",
                method: "post",
                data: {
                    id: $idAlterar,
                    nome: $nome,
                    usuario: $usuario,
                    senha: $senha,
                    telefone: $telefone,
                    cpf: $cpf,
                    rg: $rg,
                    cnh: $cnh,
                    cep: $cep,
                    pais = $pais,
                    estado = $estado,
                    cidade = $cidade,
                    logradouro = $logradouro
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

        function inserir($nome, $usuario, $senha, $telefone, $cpf, $rg, $cnh, $cep, $logradouro, $pais, $estado, $cidade) {
            $.ajax({
                url: "http://localhost:51242/Usuario/Inserir",
                method: "post",
                data: {
                    nome: $nome,
                    usuario: $usuario,
                    senha: $senha,
                    telefone: $telefone,
                    cpf: $cpf,
                    rg: $rg,
                    cnh: $cnh,
                    cep: $cep,
                    pais = $pais,
                    estado = $estado,
                    cidade = $cidade,
                    logradouro = $logradouro
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
        var confirmacao = confirm("Deseja realmente apagar o registro?");
        if (confirmacao == true) {
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
        }
    });

    $(".table").on("click", ".botao-editar", function () {
        $idAlterar = $(this).data("id");

        $.ajax({
            url: "http://localhost:51242/Usuario/obterpeloid?id=" + $idAlterar,
            method: "get",
            success: function (data) {
                $nome = $("#usuario-campo-nome").val(data.Nome);
                $usuario = $("#usuario-campo-usuario").val(data.Usuario);
                $senha = $("#usuario-campo-senha").val(data.Senha);
                $telefone = $("#usuario-campo-telefone").val(data.Telefone);
                $cpf = $("#usuario-campo-cpf").val(data.CPF);
                $rg = $("#usuario-campo-rg").val(data.RG);
                $cnh = $("#usuario-campo-cnh").val(data.CNH);
                $cep = $("usuario-campo-cep").val(data.CEP);
                $pais = $("usuario-campo-pais").val(data.Pais);
                $estado = $("usuario-campo-estado").val(data.Estado);
                $cidade = $("usuario-campo-cidade").val(data.Cidade);
                $logradouro = $("usuario-campo-logradouro").val(data.Logradouro);
                $("#modal-usuario").modal("show");

            },

            error: function (err) {
                alert("Não Foi Possível Carregar")

            }
        })
    });
});