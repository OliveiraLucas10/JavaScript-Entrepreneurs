window.addEventListener("load", function() {
    //console.log("The page has loaded!");

    var searchBtn = this.document.getElementById("searchBtn");
    this.console.log(searchBtn);

    function search() {
        // get hobby
        var hobbyField = document.getElementById("hobby");
        var hobby = hobbyField.value;
        console.log(hobby);

        // get gender
        var genderField = document.getElementById("gender");
        var s = genderField.selectedIndex;
        var gender = genderField.options[s].value;
        console.log(gender);


        console.log("The button was clicked!");
    }

    searchBtn.addEventListener("click", search);


});