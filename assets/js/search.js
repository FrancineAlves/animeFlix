window.addEventListener('load', function() {
   var inputSearch = document.querySelector(".search input[type='text']");
   inputSearch.onkeypress = function(event) {
       if(event.keyCode == 13) {
           event.stopPropagation();
           event.preventDefault();
           search(event.target.value);
       }
   }
});

function searchButton(){

    var inputSearch = document.querySelector(".search input[type='text']");
    search(inputSearch);
}

function search(searchText) {
    
    var searchResult = document.getElementById('search-result');

    var animes = getProfileComponent(searchText);
    var animesHtml = '';

    animesHtml += getProfileComponent(animes);

    searchResult.innerHTML = animesHtml;
}

function getProfileComponent(anime) {

    return `
    <div class="card" style="width: 12rem;">
        <img class="card-img-top" src="./assets/imagens/narutoShippuden.jpg" alt="Card image cap">
        <div class="card-body">
            <h6 class="title">Naruto Shippuden</h6>
            <div class="genero">
                <span class="badge badge-dark">Ação</span>
                <span class="badge badge-danger">Artes Marciais</span>
                <span class="badge badge-secondary">Comédia</span>
                <span class="badge badge-info">Aventura</span>
                <span class="badge badge-secondary">Legendado</span>
            </div>
        </div>
    </div>`

}