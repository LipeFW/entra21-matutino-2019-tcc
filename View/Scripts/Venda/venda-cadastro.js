$(function () {
    $("#venda-cliente").select2({
        ajax: {
            url: "/pessoa/obtertodosselect2",
            dataType: "json"
        }
    });
});