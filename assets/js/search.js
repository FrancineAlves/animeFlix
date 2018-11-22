window.addEventListener('load', function() {
    showAll();
    // var inputSearch = document.querySelector(".search input[type='text']");
    // inputSearch.onkeypress = function(event) {
    //     if(event.keyCode == 13) {
    //         event.stopPropagation();
    //         event.preventDefault();
    //         search(event.target.value);
    //     }
    // }
});

function showAll() {
    var searchResult = document.getElementById('search-result');
    searchResult.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i></div>';
    
    var animes = Anime.getAll();
    
    var resultHtml = animes.map(getAnimeComponent).join('');
    showAfter(resultHtml);
    
    function showAfter(elements) {
        setTimeout(function() {
            searchResult.innerHTML = elements;
        }, 500);
    }
}

function searchButton(){
   // var inputSearch = document.querySelector(".search input[type='text']");
    console.log(document.querySelector(".search input[type='text']"));
    
    search(inputSearch);
}

function search(searchText) {
    var searchResult = document.getElementById('search-result');
    searchResult.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i></div>';
    
    if(searchText) {
        var animes = Anime.get(searchText);
        var resultHtml = animes.map(getAnimeComponent).join('');
        showAfter(resultHtml);
    } else {
        showAfter('');
    }

    function showAfter(elements) {
        setTimeout(function() {
            searchResult.innerHTML = elements;
        }, 500);
    }
}

function getAnimeComponent(anime) {
    var defaultUser = './assets/imagens/defaultImage.png';
    return `
    <div class="card" style="width: 12rem;">
        <img class="card-img-top" src="${anime.foto || defaultUser}" alt="${anime.titulo}">
        <div class="card-body">
            <h6 class="title"><a href="./pages/anime_details.html?anime=${anime.id}">${anime.titulo}</a></h6>
            <div class="genero">
                ${getGeneroComponent(anime.generos)}
            </div>
        </div>
    </div>`

}

function getGeneroComponent(generos) {
    var listaCores = ["dark", "danger", "info", "secondary"];

    return generos.map(function(g) {
        var gen = g.nome;
        return `<span class="badge badge-${listaCores[getRandomInt(4)]}">${gen}</span>`
    }).join('');
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}