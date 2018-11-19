var currentAnime = {
    generos: []
};

function addAnime(event) {
    event.preventDefault();
    event.stopPropagation();
    var formulario = document.forms[0];

    currentAnime.titulo = formulario.titulo.value;
    currentAnime.generos = currentAnime.generos.map(function(g) { return { nome: g }});
    currentAnime.qtdEpisodios = formulario.qtdEpisodios.value;
    currentAnime.descricao = formulario.descricao.value;
    
    Anime.add(currentAnime);
    toastr.success("O novo anime foi adicionado!", "Sucesso!");
    resetForm(formulario);
}

function resetForm(formulario) {
    formulario.reset();
    currentAnime = {
        generos: []
    };
    renderSkills();
}
 
function changeUserImage(event) {
    event.stopPropagation();
    document.getElementById('anime-input-image').click();
}

var inputSkills = document.getElementById("tags");
inputSkills.onkeypress = function(event) {
    if(event.keyCode == 13 && event.target.value) {
        event.stopPropagation();
        event.preventDefault();
        currentAnime.generos.push(event.target.value);
        renderSkills();
        event.target.value = '';
    }
}

function renderSkills() {
    var skillsBlock = document.getElementById('skills-block');
    skillsBlock.innerHTML = currentAnime.generos.map(function(gen, index) {
        return `
            <span class="label label-default skill">
                <span class="skill-label">${gen}</span>
                <i class="fas fa-times" onclick="removeSkill(${index})"></i>
            </span>
        `
    }).join('');
}

function removeSkill(index) {
    currentAnime.generos.splice(index, 1);
    renderSkills();
}

document.getElementById('anime-input-image').addEventListener('change', function(event) {
    if(event.target.files && event.target.files.length) {
        var file = event.target.files[0] || {};
        var reader = new FileReader();
        reader.onload = function(){
            var img = document.getElementById('anime-image');
            img.src = reader.result;
            currentAnime.foto = reader.result;
        };

        reader.readAsDataURL(file);
    }
});