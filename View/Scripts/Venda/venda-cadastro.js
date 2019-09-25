$(function () {
    $("#venda-cliente").select2({
        ajax: {
            url: "/cliente/obtertodosselect2",
            dataType: "json"
        }
    });

    $("#venda-vendedor").select2({
        ajax: {
            url: "/vendedor/obtertodosselect2",
            dataType: "json"
        }
    });
});