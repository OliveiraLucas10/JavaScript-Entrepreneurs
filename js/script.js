window.addEventListener("load", function() {
    //console.log("The page has loaded!");

    var searchBtn = this.document.getElementById("searchBtn");
    this.console.log(searchBtn);

    function search() {
        console.log("The button was clicked!");
    }

    searchBtn.addEventListener("click", search);
});