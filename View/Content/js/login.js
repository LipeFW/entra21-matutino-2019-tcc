﻿function Login() {
    var done = 0;
    var isAdmin = 0;
    var usuario = document.getElementsByName('usuario')[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementsByName('password')[0].value;
    senha = senha.toLowerCase();




    //#region Usuarios
    // User: Illan
    if (usuario == "illan" && senha == "illanzoka") {
        done = 1;
        isAdmin = 0;
        localStorage.setItem("username", "Illan Dickmann");
        localStorage.setItem("firstName", "Illan");
        localStorage.setItem("isAdmin", isAdmin);
        localStorage.setItem("urlImage", "/Content/image/gato-confuo.jpg");

    }

    // User: Felipe
    if (usuario == "lipefw" && senha == "anaumsei") {
        done = 1;
        isAdmin = 1;
        localStorage.setItem("username", "Felipe Weber");
        localStorage.setItem("firstName", "Felipe");
        localStorage.setItem("isAdmin", isAdmin);
        localStorage.setItem("urlImage", "/Content/image/gatodandopinote.png");
        localStorage.setItem("colorTheme", "blue");
    }

    // User: Eduardo
    if (usuario == "eduardo" && senha == "123456") {
        done = 1;
        localStorage.setItem("username", "Eduardo Hausmann");
        localStorage.setItem("firstName", "Eduardo");


    }

    // User: Henrique
    if (usuario == "henrique" && senha == "pimbinha6000") {
        done = 1;
        localStorage.setItem("username", "Henrique Montibeller");
        localStorage.setItem("firstName", "Henrique");
        localStorage.setItem("urlImage", "/Content/image/hamsterchavoso.png");



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
    if (isAdmin == 1) { alert("Parabéns, Você e um administrador!"); }
    
    if (done == 1) {
        window.location.href = "/home/index";
    }

}