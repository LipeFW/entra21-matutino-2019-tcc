function Login() {
    var done = 0;
    var usuario = document.getElementsByName('usuario')[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementsByName('senha')[0].value;
    senha = senha.toLowerCase();




    //#region Usuarios
    // User: Illan
    if (usuario == "illan" && senha == "illanzoka") {
        done = 1;
        localStorage.setItem("username", "Illan Dickmann");
        localStorage.setItem("firstName", "Illan");
    }

    // User: Felipe
    if (usuario == "lipefw" && senha == "anaumsei") {
        done = 1;
        localStorage.setItem("username", "Felipe Weber");
        localStorage.setItem("firstName", "Felipe");


    }

    // User: Eduardo
    if (usuario == "eduardo" && senha == "123456") {
        done = 1;
        localStorage.setItem("username", "Eduardo Hausmann");
        localStorage.setItem("firstName", "Eduardo");


    }

    // User: Henrique
    if (usuario == "henrique" && senha == "Pimbinha6000") {
        done = 1;
        localStorage.setItem("username", "Henrique Montibeller");
        localStorage.setItem("firstName", "Henrique");


    }

    // User: Nathan
    if (usuario == "nathan" && senha == "1203") {
        done = 1;
        localStorage.setItem("username", "Nathan Martinez");
        localStorage.setItem("firstName", "Nathan");


    }

    // User: Pablo
    if (usuario == "pabloluz" && senha == "1234") {
        done = 1;
        localStorage.setItem("username", "Pablo Luz");
        localStorage.setItem("firstName", "Pablo");

    }

    //#endregion

    if (done == 0) { alert("Usuário ou senha inválidos"); }

    if (done == 1) {
        window.location.href = "/home/index";
    }

}