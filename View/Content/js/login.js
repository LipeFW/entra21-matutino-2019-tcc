function Login() {
    var done = 0;
    var usuario = document.getElementsByName('usuario')[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementsByName('senha')[0].value;
    senha = senha.toLowerCase();


    localStorage.setItem("username", usuario);

    //#region Usuarios
    // User: Illan
    if (usuario == "illan" && senha == "illanzoka") {
        done = 1;
    }

    // User: Felipe
    if (usuario == "lipefw" && senha == "anaumsei") {
        done = 1;
    }

    // User: Eduardo
    if (usuario == "eduardo" && senha == "123456") {
        done = 1;
    }

    // User: Henrique
    if (usuario == "henrique" && senha == "Pimbinha6000") {
        done = 1;
    }

    // User: Nathan
    if (usuario == "nathan" && senha == "1203") {
        done = 1;
    }

    // User: Pablo
    if (usuario == "pabloluz" && senha == "1234") {
        done = 1;
    }

    //#endregion

    if (done == 0) { alert("Usuário ou senha inválidos"); }

    if (done == 1) {
        window.location.href = "/home/index";
    }

}