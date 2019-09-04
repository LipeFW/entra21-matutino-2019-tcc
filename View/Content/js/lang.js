$(function () {
    $("#btnPT").on("click", function () {
        $("#btnPT").addClass("active");
        $("#btnEN").removeClass("active");
        $("#langAtual").text("Português");
        $("#enLang").text("Inglês");
        $("#ptLang").text("Português");
        $("#inicioText").text("Início");
        $("#usuarioText").text("Usuário");
        $("#categoriaText").text("Categoria");
        $("#veiculoText").text("Veículo");
        $("#produtoText").text("Produto");
        $("#bemvindoText").text("Bem Vindo");
        $("#sairText").text("Sair");
        $("#configText").text("Configurações da Conta");
        $("#imgLANG").attr("src", "Content/theme/global_assets/images/lang/br.png");
    });
    $("#btnEN").on("click", function () {
        $("#btnEN").addClass("active");
        $("#btnPT").removeClass("active");
        $("#langAtual").text("English");
        $("#enLang").text("English");
        $("#ptLang").text("Portuguese");
        $("#inicioText").text("Home");
        $("#usuarioText").text("User");
        $("#categoriaText").text("Category");
        $("#veiculoText").text("Vehicle");
        $("#produtoText").text("Product");
        $("#bemvindoText").text("Welcome");
        $("#sairText").text("Logout");
        $("#configText").text("Account Config");
        $("#imgLANG").attr("src","Content/theme/global_assets/images/lang/gb.png");
    });
});