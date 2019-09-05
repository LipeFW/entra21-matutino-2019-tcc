function Login() {
    var done = 0;
    var usuario = document.getElementsByName('usuario')[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementsByName('senha')[0].value;
    seha = senha.toLowerCase();
    if (usuario == "admin" && senha == "admin") {
        done = 1;
    }
    if (done == 0) { alert("Usuário ou senha inválidos"); }

    if (done == 1) {
        window.location.href = "/home/index";

    }
}