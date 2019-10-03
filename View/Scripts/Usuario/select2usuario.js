$(function () {
    $idPais = 0;
    $idEstado = 0;

    $("#usuario-campo-pais").select2({
        ajax: {
            url: "/pais/obtertodosselect2",
            dataType: 'json'
        }
    }).on('select2:select', function () {
        $idPais = $("#usuario-campo-pais").val();
    });

    $("#usuario-campo-estado").select2({
        ajax: {
            url: "/estado/obtertodosselect2peloiddopais",
            dataType: 'json',
            data: function (params) {
                var query = {
                    q: params.term,
                    idPais: $idPais
                }
                return query;
            }
        }
    }).on('select2:select', function () {
        $idEstado = $("#usuario-campo-estado").val();
    });

    $("#usuario-campo-cidade").select2({
        ajax: {
            url: "/cidade/obtertodosselect2peloiddoestado",
            dataType: 'json',
            data: function (params) {
                var query = {
                    q: params.term,
                    idEstado: $idEstado
                }
                return query;
            }
        }
    });
});