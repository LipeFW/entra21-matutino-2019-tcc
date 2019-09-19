$(function () {

    var isAdmin = localStorage.getItem("isAdmin");

    if (isAdmin == 0) {
        $("#itemUsuario").addClass("disabled");
        $("#itemCategoria").addClass("disabled");
        $("#itemProduto").addClass("disabled");
        $("#itemRota").addClass("disabled");
        $("#itemVendedor").addClass("disabled");
        $("#itemVeiculo").addClass("disabled");
        $("#imagemUsuario").attr("src", "/Content/image/gato-confuo.jpg");
        $("#imagemUsuario2").attr("src", "/Content/image/gato-confuo.jpg");
    }
    else if (isAdmin == 1) {
        $("#itemUsuario").removeClass("disabled");
        $("#itemCategoria").removeClass("disabled");
        $("#itemProduto").removeClass("disabled");
        $("#itemRota").removeClass("disabled");
        $("#itemVendedor").removeClass("disabled");
        $("#itemVeiculo").removeClass("disabled");
        $("#imagemUsuario").attr("src", "/Content/image/gatodandopinote.png");
        $("#imagemUsuario2").attr("src", "/Content/image/gatodandopinote.png");
    }
});