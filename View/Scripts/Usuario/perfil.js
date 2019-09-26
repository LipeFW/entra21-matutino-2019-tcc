$(function () {
    $idPais = 0;
    $idEstado = 0;
    $("#config-campo-pais").select2({
        ajax: {
            url: "/pais/obtertodosselect2",
            dataType: 'json'
        }
    }).on('select2:select', function () {
        $idPais = $("#config-campo-pais").val();
    });

    $("#config-campo-estado").select2({
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
        $idEstado = $("#config-campo-estado").val();
    });

    $("#config-campo-cidade").select2({
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