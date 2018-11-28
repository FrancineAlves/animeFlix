window.addEventListener('load', function() {
    var url = new URL(window.location.href);
    var animeId = url.searchParams.get("anime");

    var currentAnime = Anime.getById(animeId);

    document.getElementById('anime-titulo').innerText = currentAnime.titulo;
    document.getElementById('anime-descricao').innerText = currentAnime.descricao;

    if(currentAnime.foto) {
        document.getElementById('anime-image').src = currentAnime.foto;
    }

    renderSkills(currentAnime);
    showEpisodio();
});

function renderSkills(currentAnime) {
    var skillsBlock = document.getElementById('skills-block');
    skillsBlock.innerHTML = currentAnime.generos.map(function(gen, index) {
        return `
            <span class="label label-default skill">
                <span class="skill-label">${gen.nome}</span>
            </span>
        `
    }).join('');
}


function showEpisodio() {
    var searchResult = document.getElementById('result-episodios');
    var cont=0;

    var url = new URL(window.location.href);
    var animeId = url.searchParams.get("anime");
   
    var animeEpisodios = AnimeEp.getAll();
    
    if(animeId) {
        var animes = AnimeEp.get(animeId,cont);
        
        var resultHtml = `<table class="table table-striped">
                              <thead>
                                  <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Episódios</th>
                                    <th scope="col"></th>
                                  </tr>
                              </thead>
                          <tbody>`
        
        resultHtml = resultHtml + animes.map(getAnimeEpisodioComponent).join('');
        resultHtml = resultHtml + `</tbody></table>`

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

function getAnimeEpisodioComponent(anime, cont) {
    cont++;

    return `
    <tr>
        <th scope="row">${cont}</th>
        <td>${anime.titulo}</td>
        <td>
        <a data-toggle="modal" data-target="#addEpisodio" data-cod="${anime.idEp}"><ion-icon name="create"></ion-icon></a>
            <ion-icon name="trash"></ion-icon>
        </td>
    </tr>`
}