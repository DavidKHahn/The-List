


$(document).on("load", function() {
    
var listId = window.localStorage.getItem("listid")

    $.get("/api/view/" + listId, function(data) {
        console.log(data);

        //area where the list will be displayed
        $("#myP").empty();

        var listDiv = $("<div>")

        for (var i = 0; i < data.length; i++) {

            console.log("test" + data[i])

            $(items).append("Product Name: " + data[i].name)
            $(items).append("Amazon Link: " + data[i].url)
            $(items).append("ASIN #: " + data[i].asin)
            $(items).append("Image: <img src='" + data[i].image + "'/>")

            $("#myP").append(listDiv);
        }        
    })
})

