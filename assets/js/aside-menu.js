window.addEventListener('load', function() {
    var url = new URL(window.location.href);

   carregarMenu();
   // if (flgAdmin == 1) carregarMenuAdmin();
});

function carregarMenu() {
    var searchResult = document.getElementById('aside-menu');
    var cont = 0;

    var url = new URL(window.location.href);

    var resultHtml = `
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
              </ul>
              <form class="form-inline mt-2 mt-md-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Pesquisar" aria-label="Search">
                <button class="btn btn-outline-danger my-30 my-sm-0" type="submit" onclick="searchButton()">Pesquisar</button>
                <span>
                  <i class="fas fa-sliders-h"></i>
                </span>
              </form>
              &nbsp;
              <button class="btn btn-outline-primary my-30 my-sm-0" data-toggle="modal" data-target="#login">Login</button>
    `
    showAfter(resultHtml);

    function showAfter(elements) {
        setTimeout(function () {
            searchResult.innerHTML = elements;
        }, 500);
    }
}

function carregarMenuAdmin() {
    var searchResult = document.getElementById('aside-menu');
    var cont = 0;

    var url = new URL(window.location.href);

    var resultHtml = `
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="./anime_form.html">Adicionar Anime</a>
                </li>
              </ul>
              <form class="form-inline mt-2 mt-md-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Pesquisar" aria-label="Search">
                <button class="btn btn-outline-danger my-30 my-sm-0" type="submit" onclick="searchButton()">Pesquisar</button>
                <span>
                  <i class="fas fa-sliders-h"></i>
                </span>
              </form>`
    showAfter(resultHtml);

    function showAfter(elements) {
        setTimeout(function () {
            searchResult.innerHTML = elements;
        }, 500);
    }
}