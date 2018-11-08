function filterClicked() {

    var advancedFilter = document.getElementById("advanced-filter");
    var advancedFilterClasses = advancedFilter.className.split(" ");

    var novasClasses = advancedFilterClasses.join(" ");
    advancedFilter.className = novasClasses;

}
