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
    showEpisodioDetails();
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

function showEpisodioDetails() {
    var searchResult = document.getElementById('result-episodios');
    var cont=0;

    var url = new URL(window.location.href);
    var animeId = url.searchParams.get("anime");
   
    var animeEpisodios = AnimeEp.getAll();
    
    if(animeId) {
        var animes = AnimeEp.get(animeId,cont);
        
        this.video(animes[0].link);

        var resultHtml = `<div class="list-group">
                            <button type="button" class="list-group-item list-group-item-action active">
                                Episódio
                            </button>
                            `

        resultHtml = resultHtml + animes.map(getAnimeEpisodioComponentDetails).join('');
        resultHtml = resultHtml + `</div>`

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

function getAnimeEpisodioComponentDetails(anime, cont) {
    cont++;

    return `
    <button type="button" class="list-group-item list-group-item-action"  value="${anime.link}" onclick="video(value);">${cont} ${anime.titulo}</button>`
}

function video(link){
    var searchResult = document.getElementById('result-video-episodios');
    
    var resultHtml = `<iframe width="910" height="500" src="${link}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    showAfter(resultHtml);

    function showAfter(elements) {
        setTimeout(function() {
            searchResult.innerHTML = elements;
      }, 500);
    }
}
