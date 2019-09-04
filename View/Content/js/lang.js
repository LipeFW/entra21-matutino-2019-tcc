$(function () {
    $("#btnPT").on("click", function () {
        $("#btnPT").addClass("active");
        $("#btnEN").removeClass("active");
        $("#langAtual").text("Português");
        $("#enLang").text("Inglês");
        $("#ptLang").text("Português");
        $("#imgLANG").attr("src", "Content/theme/global_assets/images/lang/br.png");
    });
    $("#btnEN").on("click", function () {
        $("#btnEN").addClass("active");
        $("#btnPT").removeClass("active");
        $("#langAtual").text("English");
        $("#enLang").text("English");
        $("#ptLang").text("Portuguese");
        $("#imgLANG").attr("src","Content/theme/global_assets/images/lang/gb.png");
    });
});