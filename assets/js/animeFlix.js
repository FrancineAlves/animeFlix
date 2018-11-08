function filterClicked() {

    console.log("Oi");

    var advancedFilter = document.getElementById("advanced-filter");
    var advancedFilterClasses = advancedFilter.className.split(" ");

    var novasClasses = advancedFilterClasses.join(" ");
    advancedFilter.className = novasClasses;

}