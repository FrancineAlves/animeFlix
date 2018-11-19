window.addEventListener('load', function() {
    var url = new URL(window.location.href);
    var animeId = url.searchParams.get("anime");

    var currentAnime = Anime.getById(animeId);
    console.log(currentAnime);

    document.getElementById('anime-titulo').innerText = currentAnime.titulo;
    document.getElementById('anime-descricao').innerText = currentAnime.descricao;

    if(currentAnime.foto) {
        document.getElementById('anime-image').src = currentAnime.foto;
    }

    renderSkills(currentAnime);
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