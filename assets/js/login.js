var currentUsuario = {};

function addAnimeEpisodio(event) {
    event.preventDefault();
    event.stopPropagation();

    var formulario = document.forms[0];

    var url = new URL(window.location.href);

    currentUsuario.nome = formulario.nome.value;
    currentUsuario.email = formulario.email.value;
    currentUsuario.senha = formulario.senha.value;

    Usuario.add(currentUsuario);
    resetForm(formulario);
    window.location.reload();
}

function resetForm(formulario) {
    formulario.reset();
    currentUsuario = {};
}

function login(event){
    event.preventDefault();
    event.stopPropagation();

    var formulario = document.forms[1];

    var done=0;
    var loginsalvo = localStorage.getItem('loginsalvo');
    var senhasalvo = localStorage.getItem('senhasalvo');
    if (formulario.email.value == "admin" && formulario.senha.value == "admin") {
        setCookie(formulario.email.value);
        window.location="./pages/admin.html";
      done=1;
    }
    if (formulario.email.value == loginsalvo && formulario.senha.value == senhasalvo) {
        setCookie(formulario.email.value);
        window.location="./index.html";
      done=1;
    }
    if (done==0) { alert("Dados incorretos, tente novamente"); }  
}

function setCookie(emailParam) {
    var today = new Date(); // Actual date
    var expire = new Date(); // Expiration of the cookie

    var cookie_name = "email"; // Name for the cookie to be recognized
    var number_of_days = 10; // Number of days for the cookie to be valid (10 in this case)

    expire.setTime( today.getTime() + 60 * 60 * 1000 * 24 * number_of_days ); // Current time + (60 sec * 60 min * 1000 milisecs * 24 hours * number_of_days)

    document.cookie = cookie_name + "=" + escape(emailParam) + "; expires=" + expire.toGMTString();
    console.log(document.cookie);
}

function getTheCookie() {
    var cookie_name = "email";
    var return_value = null;

    var pos_start = document.cookie.indexOf(" " + cookie_name + "=");

    console.log(pos_start);
    
    if (pos_start == -1) document.cookie.indexOf(cookie_name + "=");

    if (pos_start != -1) { // Cookie already set, read it
        pos_start++; // Start reading 1 character after
        var pos_end = document.cookie.indexOf(";", pos_start); // Find ";" after the start position

        if (pos_end == -1) pos_end = document.cookie.length;
        return_value = unescape( document.cookie.substring(pos_start, pos_end) );
    }

    return return_value;
}