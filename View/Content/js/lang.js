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
        $("#cabecalhoResumo").text(" Nosso software foi desenvolvido para atuar facilitando o trabalho de entrada e saída de mercadorias de uma transportadora ou estoque em geral.");
        $("#resumoText").text("O modo de utilizar baseia-se na facilidade de cadastro na hora de receber mercadorias incluindo através da leitura do codigo de barras, incluido-o assim em um banco de dados que fará a contagem da mercadoria e exibindo-a em telas, a quantidade disponivel em estoque sendo atualizado a cada movimentação, também no momento da retirada da mercadoria o próprio sistema atuará para atualizar o banco de dados. A leitura poderá ser feita a partir de um aparelho celular por um AppMobile que irá enviar informações através da nuvem para o sistema, assim, facilitando a inclusão de dados através da camera do dispositivo que registrará o codigo de barras. O sistema busca empregar rapidez aos processos citados com a facilidade de um smartphone em suas mãos.");
        $("#imgLANG").attr("src", "/Content/theme/global_assets/images/lang/br.png");
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
        $("#cabecalhoResumo").text("Our software is designed to work by facilitating the entry and the exit of products in the stock.");
        $("#resumoText").text("The purpose of this system is to facilitate work with sales and transportation. Including the barcode reading, which will count the products and will display on screen the quantity available in stock being updated at any time, also at the time of remove one of the products the system itself will act to update the database. The reading of the codes can be done from a mobile device, it will send the information online to the system, making it easier to data entry through the camera that will register the barcode. The system seeks to quickly employ the processes mentioned with the ease of a smartphone in hand. The system can have cloud archiving so that archiving of data does not affect the system's internal memory.");

        $("#imgLANG").attr("src","/Content/theme/global_assets/images/lang/gb.png");
    });
});