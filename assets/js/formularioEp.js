var currentAnimeEp = {};

function addAnimeEpisodio(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log("currentAnimeEp");
    var formulario = document.forms[0];

    var url = new URL(window.location.href);
    var animeId = url.searchParams.get("anime");
    currentAnimeEp.idAnime = animeId;
    currentAnimeEp.titulo = formulario.titulo.value;
    currentAnimeEp.link = formulario.link.value;

    console.log(currentAnimeEp);
    

    AnimeEp.add(currentAnimeEp);
    toastr.success("O novo anime foi adicionado!", "Sucesso!");
    resetForm(formulario);
    window.location.reload();
}

function resetForm(formulario) {
    formulario.reset();
    currentAnimeEp = {};
}

// document.getElementById('anime-input-video').addEventListener('change', function(event) {
//     if(event.target.files && event.target.files.length) {
//         var file = event.target.files[0] || {};
//         var reader = new FileReader();
//         console.log(reader);
        
//         reader.onload = function(){
//             var video = document.getElementById('anime-video');
//             console.log("v: "+ video);
//             video.src = reader.result;
//             currentAnimeEp.video = reader.result;
//         };

//         reader.readAsDataURL(file);
//     }
// });