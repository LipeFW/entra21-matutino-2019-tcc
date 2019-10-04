$(function () {

    var isAdmin = $("#admin").val();

    if (isAdmin == 0) {
        $("#itemUsuario").addClass("disabled");
        $("#itemCategoria").addClass("disabled");
        $("#itemProduto").addClass("disabled");
        $("#itemRota").addClass("disabled");
        $("#itemVendedor").addClass("disabled");
        $("#itemVeiculo").addClass("disabled");
    }
    else if (isAdmin == 1) {
        $("#itemUsuario").removeClass("disabled");
        $("#itemCategoria").removeClass("disabled");
        $("#itemProduto").removeClass("disabled");
        $("#itemRota").removeClass("disabled");
        $("#itemVendedor").removeClass("disabled");
        $("#itemVeiculo").removeClass("disabled");
    }

});