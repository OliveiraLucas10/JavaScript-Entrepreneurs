var users = [
    {
        name: "Lucy",
        gender: "F",
        hobby: "pets",
        avatar: "woman1.png"
    },
    {
        name: "Betty",
        gender: "F",
        hobby: "pets",
        avatar: "woman2.png"
    },
    {
        name: "Ronald",
        gender: "M",
        hobby: "music",
        avatar: "man1.png"
    },
    {
        name: "Paulo",
        gender: "M",
        hobby: "sports",
        avatar: "man2.png"
    },
    {
        name: "Jan",
        gender: "M",
        hobby: "skate",
        avatar: "man3.png"
    }];





window.addEventListener("load", function () {
    //console.log("The page has loaded!");

    var searchBtn = this.document.getElementById("searchBtn");
    this.console.log(searchBtn);

    var results = this.document.getElementById("results");

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

        var resultsHtml = "";
        var userLength = users.length;

        for (var i = 0; i < userLength; i++) {
            resultsHtml += '<div class="person-row">\
                                <img src="images/' + users[i].avatar + '" />\
                                <div class="person-info">\
                                <div>' + users[i].name + '</div>\
                                <div>' + users[i].hobby + '</div>\
                            </div>\
                            <button > Add as friend </button> </div>';
        }

        results.innerHTML = resultsHtml;


    }

    searchBtn.addEventListener("click", search);


});