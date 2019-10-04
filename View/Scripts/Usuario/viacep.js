$(function () {

    //var nome = '';

    $nome = '';

    // $('#cep').on('blur',function(){
    //     buscarCEP();
    // });

    $('#config-campo-cep').on('keypress', function (evt) {
        if (evt.keyCode == 13) {
            buscarCEP();
        }
    })

    function buscarCEP() {
        // document.getElementById("cep").value
        $cep = $('#config-campo-cep').val().replace('-', '');

        if ($cep.length != 8) {
            alert('Tamanho do CEP inválido');
            $("#config-campo-cep").focus();
            return;
        }

        console.log($cep);
        $.ajax({
            url: 'https://viacep.com.br/ws/' + $cep + '/json/',
            method: 'get',
            success: function (data) {
                $localidade = data.localidade
                $logradouro = data.logradouro
                $unidadeFederativa = data.uf;

                $("#config-campo-cidade").val($localidade);
                $("#config-campo-logradouro").val($logradouro);
                $('#config-campo-estado').val($unidadeFederativa).trigger('change');
                //$("#config-campo-estado").val($unidadeFederativa);
                $("#config-campo-numero").val("");
                $("#config-campo-numero").focus();

            },
            error: function (err) {
                alert('CEP inválido');
                $('#config-campo-cep').focus();
            }
        })
    }


});